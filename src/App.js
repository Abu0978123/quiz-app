import { useContext } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Start from "./components/Start";
import { QuizContext } from "./context/ContextHolder";

function App() {
  const { start, exit } = useContext(QuizContext);
  return (
    <>
      {exit === false ? (
        <>{start === true ? <Quiz /> : <Start />}</>
      ) : (
        <Result />
      )}
    </>
  );
}

export default App;
