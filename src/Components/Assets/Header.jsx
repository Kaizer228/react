import React from "react";
import "./Header.css";
import logo from "../Assets/logo.png";

function Header() {
  return (
    <>
      <div className="Header">
        <nav>
          <ul className="ul-links">
            <li className="link">
              <a className="link" href="">
                Ability
              </a>
            </li>
            <li className="link">
              <a className="link" href="#Robot">
                Robots
              </a>
            </li>
            <li className="link">
              <a className="link" href="#Pets">
                Pets
              </a>
            </li>
            <img src={logo} alt="" className="logo" />
            <li className="link">
              <a className="link" href="#Zombie">
                Zombots
              </a>
            </li>
            <li className="link">
              <a className="link" href="#Sidekick">
                Sidekick
              </a>
            </li>
            <li className="link">
              <a className="link" href="">
                Story
              </a>
            </li>
          </ul>
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="#Robot">
                <li>Ability</li>
              </a>
              <a href="#Robot">
                <li>Robot</li>
              </a>
              <a href="#Pets">
                <li>Pets</li>
              </a>
              <a href="#Zombie">
                <li>Zombots</li>
              </a>
              <a href="#Sidekick">
                <li>Sidekick</li>
              </a>
              <a href="">
                <li>Story</li>
              </a>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
