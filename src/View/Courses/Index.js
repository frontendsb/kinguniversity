import React from "react";
import Cbg from "../../images/courses_bg.jpg";
import OurCourse from "./OurCourse";
import './Courses.css';

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
              Courses
            </li>
          </ol>
          <h2>Courses</h2>
        </nav>
      </div>

      <OurCourse/>
    </>
  );
}

export default Index;
