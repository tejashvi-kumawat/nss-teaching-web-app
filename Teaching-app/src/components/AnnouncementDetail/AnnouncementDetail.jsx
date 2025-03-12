import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const AnnouncementDetail = () => {
    const { state } = useLocation();
    const { id } = useParams();
    const announcement = state?.announcement;

    return (
        <div>
            <h1>{announcement?.title}</h1>
            <p>{announcement?.date}</p>
            <div>{announcement?.content}</div>
        </div>
    );
};

export default AnnouncementDetail; 