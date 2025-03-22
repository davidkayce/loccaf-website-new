import React from "react";
import Contacts from "../../assets/images/contact.jpg";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import "./index.scss";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  return (
    <section>
      <div className="contactCon">
        <div className="contacts">
          <div className="contact">
            <div className="contactus-Con">
              <div className="contact-us">
                <div className="left">
                  <h1>CONTACT US</h1>
                  <div className="contact-text">
                    <h3>WE'D LOVE TO HEAR FROM YOU!</h3>
                    <p>
                      Please fill out the form below to get in touch with us.
                    </p>
                  </div>
                </div>
                <div className="right">
                  <img src={Contacts} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactapp-Con">
          <div className="contact-app">
            <form action="">
              <div className="name">
                <div className="first names">
                  <label htmlFor="name1">First name</label>
                  <input type="text" id="name1" required />
                </div>
                <div className="last names">
                  <label htmlFor="name2">Last name</label>
                  <input type="text" id="name2" required />
                </div>
              </div>
              <div className="address">
                <div className="phoneCon add">
                  <label htmlFor="number">Phone number</label>
                  <input type="tel" id="number" required />
                </div>
                <div className="email add">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required />
                </div>
              </div>
              <div className="subject">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" required />
              </div>
              <div className="message ">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" required></textarea>
              </div>
              <button type="submit">SUBMIT</button>
            </form>
            <div className="contact-address">
              <div className="address">
                <h4>Address:</h4>
                <p>
                  <b>Amsterdam: </b> Atlantisplein 1, 1093 NE Amsterdam
                </p>
                <p>
                  <b>Rotherdam: </b> Schiedamseweg 19B, 3026 AB Rotterdam
                </p>
              </div>
              <div className="number">
                <h4>Phone Number</h4>
                <a href="tel:+31611750972">0611750972</a>
              </div>
              <div className="questions">
                <h4>Have any questions?</h4>
                <a href="mailto:info@amsterdamcitychurch.nl" rel="noreferrer" target='_blank'>
                  info@amsterdamcitychurch.nl
                </a>
              </div>
              <div className="open">
                <h4>We are open:</h4>
                <p>Amsterdam: 10:50am CET</p>
                <p>Rotterdam: 2pm CET </p>
              </div>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </section>
  );
};

export default Contact;
