import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Coat from '../../images/qt-icon.png';
import C1 from '../../images/testi_avatar.png';
import C2 from '../../images/testi_avatar_02.png';
import C3 from '../../images/testi_avatar_03.png';
import AOS from 'aos';
import "aos/dist/aos.css";

function Testimonial() {
    var settings = {
        dots: true,
        infinite: false,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    slidesToScroll: 1
                }
            }
        ]
    };

    AOS.init({
        duration: 1000,
      })

  return (
  <>
  <section id="testimonial" data-aos={"fade-up"}>
    <div className='container-fluid'>
        <h2>What Our Clients Says</h2>
    <Slider {...settings}>

    <div className='item'>
            <div className='item_cnt'>
                <div className='coat_img'>
                <img className='img-fluid' src={Coat} alt='pic'/>
                </div>
                <p>Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices ligula aliquet odio tristique euismod. Donec efficitur dolor in turpis aliquet, at mollis.</p>
                <div className='client_img'>
                    <img className='img-fluid' src={C1} alt='pic'/>
                </div>
                <h5>Margie Dose</h5>
                <h6>Web Developer</h6>
            </div>
        </div>

        <div className='item'>
            <div className='item_cnt'>
                <div className='coat_img'>
                <img className='img-fluid' src={Coat} alt='pic'/>
                </div>
                <p>Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices ligula aliquet odio tristique euismod. Donec efficitur dolor in turpis aliquet, at mollis.</p>
                <div className='client_img'>
                    <img className='img-fluid' src={C2} alt='pic'/>
                </div>
                <h5>Roboto Eorure</h5>
                <h6>Web Developer</h6>
            </div>
        </div>

        <div className='item'>
            <div className='item_cnt'>
                <div className='coat_img'>
                <img className='img-fluid' src={Coat} alt='pic'/>
                </div>
                <p>Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices ligula aliquet odio tristique euismod. Donec efficitur dolor in turpis aliquet, at mollis.</p>
                <div className='client_img'>
                    <img className='img-fluid' src={C3} alt='pic'/>
                </div>
                <h5>Margie Dose</h5>
                <h6>Web Developer</h6>
            </div>
        </div>

        <div className='item'>
            <div className='item_cnt'>
                <div className='coat_img'>
                <img className='img-fluid' src={Coat} alt='pic'/>
                </div>
                <p>Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices ligula aliquet odio tristique euismod. Donec efficitur dolor in turpis aliquet, at mollis.</p>
                <div className='client_img'>
                    <img className='img-fluid' src={C1} alt='pic'/>
                </div>
                <h5>Rock Dloder</h5>
                <h6>Web Developer</h6>
            </div>
        </div>

        <div className='item'>
            <div className='item_cnt'>
                <div className='coat_img'>
                <img className='img-fluid' src={Coat} alt='pic'/>
                </div>
                <p>Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices ligula aliquet odio tristique euismod. Donec efficitur dolor in turpis aliquet, at mollis.</p>
                <div className='client_img'>
                    <img className='img-fluid' src={C2} alt='pic'/>
                </div>
                <h5>Margie Dose</h5>
                <h6>Web Developer</h6>
            </div>
        </div>

        </Slider>
    </div>
  </section>
  </>
  )
}

export default Testimonial