import useCardDetails from "../../Hooks/useCardDetails";
import "./CardLink.css";
import {addToCartNew} from "../../Services/userService";
import CartSign from "./CartSign";
import {toast} from "react-toastify";
import EditModal from "../Modals/EditModal";
import DeleteModal from "../Modals/DeleteModal";
import {Link} from "react-router-dom";
import AlertModal from "../Modals/AlertModal";

function CardLink({status}) {
  const {
    card,
    quantity,
    setAmountPlus,
    setAmountMinus,
    showDelete,
    setShowAlert,
    showAlert,
    showEdit,
    setShowEdit,
    setShowDelete,
  } = useCardDetails();

  const addProductToCart = async () => {
    if (quantity <= 0) return toast("You need add at least one product!");
    if (status === "unregistered")
      return toast("You have to sign for this action");
    const cart = {cardID: card._id, quantity: quantity};
    try {
      await addToCartNew(cart);
      toast("Add To Cart Succussfully");
    } catch (err) {}
  };
  return (
    <>
      <AlertModal showAlert={showAlert} setShowAlert={setShowAlert} />

      <div className="mt-3" style={{maxWidth: "1200px", margin: "0 auto"}}>
        <div
          className="d-flex justify-content-end"
          style={{marginRight: "40px"}}
        >
          {status === "unregistered" ? (
            <>
              <div onClick={() => setShowAlert(true)}>
                <CartSign />
              </div>
            </>
          ) : (
            <Link className="nav-link" to="/moon-shop/cart">
              <CartSign />
            </Link>
          )}
        </div>
        <div className="card-d-container row justify-content-around mb-4">
          <div className="col-sm-5 m-0 img-d">
            <img src={card.image} width="100%" alt={card.name} />
          </div>
          <div className="card-d-data col-sm-6">
            <h1 className="card-d-title mb-3">{card.name}</h1>
            <h4>{`$${card.price}.00`}</h4>
            <p>{card.description}</p>
            <div className="quantity-d d-flex justify-content-around mt-5">
              <div className="plus-minus d-flex justify-content-around align-items-center">
                <div className="amount-btn" onClick={setAmountMinus}>
                  -
                </div>
                <span>{quantity}</span>
                <div className="amount-btn" onClick={setAmountPlus}>
                  +
                </div>
              </div>
              <button
                type="button"
                className="btn btn-dark"
                style={{borderRadius: "0"}}
                onClick={addProductToCart}
              >
                Add to cart
              </button>
            </div>
            {status === "Admin" && (
              <>
                <div className="edit-buttons">
                  <button
                    type="button"
                    className="btn btn-danger bt-delete"
                    onClick={() => setShowDelete(true)}
                  >
                    Delete Product {status}
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => setShowEdit(true)}
                  >
                    Edit Product
                  </button>
                  <EditModal
                    showEdit={showEdit}
                    setShowEdit={setShowEdit}
                    card={card}
                  />
                  <DeleteModal
                    showDelete={showDelete}
                    setShowDelete={setShowDelete}
                    card={card}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardLink;
