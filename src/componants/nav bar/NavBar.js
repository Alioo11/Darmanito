import React, { useState } from "react";
import "./NavBar.css";
import Logo from "./../logo/Logo";
import close from "./../../assets/img/close.svg";

import { Link } from "react-router-dom";

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
              <Link to='/'>صفحه اصلی </Link>
            </li>
            <li className='nav__links'>
              <Link to='FAQ'> درباره ما </Link>
            </li>
            <li className='nav__links'>
              <Link to='contact-us'> تماس باما </Link>
            </li>
            <li className='nav__links'>
              <Link to='membership'>عضویت داروخانه ها </Link>
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
              <Link to='/'> صفحه اصلی </Link>
            </li>
            <li className='responsive-nav__links'>
              <Link to='membership'> عضویت در داروخانه ها </Link>
            </li>
            <li className='responsive-nav__links'>
              <Link to='FAQ'> درباره ما </Link>
            </li>
            <li className='responsive-nav__links'>
              <Link to='contact-us'> تماس باما </Link>
            </li>
            <li className='responsive-nav__links'>
              <Link to='FAQ'> سوالات متداول </Link>
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
