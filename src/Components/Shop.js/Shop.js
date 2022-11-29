import {Link} from "react-router-dom";
import useCards from "../../Hooks/useCards";
import Card from "./Card";
import Panel from "../Common/Panel";
import navbarData from "../../Helpers/navbarData";
import CartSign from "./CartSign";
import AlertModal from "../Modals/AlertModal";
import "./Shop.css";

function Shop({status}) {
  const {cards, wait, alertModal, setAlertModal} = useCards();

  const cardsArray = cards.map((card) => {
    return <Card card={card} key={card._id} />;
  });

  return (
    <>
      <AlertModal showAlert={alertModal} setShowAlert={setAlertModal} />

      <div style={{maxWidth: "1200px", margin: "0 auto"}}>
        <Panel content={navbarData.shop} />
        <div
          className={
            "d-flex dash-con justify-content-" +
            (status === "Admin" ? "between" : "end")
          }
          style={{
            marginTop: "14px",
          }}
        >
          {status === "Admin" && (
            <>
              <div className="text-center">
                <Link className="nav-link" to="/create-card">
                  <button className="btn btn-success create-btn">
                    Create new Product to shop
                  </button>
                </Link>
              </div>
            </>
          )}

          {status === "unregistered" ? (
            <>
              <div onClick={() => setAlertModal(true)}>
                <CartSign />
              </div>
            </>
          ) : (
            <Link className="nav-link" to="/moon-shop/cart">
              <CartSign />
            </Link>
          )}
        </div>

        {wait && (
          <div className="lod-con">
            <div className="loader m-auto"></div>
          </div>
        )}
        {!wait && (
          <>
            <div className="row">{cardsArray}</div>
          </>
        )}
      </div>
    </>
  );
}

export default Shop;
