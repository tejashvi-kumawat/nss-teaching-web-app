import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GetInvolved.css";

function GetInvolved() {
  const [activeTab, setActiveTab] = useState("Volunteer");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectRole = (role) => {
    setSelectedRole(role);
    setIsDropdownOpen(false);
  };

  const VolunteerForm = () => (
    <div className="get-involved-container">
      <div className="get-involved-intro">
        <h1>Become a volunteer</h1>
        <p>
          Join hands with us to inspire and educate the youth of Uttarakhand.
          Whether you are a teacher, a professional, or a student, your
          contribution can make a lasting impact.
        </p>
      </div>
      <div className="get-involved-card">
        <div className="get-involved-form-group">
          <label className="get-involved-form-label">Role</label>
          <div className="get-involved-dropdown-container">
            <button
              type="button"
              className="get-involved-dropdown-toggle"
              onClick={toggleDropdown}
            >
              <span className="get-involved-dropdown-text">
                {selectedRole || "Choose role"}
              </span>
              <svg
                className={`get-involved-dropdown-arrow ${
                  isDropdownOpen ? "open" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="get-involved-dropdown-menu">
                <ul className="get-involved-dropdown-list">
                  <li
                    className="get-involved-dropdown-item"
                    onClick={() => selectRole("Mentoring")}
                  >
                    Mentoring
                  </li>
                  <li
                    className="get-involved-dropdown-item"
                    onClick={() => selectRole("Teaching")}
                  >
                    Teaching
                  </li>
                  <li
                    className="get-involved-dropdown-item"
                    onClick={() => selectRole("Administrative support")}
                  >
                    Administrative support
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="get-involved-form-group">
          <label className="get-involved-form-label">Full Name</label>
          <input
            type="text"
            className="get-involved-form-input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="get-involved-form-group">
          <label className="get-involved-form-label">Email</label>
          <input
            type="email"
            className="get-involved-form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="button" className="get-involved-submit-button">
          Write mail
        </button>
      </div>
    </div>
  );

  const Donate = () => (
    <div className="get-involved-container">
      <div className="get-involved-intro">
        <h1>Donate Us</h1>
        <p>
          Your support helps us provide free coaching, study materials, and
          resources to students in remote areas. Together, we can build a
          brighter future
        </p>
      </div>
      <div className="get-involved-donate-form">
        <h3>Enter amount</h3>
        <div className="input-money-container">
  <span className="vertical-bar">|</span>
  <span className="rupee-symbol">₹</span>
  <input type="text" className="money-input" placeholder="0000" />
</div>

        <p>or</p>
        <div className="get-involved-donate-buttons">
          <button>₹100 &gt;</button>
          <button>₹500 &gt;</button>
          <button>₹1000 &gt;</button>
        </div>
        <button className="get-involved-submit-button">Enter your details</button>
      </div>
    </div>
  );
  const PartnerWithUs = () => (
    <div className="get-involved-container">
      <div className="get-involved-intro">
        <h1>Partner with us</h1>
        <p>
          Join Hands to Empower Education in Rural uttarakhand! We invite
          organizations, NGOs, corporates, and individuals to collorate with us
          in bringing quality education to underprivileged students in
          Uttarakhand. Together, we can bridge the education gap and transform
          young lives.
        </p>
      </div>
    </div>
  );

  return (
    <div className="get-involved-main-container">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>
        <span className="breadcrumb-separator">&gt;</span>
        <span className="breadcrumb-current">Get Involved</span>
      </div>

      {/* Main Content */}
      <div className="get-involved-content-container">
        <div className="get-involved-title-container">
          <h1 className="get-involved-page-title">Get Involved</h1>
          <p className="get-involved-description">
            Your impact, your choice: Choose how you want to contribute.
          </p>
        </div>

        {/* Tabs Container*/}
        <div className="get-involved-tabs-container">
          {/* Tabs */}
          <div className="get-involved-tabs-row">
            <div
              className={`get-involved-tab ${
                activeTab === "Volunteer" ? "get-involved-tab-active" : ""
              }`}
              onClick={() => setActiveTab("Volunteer")}
            >
              Volunteer
            </div>
            <div
              className={`get-involved-tab ${
                activeTab === "Donate" ? "get-involved-tab-active" : ""
              }`}
              onClick={() => setActiveTab("Donate")}
            >
              Donate
            </div>
            <div
              className={`get-involved-tab ${
                activeTab === "Partner with us" ? "get-involved-tab-active" : ""
              }`}
              onClick={() => setActiveTab("Partner with us")}
            >
              Partner with us
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "Volunteer" && (
            <div className="tab-content">
              <VolunteerForm />
            </div>
          )}

          {activeTab === "Donate" && (
            <div className="tab-content">
              <Donate />
            </div>
          )}

          {activeTab === "Partner with us" && (
            <div className="tab-content">
              <PartnerWithUs />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
