import { useEffect } from "react";
import { motion } from "framer-motion";

const Toast = ({ show, handleToast, message }) => {
  if (!show) return null;

  // * Close the Toast after 2.5 seconds
  useEffect(() => {
    const identifier = setTimeout(() => {
      handleToast();
    }, 2500);

    return () => clearTimeout(identifier);
  }, [show]);

  return (
    <div id="toast-overlay">
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ ease: "easeOut", duration: 0.75 }}
        className="w-full bg-white dark:bg-dark shadow rounded lg:w-1/4 mx-4 lg:mx-0 p-3"
      >
        <p className="text-center">{message}</p>
      </motion.div>
    </div>
  );
};

export default Toast;
