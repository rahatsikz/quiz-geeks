import React from "react";

const Topic = ({ topic }) => {
  const { name, logo, total } = topic;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className=" bg-slate-200">
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="mb-8">
        <div className="flex justify-around my-8 text-xl font-semibold">
          <h2> {name} </h2>
          <p>Total Quiz: {total} </p>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Start Practice</button>
        </div>
      </div>
    </div>
  );
};

export default Topic;
