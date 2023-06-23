import React from "react";
import "./Contact.css";
import Cbg from "../../images/contact-title-bg.jpg";
import Appointment from "./Appointment";

function Index() {
  return (
    <>
      <div id="all_banner" style={{ backgroundImage: `url('${Cbg}')` }}>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Contact
            </li>
          </ol>
          <h2>Contact</h2>
        </nav>
      </div>
      <Appointment />
    </>
  );
}

export default Index;
