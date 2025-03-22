import React, { useState }  from "react";
import House from "../../../assets/images/House.jpg";
import Leader from "../../../assets/images/leadership.jpg";
import WorshipPic from "../../../assets/images/start-worship.jpg";
import Welcome from "../../../assets/images/start-worship.jpg";
import "./index.scss";

const Trilith = () => {
  const [hoverVid1, setHoverVid1] = useState(false);
  const [hoverVid2, setHoverVid2] = useState(false)
  const [hoverVid3, setHoverVid3] = useState(false)
  const [hoverVid4, setHoverVid4] = useState(false)
  return (
    <div className="trilith">
      <div className="title">
        <h1>AMSTERDAM</h1>
      </div>
      <div className="tril">
        <div className="overlay"></div>
          <div className="pics">
            <img
              src={House}
              alt=""
              className={`img1 ${hoverVid1 ? "show" :''}`}
            />
            <img src={Leader} alt=""className={`img2 ${hoverVid2 ? "show" :''}`} />
            <img src={WorshipPic} alt="" className={`img3 ${hoverVid3 ? "show" :''}`}  />
            <img src={Welcome} alt="" className={`img4 ${hoverVid4 ? "show" :''}`}  />
          </div>
        <div className="tril-text">
            <div className="main-text">
            <div className={`city ${hoverVid1 || hoverVid2 || hoverVid3 || hoverVid4 ? "coloured" :''}`}>A PLACE IN OUR HOUSE FOR ALL AGES</div>
          <div
            // className="bloom"
            onMouseEnter={() => setHoverVid1(true)}
            onMouseLeave={() => setHoverVid1(false)}
          >
            <h1 className={` ${hoverVid1 || hoverVid2 || hoverVid3 || hoverVid4 ? "colored" :''}`}>bloom</h1>
            <h2 className={`bloom ${hoverVid1 ? "shows" :''}`}>6 WEEKS - PRE-K</h2>
          </div>
          <div 
        //   className="passion-kids" 
            onMouseEnter={() => setHoverVid2(true)}
            onMouseLeave={() => setHoverVid2(false)}>
            <h1 className={` ${hoverVid1 || hoverVid2 || hoverVid3 || hoverVid4 ? "colored" :''}`}> KIDS</h1>
            <h2 className={`passion-kids ${hoverVid2 ? "shows" :''}`}>K - 5TH GRADE</h2>
          </div>
          <div
        //    className="passion-stud"
          onMouseEnter={() => setHoverVid3(true)}
          onMouseLeave={() => setHoverVid3(false)}
          >
            <h1 className={` ${hoverVid1 || hoverVid2 || hoverVid3 || hoverVid4 ? "colored" :''}`} > STUDENTS</h1>
            <h2 className={`passion-stud ${hoverVid3 ? "shows" :''}`}>6TH - 12TH GRADE</h2>
          </div>
          <div 
        //   className="holders"
          onMouseEnter={() => setHoverVid4(true)}
          onMouseLeave={() => setHoverVid4(false)}
          >
            <h1 className={` ${hoverVid1 || hoverVid2 || hoverVid3 || hoverVid4 ? "colored" :''}`}>DOOR HOLDERS</h1>
            <h2 className={`holders ${hoverVid4 ? "shows" :''}`}>PSALM 84:10</h2>
          </div>
            </div>
            <div className="transit-div">
                <div className={`six ${hoverVid1 ? "showed" :''}`}> </div>
                <div className={`pas ${hoverVid2 ? "showed" :''}`}></div>
                <div className={`stud ${hoverVid3 ? "showed" :''}`}></div>
                <div className={`hold ${hoverVid4 ? "showed" :''}`}></div>

            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Trilith;
