import React, { useState } from "react";
import QuestionsAndAnswers from "./QuestionsAndAnswers";

import NavBar from "./../nav bar/NavBar";
import Footer from "./../footer/Footer";

import "./FAQ.css";
import pharmacy from "./../../assets/img/pharmacy.svg";
import shop from "./../../assets/img/shop.svg";
import doctor_toys from "./../../assets/img/doctor-toys.svg";
import calendar from "./../../assets/img/calender.svg";
import left_shape_FQ from "./../../assets/img/left-shape-FQ.svg";
import right_shape_FQ from "./../../assets/img/right-shape-FQ.svg";

function FAQ() {
  const [questionData, setQuestionData] = useState([
    {
      id: 1,
      question: "هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟",
      answer: "متن پاسخ",
      isSelected: false,
    },
    {
      id: 2,
      question: "هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟",
      answer: "متن پاسخ",
      isSelected: false,
    },
    {
      id: 3,
      question: "درمانیتو فقط در تهران و کرج فعال هست؟",
      answer: "خیر، ما هم اکنون در تهران در حال فعالیت هستیم",
      isSelected: true,
    },
    {
      id: 4,
      question: "هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟",
      answer: "متن پاسخ",
      isSelected: false,
    },
  ]);

  const hadleOpenQuestion = (QuestionId) => {
    setQuestionData(
      questionData.map((item) => {
        if (item.id == QuestionId) {
          return { ...item, isSelected: !item.isSelected };
        } else {
          return { ...item, isSelected: false };
        }
      })
    );
  };
  return (
    <div>
      <NavBar />
      <div className='FAQ-main'>
        <main className='FAQ__blue-header'>
          <img
            className='FAQ__blue-header__left-shape'
            src={left_shape_FQ}
            alt='left_shape_FQ'
          />
          <img
            className='FAQ__blue-header__right-shape'
            src={right_shape_FQ}
            alt='right_shape_FQ'
          />
          <p>سوالات متداول</p>
        </main>
        <h2 className='header FAQ__title'>سوال شما درباره کدوم سرویس هست؟</h2>
        <main className='FAQ__cards'>
          <div className='FAQ__cards__card'>
            <div className='FAQ__cards__card__img'>
              <img src={pharmacy} alt='pharmacy' />
            </div>
            <div className='FAQ__titile'>داروخانه</div>
          </div>
          <div className='FAQ__cards__card FAQ__cards__card--deactive'>
            <div className='FAQ__cards__card__img'>
              <img src={shop} alt='pharmacy' />
            </div>
            <div className='FAQ__cards__card__titile'>فروشگاه</div>
          </div>
          <div className='FAQ__cards__card FAQ__cards__card--deactive'>
            <span>به زودی</span>
            <div className='FAQ__cards__card__img'>
              <img src={doctor_toys} alt='pharmacy' />
            </div>
            <div className='FAQ__cards__card__titile'>ویزیت آنلاین</div>
          </div>
          <div className='FAQ__cards__card FAQ__cards__card--deactive'>
            <span>به زودی</span>
            <div className='FAQ__cards__card__img'>
              <img src={calendar} alt='pharmacy' />
            </div>
            <div className='FAQ__cards__card__titile'>ویزیت آنلاین</div>
          </div>
        </main>
        <div className='FAQ__Questions-container '>
          {questionData.map((data) => {
            return (
              <QuestionsAndAnswers
                questionData={data}
                hadleOpenQuestion={hadleOpenQuestion}
              />
            );
          })}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default FAQ;
