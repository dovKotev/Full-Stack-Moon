import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getOneCard} from "../Services/cardService";

function useCardDetails() {
  const {id} = useParams();
  const [card, setCard] = useState({});
  const [quantity, setQuantity] = useState(0);

  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    async function bringCard() {
      const {data} = await getOneCard(id);
      setCard(data);
    }
    bringCard();
  }, [id]);

  function setAmountPlus() {
    if (quantity >= 5) return;
    setQuantity(quantity + 1);
  }
  function setAmountMinus() {
    if (quantity <= 0) return;
    setQuantity(quantity - 1);
  }

  return {
    id,
    card,
    quantity,
    setAmountPlus,
    setAmountMinus,

    showAlert,
    showDelete,
    showEdit,
    setShowAlert,
    setShowEdit,
    setShowDelete,
  };
}

export default useCardDetails;
