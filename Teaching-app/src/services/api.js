import axios from 'axios';

// Ensure API_URL doesn't have a trailing slash
// const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8000').replace(/\/$/, '');
const API_URL = 'http://localhost:8000'
// Function to get CSRF token from cookies
function getCsrfToken() {
    const name = 'csrftoken';
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(name))
        ?.split('=')[1];
    return cookieValue;
}

// Function to get CSRF token from server
async function getCsrfTokenFromServer() {
    try {
        // First try to get the token from cookies
        const existingToken = getCsrfToken();
        if (existingToken) {
            return existingToken;
        }

        // If no token in cookies, fetch it from the server
        const response = await axios.get(`${API_URL}/csrf/`, {
            withCredentials: true,
            headers: {
                'Accept': 'application/json'
            }
        });

        // Get the token from cookies after the request
        return getCsrfToken();
    } catch (error) {
        console.warn('Failed to get CSRF token:', error);
        return null;
    }
}

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true // This is important for cookies to be sent
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    async (config) => {
        // Add Authorization header if token exists
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Token ${token}`;
        }

        // Add CSRF token for all non-GET requests
        if (config.method !== 'get') {
            const csrfToken = await getCsrfTokenFromServer();
            if (csrfToken) {
                config.headers['X-CSRFToken'] = csrfToken;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
        }
        return Promise.reject(error);
    }
);

// Export the axios instance with additional methods
const api = {
    // Auth services
    auth: {
        login: async (username, password) => {
            try {
                // Get CSRF token
                const csrfToken = await getCsrfTokenFromServer();

                // Make login request
                const response = await axios.post(`${API_URL}/api/login/`, {
                    username,
                    password
                }, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRFToken': csrfToken
                    }
                });

                console.log('Login API response:', response);

                // Store tokens
                if (response.data && response.data.token) {
                    localStorage.setItem('token', response.data.token);

                    // Also store username if available
                    if (response.data.username) {
                        localStorage.setItem('username', response.data.username);
                    }
                } else {
                    throw new Error('No token received from server');
                }

                return response.data;
            } catch (error) {
                console.error('Login API error:', {
                    data: error.response?.data || {},
                    status: error.response?.status,
                    statusText: error.response?.statusText,
                    message: error.message
                });
                throw error;
            }
        },

        register: async (userData) => {
            try {
                // Get CSRF token
                const csrfToken = await getCsrfTokenFromServer();

                const response = await axios.post(`${API_URL}/api/register/`, userData, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRFToken': csrfToken
                    }
                });
                return response.data;
            } catch (error) {
                console.error('Registration error:', {
                    data: error.response?.data || {},
                    status: error.response?.status,
                    statusText: error.response?.statusText,
                    message: error.message
                });
                throw error;
            }
        },

        logout: () => {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
        },

        getProfile: async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No authentication token found');
                }

                const response = await axiosInstance.get('/api/profile/', {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                });
                return response.data;
            } catch (error) {
                console.error('Error fetching profile:', error);
                throw error;
            }
        }
    },

    // Contact form submission
    contact: {
        submitForm: async (formData) => {
            try {
                // Get CSRF token
                const csrfToken = await getCsrfTokenFromServer();

                // Make the request with proper headers
                const response = await axios.post(`${API_URL}/contact/`, formData, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRFToken': csrfToken
                    }
                });

                if (!response.data) {
                    throw new Error('No response data received');
                }

                return response.data;
            } catch (error) {
                console.error('Contact form submission error:', {
                    message: error.message,
                    response: error.response?.data,
                    status: error.response?.status,
                    headers: error.response?.headers
                });

                // Provide more specific error messages
                if (error.response?.status === 403) {
                    throw new Error('CSRF token validation failed. Please try again.');
                } else if (error.response?.status === 500) {
                    throw new Error('Server error occurred. Please try again later.');
                } else if (error.response?.data?.error) {
                    throw new Error(error.response.data.error);
                } else if (error.response?.data?.detail) {
                    throw new Error(error.response.data.detail);
                } else if (error.code === 'ERR_NETWORK') {
                    throw new Error('Network error. Please check your connection and try again.');
                } else {
                    throw new Error('Failed to send message. Please try again.');
                }
            }
        }
    },

    // Announcements
    announcements: {
        getAll: async () => {
            try {
                const response = await axiosInstance.get('/announcements/');
                return response.data;
            } catch (error) {
                console.error('Failed to fetch announcements:', error);
                throw error;
            }
        },
        getById: async (id) => {
            try {
                const response = await axiosInstance.get(`/announcements/${id}/`);
                return response.data;
            } catch (error) {
                console.error(`Failed to fetch announcement ${id}:`, error);
                throw error;
            }
        }
    },

    // Downloads
    downloads: {
        getAll: async () => {
            try {
                const response = await axiosInstance.get('/downloads/');
                return response.data;
            } catch (error) {
                console.error('Failed to fetch downloads:', error);
                throw error;
            }
        }
    },

    // Gallery
    gallery: {
        getAll: async (params = {}) => {
            try {
                console.log('Fetching gallery items with params:', params);
                const response = await axiosInstance.get('/gallery/', { params });

                // Add more detailed logging
                console.log('Gallery raw response:', response);

                if (!response.data || !Array.isArray(response.data)) {
                    console.error('Invalid gallery response format:', response.data);
                    return [];
                }

                // Process the response to ensure image_url is used
                const galleryWithCorrectUrls = response.data.map(item => ({
                    ...item,
                    imageUrl: item.image_url ||
                        (item.image ? `${API_URL}${item.image.startsWith('/') ? '' : '/'}${item.image}` : ''),
                    campName: item.camp_name || '',
                    location: item.location || '',
                    year: item.year || new Date(item.date).getFullYear()
                }));

                return galleryWithCorrectUrls;
            } catch (error) {
                // More detailed error logging
                console.error('Failed to fetch gallery items:', error);
                console.error('Error details:', {
                    message: error.message,
                    response: error.response?.data,
                    status: error.response?.status
                });
                return [];
            }
        },

        // Add method to get all camps with gallery items
        getCamps: async () => {
            try {
                const response = await axiosInstance.get('/gallery/camps/');
                return response.data;
            } catch (error) {
                console.error('Failed to fetch camps with gallery:', error);
                return [];
            }
        },

        // Get gallery items by camp
        getByCamp: async (campId) => {
            try {
                const response = await axiosInstance.get(`/gallery/`, {
                    params: { camp_id: campId }
                });

                // Process the response to ensure image_url is used
                const galleryWithCorrectUrls = response.data.map(item => ({
                    ...item,
                    imageUrl: item.image_url ||
                        (item.image ? `${API_URL}${item.image.startsWith('/') ? '' : '/'}${item.image}` : ''),
                    campName: item.camp_name || '',
                    location: item.location || '',
                    year: item.year || new Date(item.date).getFullYear()
                }));

                return galleryWithCorrectUrls;
            } catch (error) {
                console.error(`Failed to fetch gallery items for camp ${campId}:`, error);
                return [];
            }
        },

        // Keep existing methods
        getById: async (id) => {
            try {
                const response = await axiosInstance.get(`/gallery/${id}/`);
                return response.data;
            } catch (error) {
                console.error('Failed to fetch gallery item:', error);
                return {};
            }
        },

        download: async (id) => {
            try {
                const response = await axiosInstance.get(`/gallery/${id}/download/`, {
                    responseType: 'blob'
                });
                return response;
            } catch (error) {
                console.error('Failed to download gallery item:', error);
                throw error;
            }
        },
    },

    // Brochures
    brochures: {
        getAll: async () => {
            try {
                console.log('Fetching brochures from:', `${API_URL}/brochures/`);
                const response = await axiosInstance.get('/brochures/');
                console.log('Brochures response:', response);

                // Process the response to ensure file_url is used
                const brochuresWithCorrectUrls = response.data.map(brochure => ({
                    ...brochure,
                    year: brochure.year || new Date(brochure.created_at).getFullYear(),
                    // Use file_url if available, otherwise construct the URL (with null checks)
                    fileUrl: brochure.file_url ||
                        (brochure.file ? `${API_URL}${brochure.file.startsWith('/') ? '' : '/'}${brochure.file}` : '')
                }));

                return brochuresWithCorrectUrls;
            } catch (error) {
                console.error('Failed to fetch brochures:', error);
                return [];
            }
        },
        download: async (id) => {
            try {
                const response = await axiosInstance.get(`/brochures/${id}/download/`, {
                    responseType: 'blob',
                    withCredentials: true
                });
                return response;
            } catch (error) {
                console.error('Failed to download brochure:', error);
                throw error;
            }
        }
    },

    // Reports
    reports: {
        getAll: async (params = {}) => {
            try {
                console.log('Fetching reports from:', `${API_URL}/reports/`, params);
                const response = await axiosInstance.get('/reports/');
                console.log('Reports response:', response);

                // Process the response to ensure file_url is used
                const reportsWithCorrectUrls = response.data.map(report => ({
                    ...report,
                    year: report.year || new Date(report.created_at).getFullYear(),
                    // Use file_url if available, otherwise construct the URL (with null checks)
                    fileUrl: report.file_url ||
                        (report.file ? `${API_URL}${report.file.startsWith('/') ? '' : '/'}${report.file}` : '')
                }));

                return reportsWithCorrectUrls;
            } catch (error) {
                console.error('Failed to fetch reports:', error);
                return [];
            }
        },
        download: async (id) => {
            try {
                const response = await axiosInstance.get(`/reports/${id}/download/`, {
                    responseType: 'blob',
                    withCredentials: true
                });
                return response;
            } catch (error) {
                console.error('Failed to download report:', error);
                throw error;
            }
        }
    },

    // Event services
    events: {
        getAll: async (params = {}) => {
            try {
                const response = await axiosInstance.get('/events/', { params });
                return response.data;
            } catch (error) {
                console.error('Failed to fetch events:', error);
                throw error;
            }
        },

        getFeatured: async () => {
            try {
                const response = await axiosInstance.get('/events/', {
                    params: { featured: true }
                });
                return response.data;
            } catch (error) {
                console.error('Failed to fetch featured events:', error);
                throw error;
            }
        },

        getById: async (id) => {
            try {
                const response = await axiosInstance.get(`/events/${id}/`);
                return response.data;
            } catch (error) {
                console.error(`Failed to fetch event ${id}:`, error);
                throw error;
            }
        }
    },
    camps: {
        getAll: async (params = {}) => {
            try {
                const response = await axiosInstance.get('/camps/', { params });
                return response.data;
            } catch (error) {
                console.error('Failed to fetch camps:', error);
                return [];
            }
        },

        getById: async (id) => {
            try {
                const response = await axiosInstance.get(`/camps/${id}/`);
                return response.data;
            } catch (error) {
                console.error(`Failed to fetch camp ${id}:`, error);
                return null;
            }
        },

        getGallery: async (id) => {
            try {
                const response = await axiosInstance.get(`/camps/${id}/gallery/`);
                return response.data;
            } catch (error) {
                console.error(`Failed to fetch gallery for camp ${id}:`, error);
                return [];
            }
        }
    },

    // Generic HTTP methods
    get: axiosInstance.get.bind(axiosInstance),
    post: axiosInstance.post.bind(axiosInstance),
    put: axiosInstance.put.bind(axiosInstance),
    delete: axiosInstance.delete.bind(axiosInstance)
};

// Export the gallery service separately
export const galleryService = api.gallery;

// Export the brochure service separately
export const brochureService = api.brochures;

// Export the report service separately
export const reportService = api.reports;

// Default export for backward compatibility
export default api;
