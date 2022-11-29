import {useEffect, useState} from "react";

function useTimer(gameOver) {
  const [cen, setCen] = useState("00");
  const [sec, setSec] = useState("00");
  const [min, setMin] = useState("00");
  const [clockWork, setClockWork] = useState(false);

  const resetTimer = () => {
    setClockWork(false);
  };

  useEffect(() => {
    cycleTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cen, clockWork]);

  function cycleTime() {
    if (!clockWork) {
      setCen("00");
      setSec("00");
      setMin("00");
      return;
    }
    if (gameOver) {
      setCen(cen);
      setSec(sec);
      setMin(min);
      return;
    }

    if (parseInt(min) === 6) return;

    setTimeout(() => {
      if (parseInt(cen) < 90) {
        setCen(`${parseInt(cen) + 10}`);
      } else if (parseInt(cen) === 90) {
        setCen("00");
        if (parseInt(sec) < 9) {
          setSec(`0${parseInt(sec) + 1}`);
        } else if (parseInt(sec) < 59) {
          setSec(`${parseInt(sec) + 1}`);
        } else {
          setSec("00");
          setMin(`0${parseInt(min) + 1}`);
        }
      } else {
        setMin(`0${parseInt(min) + 1}`);
        setCen("00");
      }
    }, 100);
  }

  return {cen, sec, min, setClockWork, resetTimer};
}

export default useTimer;
