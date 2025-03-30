import React from "react";
import cls from "./HomePage.module.css";
import QuestionCards from "../../components/QuestionCards/QuestionCards";
import { API_URL } from "../../constants";
import { useState } from "react";
import { useEffect } from "react";
import QuestionCardList from "../../components/QuestionCardList/QuestionCardList";
import Loader from "../../components/Loader/Loader";

//const cards = [];

function HomePage() {
  const [quastions, setQuastions] = useState([]);

  const getQuestions = async () => {
    try {
      const response = await fetch(`${API_URL}react`);
      const questions = await response.json();

      setQuastions(questions);

      console.log("questions", questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <Loader></Loader>
      <QuestionCardList cards={quastions}></QuestionCardList>
    </>
  );
}

export default HomePage;
