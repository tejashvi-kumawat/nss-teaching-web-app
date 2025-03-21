import React from 'react';
import './Testimonials.css';
import { TeachingTestimonials } from '../../pages/Teaching/TeachingData.jsx';

const Testimonials = () => {
    return (
        <div className="TeachingTestimonials">
            <h2 className="TeachingHeadings" id="Testimonials">Testimonials</h2>
            <p className="TeachingDescription">
                How education transform lives in Uttarakhand
            </p>
            <div className="TeachingTestimonialsGrid">
                {TeachingTestimonials.map((TestimonialObject, index2) => (
                    <div className="TeachingTestimonialsBox" key={index2}>
                        {TestimonialObject.image}
                        {TestimonialObject.description}
                        {TestimonialObject.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;