import "./CartShop.css";
import useCart from "../../Hooks/useCart";
import CartItem from "./CartItem";
import Panel from "../Common/Panel";
import navbarData from "../../Helpers/navbarData";

function CartShop() {
  const {
    userProducts,
    plusQuantity,
    minusQuantity,
    saveChanged,
    deleteProductByID,
  } = useCart();

  let sum = 0;
  try {
    for (const i of userProducts) {
      sum += i.price * i.quantity;
    }
  } catch (err) {}

  if (userProducts?.length === 0)
    return (
      <div className="text-center mt-5">
        <Panel content={navbarData.cartEmpty} />
      </div>
    );

  return (
    <>
      <div className="p-2">
        <div className="my-cart" style={{maxWidth: "1200px", margin: "0 auto"}}>
          <Panel
            content={`${navbarData.cart} full with ${userProducts?.length} products 🌚`}
          />
          <div className="table-responsive mt-4">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <span></span>
                  </th>
                  <th scope="col">
                    <span></span>
                  </th>
                  <th scope="col">
                    <span></span>
                  </th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">SubTotal</th>
                </tr>
              </thead>
              {userProducts?.map((item, index) => {
                return (
                  <CartItem
                    item={item}
                    index={index}
                    key={item.name}
                    plusQuantity={plusQuantity}
                    minusQuantity={minusQuantity}
                    deleteProductByID={deleteProductByID}
                  />
                );
              })}
            </table>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <div className="row justify-content-between my-total">
              <p className="col-6">Cart Totals</p>
              <p className="col-4">{`$${sum}.00`}</p>
            </div>
            <button
              type="button"
              className="btn btn-dark p-3"
              onClick={() => saveChanged(userProducts)}
            >
              Updata Cart
            </button>
          </div>
          <button
            type="button"
            className="btn btn-dark p-3 mt-4"
            style={{width: "500px", maxWidth: "60%"}}
          >
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}

export default CartShop;
