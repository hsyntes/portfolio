import { useEffect, useState } from "react";
import Offcanvas from "./Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({ show, handleSearchBar }) => {
  const [deviceType, setDeviceType] = useState();

  if (typeof window !== "undefined") {
    window
      .matchMedia("(max-width: 992px)")
      .addEventListener("change", (e) =>
        setDeviceType(e.matches ? "mobile" : "desktop")
      );
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window?.innerWidth >= 992) setDeviceType("desktop");
      else setDeviceType("mobile");
    }
  }, [deviceType]);

  if (deviceType === "mobile")
    return (
      <Offcanvas show={show} handleOffcanvas={handleSearchBar}>
        <Offcanvas.Header handleOffcanvas={handleSearchBar}></Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
        <Offcanvas.Footer></Offcanvas.Footer>
      </Offcanvas>
    );
};

export default Searchbar;
