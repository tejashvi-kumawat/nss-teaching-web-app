// ImagePreloader.js
// Utility functions for preloading images and showing loading progress
import { useState, useEffect } from 'react';

/**
 * Custom hook to preload images and track loading progress
 * @param {Array} imageSources - Array of image URLs to preload
 * @returns {Object} Loading state and progress
 */
export const useImagePreloader = (imageSources) => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [loadedCount, setLoadedCount] = useState(0);
    const totalImages = imageSources.length;

    useEffect(() => {
        // If no images to load, exit early
        if (totalImages === 0) {
            setIsLoading(false);
            setLoadingProgress(1);
            return;
        }

        // Preload all images when this hook is used
        const imagePromises = imageSources.map(src => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                    setLoadedCount(prevCount => {
                        const newCount = prevCount + 1;
                        setLoadingProgress(newCount / totalImages);
                        return newCount;
                    });
                    resolve();
                };
                img.onerror = () => {
                    console.error(`Failed to load image: ${src}`);
                    // Still resolve so one failing image doesn't prevent the page from loading
                    setLoadedCount(prevCount => {
                        const newCount = prevCount + 1;
                        setLoadingProgress(newCount / totalImages);
                        return newCount;
                    });
                    resolve();
                };
            });
        });

        // When all images are loaded, update state
        Promise.all(imagePromises).then(() => {
            setIsLoading(false);
        });
    }, [imageSources, totalImages]);

    return { isLoading, loadingProgress, loadedCount, totalImages };
};

/**
 * Extracts all image sources from data objects
 * @param {Object|Array} data - Data object or array containing image references
 * @returns {Array} Array of image URLs
 */
export const extractImageSources = (data) => {
    const sources = [];

    // Function to recursively search for image properties
    const findImageSources = (obj) => {
        if (!obj) return;

        if (typeof obj === 'object') {
            // If it's an image object with src property
            if (obj.src && typeof obj.src === 'string') {
                sources.push(obj.src);
            }
            // If it's a direct image path
            else if (obj.image && typeof obj.image === 'string') {
                sources.push(obj.image);
            }
            // If it has images array
            else if (obj.images && Array.isArray(obj.images)) {
                obj.images.forEach(img => {
                    if (img.src) sources.push(img.src);
                });
            }

            // Recursively check all properties
            Object.values(obj).forEach(value => {
                if (typeof value === 'object' && value !== null) {
                    findImageSources(value);
                }
            });
        }
    };

    // Process the data
    if (Array.isArray(data)) {
        data.forEach(item => findImageSources(item));
    } else {
        findImageSources(data);
    }

    return sources;
};

/**
 * Component to display loading progress
 * @param {number} progress - Loading progress from 0 to 1
 */
export const LoadingIndicator = ({ progress }) => {
    const percentage = Math.round(progress * 100);

    return (
        <div className="loading-container" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            backgroundColor: '#f5f5f5'
        }}>
            <h2>Loading content...</h2>
            <div style={{
                width: '300px',
                height: '20px',
                backgroundColor: '#e0e0e0',
                borderRadius: '10px',
                overflow: 'hidden',
                margin: '20px 0'
            }}>
                <div style={{
                    width: `${percentage}%`,
                    height: '100%',
                    backgroundColor: '#4caf50',
                    transition: 'width 0.3s ease'
                }}></div>
            </div>
            <p>{percentage}% loaded</p>
        </div>
    );
};