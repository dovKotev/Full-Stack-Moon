import {BsXLg} from "react-icons/bs";

function CartItem({
  item,
  index,
  plusQuantity,
  minusQuantity,
  deleteProductByID,
}) {
  return (
    <>
      <tbody>
        <tr>
          <th scope="row">{index + 1}</th>
          <td
            style={{cursor: "pointer"}}
            onClick={() => deleteProductByID(item._id)}
          >
            {<BsXLg />}
          </td>
          <td>
            <img
              src={item.image}
              alt={item.name}
              width={"40px"}
              height={"40px"}
            />
          </td>
          <td style={{minWidth: "150px"}}>{item.name}</td>
          <td> {`$${item.price}.00`}</td>
          <td>
            <div className="plus-minus d-flex justify-content-around align-items-center">
              <div
                className="amount-btn"
                onClick={() => minusQuantity(item.name)}
              >
                -
              </div>
              <span>{item.quantity}</span>
              <div
                className="amount-btn"
                onClick={() => plusQuantity(item.name)}
              >
                +
              </div>
            </div>
          </td>
          <td> {`$${item.price * item.quantity}.00`} </td>
        </tr>
      </tbody>
    </>
  );
}

export default CartItem;
