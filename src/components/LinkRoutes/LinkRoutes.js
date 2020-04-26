import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./link-routes.css";
import Menu from "../../assets/images/icons/Menu";
import PropTypes from "prop-types";

class LinkRoutes extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      path: this.props.location.pathname
    };
  }
  active = (params) => this.state.path.slice(-1) === params;
  handleOpen = () => this.setState({open: !this.state.open});

  render() {
    const {isHeaderMoved} = this.props;
    const { open } = this.state;
    return (
        <nav>
          <button onClick={this.handleOpen} className="burger-menu">

            <Menu fill={isHeaderMoved ? "#fff" : "#000"}  width="30px" height="30px" />
          </button>

          <ul style={open && window.innerWidth < 669 ? {opacity: "0"} : {opacity: "1"}} className="nav">
            <li className="nav__item">
              <Link className={this.active("/") ?
                  isHeaderMoved ? "nav__item--link--active" : "nav__item--link--active-scroll"
                  :
                  isHeaderMoved ? "nav__item--link" : "nav__item--link-scroll"} to="/"
              >
                Our Restaurant
              </Link>
            </li>
            <li className="nav__item">
              <Link className={this.active("u") ?
                  isHeaderMoved ? "nav__item--link--active" : "nav__item--link--active-scroll"
                  :
                  isHeaderMoved ? "nav__item--link" : "nav__item--link-scroll"} to="/menu"
              >
                Menu
              </Link>
            </li>
            <li className="nav__item">
              <Link className={this.active("t") ?
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


}

LinkRoutes.propTypes = {
  isHeaderMoved: PropTypes.bool
};

export default withRouter(LinkRoutes);
