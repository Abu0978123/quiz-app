import React, { useContext, useState } from 'react'
import { QuizContext } from '../context/ContextHolder'

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  // const {correct} = useContext(QuizContext);
  // console.log(correct)

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      {/* <h1 className=''> {correct}</h1> */}
      <Box current= {current} next = {setCurrent}/>
    </div>
  )
}

const Box = ({current, next}) =>{
  const {quizzes, correct, setCorrect, setExit} = useContext(QuizContext);
  const [ans, setAns] = useState(0);
  const saveHandler = () =>{
   if (quizzes[current].correct === ans){
    setCorrect(correct + 1);
   }  {
    setAns("");
    if((current +1) === quizzes.length){
           setExit(true)
    } else {
      next(current + 1);
    }
   }

  }
  // console.log(quizzes[current])
  return (
    <div className='w-[40%] bg-slate-200 shadow-lg rounded-xl'>
     <h1 className='text-3xl p-2'>{current+1} {quizzes[current].question}</h1>
     <div className='grid grid-cols-2 m-2 place-content-center'>
      <div className={`border hover:cursor-pointer duration-200 ${ ans === 'a' ?  'bg-blue-600  p-2 text-white'  : ''}`} onClick={()=>setAns('a')}>{quizzes[current].a}</div>
      <div className={`border hover:cursor-pointer duration-200 ${ ans === 'b' ?  'bg-blue-600  p-2 text-white'  : ''}`} onClick={()=>setAns('b')}>{quizzes[current].b}</div>
      <div className={`border hover:cursor-pointer duration-200 ${ ans === 'c' ?  'bg-blue-600  p-2 text-white'  : ''}`} onClick={()=>setAns('c')}>{quizzes[current].c}</div>
      <div className={`border hover:cursor-pointer duration-200 ${ ans === 'd' ?  'bg-blue-600  p-2 text-white'  : ''}`} onClick={()=>setAns('d')}>{quizzes[current].d}</div>
     </div>
     <div className='flex justify-between p-3 items-center'>
     <button className='bg-orange-400 rounded-md w-[80px] h-[40px]' onClick={()=>{setAns("")}}>Reset</button>
     <button className='bg-green-500 rounded-md w-[100px] h-[40px]' onClick={saveHandler}>Save & Next</button>
     <button className='bg-red-500 rounded-md w-[80px] h-[40px]' onClick={()=>{setExit(true)}}>Exit</button>
     </div>
    </div>
  )
}
