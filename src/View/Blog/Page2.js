import React, { useState } from "react";
import Bbg from "../../images/blog-title-bg.jpg";
import Bi1 from "../../images/blog-img-3.jpg";
import Bi2 from "../../images/blog-img-4.jpg";
import N1 from "../../images/news-1.jpg";
import N2 from "../../images/news-2.jpg";
import N3 from "../../images/news-3.jpg";
import W1 from "../../images/work-1.jpg";
import W2 from "../../images/work-2.jpg";
import W3 from "../../images/work-3.jpg";
import W4 from "../../images/work-4.jpeg";
import W5 from "../../images/work-5.jpg";
import W6 from "../../images/work-6.jpg";
import BlogContent from "./BlogContent";

function Page2() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <>
      <div id="all_banner" style={{ backgroundImage: `url('${Bbg}')` }}>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Blog
            </li>
          </ol>
          <h2>Blog</h2>
        </nav>
      </div>

      <section id="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-12">
              <div className="page_left mb-5">
                <div className="blog_image">
                  <img className="img-fluid" src={Bi1} alt="pic" />
                </div>
                <div className="blog_cnt">
                  <h2>
                    A Global MBA for the next generation of business leaders
                  </h2>
                  <div className="details">
                    <div className="person">
                      <i className="fa-regular fa-user"></i>
                      <span>By admin</span>
                    </div>
                    <div className="date">
                      <i className="fa-solid fa-calendar-days"></i>
                      <span>March 8, 2023</span>
                    </div>
                    <div className="cmnt">
                      <i className="fa-regular fa-comments"></i>
                      <span>No Comments</span>
                    </div>
                  </div>
                  <p>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite sense of mere tranquil existence, that I neglect
                    my talents. I should be...
                  </p>
                  {isShowMore && (
                    <p>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring which I enjoy
                      with my whole heart. I am alone, and feel the charm of
                      existence in this spot, which was created for the bliss of
                      souls like mine. I am so happy, my dear friend, so
                      absorbed in the exquisite sense of mere tranquil
                      existence, that I neglect my talents. I should be...
                    </p>
                  )}
                  <button className="read_btn" onClick={toggleReadMoreLess}>
                    {" "}
                    {isShowMore ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>

              <div className="page_left">
                <div className="blog_image">
                  <img className="img-fluid" src={Bi2} alt="pic" />
                </div>
                <div className="blog_cnt">
                  <h2>
                    Professor Tom comments on voluntary recalls by snack brands
                  </h2>
                  <div className="details">
                    <div className="person">
                      <i className="fa-regular fa-user"></i>
                      <span>By admin</span>
                    </div>
                    <div className="date">
                      <i className="fa-solid fa-calendar-days"></i>
                      <span>March 8, 2023</span>
                    </div>
                    <div className="cmnt">
                      <i className="fa-regular fa-comments"></i>
                      <span>No Comments</span>
                    </div>
                  </div>
                  <p>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite sense of mere tranquil existence, that I neglect
                    my talents. I should be...
                  </p>
                  {isShowMore && (
                    <p>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring which I enjoy
                      with my whole heart. I am alone, and feel the charm of
                      existence in this spot, which was created for the bliss of
                      souls like mine. I am so happy, my dear friend, so
                      absorbed in the exquisite sense of mere tranquil
                      existence, that I neglect my talents. I should be...
                    </p>
                  )}
                  <button className="read_btn" onClick={toggleReadMoreLess}>
                    {" "}
                    {isShowMore ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-12">
              <div className="page_right">
                <div className="text">
                  <div className="heading">
                    <h3>Text Widget</h3>
                  </div>
                  <p>
                    Nulla vitae elit libero, a pharetra augue. Nulla vitae elit
                    libero, a pharetra augue. Nulla vitae elit libero, a
                    pharetra augue. Donec sed odio dui. Etiam porta sem
                    malesuada.
                  </p>
                </div>
                <div className="news">
                  <div className="heading">
                    <h3>Recent News</h3>
                  </div>
                  <div className="news_wrap">
                    <div className="news_img">
                      <img className="img-fluid" src={N1} alt="pic" />
                    </div>
                    <div className="news_cnt">
                      <h3>
                        Professor Albert joint research on mobile money in
                        Tanzania
                      </h3>
                      <div className="btm_cnt">
                        <span>JUNE 6, 2016</span>
                        <span>BYJOHN SMITH</span>
                      </div>
                    </div>
                  </div>
                  <div className="news_wrap">
                    <div className="news_img">
                      <img className="img-fluid" src={N2} alt="pic" />
                    </div>
                    <div className="news_cnt">
                      <h3>
                        A Global MBA for the next generation of business leaders
                      </h3>
                      <div className="btm_cnt">
                        <span>JUNE 6, 2016</span>
                        <span>BYJOHN SMITH</span>
                      </div>
                    </div>
                  </div>
                  <div className="news_wrap">
                    <div className="news_img">
                      <img className="img-fluid" src={N3} alt="pic" />
                    </div>
                    <div className="news_cnt">
                      <h3>
                        Professor Tom comments on voluntary recalls by snack
                        brands
                      </h3>
                      <div className="btm_cnt">
                        <span>JUNE 6, 2016</span>
                        <span>BYJOHN SMITH</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="work">
                  <div className="heading">
                    <h3>Recent Works</h3>
                  </div>
                  <div className="first_row">
                    <div className="work_image">
                      <img className="img-fluid" src={W1} alt="pic" />
                    </div>
                    <div className="work_image">
                      <img className="img-fluid" src={W3} alt="pic" />
                    </div>
                    <div className="work_image">
                      <img className="img-fluid" src={W4} alt="pic" />
                    </div>
                  </div>
                  <div className="second_row">
                    <div className="work_image">
                      <img className="img-fluid" src={W2} alt="pic" />
                    </div>
                    <div className="work_image">
                      <img className="img-fluid" src={W5} alt="pic" />
                    </div>
                    <div className="work_image">
                      <img className="img-fluid" src={W6} alt="pic" />
                    </div>
                  </div>
                </div>
                <div className="follow">
                  <div className="heading">
                    <h3>Follow Us</h3>
                  </div>
                  <div className="flw_icon">
                    <a href="#" className="social_ntw">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="social_ntw">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </a>
                    <a href="#" className="social_ntw">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social_ntw">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogContent />
    </>
  );
}

export default Page2;
