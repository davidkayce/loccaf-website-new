import React from "react";
import "./index.scss";
import Logo from "../../assets/images/loccaf-logo.png";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-con">
      <div className="footer">
      <div className="announcement-bar">
          <div className="container---main announcement">
            <div className="announcement-contents">
              <div className="announcement-bar-header">
                LOCCAF CONVENTION 2025 IS HERE!
              </div>
              <div className="announcement-buttons">
                <a
                  href="https://forms.gle/9SYSwz7jZmLpLUF38"
                  target="_blank"
                  className="button bordered-white small w-inline-block"
                  rel="noreferrer"
                >
                  <div>REGISTER</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <h1>Cheer Up Brethren ... The Word Works!</h1>
        </div>

        <div className="footer-mid">
          <div className="mid-left">
            <h1>STAY UP TO DATE WITH US</h1>
            <form>
              <input type="email" placeholder="ENTER YOUR EMAIL" id="text" />
              <p></p>
            </form>
          </div>
          <div className="mid-right">
            <div className="locate-city right">
              <h5>CONVENTIONS</h5>
              <a href="/">International</a>
              <a href="#">North America</a>
              <a href="#">Europe</a>
            </div>

            <div className="locate-city right">
              <h5>ZONES</h5>
              <a href="#">Benin</a>
              <a href="#">Lagos</a>
              <a href="#">Asaba / Anambra</a>
              <a href="#">Abuja</a>
              <a href="#">Warri</a>
              <a href="#">Port Harcourt</a>
              <a href="#">North America</a>
              <a href="#">United Kingdom</a>
            </div>

            <div className="passion-city right">
              <h5>NAVIGATE</h5>
              <a href="us">About LOCCAF</a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdtXPd1CX6lOMDHHrOwqyBwK8pH5dqYTGCrbbguVIWgohNTiA/viewform"
                target="_blank"
                rel="noreferrer"
              >
                LCC
              </a>
              <a href="baptism">President's Office</a>
              <a href="baptism">Partnerships</a>
              <a href="prayer-request">Testimonies</a>
            </div>

            <div className="movement right">
              <h5>PODCAST</h5>
              <a
                href="https://anchor.fm/city-church-district/episodes/The-Cross---Part-2-2-e20amke"
                target="_blank"
                rel="noreferrer"
              >
                The Cross - Part 2.2
              </a>
              <a
                href="https://anchor.fm/city-church-district/episodes/The-Cross---Part-2-e20am3u"
                target="_blank"
                rel="noreferrer"
              >
                The Cross - Part 2
              </a>
              <a
                href="https://anchor.fm/city-church-district/episodes/The-Cross---Part-1-2-e200na8"
                target="_blank"
                rel="noreferrer"
              >
                The Cross - Part 1.2
              </a>
              <a
                href="https://anchor.fm/city-church-district/episodes/The-Cross---Part-1-e200mpp"
                target="_blank"
                rel="noreferrer"
              >
                The Cross - Part 1
              </a>
            </div>
          </div>
        </div>

        
        <div className="footer-bottom">
          <span id="ft-el">
            <p>&copy; {new Date().getFullYear()} Light of Christ Community Alumni Fellowship </p>
          </span>
          <span id="ft-el">
            <p href="#">Privacy</p>
            <p href="#">Policy</p>
          </span>
          <span id="ft-el">
            <p href="#">Terms +</p>
            <p href="#">Conditions</p>
          </span>

          <div className="sm-handles">
            <Link className="youtube handles" to="#" target="_blank">
              <FaYoutube color="#000" />
            </Link>
            <Link className="insta handles" to="#" target="_blank">
              <FaInstagram color="#000" />
            </Link>
            <Link className="facebook handles" to="#" target="_blank">
              <FaFacebook color="#000" />
            </Link>
            <Link className="twitter handles" to="#" target="_blank">
              <FaTwitter color="#000" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
