import React from 'react';
import "./Teaching.css";
import Testimonials from "../../components/Testimonials/Testimonials";
import { BannerSection_Teaching, TeachingPrograms, TeachingApproach, TeachingVolunteerList } from './TeachingData';
import './ImagePreloader.jsx';
import { Link } from 'react-router-dom';
import ContributionBanner from '../../components/ContributionBanner/ContributionBanner.jsx';
import TeachingPageReportCard from '../../components/TeachingPageReportCard/TeachingPageReportCard.jsx';
import { useImagePreloader, extractImageSources, LoadingIndicator } from '../../utils/ImagePreloader';

// Sample reports data
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

/**
 * Teaching component displays information about educational programs,
 * teaching approaches, volunteer experiences, and testimonials
 */
const Teaching = () => {
  // Get all image sources from the data
  const allImageSources = [
    ...extractImageSources(BannerSection_Teaching),
    ...extractImageSources(TeachingPrograms),
    ...extractImageSources(TeachingApproach),
    ...extractImageSources(TeachingVolunteerList)
  ];

  // Use the image preloader hook
  const { isLoading, loadingProgress } = useImagePreloader(allImageSources);

  // Show loading indicator while images are loading
  if (isLoading) {
    return <LoadingIndicator progress={loadingProgress} />;
  }

  /**
   * Renders a list item with label and text
   */
  const renderListItem = (item, index) => {
    return (
      <li key={index}>
        {item.label && <b>{item.label}: </b>}
        {item.text}
        {item.subPoints && (
          <ul className="TeachingProgramsInnerText">
            {item.subPoints.map((subItem, subIndex) => renderListItem(subItem, subIndex))}
          </ul>
        )}
      </li>
    );
  };

  /**
   * Renders the images for a program or section
   */
  const renderImages = (images, className = "TeachingProgramsImageBox") => {
    return (
      <div className={className}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="TeachingProgramsImages"
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="TeachingBody">
        {/* Breadcrumb navigation */}
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-current">Teaching</span>
        </div>

        {/* Banner section */}
        <div className="TeachingBannerSection">
          <div className="TeachingBannerImageBox">
            <img
              className='TeachingBannerImage'
              src={BannerSection_Teaching.image}
              alt={BannerSection_Teaching.imageAlt}
            />
            <span className='TeachingBannerOverlayText'>{BannerSection_Teaching.overlayText}</span>
          </div>
          <p className="TeachingBannerDescription">{BannerSection_Teaching.description}</p>
        </div>

        {/* Programs section */}
        <h2 className="TeachingHeadings">Our programs</h2>
        {TeachingPrograms.map((program, index) => {
          // Alternate layout for even/odd indices
          return index % 2 === 0 ? (
            <div className="TeachingProgramsBox" key={index}>
              <div className="TeachingProgramsTextBox">
                <span className="TeachingProgramsNumberHeading">{program.number}</span>
                <h2 className="TeachingProgramsNameHeading">{program.name}</h2>
                <ul className="TeachingProgramsOuterText">
                  {program.points.map((point, pointIndex) => renderListItem(point, pointIndex))}
                </ul>
              </div>
              {renderImages(program.images)}
            </div>
          ) : (
            <div className="TeachingProgramsBox-odd" key={index}>
              {renderImages(program.images)}
              <div className="TeachingProgramsTextBox-odd">
                <span className="TeachingProgramsNumberHeading-odd">{program.number}</span>
                <h2 className="TeachingProgramsNameHeading-odd">{program.name}</h2>
                <ul className="TeachingProgramsOuterText">
                  {program.points.map((point, pointIndex) => renderListItem(point, pointIndex))}
                </ul>
              </div>
            </div>
          );
        })}

        {/* Teaching approach section */}
        <h2 className="TeachingHeadings">{TeachingApproach.heading}</h2>
        <div className="TeachingApproachBox">
          <div className="TeachingApproachTextBox">
            <ul className="TeachingProgramsOuterText">
              {TeachingApproach.points.map((point, pointIndex) => renderListItem(point, pointIndex))}
            </ul>
          </div>
          {renderImages(TeachingApproach.images)}
        </div>

        {/* Testimonials section */}
        <Testimonials />

        {/* Volunteer Experience section */}
        <h2 className="TeachingHeadings">Volunteer Experience</h2>
        <div className="TeachingVolunteerExperienceGrid">
          {TeachingVolunteerList.map((volunteer, index) => (
            <div className='TeachingVolunteerBox' key={index}>
              <img
                src={volunteer.image}
                alt={volunteer.imageAlt}
                className="TeachingVolunteerImage"
              />
              <h3 className="TeachingVolunteerHeading">{volunteer.name}</h3>
              <p className="TeachingVolunteerText">{volunteer.description}</p>
            </div>
          ))}
        </div>

        {/* Reports section */}
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

      {/* Contribution banner */}
      <ContributionBanner />
    </>
  );
};

export default Teaching;