import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const quiz = useLoaderData().data;
  const { name, questions } = quiz;

  const [correctCount, setCorrectCount] = useState(0);
  // console.log(correctCount);
  const [wrongCount, setWrongCount] = useState(0);

  return (
    <div className="xl:flex bg-slate-50">
      <div className=" bg-slate-100 py-12 z-0 text-secondary xl:w-5/6">
        <h2 className="text-center text-3xl font-bold text-secondary"> Quiz of {name} </h2>
        <div>
          {questions.map((individualQ, index) => (
            <Question
              key={individualQ.id}
              individualQ={individualQ}
              index={index}
              setCorrectCount={setCorrectCount}
              setWrongCount={setWrongCount}
              correctCount={correctCount}
            ></Question>
          ))}
        </div>
      </div>
      <div className="mx-auto text-center p-5 z-10 ">
        <div className="sticky top-20 text-lg font-medium">
          <h3 className="text-secondary">Correct Answer: {correctCount}</h3>
          <h3 className="text-error">Wrong Answer: {wrongCount} </h3>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
