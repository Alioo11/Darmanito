import React from "react";
import "./Membership.css";
import NavBar from "./../nav bar/NavBar";
import Footer from "./../footer/Footer";

import person_icon from "./../../assets/img/person-icon.svg";
import map_marker from "./../../assets/img/map-marker.svg";
import left_circle from "./../../assets/img/left-circle.svg";
import right_circle from "./../../assets/img/right-cricle.svg";
import drug from "./../../assets/img/drug.svg";
import store_subcribe_page from "./../../assets/img/store-subcribe-page.svg";

function Membership() {
  return (
    <div>
      <NavBar />
      <main className='about-membership'>
        <div className='about-membership__cards'>
          <div className='about-membership__cards__card'>
            <div className='about-membership__cards__card__icon '>
              <img src={person_icon} alt='preson_icon' />
            </div>

            <div className='about-membership__cards__card__title '>
              <h2>نام داروخانه شما</h2>
              <span>شبانه روزی</span>
            </div>

            <div className='about-membership__cards__card__content '>
              <img src={map_marker} alt='map_marker' />
              درمانیتو ، سرویس داروخانه ، داروخانه شما
            </div>
          </div>
          <div className='about-membership__cards__card'>
            <div className='about-membership__cards__card__icon '>
              <img src={person_icon} alt='preson_icon' />
            </div>

            <div className='about-membership__cards__card__title '>
              <h2>نام داروخانه شما</h2>
            </div>

            <div className='about-membership__cards__card__content '>
              <img src={map_marker} alt='map_marker' />
              درمانیتو ، سرویس داروخانه ، داروخانه شما
            </div>
          </div>
          <div className='about-membership__cards__card'>
            <div className='about-membership__cards__card__icon '>
              <img src={person_icon} alt='preson_icon' />
            </div>

            <div className='about-membership__cards__card__title '>
              <h2>نام داروخانه شما</h2>
              <span>شبانه روزی</span>
            </div>

            <div className='about-membership__cards__card__content '>
              <img src={map_marker} alt='map_marker' />
              درمانیتو ، سرویس داروخانه ، داروخانه شما
            </div>
          </div>
        </div>
        <div className='about-membership__content'>
          <div className='about-membership__content__titile'>
            <h2>شما هم در سلامت و بهبود مردم کشورمون موثر باشید</h2>
          </div>
          <p className='about-membership__content__content'>
            با ثبت نام به عنوان داروخانه یا فروشگاه و داروخانه شما هم به سیستم
            درمان کمک کنید و به هزاران کاربر خدمات ارائه بدین و روزانه درآمد
            سفارش های خودتون رو تسویه کنید
          </p>
          <div className='input-section about-membership__content__input'>
            <input placeholder='شماره همراه را وارد کنید ' type='text' />
            <button>ثبت نام سریع</button>
          </div>
        </div>
      </main>
      <main className='membership__blue-statics'>
        <img
          className='membership__blue-statics__left-circle'
          src={left_circle}
          alt='left-circle'
        />
        <img
          className='membership__blue-statics__right-circle'
          src={right_circle}
          alt='right-circle'
        />
        <div className='membership__blue-statics__section'>
          <p>تعداد داروخانه و مراکز</p>
          <h2>120,000</h2>
        </div>
        <div className='membership__blue-statics__section'>
          <p>تعداد داروخانه و مراکز</p>
          <h2>120,000</h2>
        </div>
        <div className='membership__blue-statics__section'>
          <p> تعداد کاربران درمانیتو </p>
          <h2>120,000</h2>
        </div>
      </main>
      <main className='membership-about-facilities'>
        <section className='membership-about-facilities__title'>
          <h3 className='header'>در درمانیتو چه خدمات ارائه خواهید داد؟</h3>
          <p id='membership-about-description'></p>
        </section>
        <section className='membership-about-facilities__cards'>
          <div className='membership-about-facilities__cards__card'>
            <div className='membership-about-facilities__cards__card__img'>
              <img src={store_subcribe_page} alt='store_subcribe_page' />
            </div>
            <div className='membership-about-facilities__cards__card__title'>
              <h4 id='card-makeup-store'></h4>
            </div>
            <div className='membership-about-facilities__cards__card__content'>
              <p>
                مایل هستم فقط بعنوان داروخانه فعالیت کنم و در بخش صرفا سفارش
                دارو با عکس نسخه به بیماران کمک رسانی کنم{" "}
              </p>
            </div>
            <div className='membership-about-facilities__cards__card__btn'>
              <button className='btn'>ثبت نام </button>
            </div>
          </div>
          <div className='membership-about-facilities__cards__card'>
            <div className='membership-about-facilities__cards__card__img'>
              <img src={drug} alt='drug' />
            </div>
            <div className='membership-about-facilities__cards__card__title'>
              <h4 id='card-medstore'></h4>
            </div>
            <div className='membership-about-facilities__cards__card__content'>
              <p>
                مایل هستم فقط بعنوان داروخانه فعالیت کنم و در بخش صرفا سفارش
                دارو با عکس نسخه به بیماران کمک رسانی کنم{" "}
              </p>
            </div>
            <div className='membership-about-facilities__cards__card__btn'>
              <button className='btn'>ثبت نام </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Membership;
