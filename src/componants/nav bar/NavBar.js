import React, { useState } from "react";
import "./NavBar.css";
import Logo from "./../logo/Logo";
import close from "./../../assets/img/close.svg";

function NavBar() {
  const [openNav, setOpenNav] = useState(true);
  return (
    <div>
      <nav className={`nav`}>
        <div
          onClick={() => {
            setOpenNav(!openNav);
          }}
          className='nav__burger'
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <button className='btn nav__btn'>دانلود درمانیتو</button>
        <div className='nav__links__container'>
          <ul>
            <li className='nav__links nav__links--active'>
              <a href='#'> صفحه اصلی </a>
            </li>
            <li className='nav__links'>
              <a href='#'> ما درباره </a>
            </li>
            <li className='nav__links'>
              <a href='#'> تماس باما </a>
            </li>
            <li className='nav__links'>
              <a href='#'>عضویت داروخانه ها </a>
            </li>
          </ul>
        </div>
        <div className='nav__logo'>
          <Logo />
        </div>
      </nav>
      <div className={`responsive-nav ${openNav ? "" : "unhide"}`}>
        <div className='responsive-nav__logo__container'>
          <div>
            <Logo />
          </div>
          <div className='responsive-nav__close'>
            <img
              onClick={() => {
                setOpenNav(!openNav);
              }}
              src={close}
              alt='close'
            />
          </div>
        </div>
        <button className='btn responsive-nav__btn responsive-nav__btn--up'>
          دانلود مستقیم درمانیتو
        </button>
        <div className='responsive-nav__links__container'>
          <ul>
            <li className='responsive-nav__links responsive-nav__links--active'>
              <a href='#'> صفحه اصلی </a>
            </li>
            <li className='responsive-nav__links'>
              <a href='#'> عضویت در داروخانه ها </a>
            </li>
            <li className='responsive-nav__links'>
              <a href='#'> درباره ما </a>
            </li>
            <li className='responsive-nav__links'>
              <a href='#'> تماس باما </a>
            </li>
            <li className='responsive-nav__links'>
              <a href='#'> سوالات متداول </a>
            </li>
            <li className='responsive-nav__links'>
              <a href='#'> قوانین و شرایط </a>
            </li>
          </ul>
          <button className='btn responsive-nav__btn responsive-nav__btn--down'>
            دانلود مستقیم درمانیتو
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
