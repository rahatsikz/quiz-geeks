import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const quiz = useLoaderData().data;
  const { name, questions } = quiz;
  return (
    <div>
      <h2> {name} </h2>
    </div>
  );
};

export default Quiz;
