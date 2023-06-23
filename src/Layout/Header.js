import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../images/logo.png'

function Header() {

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector(".mainheader");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return (
    <>
      <header id="header-section" className="mainheader is-sticky">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <img className='img-fluid' src={Logo} alt="logo"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to='/' className="nav-link line">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to='/about'
                  className="nav-link dropdown-toggle line"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <div className="dropdown-menu about_us" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Menu-1
                  </a>
                  <a className="dropdown-item" href="#">
                    Menu-2
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Menu-3
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link to='/courses'
                  className="nav-link dropdown-toggle line"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Course
                </Link>
                <div className="dropdown-menu course" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Menu-1
                  </a>
                  <a className="dropdown-item" href="#">
                    Menu-2
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Menu-3
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <Link to='/blog' className="nav-link line">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link line">
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* <div className="top-right">
              <button className="signUp-btn">Sign Up</button>
              <button className="logIn-btn">Log In</button>
            </div> */}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
