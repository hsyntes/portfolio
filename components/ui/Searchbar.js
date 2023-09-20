import { useEffect, useState } from "react";
import Offcanvas from "./Offcanvas";
import Input from "./Input";
import useInput from "@/hooks/useInput";

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

  const {
    state: { value: search, valid: isSearchValid },
    handleOnChange: handleSearchOnChange,
    handleOnBlur: handleSearchOnBlur,
  } = useInput();

  if (deviceType === "mobile")
    return (
      <Offcanvas show={show} handleOffcanvas={handleSearchBar}>
        <Offcanvas.Header handleOffcanvas={handleSearchBar}>
          <Input
            type="text"
            name="search"
            placeholder="Search documents"
            className="!bg-white dark:!bg-black !block !w-full"
            value={search}
            onChange={handleSearchOnChange}
            onBlur={handleSearchOnBlur}
          />
        </Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
        <Offcanvas.Footer></Offcanvas.Footer>
      </Offcanvas>
    );
};

export default Searchbar;
