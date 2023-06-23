import React from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function Video() {
  AOS.init({
    duration: 1000,
  })
  return (
    <>
      <section id="video-section"  data-aos={"fade-up"}>
        <div className="video_cnt">
          <a href="https://youtu.be/C5pKtnmHTxg" className="play_btn">
            <i class="fa-regular fa-circle-play"></i>
          </a>
          <h3>Video Tour in Kingster</h3>
          <p>
            Take a tour in Kingster and you will find the best university in the
            state. The video will take you to every places in this university.
          </p>
        </div>
      </section>
    </>
  );
}

export default Video;
