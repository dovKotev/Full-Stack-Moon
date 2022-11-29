import {BsCart4} from "react-icons/bs";
import DeleteModal from "../Modals/DeleteModal";
// import {BsCart3} from "react-icons/bs";s
import {Link} from "react-router-dom";
function CartSign({status}) {
  return (
    <>
      <BsCart4
        style={{
          fontSize: "3.5rem",
          color: "rgb(137, 187, 230)",
          cursor: "pointer",
        }}
      />
    </>
  );
}

export default CartSign;
