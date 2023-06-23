import React from "react";
import { Link } from "react-router-dom";
import CI1 from "../../images/couress-img-1.jpg";
import CI2 from "../../images/couress-img-2.jpg";
import CI3 from "../../images/couress-img-3.jpg";
import Bk from "../../images/cou-icon.png";
import AOS from 'aos';
import "aos/dist/aos.css";

function Course() {
  AOS.init({
    duration: 1200,
  })
  return (
    <>
      <section id="our-course" data-aos={"fade-up"}>
        <div className="container-fluid">
          <h2>Our Courses</h2>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-2">
              <div className="course_wrap">
                <div className="course_image">
                  <img className="img-fluid" src={CI1} alt="pic" />
                </div>
                <div className="course_cnt">
                  <div className="title_box">
                    <h5>
                      <i className="fa-solid fa-graduation-cap"></i>Biochemistry
                    </h5>
                  </div>
                  <h3>Biochemistry</h3>
                  <p>
                    Seamlessly visualize quality ellectual capital without
                    superior collaboration and idea tically
                  </p>
                  <div className="cnt_btm">
                    <Link to="/Course1" className="read_link">
                      Read More<i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                    <div className="book_img">
                      <img className="img-fluid" src={Bk} alt="pic" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-2">
              <div className="course_wrap">
                <div className="course_image">
                  <img className="img-fluid" src={CI2} alt="pic" />
                </div>
                <div className="course_cnt">
                  <div className="title_box">
                    <h5>
                      <i className="fa-solid fa-graduation-cap"></i>Economics
                    </h5>
                  </div>
                  <h3>Major in Economics</h3>
                  <p>
                    Seamlessly visualize quality ellectual capital without
                    superior collaboration and idea tically
                  </p>
                  <div className="cnt_btm">
                    <Link to="/Course2" className="read_link">
                      Read More<i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                    <div className="book_img">
                      <img className="img-fluid" src={Bk} alt="pic" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-2">
              <div className="course_wrap">
                <div className="course_image">
                  <img className="img-fluid" src={CI3} alt="pic" />
                </div>
                <div className="course_cnt">
                  <div className="title_box">
                    <h5>
                      <i className="fa-solid fa-graduation-cap"></i>Media
                    </h5>
                  </div>
                  <h3>Business Media</h3>
                  <p>
                    Seamlessly visualize quality ellectual capital without
                    superior collaboration and idea tically
                  </p>
                  <div className="cnt_btm">
                    <Link to="/Course3" className="read_link">
                      Read More<i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                    <div className="book_img">
                      <img className="img-fluid" src={Bk} alt="pic" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Course;
