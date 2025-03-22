import React from "react";
import Baptist from "../../assets/images/baptism.jpg";
import { FaPhoneSquareAlt, FaEnvelope } from "react-icons/fa";
import { BsFillCalendarFill } from "react-icons/bs";
import Footer from "../../components/Footer";
import { useEffect } from 'react'
import "./index.scss";

const Baptism = () => {
  // const SelectDate = () =>{
  //   const birth = document.querySelector('#birth');
  //   birth.type = 'date'
  // }

  useEffect(() => {
    document.title = "Baptism"
 }, []);
  return (
    <section>
      <div className="baptismCon">
        <div className="baptism-pic">
          <img src={Baptist} alt="" />
          <div className="overlaid"></div>
          <div className="contents">
            <h1>BAPTISM</h1>
          </div>
        </div>
        <div className="textCon">
          <div className="text">
            <div className="meaning">
              <p>
                Baptism is a public celebration of moving from death to life
                through faith in Jesus Christ.Baptism is the first step of
                obedience after accepting Christ. Jesus said, “Go then, to all
                people everywhere and make them my disciples, baptize them in
                the name of the Father, the Son, and the Holy Spirit, and teach
                them to obey everything I have commanded you.” — Matthew
                28:19–20
              </p>
              <p>
                Baptism itself does not make us a believer in Christ, but rather
                a way of saying to the world that our relationship with Jesus,
                and our faith in Him, has already begun. Baptism symbolizes that
                our old self is gone (going under the water) and our new self
                has come (coming above the water) and that we have been made
                alive in Christ.
              </p>
            </div>
            <div className="who">
              <h1>WHO SHOULD BE BAPTIZED?</h1>
              <p>Every person that has believed in Christ.</p>
              <p>
                “Those who believed and accepted His message were baptized.” —
                Acts 2:41
              </p>
              <p>
                At Amsterdam City Church, we know that most people have
                questions about Baptism. Why should I be baptized? I have
                already been baptized, do I have to do it again? Does it matter
                if you are sprinkled or dunked?
              </p>
              <p id="quest">
                Feel free to ask us questions or you can contact us through the
                mail.
              </p>
              <a
                href="mailto:Info@amsterdamcitychurch.nl"
                // target='framename'
              >
                Info@amsterdamcitychurch.nl
              </a>
            </div>
          </div>
        </div>
        <div className="applicationCon">
          <div className="application">
            <div className="top">
              <h1>Baptism Application</h1>
            </div>
            <form action="">
              <div className="personal">
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
                <div className="emailCon">
                  <label htmlFor="email">Email</label>
                  <div className="email">
                    <input type="email" id="email" required />
                    <div className="svg">
                    <FaEnvelope/>
                    </div>
                  </div>
                </div>
                <div className="you">
                  <div className="phoneCon">
                    <label htmlFor="number">Phone number</label>
                    <div className="phone">
                      <input type="tel" id="number" required />
                      <div className="svg">
                      <FaPhoneSquareAlt />
                      </div>
                    </div>
                  </div>
                  <div className="genderCon">
                    <label htmlFor="gender">Gender</label>
                    <select name="" id="gender" required>
                      <option value=""></option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="birthCon">
                    <label htmlFor="birth">Birth Date</label>
                    <div className="birth">
                      <input type="date" id="birth" required placeholder="" />
                      <BsFillCalendarFill />
                    </div>
                  </div>
              </div>
              <div className="addressed">
                  <div className="address">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" />
                  </div>
                  <div className="post">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="Postcode" />
                  </div>
                </div>
              </div>
              <div className="questions">
                <div className="question">
                  <label htmlFor="q1">
                    How was your life before you became a Christ-Follower?
                  </label>
                  <textarea name="message1" id="q1" required></textarea>
                </div>
                <div className="question">
                  <label htmlFor="q2">
                    When did you ask Jesus into your heart and make Him the Lord
                    of your life?*
                  </label>
                  <textarea name="message2" id="q2" required></textarea>
                </div>
                <div className="question">
                  <label htmlFor="q3">
                    Is there a person(s) in your life that helped point you to
                    Christ? (Family Member, Friend, Pastor, Group Leader, etc…)*
                  </label>
                  <textarea name="message3" id="q3" required></textarea>
                </div>
                <div className="question">
                  <label htmlFor="q4">
                    How has Amsterdam City Church helped you to take this Next
                    Step in your journey with Christ? (Sunday Messages,
                    Children's Ministry, Student Ministry, Life Groups, Special
                    Events, etc…)*
                  </label>
                  <textarea name="message4" id="q4" required></textarea>
                </div>
                <div className="question">
                  <label htmlFor="q5">
                    Why do you want to be baptized? This is also known as your
                    "Declaration of Commitment" because you are publicly
                    committing your life to God.*
                  </label>
                  <textarea name="message5" id="q5" required></textarea>
                </div>
              </div>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Baptism;
