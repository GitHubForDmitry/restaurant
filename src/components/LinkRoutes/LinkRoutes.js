import React from "react";
import { Link } from "react-router-dom";
import "./link-routes.css";

function LinkRoutes(props) {

  const path = window.location.pathname;
  const active = (params) => path.slice(-1) === params;

  return (
    <nav>
      <ul className="nav">
        <li className="nav__item">
          <Link className={active("/") ? "nav__item--link--active" : "nav__item--link"} to="/">
            Our Restaurant
          </Link>
        </li>
        <li className="nav__item">
          <Link className={active("u") ? "nav__item--link--active" : "nav__item--link"}  to="/menu">
            Menu
          </Link>
        </li>
        <li className="nav__item">
          <Link className={active("t") ? "nav__item--link--active" : "nav__item--link"} to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LinkRoutes;
