import React from "react";
import Tab1 from "../../images/tab-1-1.jpg";
import Tab2 from "../../images/tab-2.jpg";
import Tab3 from "../../images/tab-3.jpg";
import Tab4 from "../../images/tab-4.jpg";

function Whychoose() {
  return (
    <>
      <section id="about-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="abt_cnt">
                <>
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Benefits
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Self Development
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Spirituality
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-alumni-tab"
                        data-toggle="tab"
                        href="#nav-alumni"
                        role="tab"
                        aria-controls="nav-alumni"
                        aria-selected="false"
                      >
                        Alumni
                      </a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="cnt_wrap">
                        <div className="left_image">
                          <img className="img-fluid" src={Tab1} alt="pic" />
                        </div>
                        <div className="abt_cnt">
                          <h4>Why Choose Kingster?</h4>
                          <p>
                            The Kingster University Alumni Association is
                            excited to announce the arrival of KU Alumni
                            Connect. This is a new community building platform
                            for Kinster’s alumni. It is the only place online
                            where you can find, and connect with, all 90,000
                            Kingster’s alumni. All alumni are automatically
                            enrolled!
                          </p>
                          <p>
                            Kingster University was established by John Smith in
                            1920 for the public benefit and it is recognized
                            globally. Throughout our great history, Kingster has
                            offered access to a wide range of academic
                            opportunities. As a world leader in higher
                            education, the University has pioneered change in
                            the sector.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div className="cnt_wrap">
                        <div className="left_image">
                          <img className="img-fluid" src={Tab2} alt="pic" />
                        </div>
                        <div className="abt_cnt">
                          <h4>Self Development</h4>
                          <p>
                            The Kingster University Alumni Association is
                            excited to announce the arrival of KU Alumni
                            Connect. This is a new community building platform
                            for Kinster’s alumni. It is the only place online
                            where you can find, and connect with, all 90,000
                            Kingster’s alumni. All alumni are automatically
                            enrolled!
                          </p>
                          <p>
                            Kingster University was established by John Smith in
                            1920 for the public benefit and it is recognized
                            globally. Throughout our great history, Kingster has
                            offered access to a wide range of academic
                            opportunities. As a world leader in higher
                            education, the University has pioneered change in
                            the sector.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <div className="cnt_wrap">
                        <div className="left_image">
                          <img className="img-fluid" src={Tab3} alt="pic" />
                        </div>
                        <div className="abt_cnt">
                          <h4>Spirituality</h4>
                          <p>
                            The Kingster University Alumni Association is
                            excited to announce the arrival of KU Alumni
                            Connect. This is a new community building platform
                            for Kinster’s alumni. It is the only place online
                            where you can find, and connect with, all 90,000
                            Kingster’s alumni. All alumni are automatically
                            enrolled!
                          </p>
                          <p>
                            Kingster University was established by John Smith in
                            1920 for the public benefit and it is recognized
                            globally. Throughout our great history, Kingster has
                            offered access to a wide range of academic
                            opportunities. As a world leader in higher
                            education, the University has pioneered change in
                            the sector.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-alumni"
                      role="tabpanel"
                      aria-labelledby="nav-alumni-tab"
                    >
                     <div className="cnt_wrap">
                        <div className="left_image">
                          <img className="img-fluid" src={Tab4} alt="pic" />
                        </div>
                        <div className="abt_cnt">
                          <h4>Alumni</h4>
                          <p>
                            The Kingster University Alumni Association is
                            excited to announce the arrival of KU Alumni
                            Connect. This is a new community building platform
                            for Kinster’s alumni. It is the only place online
                            where you can find, and connect with, all 90,000
                            Kingster’s alumni. All alumni are automatically
                            enrolled!
                          </p>
                          <p>
                            Kingster University was established by John Smith in
                            1920 for the public benefit and it is recognized
                            globally. Throughout our great history, Kingster has
                            offered access to a wide range of academic
                            opportunities. As a world leader in higher
                            education, the University has pioneered change in
                            the sector.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Whychoose;
