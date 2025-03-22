import React from "react";
import Pic1 from "../../../../assets/images/mess1.jpg";
import Pic2 from "../../../../assets/images/mess2.jpg";
import Holder from "../../../../assets/images/holder.jpg";
import Welcome from "../../../../assets/images/welcome.jpg";
import Academy from "../../../../assets/images/Academy.jpg";
import { Link } from "react-router-dom";
import Love from "../../../../assets/images/love-event.jpg";
import { FiChevronDown } from "react-icons/fi";
import YouTube from "react-youtube";
import { useState } from "react";
import Thumb1 from "../../../../assets/images/thumb1.jpg";
import Thumb2 from "../../../../assets/images/thumb2.jpg";
import Thumb3 from "../../../../assets/images/thumb3.jpg";
import Thumb4 from "../../../../assets/images/thumb4.jpg";
import "./index.scss";

const Events = () => {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [player3, setPlayer3] = useState(null);
  const [player4, setPlayer4] = useState(null);

  const [hide, setHide] = useState("");

  // const youtubeID1 = ;

  const onReady1 = (e) => {
    setPlayer1(e.target.playVideo());
  };
  const onReady2 = (e) => {
    setPlayer2(e.target.playVideo());
  };
  const onReady3 = (e) => {
    setPlayer3(e.target.playVideo());
  };
  const onReady4 = (e) => {
    setPlayer4(e.target.playVideo());
  };

  const onPlayHandler1 = () => {
    setHide("one");
    player1.playVideo();
  };
  const onPauseHandler1 = () => {
    setHide("");
    player1.pauseVideo();
  };

  const onPlayHandler2 = () => {
    setHide("two");
    player2.playVideo();
  };
  const onPauseHandler2 = () => {
    setHide("");
    player2.pauseVideo();
  };

  const onPlayHandler3 = () => {
    setHide("three");
    player3.playVideo();
  };
  const onPauseHandler3 = () => {
    setHide("");
    player3.pauseVideo();
  };

  const onPlayHandler4 = () => {
    setHide("four");
    player4.playVideo();
  };
  const onPauseHandler4 = () => {
    setHide("");
    player4.pauseVideo();
  };

  return (
    <>
      <div className="events">
        <div className="events-top">
          <h5>ROTHERDAM LOCATION</h5>
          <h1>GET INVOLVED</h1>
        </div>
        <div className="events-con">
          <Link className="event event1" to="/rotterdam/sundays">
            <div className="event-pic">
              <img src={Pic1} alt="" />
            </div>
            <div className="event-text">
              <h6>HARBOUR DRIVEWAY</h6>
              <h1>NEW TO HARBOUR?</h1>
              <h6>FIND YOUR PLACE</h6>
              <p className="note">
                Our desire is that everybody at Habour City Church feels seen
                and can find lasting community. If you are new to Passion City
                or planning to join us for a gathering, click here to learn
                more.
              </p>
            </div>
          </Link>
          <Link className="event" to="/rotterdam/sundays">
            <div className="event-pic">
              <img src={Pic2} alt="" />
            </div>
            <div className="event-text">
              <h6>HARBOUR DRIVEWAY</h6>
              <h1>NEW TO HARBOUR? </h1>
              <h6>FIND YOUR PLACE</h6>
              <p className="note">
                Our desire is that everybody at Habour City Church feels seen
                and can find lasting community. If you are new to Passion City
                or planning to join us for a gathering, click here to learn
                more.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="holderCon">
        <div className="holder">
          <div className="holder-left">
            <div className="hol-top">
              <h1>SERVE</h1>
            </div>
            <div className="hol-down">
              <h3>THAT WE MAY</h3>
              <p>
                No matter what your gifts, talents, and experience may be, there
                is a place for you to serve. By serving you will grow in your
                relationship with Jesus Christ, meet friends, and have an
                eternal impact on the lives of many people.
              </p>
              <a href="/serve">
                APPLY TO SERVE 
                &rarr;
              </a>
            </div>
          </div>
          <div className="holder-right">
            <img src={Holder} alt="" />
          </div>
        </div>
      </div>
      <div className="welcomeCon">
        <div className="welcome">
          <div className="welcome-left">
            <div className="wel-top">
              <h1>WELCOME TO CHURCH</h1>
            </div>
            <div className="wel-down">
              <h5>DISCOVER THE HEARTBEAT OF CITY CHURCH DISTRICT</h5>
              <p>
                Welcome to Church is a 2-part opportunity to discover the
                heartbeat of City Church District. Join us to learn more about
                the beliefs, culture, family and get the chance to meet the
                leadership of our house. Sign up for an upcoming session today!
              </p>
              <div className="location-drop">
                <div className="dropdown">
                  <button className="drop-btn">
                    CHOOSE YOUR LOCATION <FiChevronDown fill="#000" size={20} />
                  </button>
                  <div className="menu">
                    <ul>
                      <li>
                        <a href="#">Amsterdam</a>
                      </li>
                      <li>
                        <a href="#">Rotterdam</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="welcome-right">
            <img src={Welcome} alt="" />
          </div>
        </div>
      </div>
      <div className="us-picsCon">
        <div className="us-pics">
          <div className="pics">
            <div className="uspic1">
              <img src={Academy} alt="" />
            </div>
            <div className="uspic2">
              <div className="overlaid"></div>
              <img src={Academy} alt="" />
            </div>
          </div>
          <div className="uspic-contents">
            <div className="overlaid"></div>
            <p>PRACTICAL, THEOLOGICAL, DISCIPLESHIP</p>
            <h1>BIBLE ACADEMY</h1>
            <p>
              BIBLE ACADEMY is designed to help every person at City Church
              District be equipped through practical theological discipleship.
              Click below to learn more and to RSVP for an upcoming course.
            </p>
            <Link>LEARN MORE &rarr;</Link>
          </div>
        </div>
      </div>
      <div className="youtubeCon">
        <div className="youtube">
          <div
            className="tube"
            onMouseEnter={onPlayHandler1}
            onMouseLeave={onPauseHandler1}
          >
            <div className="body-top">
              <img
                src={Thumb1}
                alt=""
                className={`img ${hide === "one" ? "hide" : ""}`}
              />
              <YouTube
                // containerClassName='y-vid'
                className="y-vid"
                videoId="bozhvs9kalA"
                onReady={onReady1}
                opts={{
                  height: "100%",
                  width: "100%",
                  playerVars: {
                    controls: 1,
                    autoplay: 1,
                    mute: 1,
                  },
                }}
              />
            </div>
            <div className="body-bot">
              <h4>THE CROSS PART 2.1</h4>
              <h4>Rev. John Angoh</h4>
            </div>
          </div>
          <div
            className="tube"
            onMouseEnter={onPlayHandler2}
            onMouseLeave={onPauseHandler2}
          >
            <div className="body-top">
              <img
                src={Thumb2}
                alt=""
                className={`img ${hide === "two" ? "hide" : ""}`}
              />
              <YouTube
                // containerClassName='y-vid'
                className="y-vid"
                videoId="cpHTzvDKUYE"
                onReady={onReady2}
                opts={{
                  height: "100%",
                  width: "100%",
                  playerVars: {
                    controls: 1,
                    autoplay: 1,
                    mute: 1,
                  },
                }}
              />
            </div>
            <div className="body-bot">
              <h4>THE CROSS PART 1.1</h4>
              <h4>Elder Owusu Asare</h4>
            </div>
          </div>
          <div
            className="tube"
            onMouseEnter={onPlayHandler3}
            onMouseLeave={onPauseHandler3}
          >
            <div className="body-top">
              <img
                src={Thumb3}
                alt=""
                className={`img ${hide === "three" ? "hide" : ""}`}
              />
              <YouTube
                // containerClassName='y-vid'
                className="y-vid"
                videoId="p4x_DOlqcGA"
                onReady={onReady3}
                opts={{
                  height: "100%",
                  width: "100%",
                  playerVars: {
                    controls: 1,
                    autoplay: 1,
                    mute: 1,
                  },
                }}
              />
            </div>
            <div className="body-bot">
              <h4>LIFT HIM UP PART 4.1</h4>
              <h4>Rev. John Angoh</h4>
            </div>
          </div>
          <div
            className="tube"
            onMouseEnter={onPlayHandler4}
            onMouseLeave={onPauseHandler4}
          >
            <div className="body-top">
              <img
                src={Thumb4}
                alt=""
                className={`img ${hide === "four" ? "hide" : ""}`}
              />
              <YouTube
                // containerClassName='y-vid'
                className="y-vid"
                videoId="lKX5v4gPzu0"
                onReady={onReady4}
                opts={{
                  height: "100%",
                  width: "100%",
                  playerVars: {
                    controls: 1,
                    autoplay: 1,
                    mute: 1,
                  },
                }}
              />
            </div>
            <div className="body-bot">
              <h4>LIFT HIM UP PART 3.1</h4>
              <h4>Elder Junior Obeng Eshun</h4>
            </div>
          </div>
        </div>
        <div className="text">
          Would you love to watch more of our messages?{" "}
          <a
            href="https://www.youtube.com/channel/UCvx240pRUOBgxMo4ZRNscxA?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
          >
            Click here &rarr;
          </a>
        </div>
      </div>
      <div className="communityCon">
        <div className="community">
          <div className="pics">
            <div className="over"></div>
            <img src={Love} alt="" width={500} />
          </div>
          <div className="comm-contents">
            <h5>BIG CHURCH MADE SMALL</h5>
            <h1>COMMUNITY</h1>
            <p>
              Our desire is for everyone who attends City Church District to find
              lasting community here. Through Community Groups and Connect
              Groups, you can find smaller groups of people to live life with
              here. Click below to learn more and find your group!
            </p>
            <a href="#">
              FIND COMMUNITY &rarr;
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
