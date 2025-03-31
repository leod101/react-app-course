import cls from "./QuestionCardList.module.css";
import QuestionCards from "../QuestionCards/QuestionCards";
import { memo } from "react";

const QuestionCardList = memo(({ cards }) => {
  return (
    <div className={cls.cardList}>
      {cards.map((card, index) => (
        <QuestionCards key={index} card={card} />
      ))}
    </div>
  );
});

export default QuestionCardList;
