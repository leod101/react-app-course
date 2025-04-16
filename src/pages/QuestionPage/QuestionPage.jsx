import React, { useEffect, useState, useId } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Badge from "../../components/Badge/Badge";
import cls from "./QuestionPage.module.css";
import Button from "../../components/Button/Button";
import { API_URL } from "../../constants"; // убедись, что путь и файл существуют
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/Loader/Loader";
import SmollLoader from "../../components/Loader/SmollLoader";

function QuestionPage() {
  const checkboxId = useId();
  const navigate = useNavigate();
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [isChecked, setIsChecked] = useState(true);

  const levelVariant = () => {
    if (!card) return "primary";
    return card.level === 1
      ? "primary"
      : card.level === 2
        ? "warning"
        : "alert";
  };

  const completedVariant = () => (card?.completed ? "success" : "primary");

  const onCheckboxChangeHandler = (e) => {
    setIsChecked(!isChecked);
    updateCard(!isChecked);
  };

  const [fetchCard, isCardLoading] = useFetch(async () => {
    const response = await fetch(`${API_URL}react/${id}`);
    if (!response.ok) {
      throw new Error("Ошибка загрузки карточки");
    }
    const data = await response.json();
    setCard(data);
    setIsChecked(data.completed); // установить начальное состояние чекбокса
  });

  const [updateCard, isCardUpdating] = useFetch(async (isChecked) => {
    const response = await fetch(`${API_URL}react/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed: isChecked }),
    });
    const data = await response.json();
    // здесь можно добавить отправку статуса на сервер, если нужно
    setCard(data);
  });

  useEffect(() => {
    fetchCard();
  }, []);

  return (
    <>
      {isCardLoading && <Loader />}

      {card && (
        <div className={cls.conteiner}>
          <div className={cls.cardLabel}>
            <Badge variant={levelVariant()}>Level: {card.level}</Badge>
            <Badge variant={completedVariant()}>
              {card.completed ? "Completed" : "Not Completed"}
            </Badge>
            {card.editDate && (
              <p className={cls.editDate}>Edited: {card.editDate}</p>
            )}
          </div>

          <h5 className={cls.cardTitle}>{card.question}</h5>
          <p className={cls.carDescription}>{card.description}</p>

          <div className={cls.cardAnswers}>
            <label>Short answer:</label>
            <p className={cls.cardAnswer}>{card.answer}</p>
          </div>

          {card.resources?.length > 0 && (
            <ul className={cls.cardLinks}>
              Resource:
              {card.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.trim()} target="_blank" rel="noreferrer">
                    {link.trim()}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <label htmlFor={checkboxId} className={cls.cardCheckbox}>
            <input
              type="checkbox"
              id={checkboxId}
              className={cls.checkbox}
              checked={isChecked}
              onChange={onCheckboxChangeHandler}
              disabled={isCardUpdating}
            />
            <span>Mark question as completed</span>

            {isCardUpdating && <SmollLoader />}
          </label>

          <Button
            onClick={() => navigate(`/editQuestion/${card.id}`)}
            isDisabled={isCardUpdating}
          >
            Edit Question
          </Button>

          <Button onClick={() => navigate("/")} isDisabled={isCardUpdating}>
            Back
          </Button>
        </div>
      )}
    </>
  );
}

export default QuestionPage;
