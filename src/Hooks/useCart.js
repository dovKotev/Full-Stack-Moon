import {useState, useEffect} from "react";

import {getUser, updateCart, deleteProduct} from "../Services/userService";
import {getAllUserCards} from "../Services/cardService";
import {setCommonHeader} from "../Services/httpServices";

function useCart() {
  const [userProducts, setUserProducts] = useState();
  // const [quantity, setQuantity] = useState({});

  useEffect(() => {
    getUserFromServer();
  }, []);

  async function getUserFromServer() {
    try {
      const item = localStorage.getItem("token");
      setCommonHeader("token", item);
      const user = await getUser();

      const {data} = await getAllUserCards(user.data.cart);
      setUserProducts(data);

      // const quantityOb = {};
      // for (const item of data) {
      //   quantityOb[item.name] = item.quantity;
      // }
      // setQuantity(quantityOb);
    } catch (err) {
      console.log(err);
    }
  }

  function plusQuantity(name) {
    const currentOb = userProducts.map((item) => {
      if (item.name === name) {
        if (item.quantity >= 15) return item;
        return {...item, quantity: item.quantity + 1};
      }
      return item;
    });
    setUserProducts(currentOb);
  }
  function minusQuantity(name) {
    const currentOb = userProducts.map((item) => {
      if (item.name === name) {
        if (item.quantity <= 0) return item;

        return {...item, quantity: item.quantity - 1};
      }
      return item;
    });
    setUserProducts(currentOb);
  }

  async function saveChanged(cart) {
    const moreThanZero = cart.filter((item) => {
      return item.quantity > 0;
    });
    const newCart = moreThanZero.map((item) => {
      return {cardID: item._id, quantity: item.quantity};
    });
    const {data} = await updateCart(newCart);
    console.log(data);
    await getUserFromServer();
  }

  async function deleteProductByID(id) {
    try {
      const pro = await deleteProduct({id: id});
      console.log(pro);
      await getUserFromServer();
      console.log(userProducts);
    } catch (err) {
      console.log(err);
    }
  }

  return {
    userProducts,
    plusQuantity,
    minusQuantity,
    saveChanged,
    deleteProductByID,
  };
}

export default useCart;
