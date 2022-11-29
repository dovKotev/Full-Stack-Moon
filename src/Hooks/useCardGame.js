import {useEffect, useState} from "react";
import realAnimals from "../Helpers/memoryContent";

function useCardGame() {
  const [anyPushed, setAnyPushed] = useState(false);
  const [lastId, setLastId] = useState("");
  const [lastName, setLastName] = useState("");
  const [applicationHold, setApllicationHold] = useState(false);
  const [allAnimals, setAllAnimals] = useState(realAnimals);
  const [active, setActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    checkGameOver();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allAnimals]);

  const checkGameOver = () => {
    if (
      allAnimals.map((item) => item.isPushed).every((item) => item === true)
    ) {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    const shufferAllAnimals = allAnimals.sort(() => 0.5 - Math.random());
    setAllAnimals(
      shufferAllAnimals.map((animal) => {
        return {...animal, isPushed: false, outOfGame: false};
      })
    );
    setActive(false);
    setGameOver(false);
  };

  const onCardClick = (card) => {
    if (!active) return;
    if (card.outOfGame) return;
    if (applicationHold) return;

    if (anyPushed) {
      setAnyPushed(false);

      if (lastId === card.id) {
        setAllAnimals(
          allAnimals.map((animal) => {
            if (card === animal) {
              return {...animal, isPushed: false};
            }
            return animal;
          })
        );
      } else if (lastName === card.name) {
        setAllAnimals(
          allAnimals.map((animal) => {
            if (card.name === animal.name) {
              return {...animal, isPushed: true, outOfGame: true};
            }
            return animal;
          })
        );
      } else {
        setApllicationHold(true);
        setAllAnimals(
          allAnimals.map((animal) => {
            if (card === animal) {
              return {...animal, isPushed: true};
            }
            return animal;
          })
        );
        setTimeout(() => {
          const lastCard = allAnimals.find((item) => item.id === lastId);
          setAllAnimals(
            allAnimals.map((animal) => {
              if (card === animal || animal === lastCard) {
                return {...animal, isPushed: false};
              }
              return animal;
            })
          );
          setApllicationHold(false);
        }, 1500);
      }
    } else {
      setAllAnimals(
        allAnimals.map((animal) => {
          if (card === animal) {
            return {...animal, isPushed: true};
          }
          return animal;
        })
      );
      setAnyPushed(true);
      setLastId(card.id);
      setLastName(card.name);
    }
  };
  return {
    onCardClick,
    allAnimals,
    setActive,
    checkGameOver,
    gameOver,
    resetGame,
  };
}

export default useCardGame;
