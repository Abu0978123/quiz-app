import React, { useContext } from "react";
import { QuizContext } from "../context/ContextHolder";

export default function Result() {
  const { correct, setExit, setStart, quizzes, setCorrect } =
    useContext(QuizContext);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[500px] shadow-2xl h-[200px] bg-slate-300">
        <h1 className="text-center text-2xl font-bold p-4">Result card</h1>
        <h2 className="text-center text-xl">
          your marks is {correct} out of {quizzes.length}
        </h2>
        <div className="flex justify-evenly items-center ">
          {/* <button className='bg-green-500 rounded-md w-[120px] h-[40px]' onClick={()=>{setExit(false); setCorrect(0)}}>Resubmit Quiz</button> */}
          <button
            className="bg-blue-500 rounded-md w-[190px] h-[40px]"
            onClick={() => {
              setExit(false);
              setStart(true);
            }}
          >
            Exit Result card
          </button>
        </div>
      </div>
    </div>
  );
}
