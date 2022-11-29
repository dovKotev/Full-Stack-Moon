import Modal from "react-bootstrap/Modal";
import {toast} from "react-toastify";
import {deleteCard} from "../../Services/cardService";
import {useNavigate} from "react-router-dom";

function DeleteModal({showDelete, setShowDelete, card}) {
  const navigate = useNavigate();
  const deleteOneCard = async (card) => {
    try {
      console.log(card);
      const data = await deleteCard(card);
      toast("Product Deleted succussfully!");
      console.log(data);
      navigate("/moon-shop");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Modal
        show={showDelete}
        onHide={() => setShowDelete(false)}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="p-4">
          <h4>Are you sure you want to delete this item ?</h4>
          <button
            className="btn btn-danger"
            onClick={() => deleteOneCard(card)}
          >
            Delete
          </button>
        </div>
      </Modal>
    </>
  );
}

export default DeleteModal;
