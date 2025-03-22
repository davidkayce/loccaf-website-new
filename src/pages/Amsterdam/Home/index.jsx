import React, { useEffect } from "react";
import { useGlobalContext } from "../../../context";
import Footer from "../../../components/Footer";
import Events from "../../Amsterdam/Home/Events";
import Habor from "../../../assets/videos/habor-vid.mp4";
import Slider from "../../Amsterdam/Home/Slider";
import "./index.scss";

const AmsHome = () => {
  const { setroth, roth, handleCurrentChurch, sethandleCurrentChurch } =
    useGlobalContext();

  useEffect(() => {
    document.title = "Amsterdam";
  }, []);
  return (
    <section>
      <div className="main">
        <div className="video">
          <div className="overlay"></div>
          <video src={Habor} autoPlay loop muted className="vid" />
          <div className="contents">
            <div className="in-contents">
              <div className="watch">
                <h1>WATCH</h1>
              </div>
            </div>
            <div className="join">
              <div className="text">
                <h5>JOIN US FOR OUR INTERNATIONAL CONVENTION</h5>
                <p>
                  At Precious Palm Royal Hotel - Ugbowu Lagos Road, Benin City
                </p>
                <p>Wed, 30th April - Sat, 3rd May 2025</p>
                <h4>
                  <a href="https://forms.gle/9SYSwz7jZmLpLUF38" target="_blank" rel="noreferrer noopener">JOIN US &rarr;</a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Place in the church */}

        <div className="">
          <div className="carousel">
            <Slider />
          </div>
          {/* <Locations/> */}
        </div>
        {/* <Messages/> */}
        <Events />
        <Footer />
      </div>
    </section>
  );
};

export default AmsHome;
