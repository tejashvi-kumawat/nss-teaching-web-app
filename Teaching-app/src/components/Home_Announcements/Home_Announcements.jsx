// components/Home_Announcements/Home_Announcements.jsx
import React from "react";
import './Home_Announcements.css';
import AnnouncementItem from "../AnnouncementItem/AnnouncementItem.jsx";
import BackButton from "../BackButton/BackButton.jsx";

// Sample announcement data
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
        ],
        venue: 'LH 121, LHC, IIT Delhi',
        time: "8:00 AM - 10:00 AM",
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
        ],
        venue: 'LH 121, LHC, IIT Delhi',
        time: "8:00 AM - 10:00 AM",
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
        ],
        venue: 'LH 121, LHC, IIT Delhi',
        time: "8:00 AM - 10:00 AM",
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
        ],
        venue: 'LH 121, LHC, IIT Delhi',
        time: "8:00 AM - 10:00 AM",
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
        ],
        venue: 'LH 121, LHC, IIT Delhi',
        time: "8:00 AM - 10:00 AM",
    }
];

const Home_Announcements = () => {
    return (
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
    );
};

export default Home_Announcements;