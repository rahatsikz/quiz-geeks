import React from "react";

const Option = ({ individualOpt, idx, handleCheck }) => {
  return (
    <div className="border border-secondary py-4 px-2 rounded-lg">
      <label
        htmlFor={idx}
        className="flex"
        onClick={() => handleCheck({ individualOpt })}
      >
        <input type="radio" name="q" id={idx} />
        <div className="pl-2 overflow-x-auto">{individualOpt}</div>
      </label>
    </div>
  );
};

export default Option;
