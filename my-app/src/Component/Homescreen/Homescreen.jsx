import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import "./Homescreen.css";
import Temperature from "./Temperature/Temperature";
import Room from "./Room/Room"; 
import Login from "./Login/Login"; 
import Analytics from "./Analytics/Analytics";

const Homescreen = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Temperature");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="dashboard-container">
      <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
        <div className="menu-content">
          <div className="profile-section">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMM19ibc2ZGK72i5uLElaeQOu33N02S8xeQ&s"
              alt="Profile"
              className="profile-pic"
            />
            <div className="profile-infos">
              <p className="profile-names">Logan</p>
              <p className="profile-roles">Owner</p>
            </div>
          </div>
          <nav className="menu-items">
            <button className="menu-item">
              <IoMdHome /> Home
            </button>
            <button className="menu-item">
              <MdOutlineMeetingRoom /> User Controls
            </button>
            <button className="menu-item">⚙️ Settings</button>
          </nav>
        </div>
      </div>

      <header className="header">
        <button className="menu-button" onClick={toggleMenu}>
          <CiMenuBurger />
        </button>
        <button className="arrow-button" onClick={() => setMenuOpen(false)}>
          <FaLongArrowAltRight />
        </button>
      </header>

      {activeComponent === "Temperature" && <Temperature />}
      {activeComponent === "Analytics" && <Analytics />}
      {activeComponent === "Room" && <Room />}
      {activeComponent === "Login" && <Login/>}

      <div className="bottom-nav">
        <button className="nav-button active" onClick={() => setActiveComponent("Temperature")}>
          <IoMdHome size={20} />
          <p>Home</p>
        </button>
        <button className="nav-button" onClick={() => setActiveComponent("Room")}>
          <MdOutlineMeetingRoom size={20} />
          <p>Rooms</p>
        </button>
        <button className="nav-button" onClick={() => setActiveComponent("Analytics")}>
          <IoMdAnalytics size={20} />
          <p>Analytics</p>
        </button>
        <button className="nav-button" onClick={() => setActiveComponent("Login")}> 
          <RiAdminFill size={20} />
          <p>Admin</p>
        </button>
      </div>
    </div>
  );
};

export default Homescreen;
