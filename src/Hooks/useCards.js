import {useState, useEffect} from "react";
import {getCards} from "../Services/cardService";

function useCards() {
  const [cards, setCards] = useState([]);
  const [wait, setWait] = useState(true);
  const [alertModal, setAlertModal] = useState(false);

  useEffect(() => {
    getAllCardsFromServer();
  }, []);

  async function getAllCardsFromServer() {
    try {
      const {data} = await getCards();
      setWait(false);

      setCards(data);
    } catch (err) {
      console.log(err);
    }
  }
  return {
    cards,
    wait,
    setCards,
    getAllCardsFromServer,
    alertModal,
    setAlertModal,
  };
}

export default useCards;
