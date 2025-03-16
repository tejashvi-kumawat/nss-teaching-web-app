import React from "react";
import "./AboutUs.css"; // Make sure the filename matches
import MessageContainer from "../../components/MessageContainer/MessageContainer";
import founderImage from "../../assets/founder.png";
import nidhi_pandey from "../../assets/nidhi_pandey.svg";
import AboutUs_background from "../../assets/AboutUs_background.png";
// import AboutUs_background_cover from "../../assets/AboutUs_background_cover.png";
import AboutUs_Ourvision from "../../assets/AboutUs_OurVision.png";
import AboutUs_Mission from "../../assets/AboutUs_OurMission.png";
import { Link } from "react-router-dom";
// import checkbox from "../../assets/checkbox.svg";
const AboutUs = () => {
  // Data for multiple personalities
  const messageData = [
    {
      name: "J.P. Dabral",
      message: [
        "Education has the power to transform lives, and I firmly believe that quality education should not be limited by geography or economic constraints. I am J.P. Dabral, a visiting faculty at IIT Delhi, and in 2017, I initiated the Uttarakhand Teaching Project in collaboration with NSS IIT Delhi to bridge the educational gap in remote areas of Uttarakhand.",
        "What started as a small effort has now grown into a life-changing initiative, empowering students from Narayan Bagar, Saikot, Dugadda, Paukhal, and beyond. Each year, talented and motivated students from these regions participate in our intensive residential learning program, guided by IIT Delhi students. Through structured teaching, mentorship, and motivation, we aim to help them excel in board exams and competitive entrance tests like JEE and NEET.",
        "The success stories of our students inspire us to continue and expand our efforts. My vision is to create an ecosystem of learning where every deserving student gets the right guidance and support to achieve their dreams, regardless of their background. I invite educators, volunteers, and well-wishers to join us in this journey of empowering the youth through education.",
        "Together, we can make a difference.",
      ],
      title: "Founder's Message",
      photo: founderImage,
      position: "Founder",
    },
    {
      name: "Nidhi Pandey",
      message: [
        "Welcome to the Uttarakhand Teaching Project, a mission driven by passion, dedication, and the vision to make quality education accessible to students in remote areas.",
        "I am Nidhi Pandey, Coordinator of the Uttarakhand Teaching Project and Secretary at NSS IIT Delhi. This initiative was founded with the belief that education has the power to transform lives. Through this project, we aim to provide structured learning, mentorship, and academic support to students from class 9th to 12th who aspire to excel in their studies and prepare for competitive exams like JEE and NEET.",
        "With the support of IIT Delhi students, our goal is to create an environment where learning is not just about textbooks but about critical thinking, problem-solving, and holistic development. Over the years, we have seen students from Narayan Bagar, Saikot, Dugadda, and other remote areas of Uttarakhand make significant progress and achieve their dreams through this initiative",
        "At Uttarakhand Teaching Project, we believe that no dream is too big, and no obstacle is too tough when guided with the right mentorship. If you are a student looking for guidance, a mentor willing to contribute, or someone who shares our vision, we welcome you to be part of this journey.",
        "Let’s work together to build a brighter future for young minds.",
      ],
      title: "Coordinator's Message",
      photo: nidhi_pandey,
      position: "Coordinate",
    },
  ];
  return (
    <div className="about-us-container">
            {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-current">About Us</span>
        </div>

      {/* Hero section with background image and overlay */}
      <div
        className="about-us-hero"
        style={{ backgroundImage: `url(${AboutUs_background})` }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">About us</h1>
        </div>
      </div>

      {/* About Us Section */}
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
  );
};

export default AboutUs;
