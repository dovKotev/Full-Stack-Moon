import Timer from "./Timer";
import Buttons from "./Buttons";

import useTimer from "../../../Hooks/useTimer";

function Control({setActive, gameOver, resetGame}) {
  const {cen, sec, min, setClockWork, resetTimer} = useTimer(gameOver);
  return (
    <>
      <div
        style={{
          textAlign: "center",
          width: "400px",
          margin: "0 auto",
          marginTop: "-60",
        }}
      >
        <Buttons
          setActive={setActive}
          setClockWork={setClockWork}
          resetGame={resetGame}
          resetTimer={resetTimer}
        />
        <Timer cen={cen} sec={sec} min={min} />
      </div>
    </>
  );
}

export default Control;
