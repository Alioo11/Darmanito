import React from "react";
import "./Footer.css";
import twitter from "./../../assets/img/twitter.svg";
import instagram from "./../../assets/img/instagram.svg";
import Logo from "./../logo/Logo";
import linkedin from "./../../assets/img/linkedin.svg";
import black_bazar from "./../../assets/img/black-bazar.svg";
import sib_app_black from "./../../assets/img/sib-app-black.svg";
import support_phone_number from "./../../assets/img/support-phone-number.svg";

function Footer() {
  return (
    <div>
      <section className='support'>
        <div className='support__icon'>
          <img src={support_phone_number} alt='support_phone_number' />
        </div>
        <div className='support__content'>
          <h2 className='support__content__title'>پشتیبانی درمانیتو</h2>
          <p className='support__content__text'>
            پاسخگویی در روزهای کاری از 9 صبح تا 9 شب
          </p>
        </div>
      </section>
      <footer className='footer'>
        <section className='footer__media'>
          <div className='footer__media__logo'>
            <Logo />
          </div>
          <div className='footer__media__content'>
            <h2>سوپر اپلیکیشن حوزه درمان و سلامت</h2>
            <p>تمام حقوق مادی و معنوی این وبسایت متعلق به درمانیتو است</p>
          </div>
          <div className='footer__media__media-list'>
            <img src={linkedin} alt='linkedin' />
            <img src={twitter} alt='twitter' />
            <img src={instagram} alt='instagram' />
          </div>
        </section>
        <section className='footer__links'>
          <ul>
            <li className='footer__links__header'>خدمات درمانیتو </li>
            <li className='header footer__links__item footer__links__item--active '>
              <a href='#'> داروخانه آنلاین</a>
            </li>
            <li className='footer__links__item'>
              <a href='#'> فروشگاه آنلاین</a>
            </li>
            <li className='footer__links__item'>
              <a href='#'> ویزیت آنلاین</a>
            </li>
            <li className='footer__links__item'>
              <a href='#'> پرونده پزشکی</a>
            </li>
          </ul>
          <ul>
            <li className='footer__links__header'>صفحات درمانیتو </li>
            <li className='footer__links__item'>
              <a href='#'> تماس باما </a>
            </li>
            <li className='footer__links__item'>
              <a href='#'> درباره ما</a>
            </li>
            <li className='footer__links__item'>
              <a href='#'> سوالات متداول</a>
            </li>
            <li className='footer__links__item'>
              <a href='#'>قوانین و شرایط</a>
            </li>
          </ul>
        </section>
        <section className='footer__download'>
          <h3 className='footer__download__title'>دانلود درمانیتو</h3>
          <div className='footer__download__download-box'>
            <button className='footer__download__download-box__bazar'>
              <img src={black_bazar} alt='black_bazar' />
            </button>
            <button className='footer__download__download-box__sib'>
              <img src={sib_app_black} alt='sib_app_black' />
            </button>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
