import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Modal = ({ show, className, handleModal, children, style }) => {
  // * Disable page scrolling when modal is opened
  useEffect(() => {
    const body = document.querySelector("body");

    if (show) body.style.overflow = "hidden";
    else body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  const classes = `modal flex flex-col w-full rounded border border-gray-300 dark:border-gray-700 shadow ${className}`;

  // * Closing modal when clicked outside of the modal or
  // * pressed the ESC key
  document.body.addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal-overlay")) handleModal();
  });

  document.body.addEventListener("keyup", (e) => {
    if (e.key === "Escape") handleModal();
  });

  // * Creating portal
  return createPortal(
    <div id="modal-overlay" className="z-50" style={style}>
      <motion.div
        animate={{ scale: [1.1, 1], opacity: [0.75, 1] }}
        transition={{ ease: "easeOut", duration: 0.15 }}
        className={classes}
      >
        {children}
      </motion.div>
    </div>,
    document.getElementById("modal-backdrop")
  );
};

const ModalHeader = ({ className, handleModal, children }) => {
  const classes = `modal-header bg-white dark:bg-black relative sticky top-0 flex items-center px-8 py-4 ${className}`;
  return (
    <div className={classes}>
      {children}
      <FontAwesomeIcon
        icon={faTimes}
        size="lg"
        className="text-gray-500 hover:text-dark hover:dark:text-white cursor-pointer absolute top-1/2 right-8 -translate-y-1/2"
        onClick={handleModal}
      />
    </div>
  );
};

const ModalBody = ({ className, children }) => {
  const classes = `modal-body px-8 my-6 ${className}`;
  return <div className={classes}>{children}</div>;
};

const ModalFooter = ({ className, children }) => {
  const classes = `modal-footer bg-white dark:bg-black sticky bottom-0 mt-auto px-8 py-4 ${className}`;
  return <div className={classes}>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
