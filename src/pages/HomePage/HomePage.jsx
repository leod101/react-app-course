import React from "react";
import cls from "./HomePage.module.css";
import QuestionCards from "../../components/QuestionCards/QuestionCards";
import { API_URL } from "../../constants";
import { useState } from "react";
import { useEffect } from "react";
import QuestionCardList from "../../components/QuestionCardList/QuestionCardList";
import Loader from "../../components/Loader/Loader";
import { useFetch } from "../../hooks/useFetch";
import { useRef } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useMemo } from "react";
import Button from "../../components/Button/Button";

const DEFAULT_PER_PAGE = 10;

function HomePage() {
  const [searchParams, setSearchParams] = useState(
    `?_page=1&_per_page=${DEFAULT_PER_PAGE}`
  );
  const [questions, setQuestions] = useState({ data: [], pages: 0 });
  const [searchValue, setSearchValue] = useState("");
  const [sortSelectValue, setSortSelectValue] = useState("");
  const [countSelectValue, setCountSelectValue] = useState("");

  const controlsContainerRef = useRef();

  const getActivPageNumber = () =>
    questions.next === null ? questions.last : questions.next - 1;

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}${url}`);
    const questions = await response.json();

    setQuestions(questions);
    return questions;
  });

  const cards = useMemo(() => {
    if (questions?.data.length) {
      if (searchValue.trim()) {
        return questions.data.filter((d) =>
          d.question?.toLowerCase().includes(searchValue.trim().toLowerCase())
        );
      } else {
        return questions.data;
      }
    }
    return [];
  }, [questions, searchValue]);

  const pagination = useMemo(() => {
    const totalCardsCount = questions?.pages || 0;
    return Array.from({ length: totalCardsCount }, (_, i) => i + 1);
  }, [questions]);

  useEffect(() => {
    getQuestions(`react${searchParams} `);
  }, [searchParams]);

  const onSearchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const onSortSelectChangeHandler = (e) => {
    setSortSelectValue(e.target.value);

    setSearchParams(`?_page=1&_per_page=${countSelectValue}&${e.target.value}`);
  };

  const paginationHandler = (e) => {
    if (e.target.tagName === "BUTTON")
      setSearchParams(
        `?_page=${e.target.textContent}&_per_page=${countSelectValue}&${sortSelectValue}`
      );
    controlsContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onCauntSelectChangeHandler = (e) => {
    setCountSelectValue(e.target.value);
    setSearchParams(`?_page=1&_per_page=${e.target.value}&${sortSelectValue}`);
  };

  return (
    <>
      <div className={cls.controlsContainer} ref={controlsContainerRef}>
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

        <select
          value={countSelectValue}
          onChange={onCauntSelectChangeHandler}
          className={cls.select}
        >
          <option disabled>count</option>
          <hr />
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      {isLoading && <Loader />}
      {error && <p>{error}</p>}

      <QuestionCardList cards={cards}></QuestionCardList>

      {cards.length === 0 ? (
        <p className={cls.noQuestionsInfo}>No cards...</p>
      ) : (
        pagination.length > 1 && (
          <div className={cls.paginationContainer} onClick={paginationHandler}>
            {pagination.map((value) => {
              return (
                <Button key={value} isActiv={value === getActivPageNumber()}>
                  {value}
                </Button>
              );
            })}
          </div>
        )
      )}
    </>
  );
}

export default HomePage;
