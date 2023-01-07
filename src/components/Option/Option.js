import React from "react";

const Option = ({ individualOpt, idx }) => {
  return (
    <div className="border border-indigo-500/50 py-4 px-2 rounded-lg">
      <label htmlFor={idx} className="flex">
        <input type="radio" name="q" id={idx} />
        <div className="pl-2">{individualOpt}</div>
      </label>
    </div>
  );
};

export default Option;
