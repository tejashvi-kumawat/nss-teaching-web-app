import React, { useState } from "react";
// import { useState } from "react-router-dom"; - This import seems incorrect, useState comes from React
import "./PartnerwithUs.css";

/**
 * PartnerWithUs Component
 * Displays partnership options that expand to show descriptions when clicked
 */
const PartnerUs = () => {
  // State to track which description is currently visible
  const [visibleDesc, setVisibleDesc] = useState(null);

  // Partnership options data - could be moved to a separate file in a larger application
  const partnershipOptions = [
    {
      id: 1,
      title: "Sponsor a Student Education",
      desc: "This is sample desc 1  ",
    },
    {
      id: 2,
      title: "Provide Digital & Learning Resources to Students",
      desc: "This is sample desc 2",
    },
    {
      id: 3,
      title: "Provide Digital & Learning Resources to Uttrakhand Teaching Project",
      desc: "This is sample desc 3",
    },
    {
      id: 4,
      title: "Sponsor student food cost",
      desc: "This is sample desc 4",
    },
    {
      id: 5,
      title: "Sponsor Volunteer travel or food cost",
      desc: "This is sample desc 5",
    },
  ];

  /**
   * Toggle description visibility when a partnership option is clicked
   * @param {number} id - The ID of the clicked partnership option
   */
  const handlePartnershipClick = (id) => {
    setVisibleDesc((prevId) => (prevId === id ? null : id)); // Toggle visibility
  };

  // Commented out routing code for future implementation
  // const handlePartnershipClick = (option) => {
  //   navigate(`/partnership/${option.id}`, {
  //     state: { partnershipOption: option },
  //   });
  // };

  return (
    <div className="partnerWithUs-container">
      {partnershipOptions.map((option) => (
        <React.Fragment key={option.id}>
          {/* Partnership option item - clickable to expand/collapse */}
          <div
            className="partnerWithUs-item"
            onClick={() => handlePartnershipClick(option.id)}
            aria-expanded={visibleDesc === option.id}
            role="button"
          >
            <div className="partnerWithUs-content">
              {option.title}
              {/* Arrow icon */}
              <svg
                className="partnerWithUs-arrow"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M9 6l6 6-6 6"
                  stroke="#2E7D32"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          
          {/* Expandable description section - shown only when the option is selected */}
          {visibleDesc === option.id && (
            <div className="hidden-desc-partner-with-us">
              {option.desc}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PartnerUs;