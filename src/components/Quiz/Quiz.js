import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const quiz = useLoaderData().data;
  const { name, questions } = quiz;
  return (
    <div>
      <h2> {name} </h2>
      <div>
        {questions.map((individualQ, index) => (
          <Question
            key={individualQ.id}
            individualQ={individualQ}
            index={index}
          ></Question>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
