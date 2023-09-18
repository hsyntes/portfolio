import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import Brand from "./Brand";

const Offcanvas = ({ show, className, handleOffcanvas, children }) => {
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

  const classes = `offcanvas w-full backdrop-blur px-6 py-4 ${className}`;

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
        className={classes}
      >
        {children}
      </motion.div>
    </div>,
    document.getElementById("offcanvas-backdrop")
  );
};

const OffcanvasHeader = ({ className, handleOffcanvas }) => {
  const classes = `offcanvas-header relative flex items-center ${className}`;
  return (
    <div className={classes}>
      <Brand />
      <FontAwesomeIcon
        icon={faTimes}
        size="xl"
        className="text-dark dark:text-white cursor-pointer absolute top-1/2 right-0 -translate-y-1/2"
        onClick={handleOffcanvas}
      />
    </div>
  );
};

const OffcanvasBody = ({ className, children }) => {
  const classes = `offcanvas-body ${className}`;
  return <div className={classes}>{children}</div>;
};

const OffcanvasFooter = ({ className, children }) => {
  const classes = `offcanvas-footer ${className}`;
  return <div className={classes}>{children}</div>;
};

Offcanvas.Header = OffcanvasHeader;
Offcanvas.Body = OffcanvasBody;
Offcanvas.Footer = OffcanvasFooter;

export default Offcanvas;
