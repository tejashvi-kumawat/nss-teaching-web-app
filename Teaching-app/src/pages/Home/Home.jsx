import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';

// Component imports
import ContributionBanner from "../../components/ContributionBanner/ContributionBanner";
import ContactComponent from "../../components/ContactComponent/ContactComponent";
import AnnouncementItem from "../../components/AnnouncementItem/AnnouncementItem.jsx";
import Quote from "../../components/Quote/Quote.jsx";
import BackButton from "../../components/BackButton/BackButton.jsx";
import Testimonials from "../../components/Testimonials/Testimonials";
import { TrusteesHome } from "../../pages/Trustees/Trustees.jsx";

// Asset imports
import greaterthaniconwhite from '../../assets/greaterthan-icon-white.svg';
import greaterthanicon from '../../assets/greaterthan-icon.svg';
import nextOnButtonRightActive from '../../assets/Next-On-Button-right-active.svg';
import nextOnButtonRight from '../../assets/Next-On-Button-right.svg';
import heroimg1 from '../../assets/home-hero-section-img1.svg';
import heroimg2 from '../../assets/home-hero-section-img2.svg';
import heroimg3 from '../../assets/home-hero-section-img3.svg';
import homeaboutimg from "../../assets/AboutUs_OurVision.png";
import IntensiveCoachingCamps2 from "../../assets/IntensiveCoachingCamps2.jpeg";
import arrowicon from '../../assets/bx-right-arrow-alt.svg';

// Sample program data
const programs = [
  { id: 1, title: "Intensive coaching camps", image: IntensiveCoachingCamps2, link: "/programs/intensive-coaching" },
  { id: 2, title: "Weekly and surprise tests", image: IntensiveCoachingCamps2, link: "/programs/weekly-tests" },
  { id: 3, title: "Mentorship Program", image: IntensiveCoachingCamps2, link: "/programs/mentorship" },
];

// Contact information
const contactData = {
  contactAddress: "F2, 842, Green Street, Sector 5, Vaishali, Ghaziabad, UP- 201010",
  contactPhone: "+91 888-214-8359",
  contactMail: "hvdt.uk@gmail.com"
};

// Sample announcement data (unchanged)
const announcements = [
  {
    id: 1,
    date: "24-01-2025",
    title: "Urgent Announcement: There is a test on so be prepared!!",
    announcementDetails: [
      `Attention everyone! 💤 There is an important test coming up, so make sure you are fully prepared. 💤
      Revise your notes, go through key topics, and practice questions to boost your confidence. 💤🐣 Time
      management is crucial—start early and avoid last-minute stress. 💤 Stay focused, stay calm, and give it
      your best shot! 💤 Success comes with preparation, so make every moment count!`
    ]
  },
  {
    id: 2,
    date: "23-01-2025",
    title: "Urgent Announcement: There is a test on so be prepared!!",
    announcementDetails: [
      `Attention everyone! 💤 There is an important test coming up, so make sure you are fully prepared. 💤
      Revise your notes, go through key topics, and practice questions to boost your confidence. 💤🐣 Time
      management is crucial—start early and avoid last-minute stress. 💤 Stay focused, stay calm, and give it
      your best shot! 💤 Success comes with preparation, so make every moment count!`
    ]
  },
  {
    id: 3,
    date: "22-01-2025",
    title: "Urgent Announcement: There is a test on so be prepared!!",
    announcementDetails: [
      `Attention everyone! 💤 There is an important test coming up, so make sure you are fully prepared. 💤
      Revise your notes, go through key topics, and practice questions to boost your confidence. 💤🐣 Time
      management is crucial—start early and avoid last-minute stress. 💤 Stay focused, stay calm, and give it
      your best shot! 💤 Success comes with preparation, so make every moment count!`
    ]
  },
  {
    id: 4,
    date: "21-01-2025",
    title: "Urgent Announcement: There is a test on so be prepared!!",
    announcementDetails: [
      `Attention everyone! 💤 There is an important test coming up, so make sure you are fully prepared. 💤
      Revise your notes, go through key topics, and practice questions to boost your confidence. 💤🐣 Time
      management is crucial—start early and avoid last-minute stress. 💤 Stay focused, stay calm, and give it
      your best shot! 💤 Success comes with preparation, so make every moment count!`
    ]
  },
  {
    id: 5,
    date: "21-01-2025",
    title: "Urgent Announcement: There is a test on so be prepared!!",
    announcementDetails: [
      `Attention everyone! 💤 There is an important test coming up, so make sure you are fully prepared. 💤
      Revise your notes, go through key topics, and practice questions to boost your confidence. 💤🐣 Time
      management is crucial—start early and avoid last-minute stress. 💤 Stay focused, stay calm, and give it
      your best shot! 💤 Success comes with preparation, so make every moment count!`
    ]
  }
];

