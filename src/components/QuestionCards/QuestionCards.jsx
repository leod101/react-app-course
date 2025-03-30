import React from "react";
import cls from "./QuestionCards.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function QuestionCards({ card }) {
  const navigate = useNavigate();
  return (
    <div className={cls.card}>
      <div className={cls.cardLabel}>
        <div>Level: {card.level}</div>
        <div>{card.completed ? "Completed" : "Not Completed"}</div>
      </div>

      <h5 className={cls.cardTitle}>{card.question}</h5>

      <div className={cls.cardAnswers}>
        <label>short answer :</label>
        <p className={cls.cardAnswer}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          recusandae aper
        </p>
      </div>
      <Button onClick={() => navigate(`/question/${card.id}`) }>View</Button>
    </div>
  );
}

export default QuestionCards;
