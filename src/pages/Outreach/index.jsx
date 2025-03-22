import React from "react";
import Outreach1 from "../../assets/images/outreach1.jpeg";
import Outreach3 from "../../assets/images/outreach3.jpg";
import Outreach4 from "../../assets/images/outreach4.png";
import Share from "../../assets/images/share-partner.png";
import Nieuwe from "../../assets/images/nieuwe-partner.jpeg";
import Footer from "../../components/Footer";
import Saved from "../../assets/images/saved.jpg";
import { useEffect } from 'react'
import "./index.scss";

const Outreach = () => {
  useEffect(() => {
    document.title = "Outreach"
 }, []);
  return (
    <section>
      <div className="outreachCon">
        <div className="outreaches">
          <div className="outreach">
            <div className="reachCon">
              <div className="reach">
                <div className="reach-left">
                  <div className="top">
                    <h1>About us</h1>
                  </div>
                  <div className="left-body">
                    <p>
                      Amsterdam City Church is a youthful multi cultural church.
                      Our vision is to spread the love of God, which is the
                      Gospel of our Lord Jesus Christ, that all men may be saved
                      and find their true identity in Christ.
                    </p>
                    <p>
                      We wholeheartedly believe that it is love that connects
                      people all over the world. God is love. It is God’s plan
                      to bring love and hope to a hurting world.
                    </p>
                  </div>
                </div>
                <div className="reach-right">
                  <img src={Saved} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="missionCon">
          <div className="mission">
            <h1> OUR MISSION</h1>
            <p>
              Our mission is to serve as we bring the hope of Jesus to you. We’d
              love to equip the nations by reaching out in love to the young and
              old. We therefore work in partnerships with various institutions
              to make God’s presence visible in people’s lives and in places of
              influence.
            </p>
            <p>
              We serve a resourceful God, who fed the crowd with five loaves and
              two fish (Matthew 14). In Mark 2, a group of friends figured out
              how to open up a roof to get their friend to Jesus. Throughout
              history God has reached out in many different ways. We aim to do
              the same.
            </p>
          </div>
        </div>
        <div className="projectCon">
          <div className="project">
            <div className="project-top">
              <h1>Recent Outreach Projects</h1>
            </div>
            <div className="project-bot">
              <a
                className="k-pics kp1"
                href="https://share-network.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Outreach1} alt="" />
                <div className="k-contents k-contents1">
                  <h1>Share Network in partnership with ACC.</h1>
                  <h6>READ MORE</h6>
                  <p>
                    Through the abundant blessings of God, Amsterdam City Church
                    was able to gift clothes to refugees in partnership with
                    Share Network
                  </p>
                </div>
              </a>
              <a
                className="k-pics kp1"
                href="https://beam.eo.nl/artikel/dit-maakte-mij-heel-blij"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Outreach3} alt="" />
                <div className="k-contents">
                  <h1>
                    “Ik zag mensen zingen op Amsterdam Centraal en daar gebeurde
                    iets heel bijzonders”
                  </h1>
                  <h6>READ MORE</h6>
                  <p>
                    NPO BEAM Het is donderdagavond, een week voor Kerst. Na een
                    dag werken staat mij nog een excursie te wachten naar
                    Amsterdam Centraal. Want daar, bij de piano, zal een […]
                  </p>
                </div>
              </a>
              <a
                className="k-pics kp1"
                href="https://www.youtube.com/watch?v=aSMO25k01lA&t="
                target="_blank"
                rel="noreferrer"
              >
                <img src={Outreach4} alt="" />
                <div className="k-contents">
                  <h1>Amsta – De Schutse Outreach 2021￼</h1>
                  <h6>READ MORE</h6>
                  <p>
                    The corona crisis causes loneliness. The elderly are
                    especially hard hit because they cannot get visits like they
                    used to and sometimes don’t even dare to go out on the […]
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="partners">
          <div className="partner">
            <h1>PARTNERED WITH:</h1>
            <div className="partner-pics">
              <div className="pic1 pics">
                <img src={Nieuwe} alt="" />
              </div>
              <div className="pic2 pics">
                <img src={Share} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="partnershipCon">
          <div className="partnership">
            <div className="partnership-top">
              <h1>Contact Us</h1>
              <p>
                If you wish to partner with us you can contact our Team by
                sending an email to outreach@amsterdamcitychurch.nl
              </p>
            </div>
            <form action="">
              <ul>
                <li>
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" required />
                </li>
                <li>
                  <label htmlFor="email"> Your Email </label>
                  <input type="email" id="email" required />
                </li>
                <li>
                  <label htmlFor="number"> Your Phone Number </label>
                  <input type="tel" id="number" required />
                </li>
                <li>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" required />
                </li>
                <li>
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" required></textarea>
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

export default Outreach;
