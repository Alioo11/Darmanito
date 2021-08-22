import React from "react";
import "./ContactUs.css";
import NavBar from "./../nav bar/NavBar";
import Footer from "./../footer/Footer";

import left_shape_FQ from "./../../assets/img/left-shape-FQ.svg";
import right_shape_FQ from "./../../assets/img/right-shape-FQ.svg";

function ContactUs() {
  return (
    <div>
      <NavBar />
      <div className='contact-us-main'>
        <div className='contanct-us__blue-header'>
          <img
            className='contanct-us__blue-header__right-shape'
            src={right_shape_FQ}
            alt='left_shape_FQ'
          />
          <div>تماس باما</div>
          <img
            className='contanct-us__blue-header__left-shape'
            src={left_shape_FQ}
            alt='left_shape_FQ'
          />
        </div>
        <main className='contanct-us'>
          <section className='contact-us__map'>
            <div className='contact-us__map__card'>
              <div className='contact-us__map__card__address '>
                <p>آدرس</p>
                <p>
                  تهران، طرشت، خیابان شهید چوب تراش، خیابان شهید حسین مردی،
                  بن‌بست پنجم، پلاک 15، واحد 1
                </p>
              </div>
              <div className='contact-us__map__card__email '>
                <h3>ایمیل</h3>
                <p>info@nahiraTech.com</p>
              </div>
              <div className='contact-us__map__card__phone '>
                <h3>شماره ثابت</h3>
                <p>۰۲۱-۴۴۲۱۹۶۷۱</p>
              </div>
            </div>
          </section>
          <section className='contact-us__form'>
            <form action=''>
              <p>نام و نام خانوادگی</p>
              <input
                className='contact-us__form__name--active'
                placeholder='ایمیل یا شماره همراه'
                type='text'
                name='name'
              />
              <p>ایمیل یا شماره همراه</p>
              <input
                placeholder='ایمیل یا شماره همراه'
                type='text'
                name='email'
              />
              <p>پیام شما</p>
              <textarea
                placeholder='ایمیل یا شماره همراه'
                name='massage'
                id='massage'
                cols='30'
                rows='10'
              ></textarea>
              <button className='btn contact-us__form__btn'>ارسال پیام</button>
            </form>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
