import React from 'react';
import './ContactComponent.css';
import locationicon from "../../assets/location-icon.svg";
import phoneicon from "../../assets/bxs-phone.svg";
import mailicon from "../../assets/bxl-gmail.svg";

const ContactComponent = ({ contactData }) => {
    // Function to generate Google Maps URL from address
    const getGoogleMapsUrl = (address) => {
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    };

    return (
        <div className="contact-component-container">
            <div className="contact-info-container">
                <h1>Contact us</h1>
                <p>Any question or remarks? Write us a message!</p>
                <div className='contact-info'>
                    <div className="contact-info-box">
                        <div className='contact-info-header'>
                            <span>
                                <img className="contact-info-image contact-info-location-icon" src={locationicon} alt="" />
                            </span>
                            <span>Address:</span>
                        </div>
                        <a
                            href={getGoogleMapsUrl(contactData.contactAddress)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            <div className='contact-info-content'>{contactData.contactAddress}</div>
                        </a>
                    </div>
                    <div className="contact-info-box">
                        <div className='contact-info-header'>
                            <span>
                                <img className="contact-info-image" src={phoneicon} alt="" />
                            </span>
                            <span>Phone:</span>
                        </div>
                        <a
                            href={`tel:${contactData.contactPhone.replace(/[^0-9+]/g, '')}`}
                            className="contact-link"
                        >
                            <div className='contact-info-content'>{contactData.contactPhone}</div>
                        </a>
                    </div>
                    <div className="contact-info-box">
                        <div className='contact-info-header'>
                            <span>
                                <img className="contact-info-image" src={mailicon} alt="" />
                            </span>
                            <span>Email:</span>
                        </div>
                        <a
                            href={`mailto:${contactData.contactMail}`}
                            className="contact-link"
                        >
                            <div className='contact-info-content'>{contactData.contactMail}</div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact-form">
                <div className="name-group">
                    <span>
                        <label htmlFor="contact-firstName">First Name</label>
                        <input type="text" placeholder="" name='contact-firstName' id='contact-firstName' />
                    </span>
                    <span>
                        <label htmlFor="contact-lastName">Last Name</label>
                        <input type="text" placeholder="" name='contact-lastName' id='contact-lastName' />
                    </span>
                </div>

                <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input type="email" placeholder="" id='contact-email' name='contact-email' />
                </div>

                <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea placeholder="" id='contact-message' name='contact-message'></textarea>
                </div>

                <button type="submit" className="send-btn">Send Message</button>
            </div>
        </div>
    );
};

export default ContactComponent;