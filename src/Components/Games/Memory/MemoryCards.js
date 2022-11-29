import Cards from "./Cards";
import Control from "./Control";
import useCardGame from "../../../Hooks/useCardGame";
import Panel from "../../Common/Panel";
import navbarData from "../../../Helpers/navbarData";
import Box from "../../Common/Box";

function MemoryCard() {
  const {onCardClick, allAnimals, setActive, gameOver, resetGame} =
    useCardGame();

  return (
    <>
      <div style={{maxWidth: "1300px", margin: "0 auto"}}>
        <Panel content={navbarData.memoryGame} />
        <div className="p-2 mt-4">
          <Box
            data={
              <>
                <Control
                  setActive={setActive}
                  gameOver={gameOver}
                  resetGame={resetGame}
                />
                <Cards animals={allAnimals} onCard={onCardClick} />
              </>
            }
          />
        </div>
      </div>
    </>
  );
}

export default MemoryCard;
