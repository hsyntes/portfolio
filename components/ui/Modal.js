import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ show, className, handleModal, children }) => {
  if (!show) return null;

  const classes = `modal w-5/6 lg:w-2/4 xl:w-1/4 rounded shadow bg-white dark:bg-dark p-8 ${className}`;

  document.body.addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal-overlay")) handleModal();
  });

  document.body.addEventListener("keyup", (e) => {
    if (e.key === "Escape") handleModal();
  });

  return createPortal(
    <div id="modal-overlay">
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
  const classes = `modal-header relative flex items-center ${className}`;
  return (
    <div className={classes}>
      {children}
      <FontAwesomeIcon
        icon={faTimes}
        size="lg"
        className="text-gray-500 hover:text-dark hover:dark:text-white cursor-pointer absolute top-1/2 right-0 -translate-y-1/2"
        onClick={handleModal}
      />
    </div>
  );
};

const ModalBody = ({ className, children }) => {
  const classes = `modal-body ${className}`;
  return <div className={classes}>{children}</div>;
};

const ModalFooter = ({ className, children }) => {
  const classes = `modal-footer ${className}`;
  return <div className={classes}>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
