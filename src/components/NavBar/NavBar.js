import React from "react";
import "./navbar.scss";
import tapsRow from "../../tapsRow.jpg";
export default function NavBar() {
  return (
    <div>

      <img src={tapsRow} alt="row of taps" />

      <nav className="navbar">
        <h1>Le Bartender Tap House</h1>

        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              keg list
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              new keg
            </a>
          </li>
        </ul>
      </nav>
      <hr/>
    </div>
  );
}
