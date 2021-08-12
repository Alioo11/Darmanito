import React, { useState } from "react";
import "./FAQ.css";
import plus from "./../../assets/img/plus.svg";
import minus from "./../../assets/img/minus.svg";

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

  return <div></div>;
}

export default FAQ;

{
  /*








<div className={`questions-and-answers ${isSelected ? "open-answer" : ""}`}>
      <div className='qustion-section'>
        <div
          onClick={() => {
            hadleOpenQuestion(id);
          }}
          className='symbol'
        >
          <img
            className={`${isSelected ? "hide" : ""}`}
            src={plus}
            alt='plus'
          />
          <img
            className={`${isSelected ? "" : "hide"}`}
            src={minus}
            alt='minus'
          />
        </div>
        <p>{question}</p>
      </div>

      <div className={`answer-section ${isSelected ? "" : "hide"}`}>
        <p>{answer}</p>
      </div>
    </div>





          <div className='questions-and-answers-container'>
        {questionData.map((data) => {
          return (
            <QuestionAndAnswers
              questionData={data}
              hadleOpenQuestion={hadleOpenQuestion}
            />
          );
        })}
      </div>


*/
}
