import React from "react";

function Course() {
  return (
    <>
      <section id="course">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12"></div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="course_form">
                <h3>Search For Courses</h3>
                <form>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="Keywords"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="Course ID"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <select
                          className="form-control"
                          id=""
                        >
                          <option>Department</option>
                          <option>Business Adminstration</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                        <select
                          className="form-control"
                          id=""
                        >
                          <option>Course</option>
                          <option>Adman's Hall</option>
                          <option>Kingster's 80</option>
                          <option>KU2 Hill</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <select
                          className="form-control"
                          id=""
                        >
                          <option>Level</option>
                          <option>Graduate</option>
                          <option>Undergraduate</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                        <select
                          className="form-control"
                          id=""
                        >
                          <option>Instructor</option>
                          <option>Albert Coman (PhD)</option>
                          <option>Angelina Jones (PhD)</option>
                          <option>Bruce Willis (PhD)</option>
                          <option>Carol Dawson (PhD)</option>
                          <option>John Hagensy (PhD)</option>
                        </select>
                      </div>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <select
                          className="form-control"
                          id=""
                        >
                          <option>Semester</option>
                          <option>Fall 2018</option>
                          <option>Spring 2019</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                        <select
                          className="form-control"
                          id=""
                        >
                          <option>Credit</option>
                          <option>2.000</option>
                          <option>3.000</option>
                          <option>4.000</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button type="submit" class="search_btn">Search Courses</button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Course;
