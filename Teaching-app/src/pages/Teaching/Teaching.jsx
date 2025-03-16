import React, { useState, useEffect } from 'react';
import "./Teaching.css";
import { BannerSection, TeachingPrograms, TeachingApproach, TeachingVolunteerList } from './TeachingData';
import { Link } from 'react-router-dom';
import ContributionBanner from '../../components/ContributionBanner/ContributionBanner.jsx';
import TeachingPageReportCard from '../../components/TeachingPageReportCard/TeachingPageReportCard.jsx';

const reports = [
  {
    title: 'Report_title1',
    placeName: 'Salkot',
    year: "2024",
    lastUpdated: "2025-03-14T14:30:00", // ISO date string
  },
  {
    title: 'Report_title2',
    placeName: 'Narayan Bhagar',
    year: "2023",
    lastUpdated: "2024-03-15T14:30:00", // ISO date string
  },
  {
    title: 'Report_title3',
    placeName: 'Place name',
    year: "20XX",
    lastUpdated: "2024-02-15T14:30:00", // ISO date string
  },
];

const Teaching = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Extract all image sources from the data objects
  // This will need to be customized based on the actual structure of your data
  const extractImages = () => {
    const images = [];
    
    // Extract images from BannerSection
    if (BannerSection.image && BannerSection.image.props && BannerSection.image.props.src) {
      images.push(BannerSection.image.props.src);
    }
    
    // Extract images from TeachingPrograms
    TeachingPrograms.forEach(program => {
      if (program.image && program.image.props && program.image.props.src) {
        images.push(program.image.props.src);
      }
    });
    
    // Extract images from TeachingApproach
    if (TeachingApproach.image && TeachingApproach.image.props && TeachingApproach.image.props.src) {
      images.push(TeachingApproach.image.props.src);
    }
    
    // Extract images from TeachingVolunteerList
    TeachingVolunteerList.forEach(volunteer => {
      if (volunteer.image && volunteer.image.props && volunteer.image.props.src) {
        images.push(volunteer.image.props.src);
      }
    });
    
    return images;
  };

  // Get all images that need to be preloaded
  const allImages = extractImages();
  
  useEffect(() => {
    // If there are no images, don't show loading state
    if (allImages.length === 0) {
      setIsLoading(false);
      return;
    }
    
    // Preload all images
    const imagePromises = allImages.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImagesLoaded(prev => prev + 1);
          resolve();
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${src}`);
          // Still count this as "loaded" to avoid getting stuck
          setImagesLoaded(prev => prev + 1);
          resolve();
        };
      });
    });
    
    // When all images are loaded, set loading to false
    Promise.all(imagePromises)
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Failed to load images:", error);
        // Set loading to false even if some images fail to avoid getting stuck
        setIsLoading(false);
      });
  }, []);
  
  // Show loading state or render the component
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading... {imagesLoaded}/{allImages.length} images loaded</p>
      </div>
    );
  }

  return (
    <>
      <div className="TeachingBody">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-current">About Us</span>
        </div>
        <div className="TeachingBannerSection">
          <div className="TeachingBannerImageBox">
            {BannerSection.image}
            {BannerSection.overlaytext}
          </div>
          {BannerSection.description}
        </div>

        <h2 className="TeachingHeadings">Our programs</h2>
        {TeachingPrograms.map((programObject, index) => index % 2 === 0 ? (
          <div className="TeachingProgramsBox" key={index}>
            <div className="TeachingProgramsTextBox">
              {programObject.number}
              {programObject.name}
              {programObject.points}
            </div>
            {programObject.image}
          </div>
        ) : (
          <div className="TeachingProgramsBox-odd" key={index}>
            {programObject.image}
            <div className="TeachingProgramsTextBox-odd">
              {programObject.number}
              {programObject.name}
              {programObject.points}
            </div>
          </div>
        ))}
        {TeachingApproach.heading}
        <div className="TeachingApproachBox">
          <div className="TeachingApproachTextBox">
            {TeachingApproach.points}
          </div>
          {TeachingApproach.image}
        </div>
        
        <h2 className="TeachingHeadings">Volunteer Experience</h2>
        <div className="TeachingVolunteerExperienceGrid">
          {TeachingVolunteerList.map((VolunteerObject, index3) => (
            <div className='TeachingVolunteerBox' key={index3}>
              {VolunteerObject.image}
              {VolunteerObject.name}
              {VolunteerObject.description}
            </div>
          ))}
        </div>
        <div className='teaching-content-container'>
          <h2>Reports</h2>
          <div className="teaching-reports-cards-container">
            {reports.map((report, index) => (
              <TeachingPageReportCard
                key={index}
                title={report.title}
                placeName={report.placeName}
                year={report.year}
              />
            ))}
          </div>
        </div>
      </div>
      <ContributionBanner/>
    </>
  );
};

export default Teaching;