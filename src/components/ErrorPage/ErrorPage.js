import React from "react";
import { useNavigate } from "react-router-dom";
import errorImg from "../../images/error-thumb.png";
const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="text-center my-12">
      <img src={errorImg} alt="error" className="mx-auto" />
      <h2 className="text-2xl font-semibold my-8">
        Oops! That page can not be found.
      </h2>
      <button className="btn btn-primary px-8" onClick={handleBack}>
        Back to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;
