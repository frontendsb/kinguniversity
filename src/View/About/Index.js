import React from "react";
import Abg from "../../images/about-title-bg.jpg";
import Whychoose from "./Whychoose";
import History from "./History";
import Admission from "./Admission";
import "./About.css";

function Index() {
  return (
    <>
      <div id="all_banner" style={{ backgroundImage: `url('${Abg}')` }}>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              About
            </li>
          </ol>
          <h2>About</h2>
        </nav>
      </div>

      <Whychoose />
      <History />
      <Admission />
    </>
  );
}

export default Index;
