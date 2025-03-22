import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import Logo from "../../assets/images/loccaf-logo-white.png";
import Menu from "../Navbar/Menu";
import { useGlobalContext } from "../../context";
import "./index.scss";

const Navbar = () => {
  const {
    setOpenMenu,
    openMenu,
  } = useGlobalContext();

  const [dropdownValue, setDropdownValue] = useState("International");
  const menuItems = ["International", "North America", "Europe"];

  const handleMenuClick = (value) => {
    setDropdownValue(value);
  };

  if (openMenu) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {openMenu && <Menu />}
      <div className="nav-bar">
        <div className="logo1-con">
          <Link className="logo1" to="/">
            <h3>LIGHT OF CHRIST</h3>
            <h3>COMMUNITY ALUMNI</h3>
            <h3>FELLOWSHIP</h3>
          </Link>

          <Link to="/">
            <img src={Logo} alt="" />
          </Link>

          <div className="dropdown">
            <button className="drop-btn">
              {dropdownValue} <FiChevronDown />
            </button>
            <div className="menu">
              <ul>
                {menuItems
                  .filter(item => item !== dropdownValue)
                  .map((item) => (
                    <li key={item}>
                      <Link to={`/${item.toLowerCase().replace(" ", "")}`} onClick={() => handleMenuClick(item)}>
                        {item}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <nav>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/about"
            className="hide"
          >
            ABOUT
          </NavLink>


          <div className="dropdown">
            <button className="drop-btn hide ">MEDIA</button>
            <div className="menu hide">
              <ul>
                <li>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    ZOOM
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@loccafmedia8814"
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIDEOS
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/show/6iOGsfojd34b5SBPlPOShJ?si=71jdz_htT3CMu6jeTEgdXQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LIGHTING UP OUR WORLD
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button
            exact="true"
            activeclassname="active"
            className="menu"
            onClick={() => setOpenMenu(true)}
          >
            MENU
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
