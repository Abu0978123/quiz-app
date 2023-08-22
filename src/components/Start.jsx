import React, { useContext } from "react";
import { QuizContext } from "../context/ContextHolder";

export default function Start() {
  const {setStart} = useContext(QuizContext);
  return (
    <div className="w-full h-screen grid place-content-center ">
      <button className="w-[100px] h-[50px] bg-blue-500 text-white hover:bg-red-600 hover:rounded-lg rounded-2xl" onClick={()=>{setStart(true)}}>
        Start
      </button>
    </div>
  );
}
