// import React, { useRef, useState } from "react";
import "./index.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Slider = () => {
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
      breakpoint: { max: 1024, min: 464 },
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
      <div className="carousel-button-group">
        <button
          className={`caro-btn ${currentSlide === 0 ? "disable" : ""}`}
          onClick={() => previous()}
        >
          &larr;
        </button>
        <button
          onClick={() => next()}
          className={`caro-btn ${currentSlide === 3 ? "disable" : ""}`}
        >
          &rarr;
        </button>
      </div>
    );
  };
  return (
    <>
      <div className="place">
        <h4>FIND YOUR PLACE AT AMSTERDAM CITY CHURCH</h4>
      </div>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        containerClass="carousel-container"
        className="slider"
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        <div className="slides">
          <Link className="start-box" to="/start">
            <div className="overlay2"></div>
            <h6>NEW TO AMSTERDAM CITY CHURCH?</h6>
            <h2>START HERE</h2>
            <p>
              Our desire is that everybody at Amsterdam City Church feels seen
              and can find lasting community
            </p>
            <a>START HERE &rarr;</a>
          </Link>
        </div>
        <div className="slides">
          <Link className="start-box" to="/contact">
            <div className="overlay2"></div>
            <h6>BE IN THE KNOW</h6>
            <h2>CONNECT WITH US</h2>
            <p>Join our email list to get updates from Amsterdam City Church</p>
            <a>SIGN UP &rarr;</a>
          </Link>
        </div>

        <div className="slides">
          <Link className="start-box" to="/us">
            <div className="overlay2"></div>
            <h6> WHO WE ARE AT AMSTERDAM CITY CHURCH</h6>
            <h2>US</h2>
            <p>
              Get to know more about who we are and what we believe here at
              Amsterdam city church
            </p>
            <a> LEARN MORE &rarr;</a>
          </Link>
        </div>
        <div className="slides">
          <a
            className="start-box"
            href="https://useplink.com/payment/mK4x0NBv4nqc1tnDJEPT/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="overlay2"></div>
            <h6>THAT WE MAY</h6>
            <h2>GIVE</h2>
            <p>Your Generosity is Making a Difference</p>
            <a>GIVE &rarr;</a>
          </a>
        </div>
        <div className="slides">
          <Link className="start-box" to="/serve">
            <div className="overlay2"></div>
            <h6>SERVE</h6>
            <h2>SERVICE</h2>
            <p>
              One of the best ways to meet people, develop relationships, and
              grow as a follower of Christ is to serve the church
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdtXPd1CX6lOMDHHrOwqyBwK8pH5dqYTGCrbbguVIWgohNTiA/viewform"
              target="_blank"
              rel="noreferrer"
            >
              SERVE &rarr;
            </a>
          </Link>
        </div>
        <div className="slides">
          <Link className="start-box" to="/outreach">
            <div className="overlay2"></div>
            <h6>SHOWING LOVE</h6>
            <h2>OUTREACH</h2>
            <p>
              It is love that connects people all over the world. God is love.
              It is God’s plan to bring love and hope to a hurting world.
            </p>
            <a>REACH OUT &rarr;</a>
          </Link>
        </div>
        <div className="slides">
          <Link className="start-box" to="/prayer-request">
            <div className="overlay2"></div>
            <h6>LET US PRAY FOR YOU</h6>
            <h2>PRAYER REQUEST</h2>
            <p>We would love to pray for you.</p>
            <a> PRAYER REQUEST &rarr;</a>
          </Link>
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
