import cls from "./QuestionCardList.module.css";
import QuestionCards from "../QuestionCards/QuestionCards";

function QuestionCardList({ cards }) {
  return (
    <div className={cls.cardList}>
      {cards.map((card, index) => {
        return <QuestionCards key={index} card={card} />;
      })}
    </div>
  );
}

export default QuestionCardList;
