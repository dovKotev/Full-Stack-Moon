import {useState, useEffect} from "react";
import triviaData from ".././Helpers/triviaData";

function useTrivia() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState({});
  const [correctNum, setCorrectNum] = useState(0);
  const [pushed, setPushed] = useState(0);
  const [disableOptions, setDisableOptions] = useState(false);
  const [disableNext, setDisableNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [goodAnswers, setGoodAnswers] = useState(0);

  useEffect(() => {
    setData(triviaData[counter]);
  }, [counter]);

  function clickOnAnswer(question) {
    if (counter === 9) setGameOver(true);
    if (disableOptions) return;
    if (data.correct === question) setGoodAnswers(goodAnswers + 1);

    setCorrectNum(data.correct);
    setPushed(question);
    setDisableOptions(true);
    setDisableNext(false);
  }

  function clickNextQuestoin() {
    if (counter === 9) return;
    if (disableNext) return;

    setCounter(counter + 1);
    setCorrectNum(0);
    setPushed(0);
    setDisableOptions(false);
    setDisableNext(true);
    setTimeout(() => {
      window.scrollTo({top: 400, behavior: "smooth"});
    }, 2);
  }

  return {
    data,
    clickOnAnswer,
    pushed,
    correctNum,
    disableOptions,
    disableNext,
    gameOver,
    clickNextQuestoin,
    goodAnswers,
  };
}

export default useTrivia;
