import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BiDownload } from 'react-icons/bi';
import { FaFileExcel } from 'react-icons/fa';
import '../PreviousYearPapers/PreviousYearPapers.css'

const Results = () => {
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

    const screeningResults = [
        { no: 1, camp: 'Saikot', standard: '12', fileName: 'Test_result_12th_2025' },
        { no: 2, camp: 'Saikot', standard: '11', fileName: 'Test_result_11th_2025' },
        { no: 3, camp: 'Saikot', standard: '10', fileName: 'Test_result_10th_2025' }
    ];

    const surpriseResults = [
        { no: 1, camp: 'Shimla', standard: '12', fileName: 'Surprise_test_result_1_2025' },
        { no: 2, camp: 'Dehradun', standard: '11', fileName: 'Surprise_test_result_2_2025' }
    ];

    const weeklyResults = [
        { no: 1, camp: 'Nainital', standard: '12', fileName: 'Weekly_test_result_week1_2025' },
        { no: 2, camp: 'Dharamshala', standard: '11', fileName: 'Weekly_test_result_week2_2025' },
        { no: 3, camp: 'Manali', standard: '10', fileName: 'Weekly_test_result_week3_2025' }
    ];

    const renderTable = (results) => (
        <table className="papers-table">
            <thead>
                <tr>
                    <th className="sortable-header">No</th>
                    <th className="sortable-header">Camp</th>
                    <th className="sortable-header">Standard</th>
                    <th>File name</th>
                    <th className="download-header">Download</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => (
                    <tr key={`${result.fileName}-${result.no}`}>
                        <td>{result.no}</td>
                        <td>{result.camp}</td>
                        <td>{result.standard}</td>
                        <td>
                            <div className="file-name">
                                <FaFileExcel className="pdf-icon" style={{ color: '#1D6F42' }} />
                                <span>{result.fileName}</span>
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
            {/* Screening Test Results */}
            <div className="paper-section">
                <div
                    className="section-header"
                    onClick={() => toggleSection('screening')}
                >
                    <h3>Screening test results</h3>
                    {expandedSections.screening ?
                        <IoIosArrowUp className="toggle-icon minus" /> :
                        <IoIosArrowDown className="toggle-icon plus" />
                    }
                </div>
                <div className="section-divider"></div>
                {expandedSections.screening && (
                    <div className="section-content">
                        {renderTable(screeningResults)}
                    </div>
                )}
            </div>

            {/* Surprise Test Results */}
            <div className="paper-section">
                <div
                    className="section-header"
                    onClick={() => toggleSection('surprise')}
                >
                    <h3>Surprise test results</h3>
                    {expandedSections.surprise ?
                        <IoIosArrowUp className="toggle-icon minus" /> :
                        <IoIosArrowDown className="toggle-icon plus" />
                    }
                </div>
                <div className="section-divider"></div>
                {expandedSections.surprise && (
                    <div className="section-content">
                        {renderTable(surpriseResults)}
                    </div>
                )}
            </div>

            {/* Weekly Test Results */}
            <div className="paper-section">
                <div
                    className="section-header"
                    onClick={() => toggleSection('weekly')}
                >
                    <h3>Weekly test results</h3>
                    {expandedSections.weekly ?
                        <IoIosArrowUp className="toggle-icon minus" /> :
                        <IoIosArrowDown className="toggle-icon plus" />
                    }
                </div>
                <div className="section-divider"></div>
                {expandedSections.weekly && (
                    <div className="section-content">
                        {renderTable(weeklyResults)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Results;