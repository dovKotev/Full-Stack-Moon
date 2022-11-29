import CartShop from "../Components/Shop.js/CartShop";
function Cart({...props}) {
  return (
    <>
      <CartShop {...props} />
    </>
  );
}

export default Cart;
