import { useEffect } from "react";

const Offcanvas = ({ show, className, children }) => {
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
};

const OffcanvasHeader = ({ className, children }) => {
  const classes = `offcanvas-header ${className}`;
  return <div className={classes}>{children}</div>;
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
