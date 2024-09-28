import React, { forwardRef } from "react";
import './admission.css'
const Admission = forwardRef((props, ref) => {
  return (
    <div className="admission-main" ref={ref}>
      <div className="admin-heading">
        <h1>
          <span style={{ color: "black" }}>Admission </span>
          <span style={{ color: "#F55DAF" }}>Enquiry</span>
        </h1>
      </div>
      <img src="./images/strike.png" alt="strike" id="adm-strike" />
      <div className="admission-content">
        <div className="adm-details">
          <div className="adm-text">
            <img src="./images/arrow.png" alt="" />
            <p>Complete and submit the inquiry form with your details.</p>{" "}
          </div>
          <div className="adm-text">
            <img src="./images/arrow.png" alt="" />
            <p>
              We will assist you in scheduling a visit to Agape Garden Play
              School.
            </p>
          </div>
          <div className="adm-text">
            <img src="./images/arrow.png" alt="" />
            <p>Explore our campus and connect with our educators.</p>{" "}
          </div>
          <div className="adm-text">
            <img src="./images/arrow.png" alt="" />
            <p>
              Enroll your child and become a part of our nurturing community.
            </p>
          </div>
        </div>
        <div className="adm-cred">
          <h4>Enquire Now</h4>
          <form>
            <div>
              <input type="text" placeholder="Name" name="Name" required id="name"/>
              <input type="text" placeholder="Email" name="Email" required id="email"/>
              <input type="text" placeholder="Phone Number" name="Phone Number" required id="phone"/>
              <input type="text" placeholder="Pin Code" name="Pin code" required id="pin"/>
            </div>
            <button id="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Admission;
