import React from "react";

const Option = ({ individualOpt, idx }) => {
  return (
    <div>
      <label htmlFor={idx}>
        <input type="radio" name="q" id={idx} />
        {individualOpt}
      </label>
    </div>
  );
};

export default Option;
