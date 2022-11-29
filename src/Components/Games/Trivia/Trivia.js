import "./Trivia.css";
import Panel from "../../Common/Panel";
import Box from "../../Common/Box";
import useTrivia from "../../../Hooks/useTrivia";

import {BsCheckCircle} from "react-icons/bs";
import {BsXCircle} from "react-icons/bs";

function Trivia() {
  const {
    data,
    clickOnAnswer,
    pushed,
    correctNum,
    clickNextQuestoin,
    disableNext,
    gameOver,
    goodAnswers,
  } = useTrivia();

  const allQuestions = ["1", "2", "3", "4"].map((question, index) => {
    return (
      <button
        key={index}
        id={question}
        onClick={() => clickOnAnswer(question)}
        className="trivia-btn"
        style={
          correctNum === question && true
            ? {background: "green"}
            : correctNum !== question && pushed === question
            ? {background: "red"}
            : {color: "black"}
        }
      >
        {correctNum === question && pushed === question && (
          <span className="v-icon">
            <BsCheckCircle />
          </span>
        )}
        {correctNum !== question && pushed === question && (
          <span className="v-icon">
            <BsXCircle />
          </span>
        )}
        <span
          style={
            correctNum === question && true
              ? {fontSize: "1.5rem"}
              : {color: "black"}
          }
        >
          {data[question]}
        </span>
        {correctNum === question && (
          <div className="more-data">{data.details}</div>
        )}
      </button>
    );
  });

  return (
    <>
      <div style={{maxWidth: "800px", margin: "0 auto", padding: "0 12px"}}>
        <div className="mb-5">
          <Panel content="Trivia Game on the moon  - check how much you know about it." />
        </div>
        <Box
          data={
            <>
              <div className="trivia-container">
                <div className="img-trivia">
                  <img src={data.image} width="100%" alt={data.question} />
                </div>
                <h3>{data.question}</h3>
                <div className="options-container">{allQuestions}</div>

                <button
                  className="next-question"
                  onClick={clickNextQuestoin}
                  disabled={disableNext}
                >
                  {!gameOver && "click here to next question"}
                  {gameOver &&
                    `The Game is over you answer ${goodAnswers}/10 question right`}
                </button>
              </div>
            </>
          }
        />
      </div>
    </>
  );
}

export default Trivia;
