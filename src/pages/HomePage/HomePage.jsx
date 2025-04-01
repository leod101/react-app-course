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

function HomePage() {
  const [quastions, setQuastions] = useState([]);
  const [searchValue, setsearchValue] = useState("");

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}${url}`);
    const questions = await response.json();

    setQuastions(questions);
    return questions;
  });

  useEffect(() => {
    getQuestions("react");
  }, []);

  const onSearchChangeHandler = (e) => {
    setsearchValue(e.target.value);
  };

  return (
    <>
      <div className={cls.controlsContainer}>
        <SearchInput cards={searchValue} onChange={onSearchChangeHandler} ></SearchInput>
      </div>

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <QuestionCardList cards={quastions}></QuestionCardList>
    </>
  );
}

export default HomePage;
