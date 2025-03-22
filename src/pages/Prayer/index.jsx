import React from "react";
import Footer from "../../components/Footer";
import Prayed from "../../assets/images/Prayer.jpg";
import { useEffect } from 'react'
import "./index.scss";

const Prayer = () => {
  useEffect(() => {
    document.title = "Prayer Request"
 }, []);
  return (
    <section>
      <div className="prayerCon">
        <div className="prayer-pic">
          <img src={Prayed} alt="" />
          <div className="overlaid"></div>
          <div className="contents">
            <h1>PRAYER REQUEST</h1>
          </div>
        </div>
        <div className="requestCon">
          <div className="request">
            <h1>How can we pray for you?</h1>
            <form action="">
              <ul>
                <li>
                  <label htmlFor="first">First Name</label>
                  <input type="text" id="first" required />
                </li>
                <li>
                  <label htmlFor="last">Last Name</label>
                  <input type="text" id="last" required />
                </li>
                <li>
                  <label htmlFor="email">Email </label>
                  <input type="email" id="email" required />
                </li>
                <li>
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" required></textarea>
                </li>
                <li>
                  <p>How would you prefer we contact you?*</p>
                  <select name="" id="">
                    <option value="">-Please choose an option-</option>
                    <option value="email">Email</option>
                    <option value="don't">Please don't contact me</option>
                    <option value="call">Call</option>
                  </select>
                </li>
              </ul>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
        <Footer />

      </div>
    </section>
  );
};

export default Prayer;
