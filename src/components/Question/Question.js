import React from "react";
import Option from "../Option/Option";

const Question = ({ individualQ, index }) => {
  const { options, question } = individualQ;
  console.log(index);
  return (
    <div>
      <h3>
        Quiz {(index = index + 1)}: {question}
      </h3>
      <div>
        {options.map((individualOpt, idx) => (
          <Option key={idx} individualOpt={individualOpt}></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
