import React, { useState, useEffect } from "react";
import Thumb2 from "../../../assets/images/loccaf-audio.jpg";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../../../assets/images/loccaf-logo-white.png";
import { useGlobalContext } from "../../../context";

import "./index.scss";

const Menu = () => {
  const { setOpenMenu } = useGlobalContext();
  const [hover, setHover] = useState(false);

  return (
    <div className="menu-modalCon">
      <div className="overlay"></div>
      <div className="modal">
        <div className="menu-top">
          <div className="top-left">
            <Link to="/" onClick={() => setOpenMenu(false)}>
              <img src={Logo} alt="" />
            </Link>
          </div>

          <div className="top-right">
            <button onClick={() => setOpenMenu(false)}>CLOSE</button>
          </div>
        </div>

        <div className="menu-body">
          <div className="body-left">
            <h2>FEATURED</h2>
            <a
              href="https://drive.google.com/drive/folders/16D4PEznsiHYonOBj6aH90Cv1golWj4cB?usp=drive_link"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={Thumb2} alt="" />
            </a>
            <div className="left-bot">
              <h5> LOCCAFF CONVENTION AUDIO</h5>
              <h5>2024</h5>
            </div>
          </div>

          <div className="body-right">
            <div className="logo1-con">
              <Link className="logo1" to="/">
                LOCCAF
              </Link>

              <div
                className="dropdown"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <button className="drop-btn">
                  International <FiChevronDown />
                </button>
                <div className="menu">
                  <ul>
                    <li>
                      <a href="/amsterdam" id="ams">
                        North America
                      </a>
                    </li>
                    <li>
                      <a href="/rotterdam" id="roth">
                        Europe
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`main-right ${hover ? "disappear" : ""}`}>
              <div className="right-bod">
                <div className="right1 rights">
                  <p>CONNECT</p>
                  <a href="/about" onClick={() => setOpenMenu(false)}>
                    ABOUT LOCCAF
                  </a>
                  <a href="" onClick={() => setOpenMenu(false)}>
                    HQ REPORTS
                  </a>
                  <a href="" onClick={() => setOpenMenu(false)}>
                    TESTIMONIES
                  </a>
                  <a href="" onClick={() => setOpenMenu(false)}>
                    CONTACT US
                  </a>
                </div>

                <div className="right2 rights">
                  <p>GET INVOLVED </p>
                  <a href="" onClick={() => setOpenMenu(false)}>
                    BLOG
                  </a>
                  <a href="">PROJECTS</a>
                  <a href="" onClick={() => setOpenMenu(false)}>
                    LOVE OFFERING
                  </a>
                  <a href="" onClick={() => setOpenMenu(false)}>
                    HOW DO I GET INVOLVED?
                  </a>
                </div>

                <div className="right3 rights">
                  <p>JOIN US </p>
                  <a href="" onClick={() => setOpenMenu(false)}>
                    MEMBERSHIP
                  </a>
                  <a href="" onClick={() => setOpenMenu(false)}>
                    CONVENTIONS
                  </a>
                  <a href="" onClick={() => setOpenMenu(false)}>
                    ZONES
                  </a>
                </div>
              </div>

              <div className="sm-handles">
                <Link className="youtube handles" to="" target="_blank">
                  <FaYoutube color="#fff" />
                </Link>
                <Link className="insta handles" to="" target="_blank">
                  <FaInstagram color="#fff" />
                </Link>
                <Link className="facebook handles" to="" target="_blank">
                  <FaFacebook color="#fff" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
