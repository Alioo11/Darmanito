import React from "react";
import "./MainPage.css";
import doctor from "./../../assets/img/doctor.svg";
import doctor_withBack from "./../../assets/img/Doctor-with-background.svg";

import verify from "./../../assets/img/verify.svg";
import time from "./../../assets/img/time.svg";
import search from "./../../assets/img/search.svg";

import app_prev_img from "./../../assets/img/preview-img.svg";

function MainPage() {
  return (
    <div>
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
              <button className='btn intro__content__btn intro__content__btn--active'>
                دانلود درمانیتو
              </button>
              <button className='btn intro__content__btn'>
                عضویت داروخانه ها
              </button>
            </div>
          </div>
        </section>
      </main>
      <main className='about'>
        <section className='about__content border'>
          <h2 className='header'>درباره درمانیتو</h2>
          <p about>
            درمانیتو یک سامانه است که امکان سفارش دارو، محصولات آرایشی بهداشتی
            نوبت گیری و مشاوره پزشکان را به راحتی و بصورت آنلاین فراهم کرده است
          </p>
          <div className='about__content__logo__container'>
            <div className='about__container__logo__item'>
              <img
                className='about__container__logo__logo'
                src={verify}
                alt='verify'
              />
              <p> جستجو سریع</p>{" "}
            </div>
            <div className='about__container__logo__item'>
              <img
                className='about__container__logo__logo'
                src={time}
                alt='time'
              />
              <p> به صرفه</p>{" "}
            </div>
            <div className='about__container__logo__item'>
              <img
                className='about__container__logo__logo'
                src={verify}
                alt='verify'
              />
              <p> راحت </p>{" "}
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
        <section className='about__app-prev border'>
          <img
            className='about__app-prev__img'
            src={app_prev_img}
            alt='app-prev'
          />
        </section>
      </main>
    </div>
  );
}

export default MainPage;
