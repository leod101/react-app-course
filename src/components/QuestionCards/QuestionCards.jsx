import React from "react";
import cls from "./QuestionCards.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Badge from "../Badge/Badge";

function QuestionCards({ card }) {
  const navigate = useNavigate();

  const levelVariant =
    card.level === 1 ? "primary" : card.level === 2 ? "warning" : "alert";
  const completedVariant = card.completed ? "success" : "primary";

  return (
    <div className={cls.card}>
      <div className={cls.cardLabel}>
        <Badge variant={levelVariant}>Level: {card.level}</Badge>
        <Badge variant={completedVariant}>
          {card.completed ? "Completed" : "Not Completed"}
        </Badge>
      </div>

      <h5 className={cls.cardTitle}>{card.question}</h5>

      <div className={cls.cardAnswers}>
        <label>short answer :</label>
        <p className={cls.cardAnswer}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          recusandae aper
        </p>
      </div>
      <Button onClick={() => navigate(`/question/${card.id}`)}>View</Button>
    </div>
  );
}

export default QuestionCards;
