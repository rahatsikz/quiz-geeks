import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const quiz = useLoaderData().data;
  const { name, questions } = quiz;
  return (
    <div className=" bg-slate-100 py-12 z-0 text-indigo-500">
      <h2 className="text-center text-3xl font-bold"> Quiz of {name} </h2>
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
