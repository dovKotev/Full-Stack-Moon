import styles from "./Buttons.module.css";

function Buttons({setActive, setClockWork, resetGame, resetTimer}) {
  return (
    <>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => {
            setActive(true);
            setClockWork(true);
          }}
        >
          Start Game
        </button>
        <button
          className={styles.button}
          onClick={() => {
            resetGame();
            resetTimer();
          }}
        >
          Reset Game
        </button>
      </div>
    </>
  );
}

export default Buttons;
