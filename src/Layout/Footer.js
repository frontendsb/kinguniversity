import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../images/footer-logo.png";

function Footer() {
  return (
    <>
      <footer id="footer-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="first-clmn">
                <Link to="/" className="footer-logo">
                  <img className="img-fluid" src={FooterLogo} alt="logo" />
                </Link>
                <div className="footer-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum tempus, massa quis consequat ultricies, mi velit
                    maximus quam, eu gravida dolor felis quis mauris.Donec
                    facilisis faucibus massa vitae laoreet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="second-clmn">
                <h3>Our Links</h3>
                <span className="line"></span>
                <ul>
                  <li>
                    <Link to="/" className="our_link">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="our_link">About Us</Link>
                  </li>
                  <li>
                    <Link to="/courses" className="our_link">Course</Link>
                  </li>
                  <li>
                    <Link to="/blog" className="our_link">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="our_link">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/" className="our_link">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link to="/" className="our_link">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="second-clmn">
                <h3>Our Campus</h3>
                <span className="line"></span>
                <ul className="campus">
                  <li>
                    <Link to="/" className="our_link">Acedemic</Link>
                  </li>
                  <li>
                    <Link to="/" className="our_link">Planning & Administration</Link>
                  </li>
                  <li>
                    <Link to="/" className="our_link">Campus Safety</Link>
                  </li>
                  <li>
                    <Link to="/" className="our_link">Office of the Chancellor</Link>
                  </li>
                  <li>
                    <Link to="/" className="our_link">Facility Services</Link>
                  </li>
                  <li>
                    <Link to="/" className="our_link">Human Resources</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="third-clmn">
                <h3>Contact Us</h3>
                <span className="line"></span>
                <Link to="tel:+1 212 946 2707" className="cnt_us">
                <i className="fa-solid fa-phone"></i>+1 212 946 2707
                </Link>
                <br></br>
                <Link to="mailto:abc@example.com" className="cnt_us">
                  <i className="fa-solid fa-envelope"></i>abc@example.com
                </Link>
                <div className="social-links">
                  <a href="#" className="ft_icon">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className="ft_icon">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="ft_icon">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="ft_icon">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy_right">
          <p>Copyright All Right Reserved 2023</p>
        </div>
    </>
  );
}

export default Footer;
