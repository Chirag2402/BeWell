import React from 'react';
import './Footer.css';
import mastercard from '/mastercard.png';
import visa from '/visa.png';
import paypal from '/paypal.png';
import Logo from '/Logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
        <img className='w-auto h-40 ' src= {Logo} alt="" />
       </div>
        {/* Section: Contact */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>  Phone : <a href="tel:01245408003">01245408003</a></p>
          <p> Email : <a href="mailto:support@edeara.com">xyz@gmail.com</a></p>
          <p> Address :<a href="Address"> 7, 9 Broomfield Rd, Chelmsford CM1 1SY, United Kingdom </a></p>
        </div>

        {/* Section: Payment Methods */}
        <div className="footer-section payments">
          <h4>We Accept</h4>
          <div className="payment-icons">
            <img src={visa} alt="Visa" />
            <img src={mastercard} alt="MasterCard" />
            <img src={paypal} alt="PayPal" />
          </div>
        </div>

        {/* Section: Quick Links */}
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/Contact">Location</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 BeWell. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
