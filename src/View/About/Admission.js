import React from "react";
import { Link } from "react-router-dom";
import AdI from "../../images/about_img.png";

function Admission() {
  return (
    <>
      <section id="admission">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="ad_left">
                <img className="img-fluid" src={AdI} alt="pic" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12" style={{display: 'grid', alignItems: 'center'}}>
              <div className="ad_cnt">
                <h2>Admission & Aid</h2>
                <p>
                  Our community is being called to reimagine the future. As the
                  only university where a renowned design school comes together
                  with premier colleges, we are making learning more relevant
                  and transformational.
                </p>
                <Link to='/courses'>
                <button className="read_btn">Read More<i class="fa-solid fa-arrow-right-long"></i></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admission;
