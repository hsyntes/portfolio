import Button from "./Button";

const { default: Modal } = require("./Modal");

const ErrorDialog = ({ show, handleErrorDialog }) => {
  if (!show) return null;

  return (
    <Modal show={show} handleModal={handleErrorDialog}>
      <Modal.Header handleModal={handleErrorDialog}>
        <h6 className="font-bold text-lg text-center mx-auto">Error</h6>
      </Modal.Header>
      <Modal.Body className="text-gray-500 text-center my-8">
        Authentication failed. Please log in.
      </Modal.Body>
      <Modal.Footer className="flex items-center justify-center">
        <Button type="button" variant="blue-link" onClick={handleErrorDialog}>
          Got it
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorDialog;
