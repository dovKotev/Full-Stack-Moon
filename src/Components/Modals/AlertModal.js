import Modal from "react-bootstrap/Modal";
import {useNavigate} from "react-router-dom";

function AlertModal({showAlert, setShowAlert}) {
  const navigate = useNavigate();
  return (
    <>
      <Modal
        show={showAlert}
        onHide={() => setShowAlert(false)}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="p-4">
          <h4 className="mb-4">You're needed to sign for fill your cart</h4>
          <div className="d-flex">
            <button
              style={{marginRight: "12px"}}
              className="btn btn-info"
              onClick={() => navigate("/signin")}
            >
              Sign
            </button>
            <button
              className="btn btn-warning"
              onClick={() => setShowAlert(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AlertModal;
