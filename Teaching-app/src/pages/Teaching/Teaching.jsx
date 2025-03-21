import React from 'react';
import "./Teaching.css";
import Testimonials from "../../components/Testimonials/Testimonials";
import { BannerSection, TeachingPrograms, TeachingApproach, TeachingVolunteerList, TeachingTestimonials } from './TeachingData';
import { Link } from 'react-router-dom';
import ContributionBanner from '../../components/ContributionBanner/ContributionBanner.jsx';
import TeachingPageReportCard from '../../components/TeachingPageReportCard/TeachingPageReportCard.jsx';
import { useImagePreloader, extractImageSources, LoadingIndicator } from '../../utils/ImagePreloader';

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
  // Get all image sources from the data
  const allImageSources = [
    ...extractImageSources(BannerSection),
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

  return (
    <>
      <div className="TeachingBody">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-current">Teaching</span>
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

        {/* Testimonials */}
        <Testimonials />

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
      <ContributionBanner />
    </>
  );
};

export default Teaching;