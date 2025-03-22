import React from "react";
import "./index.scss";

import Convention from "../../../assets/images/convention25.jpeg";
import Pic2 from "../../../assets/images/mess2.jpg";
import Pastor from "../../../assets/images/pastor.jpg";
import LoccafChildren from "../../../assets/images/loccaf-children.jpg";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import Pic5 from "../../../assets/images/mess5.jpg";
import Thumb1 from "../../../assets/images/loccaf-children.jpg";
import Thumb2 from "../../../assets/images/loccaf-children.jpg";
import Thumb3 from "../../../assets/images/loccaf-children.jpg";
import Thumb4 from "../../../assets/images/loccaf-children.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import YouTube from "react-youtube";
import { useState } from "react";

const Events = () => {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [player3, setPlayer3] = useState(null);
  const [player4, setPlayer4] = useState(null);

  const [hide, setHide] = useState("");

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2.2,
      slidesToSlide: 1,
    },
    smtablet: {
      breakpoint: { max: 700, min: 464 },
      items: 1.4,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2,
      slidesToSlide: 1,
    },
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-gpy">
        <button
          className={`pas-btn ${currentSlide === 0 ? "disable" : ""}`}
          onClick={() => previous()}
        >
          &larr;
        </button>
        <button
          onClick={() => next()}
          className={`pas-btn ${currentSlide === 3 ? "disable" : ""}`}
        >
          &rarr;
        </button>
      </div>
    );
  };
  return (
    <>
      <div className="events">
        <div className="events-top">
          <h1 style={{ fontSize: "1.4rem" }}>UPCOMING EVENTS</h1>
        </div>
      </div>

      <div className="passion-con">
        <div className="passion-slide">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            containerClass="carousel-container"
            className="caros"
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
          >
            <div className="passion-slides">
              <a
                className="passion-box"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <div className="passion-overlay"></div>
                <FaFacebook color="#000" />
                <p>Follow us on Facebook.</p>
                <h4>CLICK HERE &rarr;</h4>
              </a>
            </div>
            <div className="passion-slides">
              <a
                className="passion-box"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <div className="passion-overlay"></div>
                <FaInstagram color="#000" />
                <p>Follow us on Instagram.</p>
                <h4>CLICK HERE &rarr;</h4>
              </a>
            </div>

            <div className="passion-slides">
              <a className="passion-box" href="" target="_blank">
                <div className="passion-overlay"></div>
                <FaYoutube color="#000" />
                <p>Subcribe to our Youtube channel.</p>
                <h4>CLICK HERE &rarr;</h4>
              </a>
            </div>

            <div className="passion-slides">
              <Link
                className="passion-box"
                to="#"
                target="_blank"
                rel="noreferrer"
              >
                <div className="passion-overlay"></div>
                <FaTwitter color="#000" />
                <p>Follow us Twitter.</p>
                <h4>CLICK HERE &rarr;</h4>
              </Link>
            </div>
          </Carousel>
        </div>
      </div>


      <div className="pastor-con">
        <div className="pastor">
          <div className="pics">
            <div className="over"></div>
            <img src={LoccafChildren} alt="" />
          </div>

          <div className="pastor-contents">
            <h5 style={{ fontSize: "16px" }}>CHILDREN"S CORNER</h5>
            <h1 style={{ fontWeight: "bold", paddingTop: "1rem" }}>
              BIBLE VERSES TO MERMORIZE
            </h1>
            <p>
              As we prepare for the gathering of the Tribe, you know our kids
              are not left out.
            </p>
            <p style={{ marginTop: "1rem" }}>
              They will also have their Bible Quiz this year and as parents, let
              us help them prepare for it. Please note that we will use the NIV
              Translation alone for easy reading and uniformity.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Kindly find your child(ren) section below and help convey the
              message of their reading focus to them. We are counting on your
              support to help and guide them.
            </p>

            <h2 style={{ fontWeight: "bold", paddingTop: "1rem" }}>
              Pry 1 - 3 ( or Year 1-3)
            </h2>
            <p> 1 John | 2 John </p>

            <h2 style={{ fontWeight: "bold", paddingTop: "1rem" }}>
              Pry 4 - 6 (Year 4-6)
            </h2>
            <p> 1 John | 2 John | 3 John</p>

            <h2 style={{ fontWeight: "bold", paddingTop: "1rem" }}>
              JSS 1 - 3 (Year 7-9)
            </h2>
            <p> 1 John | 2 John | 3 John | Jude 1 | 1 Cor 13</p>

            <h2 style={{ fontWeight: "bold", paddingTop: "1rem" }}>
              SSS 1 - 3 (Year 10-12)
            </h2>
            <p> 1 John | 2 John | 3 John | Jude 1 | 1 Cor 13 | Rom 5 | Rom 8</p>

            <p style={{ fontWeight: "bold", paddingTop: "2rem" }}>
              Also, please note that the quiz will be written on the evening of
              Friday, May 2nd 2025. Thank you and God bless.
            </p>
          </div>

          <div className="pastor-contents1">
            <h5 style={{ fontSize: "16px" }}>CHILDREN"S CORNER</h5>
            <h1 style={{ fontWeight: "bold", paddingTop: "1rem" }}>
              BIBLE VERSES TO MERMORIZE
            </h1>
            <p>
              As we prepare for the gathering of the Tribe, you know our kids
              are not left out.
            </p>
            <p>
              They will also have their Bible Quiz this year and as parents, let
              us help them prepare for it. Please note that we will use the NIV
              Translation alone for easy reading and uniformity.
            </p>
            <p>
              Kindly find your child(ren) section below and help convey the
              message of their reading focus to them. We are counting on your
              support to help and guide them.
            </p>

            <h2 style={{ fontWeight: "bold", paddingTop: "1rem" }}>
              Pry 1 - 3 ( or Year 1-3)
            </h2>
            <p> 1 John | 2 John </p>

            <h2 style={{ fontWeight: "bold", paddingTop: "1rem" }}>
              Pry 4 - 6 (Year 4-6)
            </h2>
            <p> 1 John | 2 John | 3 John</p>

            <h2 style={{ fontWeight: "bold", paddingTop: "1rem" }}>
              JSS 1 - 3 (Year 7-9)
            </h2>
            <p> 1 John | 2 John | 3 John | Jude 1 | 1 Cor 13</p>

            <h2 style={{ fontWeight: "bold", paddingTop: "1rem" }}>
              SSS 1 - 3 (Year 10-12)
            </h2>
            <p> 1 John | 2 John | 3 John | Jude 1 | 1 Cor 13 | Rom 5 | Rom 8</p>

            <p style={{ fontWeight: "bold", paddingTop: "2rem" }}>
              Also, please note that the quiz will be written on the evening of
              Friday, May 2nd 2025. Thank you and God bless.
            </p>
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
                containerClassName="tube-con"
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
          Would you love to watch more of our messages?
          <a
            href="https://www.youtube.com/channel/UCvx240pRUOBgxMo4ZRNscxA?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
          >
            Click here &rarr;
          </a>
        </div>
      </div>
    </>
  );
};

export default Events;
