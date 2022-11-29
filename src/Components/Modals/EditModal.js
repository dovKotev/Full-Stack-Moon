import Modal from "react-bootstrap/Modal";
import UpdateCardForm from "../Form/UpdateCrdForm";

function EditModal({showEdit, setShowEdit, card}) {
  return (
    <>
      <Modal
        show={showEdit}
        onHide={() => setShowEdit(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <UpdateCardForm card={card} />
      </Modal>
    </>
  );
}

export default EditModal;
