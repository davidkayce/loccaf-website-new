import React from "react";
import Sunday from "../../../assets/images/sundays.jpg";
import Rhythm from "../../../assets/images/rhythm.jpg";
import Five from "../../../assets/images/five.webp";
import House from "../../../assets/images/House.jpg";
import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect } from 'react'
import Footer from "../../../components/Footer";
import Trilith from "./Trilith";
import { useGlobalContext } from '../../../context'


const Sundays = () => {
  const {setroth} = useGlobalContext()

 
  useEffect(() => {
    document.title = "Sundays"
 }, []);
  return (
    <section>
    <div className="sun-main">
      <div className="sun-pic">
        <div className="overlay"></div>
        <div className="pic">
          <img src={Sunday} alt="" />
        </div>
        <div className="pic-contents">
            <div>SUNDAYS AT</div>
          <div>HABOUR</div>
        </div>
      </div>
      <div className="rhythmCon">
        <div className="rhythm-left">
          <div className="left-top">
            <p>
              OUR RHYTHM IS TO GATHER TOGETHER TO WORSHIP AND SCATTER TO SERVE.
            </p>
          </div>
          <div className="rhythm">
            <img src={Rhythm} alt="" />
          </div>
        </div>
        <div className="rhythm-right">
          <div className="right1">
            <p id="bold">
                We are a Jesus church. A small tribe of His followers connected
                by our common faith and a deep desire to see our city [and the
                world] come to know His power and beauty.
            </p>
            <p>
              We gather each Sunday and there is a spot for everyone of all ages
              to join us for church. Read below to learn more about what to
              expect at City Church District @ Habour.
            </p>
          </div>
          <div className="right2">
            <h3>When Do We Gather?</h3>
            <ul>
              <li>
                We gather on Sundays at 9:30 am! We are located at
                <b>Schiedamseweg 19B, 3026 AB Rotterdam</b>
              </li>
            </ul>
          </div>
          <div className="right3">
            <h3>Is There A Place For My Kids?</h3>
            <ul>
              <li>
                bloom + Kids are the rooms of our House designed for
                your kids! bloom (6 Weeks – Pre-K) and  Kids (K-5th) both
                meet in the <b> Roam building on the second floor</b>. We have the
                best Door Holders that will help your family check-in and take
                great care of your kids while you attend the gathering. Check-in
                opens as early as 8:45 am, and you can plan to pick up your
                child after the gathering ends.  Students (6th-8th) will
                meet in the Shipyard (Schiedamseweg 19B, 3026 AB Rotterdam).
              </li>
            </ul>
          </div>
          <div className="right4">
            <h3>Where Do I Park?</h3>
            <ul>
              <li>
                There are two locations to park. If you are bringing your child,
                you can park in the Piedmont Wellness Center parking lot, and a
                shuttle can take you over to the main gathering after you drop
                off your child. If you do not have any children to drop off, you
                can park in the lot located right outside the Town Stage and the
                Shipyard . The Town
                Stage is where we will have our main gatherings. We will have
                Door Holders scattered throughout to help direct you where you
                need to go!
              </li>
            </ul>
          </div>
          <div className="right5">
            <p>We can’t wait to see you this Sunday!</p>
          </div>
        </div>
      </div>
      <div className="fiveCon">
        <div className="five-left">
          <img src={Five} alt="" width={200} />
        </div>
        <div className="five-right">
          <div className="body">
            <div className="top">
              <h1>THE PRAISE</h1>
            </div>
            <div className="body-bot">
              <div className="first">
                <h4>JOIN US</h4>
                <p>
                  We are gathering five times for The PRAISE through the spring at
                   City Church District. Make plans to join us at the next
                  gathering on March 19 at our Amsterdam location!
                </p>
              </div>
              <div className="second">
                <h4>Upcoming Gathering Dates</h4>
                <div className="dates">
                  <p>February 19 // Amsterdam</p>
                  <p>March 19 // Harbour</p>
                  <p>April 23 // Harbour</p>
                  <p>May 7 // Amsterdam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Trilith />
      <div className="us-picsCon">
        <div className="us-pics">
          <div className="pics">
          <div className="uspic1">
            <img src={House} alt="" />
          </div>
          <div className="uspic2">
          <div className="overlaid"></div>
            <img src={House} alt="" />
          </div>
          </div>
          <div className="uspic-contents">
            <div className="overlaid"></div>
            <h1>GET WEEKLY UPDATES FROM HABOUR CITY CHURCH </h1>
            <p>
              Join our House News email list to stay up-to-date on all things
               HCC.
            </p>
            <Link>
              SIGN UP &rarr;
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </section>
  );
};

export default Sundays;
