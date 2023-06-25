import React, { useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function ContactForm() {
  AOS.init({
    duration: 1200,
  })

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
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
    const { fullName, email, phone, subject, message } = userData;

    if (fullName && email && phone && subject && message) {
      const res = fetch(
        "https://contactfirebase-3cc4a-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            email,
            phone,
            subject,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
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
      <div id="contact_form">
        <div className="container-fluid" data-aos={"fade-up"}>
          <h2>LEAVE US YOUR INFO</h2>
          <p>AND WE WILL GET BACK TO YOU.</p>
          <div className="inner-container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <form method="POST">
                  <div className="form-group">
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      id=""
                      aria-describedby="emailHelp"
                      placeholder="Full Name*"
                      value={userData.fullName}
                      onChange={postUserData}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id=""
                      placeholder="Email*"
                      value={userData.email}
                      onChange={postUserData}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="phone"
                      className="form-control"
                      id=""
                      placeholder="Phone*"
                      value={userData.phone}
                      onChange={postUserData}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id=""
                      placeholder="Subject*"
                      value={userData.subject}
                      onChange={postUserData}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      id=""
                      rows={3}
                      defaultValue={""}
                      placeholder="Message*"
                      value={userData.message}
                      onChange={postUserData}
                    />
                  </div>

                  <button type="submit" className="submit_btn" onClick={submitData}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
