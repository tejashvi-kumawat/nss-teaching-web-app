import React from 'react';
import './Downloads.css';
const Downloads = () => {
  const brochure = {
    title: 'Brochure_2024',
    subtitle: 'Year 2024',
    updated: '2 days ago',
  };

  const reports = [
    {
      title: 'Report_title1',
      subtitle: 'Saikot, Year 2024',
      updated: '2 days ago',
    },
    {
      title: 'Report_title2',
      subtitle: 'Narayan Bhagar, Year 2023',
      updated: '1 year ago',
    },
    {
      title: 'Report_title3',
      subtitle: 'Place name, Year 20XX',
      updated: 'X time ago',
    },
  ];

  const renderCard = ({ title, subtitle, updated }) => (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-subtitle">{subtitle}</p>
      <p className="card-updated">Last updated: {updated}</p>
    </div>
  );

  return (
    <div className="downloads">
      <h1>Downloads</h1>
      <p>
        Explore our trust’s brochure and past camp reports to gain insights into
        our mission, teaching approach, and the impact we create. Download now
        to learn more about our journey and initiatives.
      </p>

      <h2>Brochure</h2>
      <div className="brochure-container">
        {renderCard(brochure)}
      </div>

      <h2>Reports</h2>
      <div className="reports-container">
        {reports.map((report, index) => renderCard(report))}
      </div>
    </div>
  );
};

export default Downloads;
