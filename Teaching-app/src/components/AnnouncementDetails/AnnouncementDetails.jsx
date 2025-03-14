import React from 'react';
import { useLocation } from 'react-router-dom';
import calendarlogo from '../../assets/bx-calendar.svg'
import './AnnouncementDetails.css';
import { Link } from 'react-router-dom';

const AnnouncementDetails = () => {
    const location = useLocation();
    const announcement = location.state?.announcement;

    if (!announcement) {
        return <div>No announcement data found.</div>;
    }

    return (
        <div className="announcement-details-container">

            {/* Announcement Content */}
            <div className="announcement-details-announcement-content">
                {/* Breadcrumb Navigation */}
                <div className="breadcrumb">
                    <Link to="/" className="breadcrumb-link">Home</Link>
                    <span className="breadcrumb-separator">&gt;</span>
                    <Link to="/for-students" className="breadcrumb-link">For students</Link>
                    <span className="breadcrumb-separator">&gt;</span>
                    <span className="breadcrumb-current">Announcement Details</span>
                </div>
                <div className="announcement-details-announcement-date">
                    <span>
                        <img className='announcement-details-calendar-icon' src={calendarlogo} alt="Calendar Logo" />
                    </span>
                    <span>
                        {announcement.date}
                    </span>
                </div>
                <h1 className="announcement-details-announcement-title">{announcement.title}</h1>
                <div className="announcement-details-announcement-message">
                    <p>
                        {announcement.announcementDetails}
                    </p>
                </div>
                <div className="announcement-details-important-info">
                    <h2>Important information:</h2>
                    <p>Venue: LHC, IIT Delhi</p>
                    <p>Time: 8:00 AM - 10:00 AM</p>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementDetails;