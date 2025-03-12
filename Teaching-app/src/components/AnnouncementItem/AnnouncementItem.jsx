import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AnnouncementItem.css';

const AnnouncementItem = ({ date, title, showDivider, announcement }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/announcement/${announcement.id}`, { state: { announcement } });
    };

    return (
        <>
            {showDivider && <div className="announcement-divider"></div>}
            <div className="announcement-item" onClick={handleClick}>
                <div className="announcement-header">
                    <div className="announcement-date">
                        <span className="calendar-icon">📅</span> {date}
                    </div>
                    <span className="arrow-icon">→</span>
                </div>
                <div className="announcement-title">{title}</div>
            </div>
        </>
    );
};

export default AnnouncementItem;