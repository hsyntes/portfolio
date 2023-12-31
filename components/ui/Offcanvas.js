import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Hr from "./Hr";
import Brand from "./Brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Offcanvas = ({ show, handleOffcanvas, children, style }) => {
  // * Disable page scrolling when offcanvas is opened
  useEffect(() => {
    const body = document.querySelector("body");

    if (show) body.style.overflow = "hidden";
    else body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  // * Closing the offcanvas when clicked outside of the offcanvas or
  // * pressed the ESC key
  document.body.addEventListener("click", (e) => {
    if (e.target === document.getElementById("offcanvas-overlay"))
      handleOffcanvas();
  });

  document.body.addEventListener("keyup", (e) => {
    if (e.key === "Escape") handleOffcanvas();
  });

  console.log(style);

  return createPortal(
    <div
      id="offcanvas-overlay"
      className="z-20"
      style={{ height: "100vh", ...style }}
    >
      <motion.div
        animate={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ ease: "easeOut", duration: 0.25 }}
        className="offcanvas flex flex-col w-full backdrop-blur overflow-y-scroll"
      >
        {children}
      </motion.div>
    </div>,
    document.getElementById("offcanvas-backdrop")
  );
};

const OffcanvasHeader = ({ children, handleOffcanvas }) => (
  <div className="offcanvas-header bg-white dark:bg-black flex items-center sticky top-0 z-10 p-6 py-5">
    {children}
    <FontAwesomeIcon
      icon={faTimes}
      size="xl"
      className="text-secondary cursor-pointer ms-auto"
      onClick={handleOffcanvas}
    />
  </div>
);

const OffcanvasBody = ({ children }) => (
  <div className="offcanvas-body px-6 my-2">{children}</div>
);

const OffcanvasFooter = ({ children }) => (
  <div className="offcanvas-footer mt-auto px-6 py-4">
    <Hr className="mb-4" />
    <Brand />
    {children}
  </div>
);

Offcanvas.Header = OffcanvasHeader;
Offcanvas.Body = OffcanvasBody;
Offcanvas.Footer = OffcanvasFooter;

export default Offcanvas;
