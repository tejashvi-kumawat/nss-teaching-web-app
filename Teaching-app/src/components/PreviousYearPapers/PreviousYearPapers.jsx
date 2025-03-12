import React, { useState } from 'react';
import './PreviousYearPapers.css';
import { BiDownload } from 'react-icons/bi';
import { FaFilePdf } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const PreviousYearPapers = () => {
    // Initialize with screening section expanded to match screenshot
    const [expandedSections, setExpandedSections] = useState({
        screening: true,
        surprise: false,
        weekly: false
    });

    const toggleSection = (section) => {
        setExpandedSections({
            ...expandedSections,
            [section]: !expandedSections[section]
        });
    };

    const screeningPapers = [
        { no: 1, camp: 'Malethi', examDate: '29-01-2025', fileName: 'Screening_test_paper_year - 2025' },
        { no: 2, camp: 'Saikot', examDate: '29-01-2024', fileName: 'Screening_test_paper_year - 2024' },
        { no: 3, camp: 'Narayan Bhagar', examDate: '29-01-2023', fileName: 'Screening_test_paper_year - 2023' }
    ];

    const surprisePapers = [
        { no: 1, camp: 'Shimla', examDate: '15-02-2025', fileName: 'Surprise_test_paper_1 - 2025' },
        { no: 2, camp: 'Dehradun', examDate: '18-09-2024', fileName: 'Surprise_test_paper_3 - 2024' }
    ];

    const weeklyPapers = [
        { no: 1, camp: 'Nainital', examDate: '08-03-2025', fileName: 'Weekly_test_paper_week1 - 2025' },
        { no: 2, camp: 'Dharamshala', examDate: '15-03-2025', fileName: 'Weekly_test_paper_week2 - 2025' },
        { no: 3, camp: 'Manali', examDate: '22-03-2025', fileName: 'Weekly_test_paper_week3 - 2025' }
    ];

    const renderTable = (papers) => (
        <table className="papers-table">
            <thead>
                <tr>
                    <th className="sortable-header">No</th>
                    <th className="sortable-header">Camp</th>
                    <th className="sortable-header">Exam date</th>
                    <th>File name</th>
                    <th className="download-header">Download</th>
                </tr>
            </thead>
            <tbody>
                {papers.map((paper) => (
                    <tr key={`${paper.fileName}-${paper.no}`}>
                        <td>{paper.no}</td>
                        <td>{paper.camp}</td>
                        <td>{paper.examDate}</td>
                        <td>
                            <div className="file-name">
                                <FaFilePdf className="pdf-icon" />
                                <span>{paper.fileName}</span>
                            </div>
                        </td>
                        <td className="download-cell">
                            <BiDownload className="download-icon" />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="papers-container">
            {/* Screening Test Papers */}
            <div className="paper-section">
                <div
                    className="section-header"
                    onClick={() => toggleSection('screening')}
                >
                    <h3>Screening test papers</h3>
                    {expandedSections.screening ?
                        <IoIosArrowUp className="toggle-icon minus" /> :
                        <IoIosArrowDown className="toggle-icon plus" />
                    }
                </div>
                <div className="section-divider"></div>
                {expandedSections.screening && (
                    <div className="section-content">
                        {renderTable(screeningPapers)}
                    </div>
                )}
            </div>

            {/* Surprise Test Papers */}
            <div className="paper-section">
                <div
                    className="section-header"
                    onClick={() => toggleSection('surprise')}
                >
                    <h3>Surprise test papers</h3>
                    {expandedSections.surprise ?
                        <IoIosArrowUp className="toggle-icon minus" /> :
                        <IoIosArrowDown className="toggle-icon plus" />
                    }
                </div>
                <div className="section-divider"></div>
                {expandedSections.surprise && (
                    <div className="section-content">
                        {renderTable(surprisePapers)}
                    </div>
                )}
            </div>

            {/* Weekly Test Papers */}
            <div className="paper-section">
                <div
                    className="section-header"
                    onClick={() => toggleSection('weekly')}
                >
                    <h3>Weekly test papers</h3>
                    {expandedSections.weekly ?
                        <IoIosArrowUp className="toggle-icon minus" /> :
                        <IoIosArrowDown className="toggle-icon plus" />
                    }
                </div>
                <div className="section-divider"></div>
                {expandedSections.weekly && (
                    <div className="section-content">
                        {renderTable(weeklyPapers)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreviousYearPapers;