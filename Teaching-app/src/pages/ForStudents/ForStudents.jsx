import React, { useState } from 'react';
import './ForStudents.css';
import '../../components/AnnouncementItem/AnnouncementItem.css';
import AnnouncementItem from '../../components/AnnouncementItem/AnnouncementItem';
import PreviousYearPapers from '../../components/PreviousYearPapers/PreviousYearPapers';
import Results from '../../components/Results/results';
import { Link } from 'react-router-dom';
// import filterSVG from '../../assets/'

const ForStudents = () => {
    const [activeTab, setActiveTab] = useState('updates');

    // Updated announcements data to match the screenshot
    const announcements = [
        {
            id: 1,
            date: "24-01-2025",
            title: "Urgent Announcement: There is a test on so be prepared!!"
        },
        {
            id: 2,
            date: "23-01-2025",
            title: "Urgent Announcement: There is a test on so be prepared!!"
        },
        {
            id: 3,
            date: "22-01-2025",
            title: "Urgent Announcement: There is a test on so be prepared!!"
        },
        {
            id: 4,
            date: "21-01-2025",
            title: "Urgent Announcement: There is a test on so be prepared!!"
        },
        {
            id: 5,
            date: "21-01-2025",
            title: "Urgent Announcement: There is a test on so be prepared!!"
        }
    ];

    return (
        <div className="for-students-container">
            {/* Breadcrumb Navigation */}
            <div className="breadcrumb">
                <Link to="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-separator">&gt;</span>
                <span className="breadcrumb-current">For students</span>
            </div>

            {/* Main Content */}
            <div className="student-resources">
                <div className="title-container">
                    <h1 className="page-title">Important Resources for students</h1>
                    <p className="description">
                        This section provides all the essential academic materials for students.
                        Access Previous Year Question Papers (PYQs) to prepare effectively, view
                        marks lists to track your progress, and download other important materials
                        to support your studies. Check regularly for updates!
                    </p>
                </div>

                {/* Tabs Container */}
                <div className="tabs-container">
                    {/* Tabs */}
                    <div className="resource-tabs">
                        <div
                            className={`tab ${activeTab === 'updates' ? 'active' : ''}`}
                            onClick={() => setActiveTab('updates')}
                        >
                            Latest updates
                        </div>
                        <div
                            className={`tab ${activeTab === 'questions' ? 'active' : ''}`}
                            onClick={() => setActiveTab('questions')}
                        >
                            Previous year questions
                        </div>
                        <div
                            className={`tab ${activeTab === 'results' ? 'active' : ''}`}
                            onClick={() => setActiveTab('results')}
                        >
                            Results
                        </div>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'updates' && (
                        <div className="tab-content announcements-container">
                            {announcements.map((announcement, index) => (
                                <AnnouncementItem
                                    key={announcement.id}
                                    date={announcement.date}
                                    title={announcement.title}
                                    showDivider={index > 0}
                                    announcement={announcement}
                                />
                            ))}
                        </div>
                    )}

                    {activeTab === 'questions' && (
                        <div className="tab-content">
                            <PreviousYearPapers />
                        </div>
                    )}

                    {activeTab === 'results' && (
                        <div className="tab-content">
                            <Results />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForStudents;