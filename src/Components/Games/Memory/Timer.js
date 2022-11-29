import styles from "./Timer.module.css";
// import useTimer from "../Hooks/useTimer";

function Timer({cen, min, sec}) {
  return (
    <>
      <div style={{color: "black"}} className={styles.timer}>
        <span>{min}</span>:<span>{sec}</span>:<span>{cen}</span>
      </div>
    </>
  );
}

export default Timer;
