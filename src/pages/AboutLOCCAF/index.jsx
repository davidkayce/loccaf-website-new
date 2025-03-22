import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

import History from "../../assets/videos/loccaf-history.mp4";
import Courage from "../../assets/images/courage.jpg";
import AnnOjimba from "../../assets/images/ann.jpg";
import MikeUhumwangho from "../../assets/images/mike-sec.jpg";
import OderaOkonkwo from "../../assets/images/odera-sec.jpg";
import SundaySamuel from "../../assets/images/sunday-samuel.jpeg";
import GabrielOmin from "../../assets/images/gabriel.jpg";
import Usi from "../../assets/images/usi.jpg";
import MatthewAbebe from "../../assets/images/matthew.jpg";

import Community from "../../assets/images/community.jpg";
import "./index.scss";

const Start = () => {
  useEffect(() => {
    document.title = "About LOCCAF";
  }, []);
  return (
    <section>
      <div className="startCon">
        <div className="main-start">
          <div className="godCon">
            <div className="for-god">
              <div className="god-text">
                <h1>THE STORY OF HOW IT ALL BEGAN.</h1>
              </div>
              <div className="text-vid">
                <div className="text-side">
                  <p>
                    In the early 70s, the early days of the University of Benin,
                    Rev. Fr. Robert W. Dundon, an American missionary priest of
                    the Order of the Jesuits, had taken up a lectureship at the
                    school, the Department of Chemistry specifically.
                    Interestingly, he had been a part of the charismatic
                    revivals of 1967-1970 at Duquesne University in Pittsburgh,
                    and the University of Notre Dame, both in the United States.
                  </p>

                  <p>
                    Here, Fr. Dundon had his initial encounters with the Lord,
                    and although usually clad in regular priestly garments, he
                    was a carrier of the same fire when he arrived in Nigeria as
                    a missionary lecturer. He began to gather a few catholic
                    students at the chemistry lab of the university for times of
                    bible study, praising God, and prayers.
                  </p>

                  <p>
                    These were the beginnings of what eventually became the
                    Light of Christ Community, Catholic Charismatic Renewal,
                    UNIBEN/UBTH. These meetings were like a reintroduction to
                    the Acts of the Apostles; the pages of scripture began to
                    take life and give light.
                  </p>

                  <p>
                    A culture of the word and prayers had begun to form. The
                    atmosphere was pure, free of guile, and prayers were as
                    though all the people were linked to the same generator
                    which was somewhere in the unseen realm: they were praying
                    down a revival that had already been gathered in the spirit
                  </p>
                </div>
                <div className="video-side">
                  <div className="video">
                    <video src={History} autoPlay loop muted></video>
                  </div>
                  <div className="difference"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="jesusCon">
            <div className="jesus">
              <h1>
                CHANGING THE WORLD <br />
                AS CHRIST CHANGES US
              </h1>
              <div className="jesus-text">
                <p>
                  <b>Our Vision</b> is to become a glorious company of Christian
                  intellectuals; enlightened in mind, liberated in spirit,
                  bonded by love, contending earnestly for the faith once
                  delivered to us a people without blemish, changing their world
                  truly perfect in Christ Jesus.
                </p>

                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginTop: "3rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  How we do this ? (Our Mission)
                </p>
                <p>
                  We exist to support and facilitate the progress and welfare of
                  the Light of Christ Community. To provide for her alumni a
                  vibrant interdenominational fellowship characterized by
                  brotherly love and unflinching fidelity to sound doctrine.
                </p>
              </div>
            </div>
          </div>


          <div className="kingdomCon">
            <div className="kingdom">
              <div className="kingdom-text">
                <h6>GLOBAL LEADERSHIP</h6>
                <h1>EXECUTIVE BODY</h1>
              </div>

              <div className="kingdom-pics">
                <Link className="k-pics kp1" >
                  <img src={Courage} alt="" />
                  <div className="k-contents">
                    <h6 className="color">GLOBAL PRESIDENT</h6>
                    <h1>PST. COURAGE ODE</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={AnnOjimba} alt="" />
                  <div className="k-contents">
                    <h6 className="color">GLOBAL VICE-PRESIDENT</h6>
                    <h1>DR. ANN OJIMBA</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={MikeUhumwangho} alt="" />
                  <div className="k-contents">
                    <h6 className="color">GLOBAL GENERAL SECRETARY</h6>
                    <h1>PROF. MIKE UHUMWANGHO</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={OderaOkonkwo} alt="" />
                  <div className="k-contents">
                    <h6 className="color">ASSISTANT SECRETARY</h6>
                    <h1>ODERA OKONKNWO</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={SundaySamuel} alt="" />
                  <div className="k-contents">
                    <h6 className="color">FINANCIAL SCERETARY</h6>
                    <h1>SUNDAY SAMUEL</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={GabrielOmin} alt="" />
                  <div className="k-contents">
                    <h6 className="color">PUBLIC RELATIONS OFFICER</h6>
                    <h1>GABRIEL OMIN</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={Usi} alt="" />
                  <div className="k-contents">
                    <h6 className="color">TREASURER</h6>
                    <h1>USI OSAZUWA</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={MatthewAbebe} alt="" />
                  <div className="k-contents">
                    <h6 className="color">LEGAL OFFICER</h6>
                    <h1>MATTHEW ABEBE</h1>
                  </div>
                </Link>
              </div>
            </div>

            <div className="kingdom">
              <div className="kingdom-text">
                <h6>GLOBAL LEADERSHIP</h6>
                <h1>EX-OFFICIOS</h1>
              </div>

              <div className="kingdom-pics">
                <Link className="k-pics kp1" >
                  <img src={Courage} alt="" />
                  <div className="k-contents">
                    <h1>PST. BANKIE OLUSINA</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={AnnOjimba} alt="" />
                  <div className="k-contents">
                    <h6 className="color">GLOBAL VICE-PRESIDENT</h6>
                    <h1>DR. ANN OJIMBA</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={MikeUhumwangho} alt="" />
                  <div className="k-contents">
                    <h6 className="color">GLOBAL GENERAL SECRETARY</h6>
                    <h1>PROF. MIKE UHUMWANGHO</h1>
                  </div>
                </Link>
              </div>
            </div>

            <div className="kingdom">
              <div className="kingdom-text">
                <h6>ZONAL LEADRSHIP</h6>
                <h1>ZONAL COORDINATORS</h1>
              </div>

              <div className="kingdom-pics">
                <Link className="k-pics kp1" >
                  <img src={Courage} alt="" />
                  <div className="k-contents">
                    <h6 className="color">GLOBAL PRESIDENT</h6>
                    <h1>PST. COURAGE ODE</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={AnnOjimba} alt="" />
                  <div className="k-contents">
                    <h6 className="color">GLOBAL VICE-PRESIDENT</h6>
                    <h1>DR. ANN OJIMBA</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={MikeUhumwangho} alt="" />
                  <div className="k-contents">
                    <h6 className="color">GLOBAL GENERAL SECRETARY</h6>
                    <h1>PROF. MIKE UHUMWANGHO</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={OderaOkonkwo} alt="" />
                  <div className="k-contents">
                    <h6 className="color">ASSISTANT SECRETARY</h6>
                    <h1>ODERA OKONKNWO</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={SundaySamuel} alt="" />
                  <div className="k-contents">
                    <h6 className="color">FINANCIAL SCERETARY</h6>
                    <h1>SUNDAY SAMUEL</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={GabrielOmin} alt="" />
                  <div className="k-contents">
                    <h6 className="color">PUBLIC RELATIONS OFFICER</h6>
                    <h1>GABRIEL OMIN</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={Usi} alt="" />
                  <div className="k-contents">
                    <h6 className="color">TREASURER</h6>
                    <h1>USI OSAZUWA</h1>
                  </div>
                </Link>
                <Link className="k-pics kp1" >
                  <img src={MatthewAbebe} alt="" />
                  <div className="k-contents">
                    <h6 className="color">LEGAL OFFICER</h6>
                    <h1>MATTHEW ABEBE</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>



          <div className="communityCon">
            <div className="community">
              <div className="pics">
                <div className="over"></div>
                <img src={Community} alt="" width={500} />
              </div>
              <div className="comm-contents">
                <h6>BIG CHURCH MADE SMALL</h6>
                <h1>COMMUNITY</h1>
                <p>
                  Our desire is for everyone who attends City Church District to
                  find lasting community here. Through Community Groups and
                  Connect Groups, you can find smaller groups of people to live
                  life with here. Click below to learn more and find your group!
                </p>
                <a href="#">FIND COMMUNITY &rarr;</a>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Start;
