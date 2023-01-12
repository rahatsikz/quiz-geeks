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
    <div className="xl:flex">
      <div className=" bg-slate-100 py-12 z-0 text-indigo-500 xl:w-5/6">
        <h2 className="text-center text-3xl font-bold"> Quiz of {name} </h2>
        <div>
          {questions.map((individualQ, index) => (
            <Question
              key={individualQ.id}
              individualQ={individualQ}
              index={index}
              setCorrectCount={setCorrectCount}
              setWrongCount={setWrongCount}
            ></Question>
          ))}
        </div>
      </div>
      <div className="mx-auto text-center">
        <div className="sticky top-20 text-lg font-medium">
          <h3 className="text-green-500">Correct Answer: {correctCount / 2}</h3>
          <h3 className="text-red-500">Wrong Answer: {wrongCount / 2} </h3>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
