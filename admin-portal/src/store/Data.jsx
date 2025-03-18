import { createContext, useState, useEffect } from 'react';
import { announcementService, downloadService, galleryService } from '../services/api';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [downloads, setDownloads] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const announcementsResponse = await announcementService.getAll();
        setAnnouncements(announcementsResponse.data);
        
        const downloadsResponse = await downloadService.getAll();
        setDownloads(downloadsResponse.data);
        
        const galleryResponse = await galleryService.getAll();
        setGallery(galleryResponse.data);
        
        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try refreshing the page.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getAnnouncementById = async (id) => {
    try {
      const response = await announcementService.getById(id);
      return response.data;
    } catch (err) {
      console.error(`Error fetching announcement with ID ${id}:`, err);
      throw err;
    }
  };

  const getGalleryByLocation = async (location) => {
    try {
      const response = await galleryService.getAll(location);
      return response.data;
    } catch (err) {
      console.error(`Error fetching gallery items for location ${location}:`, err);
      throw err;
    }
  };

  const value = {
    announcements,
    downloads,
    gallery,
    loading,
    error,
    getAnnouncementById,
    getGalleryByLocation,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};