import React from "react";
import ServePic from "../../assets/images/serve.jpg";
import { useEffect } from 'react'
import Footer from "../../components/Footer";
import "./index.scss";

const Serve = () => {
  useEffect(() => {
    document.title = "Serve"
 }, []);
 
  return (
    <section>
      <div className="serveCon">
        <div className="serve">
          <div className="serves">
            <div className="serviceCon">
            <h1 className="top">CONNECT THROUGH SERVING</h1>
              <div className="service">
                <div className="left">
                  <h1>CONNECT THROUGH SERVING</h1>
                  <div className="serve-text">
                    <p>
                      One of the best ways to meet people, develop
                      relationships, and grow as a follower of Christ is to
                      serve the church. And it’s not just on the weekends!
                      Serving opportunities are available seven days a week.
                    </p>
                    <p>
                      Connect to the life of Amsterdam City Church by taking the
                      next step of serving in ministry. No matter what your
                      gifts, talents, and experience may be, there is a place
                      for you to serve. By serving you will grow in your
                      relationship with Jesus Christ, meet friends, and have an
                      eternal impact on the lives of many people.
                    </p>
                  </div>
                </div>
                <div className="right">
                  <img src={ServePic} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="apply-con">
          <div className="apply">
            <h1>APPLY TO SERVE</h1>
            <p>
              Would you like to take it a step further and explore your gifts
              and talents to serve the community, nation, and the world at
              large? Well, let’s make a start at our church, and kindly take a
              look at our onboarding file to see what team(s) you can join. The
              onboarding is ready to take you through the process.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdtXPd1CX6lOMDHHrOwqyBwK8pH5dqYTGCrbbguVIWgohNTiA/viewform"
              target="_blank" rel="noreferrer"
            >
              SERVE &rarr;
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Serve;
