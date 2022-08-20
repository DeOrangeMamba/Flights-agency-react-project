import React from "react";
import { Outlet, Link } from "react-router-dom";
const MyNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav mr-auto">
            <div>................................</div>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/Signup">
              New here ? Signup !
              </a>
            </li>
            <div>..............</div>
            <div className="nav-item">
            <li className="nav-item">
              <a className="nav-link " href="http://localhost:3000/LoveMargo">
                Love MargoAirlines? Click
              </a>
            </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MyNav;
