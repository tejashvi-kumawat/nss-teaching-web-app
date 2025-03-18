import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactComponent.css';
import locationicon from "../../assets/location-icon.svg";
import phoneicon from "../../assets/bxs-phone.svg";
import mailicon from "../../assets/bxl-gmail.svg";
import api from '../../services/api';

const ContactComponent = ({ contactData }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    // Clear success message after 2 seconds
    useEffect(() => {
        let timer;
        if (submitStatus.type === 'success') {
            timer = setTimeout(() => {
                setSubmitStatus({ type: '', message: '' });
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [submitStatus]);

    // Function to generate Google Maps URL from address
    const getGoogleMapsUrl = (address) => {
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name.replace('contact-', '')]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            // First get CSRF token if needed
            try {
                await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:8001/api'}/csrf/`, { 
                    withCredentials: true 
                });
            } catch (csrfError) {
                console.warn('Failed to get CSRF token:', csrfError);
                // Continue anyway as the api instance should handle it
            }

            // Prepare contact data
            const contactData = {
                name: `${formData.firstName} ${formData.lastName}`.trim(),
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            };

            // Submit form using the contact API service
            await api.contact.submitForm(contactData);

            setSubmitStatus({
                type: 'success',
                message: 'Message sent successfully! We will get back to you soon.'
            });
            
            // Clear form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Contact form submission error:', error);
            setSubmitStatus({
                type: 'error',
                message: error.message || 'Failed to send message. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-component-container">
            <div className="contact-info-container">
                <h1>Contact us</h1>
                <p>Any question or remarks? Write us a message!</p>
                <div className='contact-info'>
                    <div className="contact-info-box">
                        <div className='contact-info-header'>
                            <span>
                                <img className="contact-info-image contact-info-location-icon" src={locationicon} alt="" />
                            </span>
                            <span>Address:</span>
                        </div>
                        <a
                            href={getGoogleMapsUrl(contactData.contactAddress)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            <div className='contact-info-content'>{contactData.contactAddress}</div>
                        </a>
                    </div>
                    <div className="contact-info-box">
                        <div className='contact-info-header'>
                            <span>
                                <img className="contact-info-image" src={phoneicon} alt="" />
                            </span>
                            <span>Phone:</span>
                        </div>
                        <a
                            href={`tel:${contactData.contactPhone.replace(/[^0-9+]/g, '')}`}
                            className="contact-link"
                        >
                            <div className='contact-info-content'>{contactData.contactPhone}</div>
                        </a>
                    </div>
                    <div className="contact-info-box">
                        <div className='contact-info-header'>
                            <span>
                                <img className="contact-info-image" src={mailicon} alt="" />
                            </span>
                            <span>Email:</span>
                        </div>
                        <a
                            href={`mailto:${contactData.contactMail}`}
                            className="contact-link"
                        >
                            <div className='contact-info-content'>{contactData.contactMail}</div>
                        </a>
                    </div>
                </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="name-group">
                    <span>
                        <label htmlFor="contact-firstName">First Name</label>
                        <input
                            type="text"
                            placeholder=""
                            name='contact-firstName'
                            id='contact-firstName'
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </span>
                    <span>
                        <label htmlFor="contact-lastName">Last Name</label>
                        <input
                            type="text"
                            placeholder=""
                            name='contact-lastName'
                            id='contact-lastName'
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </span>
                </div>

                <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input
                        type="email"
                        placeholder=""
                        id='contact-email'
                        name='contact-email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                        type="text"
                        placeholder=""
                        id='contact-subject'
                        name='contact-subject'
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                        placeholder=""
                        id='contact-message'
                        name='contact-message'
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>

                {submitStatus.message && (
                    <div className={`submit-status ${submitStatus.type}`}>
                        {submitStatus.message}
                    </div>
                )}

                <button
                    type="submit"
                    className="send-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

export default ContactComponent;