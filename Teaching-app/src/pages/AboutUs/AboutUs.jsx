import React from "react";
import "./AboutUs.css";
import MessageContainer from "../../components/MessageContainer/MessageContainer";
import founderImage from "../../assets/founder.png";
import nidhi_pandey from "../../assets/nidhi_pandey.svg";
import AboutUs_Ourvision from "../../assets/AboutUs_OurVision.png";
import AboutUs_Mission from "../../assets/AboutUs_OurMission.png";
import { Link } from "react-router-dom";
import { BannerSection_About } from '../Teaching/TeachingData';
import ContributionBanner from '../../components/ContributionBanner/ContributionBanner.jsx';
import { useImagePreloader, extractImageSources, LoadingIndicator } from '../../utils/ImagePreloader';

const AboutUs = () => {
  // Define message data (assuming this was intended to be populated)
  const messageData = [
    // You can populate this with your actual message data
    // For example: { name: "J.P. Dabral", message: "Message content...", title: "Founder", photo: founderImage, position: "left" }
  ];

  // List of direct image imports
  const directImages = [
    founderImage,
    nidhi_pandey,
    AboutUs_Ourvision,
    AboutUs_Mission
  ];
  
  // Get image sources from BannerSection_About React elements
  const bannerImages = extractImageSources(BannerSection_About);
  
  // Combine all image sources
  const allImageSources = [...directImages, ...bannerImages];
  
  // Use the image preloader hook
  const { isLoading, loadingProgress } = useImagePreloader(allImageSources);
  
  // Show loading indicator while images are loading
  if (isLoading) {
    return <LoadingIndicator progress={loadingProgress} />;
  }

  return (
    <>
      <div className="about-us-container">
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-current">About Us</span>
        </div>

        {/* Hero section with background image and overlay */}
        <div className="TeachingBannerSection">
          <div className="TeachingBannerImageBox">
            {BannerSection_About.image}
            {BannerSection_About.overlaytext}
          </div>
        </div>

        {/* About Us Section */}
        <div className="about-us-container">
          {/* Mission statement introduction */}
          <div className="about-us-intro">
            <p>
              We strive to bridge the education gap in rural Uttarakhand,
              empowering students for success. J.P. Dabral has dedicated over
              three decades to this mission, transforming countless lives.
            </p>
          </div>

          {/* Vision Section */}
          <div className="about-us-vision-section">
            <h1>Our Vision</h1>
            <div className="vision-content">
              <ul className="about-us-our-vision">
                <li>
                  Develop a sustainable educational model for rural Uttarakhand
                </li>
                <li>Bridge the gap in quality education for students</li>
                <li>
                  Equip students to excel in academics and competitive exams
                </li>
                <li>Prepare students for success in life</li>
              </ul>
              <img
                src={AboutUs_Ourvision}
                alt="Students and staff"
                className="our-vision-image"
              />
            </div>
          </div>

          {/* Mission Section - Modified to remove box styling */}
          <div
            className="about-us-mission-section"
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              padding: "40px 0",
            }}
          >
            <h1>Our Mission</h1>
            <div className="mission-content">
              <div className="mission-points">
                <div className="mission-point">
                  <div className="checkbox">✓</div>
                  <p>
                    Provide{" "}
                    <span className="highlight">free, high-quality coaching</span>{" "}
                    for competitive exams such as JEE, NEET, and NDA.
                  </p>
                </div>
                <div className="mission-point">
                  <div className="checkbox">✓</div>
                  <p>
                    Enhance educational standards in underserved areas through
                    innovative teaching approaches.
                  </p>
                </div>
                <div className="mission-point">
                  <div className="checkbox">✓</div>
                  <p>
                    Inspire students to pursue higher education and professional
                    careers by addressing their academic and psychological needs.
                  </p>
                </div>
              </div>
              <img
                src={AboutUs_Mission}
                alt="Teacher with student"
                className="our-mission-image"
              />
            </div>
          </div>
        </div>
        
        {messageData.map((data, index) => (
          <MessageContainer
            key={index}
            name={data.name}
            message={data.message}
            title={data.title}
            photo={data.photo}
            position={data.position}
          />
        ))}
      </div>
      <ContributionBanner/>
    </>
  );
};

export default AboutUs;