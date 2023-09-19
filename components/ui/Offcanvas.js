import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const OffcanvasHeader = ({ children }) => (
  <div className="offcanvas-header bg-white dark:bg-black flex items-center scroll sticky top-0 z-10 p-6 py-4">
    {children}
  </div>
);

const OffcanvasBody = ({ children }) => (
  <div className="offcanvas-body px-6 my-4">{children}</div>
);

const OffcanvasFooter = ({ children }) => (
  <div className="offcanvas-footer mt-auto px-6 py-4">{children}</div>
);

const Offcanvas = ({ show, handleOffcanvas, children }) => {
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

  return createPortal(
    <div id="offcanvas-overlay" className="z-20" style={{ height: "100vh" }}>
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

Offcanvas.Header = OffcanvasHeader;
Offcanvas.Body = OffcanvasBody;
Offcanvas.Footer = OffcanvasFooter;

export default Offcanvas;
