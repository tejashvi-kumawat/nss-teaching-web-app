// pages/Home/Home.jsx
import React from "react";
import './Home.css';

// Component imports
import Home_Hero from "../../components/Home_Hero/Home_Hero";
import Home_Announcements from "../../components/Home_Announcements/Home_Announcements";
import Home_About from "../../components/Home_About/Home_About";
import Home_UttarakhandProject from "../../components/Home_UttarakhandProject/Home_UttarakhandProject";
import Home_Programs from "../../components/Home_Programs/Home_Programs";
import ContributionBanner from "../../components/ContributionBanner/ContributionBanner";
import ContactComponent from "../../components/ContactComponent/ContactComponent";
import Quote from "../../components/Quote/Quote";
import Testimonials from "../../components/Testimonials/Testimonials";
import { TrusteesHome } from "../../pages/Trustees/Trustees";

// Contact information
const contactData = {
  contactAddress: "F2, 842, Green Street, Sector 5, Vaishali, Ghaziabad, UP- 201010",
  contactPhone: "+91 888-214-8359",
  contactMail: "hvdt.uk@gmail.com"
};

const Home = () => {
  return (
    <>
      <div className="home-container">
        {/* Hero Section */}
        <Home_Hero />
      </div>
      {/* Quote Section */}
      <Quote />

      <div className="home-container">
        {/* Announcements Section */}
        <Home_Announcements />

        {/* About Section */}
        <Home_About />

        {/* Uttarakhand Teaching Project Section */}
        <Home_UttarakhandProject />

        {/* Programs Section */}
        <Home_Programs />

        {/* Contact Section */}
        <ContactComponent contactData={contactData} />

        {/* Trustees Section */}
        <TrusteesHome />

        {/* Testimonials Section */}
        <Testimonials />
      </div>

      {/* Contribution Banner */}
      <ContributionBanner />
    </>
  );
};

export default Home;