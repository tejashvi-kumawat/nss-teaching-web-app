import React from "react";
import { useNavigate } from "react-router-dom";
import "./PartnerwithUs.css";

const PartnerUs = () => {
  const navigate = useNavigate();

  // Sample partnership options data
  const partnershipOptions = [
    {
      id: 1,
      title: "Sponsor a Student Education",
    },
    {
      id: 2,
      title: "Provide Digital & Learning Resources to Students",
    },
    {
      id: 3,
      title:
        "Provide Digital & Learning Resources to Uttrakhand Teaching Project",
    },
    {
      id: 4,
      title: "Sponsor student food cost",
    },
    {
      id: 5,
      title: "Sponsor Volunteer travel or food cost",
    },
  ];

  const handlePartnershipClick = (option) => {
    navigate(`/partnership/${option.id}`, {
      state: { partnershipOption: option },
    });
  };

  return (
    <div className="partnerWithUs-container">
      {partnershipOptions.map((option) => (
        <div
          key={option.id}
          className="partnerWithUs-item"
          onClick={() => handlePartnershipClick(option)}
        >
          <div className="partnerWithUs-content">
            {option.title}
            <svg
              className="partnerWithUs-arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
      ))}
    </div>
  );
};

export default PartnerUs;
