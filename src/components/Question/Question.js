import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Option from "../Option/Option";

export let count = 0;

const Question = ({ individualQ, index }) => {
  const { options, question, correctAnswer } = individualQ;
  const customId = "custom-id-yes";
  const customId2 = "custom-id-no";
  // const [count, setCount] = useState(0);
  // const value = { count, setCount };

  const handleCheck = (clickedOption) => {
    if (clickedOption.individualOpt === correctAnswer) {
      // correctCount();
      // console.log(correctCount());
      // corArr.push(1);
      // console.log(corArr);
      // console.log(corArr.length);
      count++;

      // const newCount = count + 1;
      // setCount(newCount);
      console.log(count);
      // console.log(value, "useRef");

      toast.success("You are correct", {
        position: toast.POSITION.BOTTOM_RIGHT,
        toastId: customId,
      });
    } else {
      toast.error("Wrong Answer !", {
        position: toast.POSITION.BOTTOM_RIGHT,
        toastId: customId2,
      });
    }
  };
  return (
    <div className="card bg-base-400 xl:w-2/4 mx-auto shadow-xl mt-8 bg-white">
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
            <div className="modal-box relative">
              <label
                htmlFor={index}
                className="btn btn-sm btn-circle bg-indigo-500 border-0 absolute right-2 top-2"
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
