import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Option from "../Option/Option";

const Question = ({ individualQ, index, setCorrectCount, setWrongCount }) => {
  const { options, question, correctAnswer } = individualQ;
  const customId = "custom-id-yes";
  const customId2 = "custom-id-no";

  const handleCheck = (clickedOption) => {
    if (clickedOption.individualOpt === correctAnswer) {
      setCorrectCount((correctCount) => correctCount + 1);

      toast.success("You are correct 🎉", {
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true,
        toastId: customId,
      });
    } else {
      setWrongCount((wrongCount) => wrongCount + 1);
      toast.error("Wrong Answer 🎃", {
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true,
        toastId: customId2,
      });
    }
  };

  return (
    <div className="card bg-base-400 xl:w-2/4 mx-auto shadow-md mt-8 bg-white">
      <div className="card-body">
        <div className="flex justify-center items-baseline">
          <h3 className="text-center mb-4 text-lg font-medium">
            Quiz {(index = index + 1)}:&nbsp; {question.slice(3, -4)}
          </h3>
          <div className="pl-8">
            <label htmlFor={index}>
              <FontAwesomeIcon icon={faEye} />
            </label>
          </div>
          <input type="checkbox" id={index} className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative bg-gray-100 z-50">
              <label
                htmlFor={index}
                className="btn btn-sm btn-circle bg-secondary text-white border-0 absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">Correct answer:</h3>
              <p className="py-4">{correctAnswer}</p>
            </div>
          </div>
        </div>

        <div className="grid xl:grid-cols-2 gap-4 2xl:w-2/4 mx-auto">
          {options.map((individualOpt, idx) => (
            <Option
              key={idx}
              individualOpt={individualOpt}
              handleCheck={handleCheck}
            ></Option>
          ))}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Question;
