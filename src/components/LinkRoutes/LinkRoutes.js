import React from "react";
import { Link } from "react-router-dom";
import "./link-routes.css";

function LinkRoutes(props) {

  const path = window.location.pathname;
  const active = (params) => path.includes(params)

  return (
    <nav>
      <ul className="nav">
        <li className="nav__item">
          <Link className={active("/home") ? "nav__item--link--active" : "nav__item--link"} to="/home">
            Our Restaurant
          </Link>
        </li>
        <li className="nav__item">
          <Link className={active("/menu") ? "nav__item--link--active" : "nav__item--link"}  to="/menu">
            Menu
          </Link>
        </li>
        <li className="nav__item">
          <Link className={active("/contact") ? "nav__item--link--active" : "nav__item--link"} to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LinkRoutes;
