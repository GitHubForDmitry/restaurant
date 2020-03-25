import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./header.css";
import LinkRoutes from "../../components/LinkRoutes/LinkRoutes";
import logo3x from "../../assets/images/logo/restaurant-logo@3x.png";
import logo2x from "../../assets/images/logo/restaurant-logo@2x.png";
import logo from "../../assets/images/logo/restaurant-logo.png";
import search from "../../assets/images/icons/search.svg";
import user from "../../assets/images/icons/user.svg";

function Header(props) {
  const { filter, setFilter } = useContext(AppContext);
  return (
    <header className="header">
      <div className="container">
        <div className="header__menu">
          <div className="header__logo">
            <img
              className="header__logo--img"
              srcSet={`${logo} 320w,
              ${logo2x} 480w,
              ${logo3x} 800w`}
              src={logo3x}
              alt="logo"
            />
          </div>
          <LinkRoutes />
          <div className="header__wrapper--input">
          <label className="header__label" htmlFor="search">
            <input
                className="header__input"
                value={filter.toLowerCase()}
              type="text"
              onChange={e => setFilter(e.target.value)}
              id="search"
              placeholder="Try « Chicken cotoletta »"
            />
            <img className="header__label--search" src={search} alt="search"/>
          </label>
          <div className="header__user">
            <p className="header__user-name">John C.</p>
            <img src={user} alt="user"/>
          </div>
        </div>
        </div>
        <h1 className="header__title">Menu</h1>
      </div>
    </header>
  );
}

export default Header;
