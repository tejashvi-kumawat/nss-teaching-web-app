import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { useAuth } from '../contexts/AuthContext';
import { DataContext } from '../store/Data';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    // Get authentication functions from contexts
    const { login: authLogin } = useAuth();
    const { loginUser: dataLogin } = useContext(DataContext);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Get API URL from environment or use default
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001/api';
            
            // First get CSRF token directly with axios
            const csrfResponse = await axios.get(`${API_URL}/csrf/`, { 
                withCredentials: true 
            });
            // console.log('CSRF response:', csrfResponse);
            
            // Get the CSRF token from cookies
            let csrfToken = '';
            const cookies = document.cookie.split(';');
            for (let cookie of cookies) {
                const [name, value] = cookie.trim().split('=');
                if (name === 'csrftoken') {
                    csrfToken = value;
                    break;
                }
            }
            // console.log('Got CSRF token:', csrfToken);

            // Make the login request directly with axios
            // console.log('Sending login request with credentials:', { username: formData.username });
            const loginResponse = await axios.post(`${API_URL}/login/`, {
                username: formData.username,
                password: formData.password
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken
                }
            });
            
            // console.log('Login successful! Response:', loginResponse.data);
            
            // Store the token and user info
            if (loginResponse.data && loginResponse.data.token) {
                localStorage.setItem('token', loginResponse.data.token);
                
                if (loginResponse.data.username) {
                    localStorage.setItem('username', loginResponse.data.username);
                }
                
                // Update auth contexts - if these fail, we still have the token stored
                try {
                    // Try to update the AuthContext
                    if (authLogin) {
                        await authLogin(formData.username, formData.password);
                    }
                    
                    // Try to update the DataContext
                    if (dataLogin) {
                        await dataLogin(formData.username, formData.password);
                    }
                } catch (contextError) {
                    console.warn('Error updating auth contexts:', contextError);
                }
                
                // Force the page to reload and redirect to dashboard
                // This ensures all auth state is properly initialized from localStorage
                window.location.href = '/dashboard';
                return; // Stop execution here
            } else {
                throw new Error('No token received from server');
            }
        } catch (err) {
            console.error('Login error:', err);
            
            // Handle authentication error with a user-friendly message
            let errorMessage = 'Failed to sign in. Please check your credentials.';
            
            if (err.response) {
                console.log('Error response:', err.response);
                if (err.response.status === 401) {
                    errorMessage = 'Invalid username or password. Please try again.';
                } else if (err.response.status === 404) {
                    errorMessage = 'Login service not found. Please try again later.';
                } else if (err.response.data && err.response.data.error) {
                    errorMessage = err.response.data.error;
                }
            } else if (err.message) {
                errorMessage = err.message;
                if (err.message.includes('Network Error')) {
                    errorMessage = 'Unable to connect to the server. Please check your internet connection.';
                }
            }
            
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-heading">Login</h2>
                
                {error && <div className="error-message">{error}</div>}
                
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">Username or Email</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            placeholder="Your username or email"
                            autoComplete="username"
                            disabled={loading}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Your password"
                            autoComplete="current-password"
                            disabled={loading}
                        />
                    </div>
                    
                    <div className="forgot-password">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="login-button" 
                        disabled={loading || !formData.username || !formData.password}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    
                    <div className="login-footer">
                        Don't have an account? <Link to="/register">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login; 