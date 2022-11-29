// import Accordion from "react-bootstrap/Accordion";
import {useState} from "react";
import "./QuestionAccordion.css";
import questionOnMoon from "../../Helpers/questionsOnMoon";
import Panel from "../Common/Panel";
import Box from "../Common/Box";

function QuestionAccordion() {
  const [selected, setSelected] = useState(null);

  function toggleHandler(i) {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }

  const allQuestions = questionOnMoon.map((item, index) => {
    return (
      <div
        key={item.question}
        className="one-item"
        onClick={() => toggleHandler(index)}
      >
        <div className="question">
          <div>{item.question}</div>
          <span>{selected === index ? "-" : "+"}</span>
        </div>
        <div className={index === selected ? "answer open" : "answer"}>
          {item.answer}
        </div>
      </div>
    );
  });

  return (
    <>
      <div style={{maxWidth: "1000px", margin: "0 auto"}}>
        <Panel content={"Questions about the Moon"} />
        <div style={{marginTop: "28px", padding: "0 12px"}}>
          <Box
            data={
              <>
                <div className="accordion-container">{allQuestions}</div>
              </>
            }
          />
        </div>
      </div>
    </>
  );
}

export default QuestionAccordion;
