import React from "react";
import "./FAQ.css";
import plus from "./../../assets/img/plus.svg";
import minus from "./../../assets/img/minus.svg";

function QuestionsAndAnswers({ questionData, hadleOpenQuestion }) {
  const { id, question, answer, isSelected } = questionData;
  return (
    <div>
      <div
        className={`FAQ__Questions ${
          isSelected ? "FAQ__Questions--open-answer" : ""
        }`}
      >
        <div className='FAQ__Questions__question'>
          <div
            onClick={() => {
              hadleOpenQuestion(id);
            }}
            className='FAQ__Questions__symbol'
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
          <p
            onClick={() => {
              hadleOpenQuestion(id);
            }}
          >
            {question}
          </p>
        </div>

        <div className={`FAQ__Questions__answer ${isSelected ? "" : "hide"}`}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default QuestionsAndAnswers;
