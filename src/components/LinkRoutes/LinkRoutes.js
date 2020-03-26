import React from "react";
import { Link } from "react-router-dom";
import "./link-routes.css";

const LinkRoutes = ({isHeaderMoved}) => {

  const path = window.location.pathname;
  const active = (params) => path.slice(-1) === params;

  return (
    <nav>
      <ul className="nav">
        <li className="nav__item">
          <Link className={active("/") ?
              isHeaderMoved ? "nav__item--link--active" : "nav__item--link--active-scroll"
                                              :
              isHeaderMoved ? "nav__item--link" : "nav__item--link-scroll"} to="/"
          >
            Our Restaurant
          </Link>
        </li>
        <li className="nav__item">
          <Link className={active("u") ?
              isHeaderMoved ? "nav__item--link--active" : "nav__item--link--active-scroll"
                                              :
              isHeaderMoved ? "nav__item--link" : "nav__item--link-scroll"} to="/menu"
          >
            Menu
          </Link>
        </li>
        <li className="nav__item">
          <Link className={active("t") ?
              isHeaderMoved ? "nav__item--link--active" : "nav__item--link--active-scroll"
                                              :
              isHeaderMoved ? "nav__item--link" : "nav__item--link-scroll"} to="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LinkRoutes;
