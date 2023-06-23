import React from "react";
import ContactForm from "../../Component/ContactForm";
import AOS from 'aos';
import "aos/dist/aos.css";

function Appointment() {
  AOS.init({
    duration: 1200,
  })
  return (
    <>
      <section id="Contact" data-aos={"fade-up"}>
        <div className="container-fluid">
          <div className="appointment">
            <h2>Make Appointment</h2>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-2">
                <div className="box">
                  <div className="icon_circle">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <a href="tel:+1-2345-2345" className="imp_details">
                    +1-2345-2345
                  </a>
                  <h6>Phone Support</h6>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-2">
                <div className="box">
                  <div className="icon_circle">
                    <i className="fa-solid fa-envelope-open-text"></i>
                  </div>
                  <a href="mailto:someone@example.com" className="imp_details">
                    someone@example.com
                  </a>
                  <h6>Email Address</h6>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-2">
                <div className="box">
                  <div className="icon_circle">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <a href="#" className="imp_details">
                    Liverpool, UK 33342
                  </a>
                  <h6>Office Address</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="loaction">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.5851973579!2d-0.26640529770534754!3d51.528526200756765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1686661831968!5m2!1sen!2sin"
          width={"100%"}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <ContactForm />
    </>
  );
}

export default Appointment;
