import Button from "./Button";
import Modal from "./Modal";

const ErrorDialog = ({ show, errorMessage, handleErrorDialog }) => {
  if (!show) return null;

  return (
    <Modal
      show={show}
      handleModal={handleErrorDialog}
      className="bg-white dark:bg-dark w-11/12 lg:w-2/4 xl:w-2/6"
    >
      <Modal.Header handleModal={handleErrorDialog}>
        <h6 className="font-bold text-lg text-center mx-auto">Error</h6>
      </Modal.Header>
      <Modal.Body className="text-gray-500 text-center my-8">
        {errorMessage}
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
