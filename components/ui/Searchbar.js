import { useEffect, useState } from "react";
import Offcanvas from "./Offcanvas";
import Input from "./Input";
import useInput from "@/hooks/useInput";
import { useQuery } from "react-query";
import fetchData from "@/utils/fetchData";

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
    state: { value: search, isValid: isSearchValid },
    handleOnChange: handleSearchOnChange,
    handleOnBlur: handleSearchOnBlur,
  } = useInput();

  const { data: documents } = useQuery({
    queryKey: "getDocuments",
    queryFn: () => fetchData("documents"),
  });

  const { data: searchedDocuments } = useQuery(["searchDocuments", search], {
    queryFn: async () => {
      if (search && search !== "" && isSearchValid) {
        const data = await searchedDocuments(search);

        return data;
      } else return null;
    },
  });

  console.log(searchedDocuments);

  if (deviceType === "mobile")
    return (
      <Offcanvas show={show} handleOffcanvas={handleSearchBar}>
        <Offcanvas.Header handleOffcanvas={handleSearchBar}>
          <Input
            type="text"
            name="search"
            placeholder="Search documents"
            className="!bg-white dark:!bg-black !block !w-full placeholder:text-sm text-sm"
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
