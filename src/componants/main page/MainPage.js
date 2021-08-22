import React from "react";
import "./MainPage.css";

import { Link } from "react-router-dom";

import NavBar from "./../nav bar/NavBar";
import Footer from "./../footer/Footer";

import doctor from "./../../assets/img/doctor.svg";
import doctor_withBack from "./../../assets/img/Doctor-with-background.svg";

import verify from "./../../assets/img/verify.svg";
import time from "./../../assets/img/time.svg";
import search from "./../../assets/img/search.svg";
import app_prev_img from "./../../assets/img/preview-img.svg";

import shop from "./../../assets/img/shop.svg";
import pharmacy from "./../../assets/img/pharmacy.svg";
import doctor_toys from "./../../assets/img/doctor-toys.svg";
import calender from "./../../assets/img/calender.svg";
import check from "./../../assets/img/check.svg";
import arrow from "./../../assets/img/arrow.svg";

import android from "./../../assets/img/android.svg";
import bazar from "./../../assets/img/bazar.svg";
import sibapp from "./../../assets/img/sibapp.svg";
import app_prev from "./../../assets/img/app-prev.svg";
import cloud_right from "./../../assets/img/cloud-right.svg";
import could_left from "./../../assets/img/Path 15701.svg";

import subscribe_img from "./../../assets/img/subscribe-img.svg";
import subscription_bg from "./../../assets/img/subscription-bg.svg";

function MainPage() {
  return (
    <div>
      <NavBar />
      <div className='main-body'>
        <main className='intro'>
          <section className='intro__doc-img '>
            <img
              className='intro__doc-img__doc-with-back'
              src={doctor_withBack}
              alt='doctor_withBack'
            />
            <img className='intro__doc-img__doc' src={doctor} alt='doctor' />
          </section>
          <section className='intro__content'>
            <div>
              <h1 className='intro__content__title'>اپلیکیشن درمانیتو</h1>
              <p className='intro__content__content'>
                درمانیتو، سامانه هوشمند درمان و سلامت
              </p>
              <div className='intro__content__btn-box'>
                <button
                  id='intro-download-btn'
                  className='btn intro__content__btn intro__content__btn--active'
                ></button>
                <button className='btn intro__content__btn'>
                  <Link className='link' to='membership'>
                    عضویت داروخانه ها
                  </Link>
                </button>
              </div>
            </div>
          </section>
        </main>
        <main className='about'>
          <section className='about__content '>
            <h2 id='about-header' className='header'></h2>
            <p
              id='about-description'
              className='about__content__description'
            ></p>
            <div className='about__content__logo__container'>
              <div className='about__container__logo__item'>
                <img
                  className='about__container__logo__logo'
                  src={verify}
                  alt='verify'
                />
                <p> جستجو سریع</p>
              </div>
              <div className='about__container__logo__item'>
                <img
                  className='about__container__logo__logo'
                  src={time}
                  alt='time'
                />
                <p> به صرفه</p>
              </div>
              <div className='about__container__logo__item'>
                <img
                  className='about__container__logo__logo'
                  src={verify}
                  alt='verify'
                />
                <p> راحت </p>
              </div>
              <div className='about__container__logo__item'>
                <img
                  className='about__container__logo__logo'
                  src={search}
                  alt='search'
                />
                <p> جستجو سریع</p>
              </div>
            </div>
          </section>
          <section className='about__app-prev '>
            <img
              className='about__app-prev__img'
              src={app_prev_img}
              alt='app-prev'
            />
          </section>
        </main>
        <main className='facilities-container'>
          <h2 id='facilitiess-title' className='header facilities__titile'></h2>
          <div className='facilities'>
            <section className='facilities__content__box '>
              <h2>داروخانه آنلاین</h2>
              <p id='facilities-description'></p>
              <div className='facilities__content__box__step-by-step'>
                <div className='facilities__content__box__step-by-step__logo'>
                  <div className='facilities__arrow'>
                    <img src={arrow} alt='arrow' />
                  </div>
                  <div className='hr'></div>
                  <div className='facilities__arrow'>
                    <img src={arrow} alt='arrow' />
                  </div>
                  <div className='hr'></div>
                  <div className='facilities__check'>
                    <img src={check} alt='check' />
                  </div>
                </div>

                <div className='facilities__content__box__step-by-step__content'>
                  <h2>قدم اول</h2>
                  <p>
                    وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید
                  </p>
                  <h2>قدم دوم</h2>
                  <p>
                    بعد از ارسال عکس نسخه، باید آدرس محل خودتون رو وارد کنید
                  </p>
                  <h2>قدم سوم</h2>
                  <p>
                    اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل
                    سفارش باشید
                  </p>
                </div>
              </div>
            </section>
            <section className='facilities__logo-box '>
              <div className='facilities__logo-box__item'>
                <img src={pharmacy} alt='pharmacy' />
                <p>داروخانه</p>
              </div>
              <div className='facilities__logo-box__item facilities__logo-box__item--deactive'>
                <img src={shop} alt='pharmacy' />
                <p>فروشگاه</p>
              </div>
              <div className='facilities__logo-box__item facilities__logo-box__item--deactive'>
                <img src={doctor_toys} alt='pharmacy' />
                <p>ویزیت آنلاین</p>
              </div>
              <div className='facilities__logo-box__item facilities__logo-box__item--deactive'>
                <img src={calender} alt='pharmacy' />
                <p> نوبت دهی آنلاین </p>
              </div>
            </section>
          </div>
        </main>
        <main className='app'>
          <img className='app__left-cloud' src={could_left} alt='could_left' />
          <img
            className='app__right-cloud'
            src={cloud_right}
            alt='cloud_right'
          />
          <section className='app__phone'>
            <img src={app_prev} alt='' />
          </section>
          <section className='app__content'>
            <h2 className='app__content__header'>دانلود اپلیکیشن درمانیتو</h2>
            <p id='app-descriptopn' className='app__content__text'></p>
            <div className='input-section app__content__input-section'>
              <input type='text' placeholder='شماره همراه را وارد کنید ' />
              <button>بفرست</button>
            </div>
            <div className='app__content__app-box'>
              <img src={android} alt='android' />
              <img src={bazar} alt='bazar' />
              <img src={sibapp} alt='sibapp' />
            </div>
          </section>
        </main>
        <main className='membership'>
          <img
            className='membership__subscription-bg'
            src={subscription_bg}
            alt='subscription_bg'
          />
          <div className='membership__container'>
            <div className='membership__subscription'>
              <img src={subscribe_img} alt='subscribe_img' />
            </div>
            <div className='membership__content'>
              <h2 id='memebership-title' className='header'></h2>
              <p
                id='membership-description'
                className='membership__content__text'
              ></p>
              <div className='input-section membership__content__input'>
                <input placeholder='شماره همراه را وارد کنید ' type='text' />
                <button>ثبت نام سریع</button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
