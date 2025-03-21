// components/Home_Programs/Home_Programs.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './Home_Programs.css';

// Asset imports
import nextOnButtonRightActive from '../../assets/Next-On-Button-right-active.svg';
import nextOnButtonRight from '../../assets/Next-On-Button-right.svg';
import IntensiveCoachingCamps2 from "../../assets/IntensiveCoachingCamps2.jpeg";
import arrowicon from '../../assets/bx-right-arrow-alt.svg';

// Sample program data
const programs = [
    { id: 1, title: "Intensive coaching camps", image: IntensiveCoachingCamps2, link: "/programs/intensive-coaching" },
    { id: 2, title: "Weekly and surprise tests", image: IntensiveCoachingCamps2, link: "/programs/weekly-tests" },
    { id: 3, title: "Mentorship Program", image: IntensiveCoachingCamps2, link: "/programs/mentorship" },
];

const Home_Programs = () => {
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
    );
};

export default Home_Programs;