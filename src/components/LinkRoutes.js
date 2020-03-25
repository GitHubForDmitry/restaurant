import React from "react";
import { Link } from "react-router-dom";

function LinkRoutes(props) {
  return (
    <nav>
      <li>
        <Link to="/">Our Restaurant</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </nav>
  );
}

export default LinkRoutes;
