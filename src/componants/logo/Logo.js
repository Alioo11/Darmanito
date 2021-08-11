import React from "react";
import "./Logo.css";
import logo from "./../../assets/img/logo.svg";

function Logo() {
  return (
    <div className='logo '>
      <div className='logo__img '>
        <img src={logo} alt='logo' />
      </div>
      <div className='logo__content'>
        <h2 className='logo__title '>درمانیتو</h2>
        <p className='Logo__des '>همراه شما در درمان</p>
      </div>
    </div>
  );
}

export default Logo;
