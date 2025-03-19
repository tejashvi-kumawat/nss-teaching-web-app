// In Home.jsx
import React from "react";
import './Home.css';
import ContributionBanner from "../../components/ContributionBanner/ContributionBanner";
import ContactComponent from "../../components/ContactComponent/ContactComponent";
import {TrusteesHome} from "../../pages/Trustees/Trustees.jsx";

const contactData =
{
  contactAddress: "F2, 842, Green Street, Sector 5, Vaishali, Ghaziabad, UP- 201010",
  contactPhone: "+91 888-214-8359",
  contactMail: "hvdt.uk@gmail.com"
}
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="hero-section">
          <h1>HIMALAYAN VIDYA DAAN TRUST</h1>
          <p>Welcome to our official website</p>
        </div>
        <div className="content-section">
          <p>Content coming soon...</p>
        </div>
        <ContactComponent contactData={contactData} />
      </div>
      <div className="contribution-on-home">
          <ContributionBanner/>
        </div>
      <TrusteesHome />
    </>
  );
};

export default Home;