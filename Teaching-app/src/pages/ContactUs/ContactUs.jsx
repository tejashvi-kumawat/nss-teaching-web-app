import React from 'react';
import './ContactUs.css';
import contactInfoImage from '../../assets/ContactUs_info.png';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-info">
      <div className="breadcrumb">
        <a href="/">Home</a>
        <span className="separator">›</span>
        <span>Contact us</span>
        </div>
        <h1>Contact us</h1>
        <p>Any question or remarks? Write us a message!</p>

        {/* Display the image */}
        <img src={contactInfoImage} alt="Contact Info" className="contact-image" />
      </div>

      <div className="contact-form">
        <div className="name-group">
          <div>
            <label>First name</label>
            <input type="text" placeholder="" />
          </div>
          <div>
            <label>Last name</label>
            <input type="text" placeholder="" />
          </div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea placeholder=""></textarea>
        </div>

        <button type="submit" className="send-btn">Send Message</button>
      </div>
    </div>
  );
};

export default ContactUs;
