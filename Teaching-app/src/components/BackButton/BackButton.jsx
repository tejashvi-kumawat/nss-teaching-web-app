import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css';
import circleArrow from '../../assets/arrow-with-filled-circle.svg';
import circleArrowColor from '../../assets/arrow-with-filled-circle-colored.svg';

const BackButton = ({ to, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        window.scrollTo(0, 0);
    };

    return (
        <Link
            to={to || '/'}
            className="back-button"
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`back-icon ${isHovered ? 'rotated' : ''}`}>
                <img
                    src={isHovered ? circleArrowColor : circleArrow}
                    alt="Back"
                />
            </div>
            <span>Back</span>
        </Link>
    );
};

export default BackButton;