import React from 'react'
import EvP1 from '../../images/evn-img-1.jpg';
import EvP2 from '../../images/evn-img-2.jpg';
import EvP3 from '../../images/evn-img-5.jpg';
import AOS from 'aos';
import "aos/dist/aos.css";

function Event() {
    AOS.init({
        duration: 1000,
      })
  return (
    <>

    <section id='event-section'>
        <div className='container-fluid'>
            <h2>Upcoming Events</h2>
            <div className='row pt-5' data-aos={"fade-up"}>
            <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                <div className='event_wrap'>
                    <div className='time_box'>
                        <h3>20</h3>
                        <p>March, 2023</p>
                    </div>
                    <div className='event_img'>
                        <img className='img-fluid' src={EvP1} alt='pic'/>
                    </div>
                    <div className='event_cnt'>
                        <h4>Basic UI & UX Design for new development</h4>
                        <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea tically</p>
                        <strong><spann><i class="fa-solid fa-location-dot"></i></spann>12/A, NewYork Sydney City</strong>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                <div className='event_wrap'>
                    <div className='time_box'>
                        <h3>22</h3>
                        <p>March, 2023</p>
                    </div>
                    <div className='event_img'>
                        <img className='img-fluid' src={EvP2} alt='pic'/>
                    </div>
                    <div className='event_cnt'>
                        <h4>Digital Education Market Briefing: Minnesota 2023</h4>
                        <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea tically</p>
                        <strong><spann><i class="fa-solid fa-location-dot"></i></spann>12/A, NewYork Sydney City</strong>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                <div className='event_wrap'>
                    <div className='time_box'>
                        <h3>24</h3>
                        <p>March, 2023</p>
                    </div>
                    <div className='event_img'>
                        <img className='img-fluid' src={EvP3} alt='pic'/>
                    </div>
                    <div className='event_cnt'>
                        <h4>Learning Network Webinars for Music Teachers</h4>
                        <p>Seamlessly visualize quality ellectual capital without superior collaboration and idea tically</p>
                        <strong><spann><i class="fa-solid fa-location-dot"></i></spann>12/A, NewYork Sydney City</strong>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Event