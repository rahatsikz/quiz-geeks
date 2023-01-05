import React from "react";
import { useLoaderData } from "react-router-dom";
import bg from "../../images/bg.jpg";

const Home = () => {
  return (
    <div>
      <div className="hero h-[70vh]" style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Check your Skill</h1>
            <h1 className="mb-5 text-5xl font-bold">Be Ready for Future</h1>
            <p className="mb-5">
              Take your learning process to the next level. Give test. Access
              your knowledge. You can know if you are ready for next.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
