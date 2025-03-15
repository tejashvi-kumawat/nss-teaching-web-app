import React, { useState } from 'react';
import './ForStudents.css';
import '../../components/AnnouncementItem/AnnouncementItem.css';
import AnnouncementItem from '../../components/AnnouncementItem/AnnouncementItem';
import PreviousYearPapersWrapper from '../../components/PreviousYearPapers/PreviousYearPapersWrapper';
import ResultsWrapper from '../../components/Results/ResultsWrapper';
import { Link } from 'react-router-dom';

const ForStudents = () => {
    const [activeTab, setActiveTab] = useState('updates');

    const announcements = [
        {
            id: 1,
            date: "24-01-2025",
            title: "Urgent Announcement: There is a test on so be prepared!!",
            announcementDetails: [`Attention everyone! 💤 There is an important test coming up, so make sure you are fully prepared. 💤
                        Revise your notes, go through key topics, and practice questions to boost your confidence. 💤🐣 Time
                        management is crucial—start early and avoid last-minute stress. 💤 Stay focused, stay calm, and give it
                        your best shot! 💤 Success comes with preparation, so make every moment count!`]
        },
        {
            id: 2,
            date: "23-01-2025",
            title: "Urgent Announcement: There is a test on so be prepared!!",
            announcementDetails: [`Attention everyone! 💤 There is an important test coming up, so make sure you are fully prepared. 💤
                Revise your notes, go through key topics, and practice questions to boost your confidence. 💤🐣 Time
                management is crucial—start early and avoid last-minute stress. 💤 Stay focused, stay calm, and give it
                your best shot! 💤 Success comes with preparation, so make every moment count!`]
        },
        {
            id: 3,
            date: "22-01-2025",
            title: "Urgent Announcement: There is a test on so be prepared!!",
            announcementDetails: [`Attention everyone! 💤 There is an important test coming up, so make sure you are fully prepared. 💤
                Revise your notes, go through key topics, and practice questions to boost your confidence. 💤🐣 Time
                management is crucial—start early and avoid last-minute stress. 💤 Stay focused, stay calm, and give it
                your best shot! 💤 Success comes with preparation, so make every moment count!`]
        },
        {
            id: 4,
            date: "21-01-2025",
            title: "Urgent Announcement: There is a test on so be prepared!!",
            announcementDetails: [`Attention everyone! 💤 There is an important test coming up, so make sure you are fully prepared. 💤
                Revise your notes, go through key topics, and practice questions to boost your confidence. 💤🐣 Time
                management is crucial—start early and avoid last-minute stress. 💤 Stay focused, stay calm, and give it
                your best shot! 💤 Success comes with preparation, so make every moment count!`]
        },
        {
            id: 5,
            date: "21-01-2025",
            title: "Urgent Announcement: There is a test on so be prepared!!",
            announcementDetails: [`Attention everyone! 💤 There is an important test coming up, so make sure you are fully prepared. 💤
                Revise your notes, go through key topics, and practice questions to boost your confidence. 💤🐣 Time
                management is crucial—start early and avoid last-minute stress. 💤 Stay focused, stay calm, and give it
                your best shot! 💤 Success comes with preparation, so make every moment count!`]
        }
    ];

    // Previous Year Papers data organized as an array of categories
    const previousYearPapers = [
        {
            id: 1,
            sectionName: "Screening test papers",
            papers: [
                { no: 1, camp: 'Malethi', examDate: '29-01-2025', fileName: 'Screening_test_paper_year - 2025', downloadLink: '/testing_download_button_forstudents_results.jpg' },
                { no: 2, camp: 'Saikot', examDate: '29-01-2024', fileName: 'Screening_test_paper_year - 2024', downloadLink: '/testing_download_button_forstudents_results.jpg' },
                { no: 3, camp: 'Narayan Bhagar', examDate: '29-01-2023', fileName: 'Screening_test_paper_year - 2023', downloadLink: '/testing_download_button_forstudents_results.jpg' }
            ]
        },
        {
            id: 2,
            sectionName: "Surprise test papers",
            papers: [
                { no: 1, camp: 'Shimla', examDate: '15-02-2025', fileName: 'Surprise_test_paper_1 - 2025', downloadLink: '/testing_download_button_forstudents_results.jpg' },
                { no: 2, camp: 'Dehradun', examDate: '18-09-2024', fileName: 'Surprise_test_paper_3 - 2024', downloadLink: '/testing_download_button_forstudents_results.jpg' }
            ]
        },
        {
            id: 3,
            sectionName: "Weekly test papers",
            papers: [
                { no: 1, camp: 'Nainital', examDate: '08-03-2025', fileName: 'Weekly_test_paper_week1 - 2025', downloadLink: '/testing_download_button_forstudents_results.jpg' },
                { no: 2, camp: 'Dharamshala', examDate: '15-03-2025', fileName: 'Weekly_test_paper_week2 - 2025', downloadLink: '/testing_download_button_forstudents_results.jpg' },
                { no: 3, camp: 'Manali', examDate: '22-03-2025', fileName: 'Weekly_test_paper_week3 - 2025', downloadLink: '/testing_download_button_forstudents_results.jpg' }
            ]
        }
    ];

    // Results data organized as an array of categories (same structure as previousYearPapers)
    const resultSections = [
        {
            id: 1,
            sectionName: "Screening test results",
            results: [
                { no: 1, camp: 'Saikot', standard: '12', fileName: 'Test_result_12th_2025', downloadLink: '/testing_download_button_forstudents_results.jpg' },
                { no: 2, camp: 'Saikot', standard: '11', fileName: 'Test_result_11th_2025', downloadLink: '/testing_download_button_forstudents_results.jpg' },
                { no: 3, camp: 'Saikot', standard: '10', fileName: 'Test_result_10th_2025', downloadLink: '/testing_download_button_forstudents_results.jpg' }
            ]
        },
        {
            id: 2,
            sectionName: "Surprise test results",
            results: [
                { no: 1, camp: 'Shimla', standard: '12', fileName: 'Surprise_test_result_1_2025', downloadLink: '/testing_download_button_forstudents_results.jpg' },
                { no: 2, camp: 'Dehradun', standard: '11', fileName: 'Surprise_test_result_2_2025', downloadLink: '/testing_download_button_forstudents_results.jpg' }
            ]
        },
        {
            id: 3,
            sectionName: "Weekly test results",
            results: [
                { no: 1, camp: 'Nainital', standard: '12', fileName: 'Weekly_test_result_week1_2025', downloadLink: '/testing_download_button_forstudents_results.jpg' },
                { no: 2, camp: 'Dharamshala', standard: '11', fileName: 'Weekly_test_result_week2_2025', downloadLink: '/testing_download_button_forstudents_results.jpg' },
                { no: 3, camp: 'Manali', standard: '10', fileName: 'Weekly_test_result_week3_2025', downloadLink: '/testing_download_button_forstudents_results.jpg' }
            ]
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
            <div className="for-students-student-resources">

                <div className="for-students-title-container">
                    <h1 className="for-students-page-title">Important Resources for students</h1>
                    <p className="for-students-description">
                        This section provides all the essential academic materials for students.
                        Access Previous Year Question Papers (PYQs) to prepare effectively, view
                        marks lists to track your progress, and download other important materials
                        to support your studies. Check regularly for updates!
                    </p>
                </div>

                {/* Tabs Container */}
                <div className="for-students-tabs-container">
                    {/* Tabs */}
                    <div className="for-students-resource-tabs">
                        <div
                            className={`for-students-tab ${activeTab === 'updates' ? 'active' : ''}`}
                            onClick={() => setActiveTab('updates')}
                        >
                            All updates
                        </div>
                        <div
                            className={`for-students-tab ${activeTab === 'questions' ? 'active' : ''}`}
                            onClick={() => setActiveTab('questions')}
                        >
                            Previous year questions
                        </div>
                        <div
                            className={`for-students-tab ${activeTab === 'results' ? 'active' : ''}`}
                            onClick={() => setActiveTab('results')}
                        >
                            Results
                        </div>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'updates' && (
                        <div className="for-students-tab-content announcementItem-announcements-container">
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
                        <div className="for-students-tab-content">
                            <PreviousYearPapersWrapper paperSections={previousYearPapers} />
                        </div>
                    )}

                    {activeTab === 'results' && (
                        <div className="for-students-tab-content">
                            <ResultsWrapper resultSections={resultSections} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForStudents;