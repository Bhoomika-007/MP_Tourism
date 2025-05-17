import React from 'react';
import './Contact.css'; // Import the CSS file for styling
// import Footer from '../../Footer/Footer';


const Contact = () => {
  return (
    <>
    <div className="ki">
    <section className="contact-section">
      <div className="container_Co">
        <div className="grid-container">
          {/* Left section with Video Background */}
          <div className="contact-info">
            <div className="contact-content">
              <h3 className="contact-heading">Contact Information</h3>
              <p className="contact-description">
                Fill up the form and We will help you with anything which you need.
              </p>
              <div className="contact-item">
                <span className="contact-icon"><i className="fas fa-phone"></i></span>
                <span className="contact-details">(+91) 91XXXXXXXX (MP_Tourism)</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><i className="fas fa-envelope"></i></span>
                <span className="contact-details" >xyz@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><i className="fas fa-map-marker-alt"></i></span>
                <span className="contact-details">
                  {/* Deatils of the college or other */}
                </span>
              </div>
            </div>
          </div>

          {/* Right section for Contact Form */}
          <div className="contact-form">
            <div className="forms">
            <iframe src="https://forms.visme.co/formsPlayer/019q3dz0-simple-subscription-sign-up-form" > </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default Contact;
