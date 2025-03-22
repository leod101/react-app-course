import React from "react";
import cls from "./QuestionCards.module.css";
import Button from "../Button/Button";

function QuestionCards() {
  return (
    <div className={cls.card}>
      <div className={cls.cardLabel}>
        <div>Level: 1</div>
        <div>Not Complited</div>
      </div>

      <h5 className={cls.cardTitle}> ce asta e ?</h5>
      
      <div className={cls.cardAnswers}>
        <label>short answer :</label>
        <p className={cls.cardAnswer}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          recusandae aper
        </p>
      </div>
      <Button onClick={() => {}}>View</Button>
    </div>
  );
}

export default QuestionCards;
