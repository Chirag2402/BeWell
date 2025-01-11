import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <div className="contact-item">
          <i className="fa fa-phone"></i>
          <span>
            Phone: <a href="tel:01245408003">01245408003</a>
          </span>
        </div>
        <div className="contact-item">
          <i className="fa fa-envelope"></i>
          <span>
            Email: <a href="mailto:info@endeara.com">info@endeara.com</a>
          </span>
        </div>
        <div className="contact-item">
        <i className="fas fa-address-card"></i>
          <span>Address <a href="Address">: 7, 9 Broomfield Rd, Chelmsford CM1 1SY, United Kingdom </a></span>
          
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.755088389984!2d0.4630209766850556!3d51.737514771866685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8ebeef14ee47d%3A0xf67316021b413f24!2sBeWell!5e0!3m2!1sen!2sin!4v1736508547717!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
