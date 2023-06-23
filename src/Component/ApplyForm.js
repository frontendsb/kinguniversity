import React, { useState } from "react";
import "./Apply.css";

function Apply({ closeModal }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

   // connect with firebase
   const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, subject, email, phone, message } = userData;

    if (firstName && lastName && subject && email && phone && message) {
      const res = fetch(
        "https://applyfirebase-45459-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            subject,
            email,
            phone,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          subject: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };
  return (
    <>
      <div id="apply-form">
        <div className="form_body">
          <button
            className="close_btn"
            onClick={() => {
              closeModal(false);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h2>Apply Now!</h2>
          <form method="POST">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    id=""
                    placeholder="First Name"
                    value={userData.firstName}
                    onChange={postUserData}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    id=""
                    placeholder="Last Name"
                    value={userData.lastName}
                    onChange={postUserData}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div className="form-group">
                  <select
                    className="form-control"
                    id=""
                    name="subject"
                    value={userData.subject}
                    onChange={postUserData}
                  >
                    <option>Subject</option>
                    <option>Business Adminstration</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id=""
                    placeholder="Email"
                    value={userData.email}
                    onChange={postUserData}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div className="form-group">
                  <input
                    type="number"
                    name="phone"
                    className="form-control"
                    id=""
                    placeholder="Phone Number"
                    value={userData.phone}
                    onChange={postUserData}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    id=""
                    rows={3}
                    defaultValue={""}
                    placeholder="Message"
                    value={userData.message}
                    onChange={postUserData}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="submit_btn" onClick={submitData}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Apply;
