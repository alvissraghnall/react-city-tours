import React, { Component } from "react";
import logo from "../../images/logo.png";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"


class Header extends Component {
  
  render(){
    let BarsIcon = <FontAwesomeIcon icon={faBars} />
    return (
      <header className="navbar">
        <div className = "navbar-logo">
          <img src={logo} alt="City Tours" className="navbar-logo-img" height="100%" />
        </div>
        <div className="desktop-nav"></div>
        <div className="mobile-btn">
          <Button rendered={BarsIcon} variant="rgba(250, 247, 244, .4)" classNom="nav-btn" inverted={true} />
        </div>
      </header>  
    )
  }
}

export default Header;