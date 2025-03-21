// Testimonials.jsx
import React from 'react';
import '../Testimonials/Testimonials.css';
import '../Home_Announcements/Home_Announcements.css';
import './Home_Testimonials.css';
import CarouselTray from '../CarouselTray/CarouselTray';
import { TeachingTestimonials } from '../../pages/Teaching/TeachingData.jsx';
import BackButton from '../BackButton/BackButton.jsx';

const Testimonials = () => {
    const renderTestimonialCard = (testimonial) => (
        <div className="HomeTeachingTestimonialsBox">
            {testimonial.image}
            <div className="HomeTeachingTestimonialsDescription">
                <p>{testimonial.description}</p>
            </div>
            <div className="HomeTeachingTestimonialsName">
                {testimonial.name}
            </div>
        </div>
    );

    return (
        <div className="HomeTeachingTestimonials">
            <div className="home-announcements-section">
                <h2 className="HomeTeachingHeadings" id="Testimonials">Testimonials</h2>
                <div className="view-all-link">
                    <BackButton to='/teaching' onClick={true} title='View All' />
                </div>
            </div>
            <p className="HomeTeachingDescription">
                How education transform lives in Uttarakhand
            </p>
            <CarouselTray
                items={TeachingTestimonials}
                renderCard={renderTestimonialCard}
                cardsPerViewConfig={{ desktop: 3, mobile: 1 }}
            />
        </div>
    );
};

export default Testimonials;