import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bg1 from '../../images/banner-bg-1.jpg';
import Bg2 from '../../images/banner-bg-4.jpg';
import Bg3 from '../../images/banner-bg-3.jpg';
import { Link } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";

function BannerSlide() {
  var settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                infinite: true,
                autoplay: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                arrows: false,
                autoplay: true,
                initialSlide: 0
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                speed: 500,
                arrows: false,
                autoplay: true,
                slidesToScroll: 1
            }
        }
    ]
};

AOS.init({
  duration: 1200,
})

  return (
    <>

    <section id="banner-slider">
    <Slider {...settings}>

    <div className="item">
          <div className="slide-image">
            <img className='img-fluid' src={Bg1} alt=""/>
          </div>
          <div className="container">
          <div className="banner_cnt" data-aos={"fade-right"}>
            <h3>The Best University of The State</h3>
            <h1>Kingster University</h1>
            <Link to='/about'>
            <button className="banner_btn">Take A Tour</button>
            </Link>
          </div>
          </div>
        </div>

        <div className="item">
          <div className="slide-image">
            <img className='img-fluid' src={Bg2} alt=""/>
          </div>
          <div className="container">
          <div className="banner_cnt" data-aos={"fade-right"}>
            <h3>Kingsters has more than </h3>
            <h1>180 Majors & Minors </h1>
            <Link to='/about'>
            <button className="banner_btn">Take A Tour</button>
            </Link>
          </div>
          </div>
        </div>

        <div className="item">
          <div className="slide-image">
            <img className='img-fluid' src={Bg3} alt=""/>
          </div>
          <div className="container">
          <div className="banner_cnt" data-aos={"fade-right"}>
            <h3>The Best University of The State</h3>
            <h1>Kingster University</h1>
            <Link to='/about'>
            <button className="banner_btn">Take A Tour</button>
            </Link>
          </div>
          </div>
        </div>
        
        </Slider>
    </section>

    </>
  );
}

export default BannerSlide;