const Home = () => {
  const navigate = useNavigate();

  // Navigation handler for program cards
  const handleClick = (link) => {
    navigate(link, { state: { programs } });
  };

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);

  // Cards per view based on screen size
  const getCardsPerView = () => window.innerWidth <= 768 ? 1 : 2;
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  // Update cardsPerView on resize
  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate max index
  const maxIndex = Math.max(0, Math.ceil(programs.length / cardsPerView) * cardsPerView);

  // Navigation handlers
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + cardsPerView >= maxIndex ? 0 : prev + cardsPerView));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex - 2 : prev - cardsPerView));
  };

  // Ref and slide width state
  const gridRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Calculate slide width
  useEffect(() => {
    const calculateSlideWidth = () => {
      if (gridRef.current) {
        const grid = gridRef.current;
        const firstCard = grid.children[0];
        if (firstCard) {
          const cardWidth = firstCard.offsetWidth;
          const gap = 20; // Matches CSS gap: 20px
          setSlideWidth((cardWidth * cardsPerView) + (gap * (cardsPerView - 1)));
        }
      }
    };

    calculateSlideWidth();
    window.addEventListener('resize', calculateSlideWidth);
    return () => window.removeEventListener('resize', calculateSlideWidth);
  }, [cardsPerView]);

  // Render all programs
  const getVisiblePrograms = () => programs;

  return (
    <>
      <div className="home-container">
        {/* Hero Section */}
        <div className="home-hero-section-container">
          <div className="home-hero-section-content">
            <span>
              <h1>
                Empowering young minds in the hills of{" "}
                <span className="home-hero-section-uk">Uttarakhand</span>
              </h1>
            </span>
            <span>
              <p className="home-hero-description">
                Welcome to Himalayan Vidya Daan Trust, where education transforms lives.
                Our mission is to uplift students in rural and border areas of Uttarakhand
                by providing access to free, quality education.
              </p>
            </span>
            <Link
              to="/get-involved"
              className="home-join-cause-button"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span>Join our cause</span>
              <span className="contribution-banner-arrow-icon">
                <img src={greaterthaniconwhite} alt="arrow icon" />
              </span>
            </Link>
          </div>
          <div className="home-hero-section-images">
            <img className="home-hero-img1" src={heroimg1} alt="Students in classroom" />
            <div className="home-hero-img-row">
              <img className="home-hero-img2" src={heroimg2} alt="Group of students" />
              <img className="home-hero-img3" src={heroimg3} alt="Students learning" />
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <Quote />

        {/* Announcements Section */}
        <div className="home-announcement-container">
          <div className="home-announcements-section">
            <h2>Latest Announcements</h2>
            <div className="view-all-link">
              <BackButton to='/for-students' onClick={true} title='View All' />
            </div>
          </div>
          <div className="home-announcement-content announcementItem-announcements-container">
            {announcements.map((announcement, index) => (
              <AnnouncementItem
                key={announcement.id}
                date={announcement.date}
                title={announcement.title}
                showDivider={index > 0}
                announcement={announcement}
                comingFrom='/'
              />
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="home-about-section">
          <div className="home-about-content">
            <span><h2>About Us</h2></span>
            <span className="home-about-text">
              <p>
                The Himalayan Vidya Daan Trust was established with the mission to provide a platform
                for serious science stream students of rural Uttarakhand to prepare for JEE, NEET and
                other competitive programs. We aim to bridge the gap between opportunity and talent
                by empowering students with access to quality education, mentoring and resources to
                study for competitions.
              </p>
            </span>
            <span>
              <Link
                to="/about-us"
                className='contribution-banner-container-button home-about-learn-more'
                onClick={() => window.scrollTo(0, 0)}
              >
                <span>Learn More</span>
                <span className='contribution-banner-arrow-icon'>
                  <img src={greaterthanicon} alt="arrow icon" />
                </span>
              </Link>
            </span>
          </div>
          <span className="about-image">
            <img className='home-about-img' src={homeaboutimg} alt="students studying" />
          </span>
        </div>

        {/* Uttarakhand Teaching Project Section */}
        <div className="home-about-section">
          <div className="home-about-content">
            <span><h2>Uttarakhand Teaching Project</h2></span>
            <span className="home-about-text">
              <p>
                The Uttarakhand Teaching Project is an educational initiative launched in 2017 by J.P. Dabral
                in collaboration with NSS IIT Delhi. The project aims to provide free and quality education
                to students from rural and underprivileged areas of Uttarakhand.
                Every year, a team of dedicated IIT Delhi students and volunteers travel to remote regions
                of Uttarakhand during the summer to teach, mentor, and guide students preparing for their
                school exams and competitive entrance tests like JEE, NEET, and other career paths.
                Through this initiative, we bridge the educational gap by providing structured learning,
                counseling, and mentorship to students who lack access to quality education.
              </p>
            </span>
          </div>
          <span className="about-image">
            <img className='home-about-img' src={IntensiveCoachingCamps2} alt="intensive-coaching-camps" />
          </span>
        </div>

        {/* Programs Section */}
        <div className="programs-section">
          <h2>Programs</h2>
          <div className="programs-carousel">
            <div
              className="programs-grid"
              ref={gridRef}
              style={{
                transform: `translateX(-${(currentIndex) / 2 * slideWidth}px)`
              }}
            >
              {getVisiblePrograms().map((program) => (
                <div
                  key={program.id}
                  className="program-card"
                  onClick={() => handleClick(program.link)}
                  style={{
                    flex: `0 0 calc(${100 / programs.length}% - 20px)`
                  }}
                >
                  <div className="program-image">
                    <img src={program.image} alt={program.title} />
                  </div>
                  <div className="program-content">
                    <h3>{program.title}</h3>
                    <span className="announcementItem-arrow-icon">
                      <img
                        className='announcementItem-announcement-arrow-icon home-programs-arrow'
                        src={arrowicon}
                        alt="arrow icon"
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="programs-navigation">
            <button
              className="programs-nav-button programs-prev-nav"
              onClick={handlePrev}
              onMouseEnter={() => setIsPrevHovered(true)}
              onMouseLeave={() => setIsPrevHovered(false)}
              disabled={programs.length <= cardsPerView}
            >
              <img
                src={isPrevHovered ? nextOnButtonRightActive : nextOnButtonRight}
                alt="Previous"
              />
            </button>
            <button
              className="programs-nav-button programs-next-nav"
              onClick={handleNext}
              onMouseEnter={() => setIsNextHovered(true)}
              onMouseLeave={() => setIsNextHovered(false)}
              disabled={programs.length <= cardsPerView}
            >
              <img
                src={isNextHovered ? nextOnButtonRightActive : nextOnButtonRight}
                alt="Next"
              />
            </button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="home-contact-us-conatiner">
          <ContactComponent contactData={contactData} />
        </div>

        <TrusteesHome />

        {/* Testimonials Section */}
        <Testimonials />
      </div>

      {/* Contribution Banner */}
      <div className="contribution-on-home">
        <ContributionBanner />
      </div>
    </>
  );
};

export default Home;