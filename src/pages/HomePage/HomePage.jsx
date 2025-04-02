import React from "react";
import cls from "./HomePage.module.css";
import QuestionCards from "../../components/QuestionCards/QuestionCards";
import { API_URL } from "../../constants";
import { useState } from "react";
import { useEffect } from "react";
import QuestionCardList from "../../components/QuestionCardList/QuestionCardList";
import Loader from "../../components/Loader/Loader";
import { delayFn } from "../../helpers/delayFn";
import { useFetch } from "../../hooks/useFetch";
import { useRef } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useMemo } from "react";

function HomePage() {
  const [quastions, setQuastions] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [sortSelectValue, setSortSelectValue] = useState("");

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}${url}`);
    const questions = await response.json();

    setQuastions(questions);
    return questions;
  });

  const cards = useMemo(() => {
    return (quastions || []).filter((d) =>
      d.question?.toLowerCase().includes(searchValue.trim().toLowerCase())
    );
  }, [quastions, searchValue]);

  useEffect(() => {
    getQuestions(`react?${sortSelectValue}`);
  }, [sortSelectValue]);

  const onSearchChangeHandler = (e) => {
    setsearchValue(e.target.value);
  };

  const onSortSelectChangeHandler = (e) => {
    setSortSelectValue(e.target.value);
  };

  return (
    <>
      <div className={cls.controlsContainer}>
        <SearchInput
          cards={searchValue}
          onChange={onSearchChangeHandler}
        ></SearchInput>

        <select
          value={sortSelectValue}
          onChange={onSortSelectChangeHandler}
          className={cls.select}
        >
          <option value="">sort by</option>
          <hr />
          <option value="_sort=level">level ASC</option>
          <option value="_sort=-level">level DESC</option>
          <option value="_sort=completed">completed ASC</option>
          <option value="_sort=-completed">completed DESC</option>
        </select>
      </div>

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {cards.length === 0 && !isLoading && (
        <p className={cls.noQuestionsInfo}>No questions found</p>
      )}

      <QuestionCardList cards={cards}></QuestionCardList>
    </>
  );
}

export default HomePage;
