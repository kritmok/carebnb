import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/sign-in">How Carebnb works </Link>
            <Link to="/sign-in">Newsroom</Link>
            <Link to="/sign-in">Careers</Link>
            <Link to="/sign-in">Investors</Link>
            <Link to="/sign-in">Terms of Services</Link>
          </div>
          <div className="footer-link-items">
            <h2>Community</h2>
            <Link to="/sign-in">Testimonials</Link>
            <Link to="/sign-in">Accessibility</Link>
            <Link to="/sign-in">Education</Link>
            <Link to="/sign-in">Gift cards</Link>
            <Link to="/sign-in">Diversity & Belonging </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Host</h2>
            <Link to="/sign-in">Host your home </Link>
            <Link to="/sign-in">Responsibile hosting</Link>
            <Link to="/sign-in">Resource Center</Link>
            <Link to="/sign-in">Contribute</Link>
            <Link to="/sign-in">Damage report</Link>
          </div>
          <div className="footer-link-items">
            <h2>Sinport</h2>
            <Link to="/sign-in">Help Center </Link>
            <Link to="/sign-in">Cancel options</Link>
            <Link to="/sign-in">Neighborhood Sinport</Link>
            <Link to="/sign-in">Investors</Link>
            <Link to="/sign-in">Trust and Safety</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <p className="copyright">© Carebnb 2021</p>
          </div>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/sign-in"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link facebook"
              to="/sign-in"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link facebook"
              to="/sign-in"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link
              className="social-icon-link facebook"
              to="/sign-in"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
