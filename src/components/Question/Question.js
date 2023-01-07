import React from "react";
import Option from "../Option/Option";

const Question = ({ individualQ, index }) => {
  const { options, question } = individualQ;
  return (
    <div className="card bg-base-400 xl:w-2/4 mx-auto shadow-xl mt-8 bg-white">
      <div className="card-body">
        <h3 className="text-center mb-4 text-lg font-medium">
          Quiz {(index = index + 1)}:&nbsp; {question.slice(3, -4)}
        </h3>
        <div className="grid xl:grid-cols-2 gap-4 2xl:w-2/4 mx-auto">
          {options.map((individualOpt, idx) => (
            <Option key={idx} individualOpt={individualOpt}></Option>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
