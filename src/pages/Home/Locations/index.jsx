import React, { useState } from "react";
import International from "../../../assets/images/convention-dance-two.jpg";
import NorthAmerica from "../../../assets/videos/CBL_V1.mp4";
import Europe from "../../../assets/videos/TrilithLoop.mp4";
import Vid4 from "../../../assets/videos/DC_V1.mp4";

import "./index.scss";

const Locations = () => {
  const [hoverVid1, setHoverVid1] = useState(false);
  const [hoverVid2, setHoverVid2] = useState(false);
  const [hoverVid3, setHoverVid3] = useState(false)
  // const [hoverVid4, setHoverVid4] = useState(false)

  return (
    <div className="addresses">
      <div className="title">
        <h1>LOCATIONS</h1>
      </div>
      <div className="tril">
        <div className="overlay"></div>
        <div className="pics">
          <img
            src={International}
            className={`img1 ${hoverVid1 ? "show" : ""}`}
          />
          <video
            src={NorthAmerica}
            autoPlay
            loop
            muted
            className={`img2 ${hoverVid2 ? "show" : ""}`}
          />
          <img
            src={Europe}
            className={`img3 ${hoverVid3 ? "show" : ""}`}
          />
        </div>
        
        <div className="tril-text">
          <div className="main-text">
            <div
              className={` city ${hoverVid1 || hoverVid2 ? "coloured" : ""}`}
            >
              LIGHT OF CHRIST COMMUNITY ALUMNI FELLOWSHIP
            </div>

            <div
              onMouseEnter={() => setHoverVid1(true)}
              onMouseLeave={() => setHoverVid1(false)}
            >
              <h1 className={` ${hoverVid1 || hoverVid2 ? "colored" : ""}`}>
                NIGERIA
              </h1>
              <h2 className={`bloom ${hoverVid1 ? "shows" : ""}`}>
                CONVENTION: 30.04 - 03.05 2025
              </h2>
            </div>

            <div
              onMouseEnter={() => setHoverVid2(true)}
              onMouseLeave={() => setHoverVid2(false)}
            >
              <h1 className={` ${hoverVid1 || hoverVid2 ? "colored" : ""}`}>
                NORTH AMERICA
              </h1>
              <h2 className={`passion-kids ${hoverVid2 ? "shows" : ""}`}>
                CONVENTION: COMING SOON
              </h2>
            </div>

            <div
              onMouseEnter={() => setHoverVid3(true)}
              onMouseLeave={() => setHoverVid3(false)}
            >
              <h1 className={` ${hoverVid1 || hoverVid2 || hoverVid3 ? "colored" : ""}`}>
                EUROPE
              </h1>
              <h2 className={`passion-kids ${hoverVid3 ? "shows" : ""}`}>
                CONVENTION: COMING SOON
              </h2>
            </div>
          </div>

          <div className="transit-div">
            <div className={`six ${hoverVid1 ? "showed" : ""}`}> </div>
            <div className={`pas ${hoverVid2 ? "showed" : ""}`}></div>
            <div className={`stud ${hoverVid3 ? "showed" :''}`}></div>
            {/* <div className={`hold ${hoverVid4 ? "showed" :''}`}></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
