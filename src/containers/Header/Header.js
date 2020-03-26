import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import "./header.css";
import LinkRoutes from "../../components/LinkRoutes/LinkRoutes";
import logo3x from "../../assets/images/logo/restaurant-logo@3x.png";
import logo2x from "../../assets/images/logo/restaurant-logo@2x.png";
import logo from "../../assets/images/logo/restaurant-logo.png";
import logo3xBlack from "../../assets/images/logo-black/restaurant-logo@3x.png";
import logo2xBlack from "../../assets/images/logo-black/restaurant-logo@2x.png";
import logoBlack from "../../assets/images/logo-black/restaurant-logo.png";
import Search from "../../assets/images/icons/Search";
import User from "../../assets/images/icons/User";

function Header(props) {
  const { filter, setFilter } = useContext(AppContext);
  const [isHeaderMoved, setIsHeaderMoved] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < 300) {
        if (!isHeaderMoved) {
          setIsHeaderMoved(true);
        }
      } else if (isHeaderMoved) {
        setIsHeaderMoved(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHeaderMoved]);

  return (
    <header className={isHeaderMoved ? "header" : "sticky"}>
      <div className="container">
        <div className="header__menu">
          <div className="header__logo">
            {isHeaderMoved ? (
                <img
                    className="header__logo--img"
                    srcSet={`${logo} 320w,
              ${logo2x} 480w,
              ${logo3x} 800w`}
                    src={logo3x}
                    alt="logo"
                />
            ) : (
                <img
                    className="header__logo--img"
                    srcSet={`${logoBlack} 320w,
              ${logo2xBlack} 480w,
              ${logo3xBlack} 800w`}
                    src={logo3xBlack}
                    alt="logo"
                />
            )}
          </div>
          <LinkRoutes isHeaderMoved={isHeaderMoved} />
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
              <Search
                styles="header__label--search"
                fill={isHeaderMoved ? "#fff" : "#000"}
                width="20px"
                height="20px"
              />
            </label>
            <div className="header__user">
              <p style={isHeaderMoved ? {color: "#fff"} : {color:"#000"}} className="header__user-name">John C.</p>
              <User fill={isHeaderMoved ? "#fff" : "#000"} width={"20"} height={"20"} />
            </div>
          </div>
        </div>
        <h1 style={!isHeaderMoved ? {display:"none"} : {display: "block"}} className="header__title">Menu</h1>
      </div>
    </header>
  );
}

export default Header;
