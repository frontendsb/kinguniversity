import React, { useState } from "react";
import A1 from "../../images/apply-1.jpg";
import A2 from "../../images/about-bg-2.jpg";
import ApplyForm from '../../Component/ApplyForm';

function Apply() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <section id="apply-section">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-12" style={{padding: "0"}}>
            <div className="apply_left">
              <img className="img-fluid" src={A1} alt="pic" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12" style={{padding: "0"}}>
            <div className="apply_rigt">
              <div className="right_img">
                <img className="img-fluid" src={A2} alt="pic" />
              </div>
              <div className="right_cnt">
                <h4>Apply for Admission</h4>
                <h6>Fall 2019 applications are now open</h6>
                <p>
                  We don’t just give students an education and experiences that
                  set them up for success in a career. We help them succeed in
                  their career—to discover a field they’re passionate about and
                  dare to lead it.
                </p>
                <button className="apply_btn" onClick={()=>{setOpenModal(true)}}>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {openModal &&<ApplyForm closeModal={setOpenModal}/>}
    </>
  );
}

export default Apply;
