import React from "react";
import { useLoaderData } from "react-router-dom";
import Question, { count } from "../Question/Question";

// export let correctAnswer;
// export let correctCount = (count = 0) => count + 1;

const Quiz = () => {
  const quiz = useLoaderData().data;
  const { name, questions } = quiz;
  // const { count, setCount } = useContext(myContext);
  // console.log(count, setCount);
  const corr = count;
  console.log(corr);

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
            ></Question>
          ))}
        </div>
      </div>
      <div>
        <div className="sticky top-20">
          <h3>Correct Answer: {corr}</h3>
          <h3>Wrong Answer:</h3>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
