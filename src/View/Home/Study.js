import React from "react";
import S1 from "../../images/why-1.jpg";
import AOS from 'aos';
import "aos/dist/aos.css";

function Study() {
  AOS.init({
    duration: 1000,
  })
  return (
    <>
      <section id="why-study">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12" style={{display: 'grid', justifyContent: 'center', alignItems: 'center'}} data-aos={"fade-right"}>
              <div className="study_left">
                <h3>Why Study Here?</h3>
                <p>
                  The Academic offers include 14 majors, 15 minors, and more
                  than 100 in major specializations so your degree will surely
                  reflect your interests and strengths.
                </p>
                <p>
                  Not only does Kingster University provide you the practical
                  skills that is necessary to transition seamlessly into the
                  workforce upon your graduation, but we also make sure that you
                  will have a good sense of social justice so that you make the
                  transition responsibly.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12" data-aos={"fade-left"}>
              <div className="study_right">
                <img className="img-fluid" src={S1} alt="pic" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Study;
