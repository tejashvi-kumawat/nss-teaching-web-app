import React from 'react';
import { useLocation } from 'react-router-dom';
import './AnnouncementDetails.css';

const AnnouncementDetails = () => {
    const location = useLocation();
    const announcement = location.state?.announcement;

    if (!announcement) {
        return <div>No announcement data found.</div>;
    }

    return (
        <div className="announcement-details-container">
            {/* Breadcrumb Navigation */}
            <div className="breadcrumb">
                <a href="/" className="breadcrumb-link">Home</a>
                <span className="breadcrumb-separator">&gt;</span>
                <a href="/for-students" className="breadcrumb-link">Latest updates</a>
                <span className="breadcrumb-separator">&gt;</span>
                <span className="breadcrumb-current">{announcement.title}</span>
            </div>

            {/* Announcement Content */}
            <div className="announcement-content">
                <h1 className="announcement-title">{announcement.title}</h1>
                <div className="announcement-date">
                    <span className="calendar-icon">📅</span> {announcement.date}
                </div>
                <div className="announcement-message">
                    <p>
                        Attention everyone! 💤 There is an important test coming up, so make sure you are fully prepared. 💤
                        Revise your notes, go through key topics, and practice questions to boost your confidence. 💤🐣 Time
                        management is crucial—start early and avoid last-minute stress. 💤 Stay focused, stay calm, and give it
                        your best shot! 💤 Success comes with preparation, so make every moment count!
                    </p>
                </div>
                <div className="important-info">
                    <h2>Important information:</h2>
                    <p>Venue: LHC, IIT Delhi</p>
                    <p>Time: 8:00 AM - 10:00 AM</p>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementDetails;
