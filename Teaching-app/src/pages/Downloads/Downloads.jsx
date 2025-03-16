import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Downloads.css';
import DownloadPageCard from '../../components/DownloadPageCard/DownloadPageCard.jsx';
import downloadspagearrowicon from '../../assets/downloadspage-arrowicon.svg';
import greaterthanicon from '../../assets/greaterthan-icon.svg'

const Downloads = () => {
  const brochure = {
    title: 'Brochure_2024',
    year: '2024',
    lastUpdated: '2025-03-13T14:30:00' // ISO date string
  };

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

  // Gallery images
  const galleryItems = [
    {
      id: 1,
      image: "/downloadspagetestimage.svg",
      location: "Salkot"
    },
    {
      id: 2,
      image: "/downloadspagetestimage2.svg",
      location: "Narayan Bagar"
    }
  ];
  const DownloadsInsideAnyCampGalleryData = [
    {
      id: 'Regular Classes',
      image: "/downloadspagetestimage.svg",
    },
    {
      id: 'Doubts',
      image: "/downloadspagetestimage2.svg",
    },
    {
      id: 'Exams',
      image: "/downloadspagetestimage.svg",
    },
    {
      id: 'Regular Classes',
      image: "/downloadspagetestimage.svg",
    },
    {
      id: 'Doubts',
      image: "/downloadspagetestimage2.svg",
    },
    {
      id: 'Exams',
      image: "/downloadspagetestimage.svg",
    },
    {
      id: 'Regular Classes',
      image: "/downloadspagetestimage.svg",
    },
    {
      id: 'Doubts',
      image: "/downloadspagetestimage2.svg",
    },
    {
      id: 'Exams',
      image: "/downloadspagetestimage.svg",
    },
    {
      id: 'Regular Classes',
      image: "/downloadspagetestimage.svg",
    },
    {
      id: 'Doubts',
      image: "/downloadspagetestimage2.svg",
    },
    {
      id: 'Exams',
      image: "/downloadspagetestimage.svg",
    },
  ];

  const navigate = useNavigate();

  const handleClick = (campLocation) => {
    window.scrollTo(0, 0);
    navigate(`/gallery/${campLocation.toLowerCase().replace(/\s+/g, '-')}`, {
      state: {
        DownloadsInsideAnyCampGalleryData,
        location: campLocation
      }
    });
  };

  return (
    <>
      <div className="downloads">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-current">Downloads</span>
        </div>

        <div className='downloads-header'>
          <h1>Downloads</h1>
          <p>
            Explore our trust's brochure and past camp reports to gain insights into
            our mission, teaching approach, and the impact we create. Download now
            to learn more about our journey and initiatives.
          </p>
        </div>

        <div className='downloads-content-container'>
          <h2>Brochure</h2>
          <div className="brochure-cards-container">
            <DownloadPageCard
              title={brochure.title}
              year={brochure.year}
              lastUpdated={brochure.lastUpdated}
            />
          </div>
        </div>

        <div className='downloads-content-container'>
          <h2>Reports</h2>
          <div className="reports-cards-container">
            {reports.map((report, index) => (
              <DownloadPageCard
                key={index}
                title={report.title}
                placeName={report.placeName}
                year={report.year}
                lastUpdated={report.lastUpdated}
              />
            ))}
          </div>
        </div>

        <div className='downloads-gallery-container'>
          <h2>Gallery</h2>
          <p>Highlights from our past camps in pictures</p>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item-card"
                onClick={() => handleClick(item.location)}
              >
                <span className='location-image-container'>
                  <img className='location-image' src={item.image} alt={`Camp at ${item.location}`} />
                </span>
                <span className="gallery-item-caption">
                  <span>{item.location}</span>
                  <img className='downloadspagearrowicon' src={downloadspagearrowicon} alt="" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='downloads-contribution-container'>
        <h1>
          Your Contribution Can transform Uttarakhand's future
        </h1>
        <Link
          to="/get-involved"
          className='downloads-contribution-container-button'
          onClick={() => window.scrollTo(0, 0)}
        >
          <span>
            Join our cause
          </span>
          <span className='downloads-contribution-arrow-icon'>
            <img src={greaterthanicon} alt="arrow icon" />
          </span>
        </Link>
      </div>
    </>
  );
};

export default Downloads;