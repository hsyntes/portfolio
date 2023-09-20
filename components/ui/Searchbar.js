import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Offcanvas from "./Offcanvas";
import Input from "./Input";
import fetchData from "@/utils/fetchData";
import searchDocuments from "@/utils/searchDocuments";
import useInput from "@/hooks/useInput";
import Image from "next/image";
import Link from "next/link";

const Searchbar = ({ show, handleSearchBar }) => {
  const [deviceType, setDeviceType] = useState();

  // * Showing different component for searching
  // * based on the device type
  if (typeof window !== "undefined") {
    window
      .matchMedia("(max-width: 992px)")
      .addEventListener("change", (e) =>
        setDeviceType(e.matches ? "mobile" : "desktop")
      );
  }

  // * Input value with custom hook
  const {
    state: { value: search, isValid: isSearchValid },
    handleOnChange: handleSearchOnChange,
  } = useInput();

  // * Fetching data with React-Query
  const { data: documents } = useQuery({
    queryKey: "getDocuments",
    queryFn: () => fetchData("documents"),
    refetchOnWindowFocus: false,
  });

  const { data: searchedDocuments } = useQuery(["searchDocuments", search], {
    queryFn: async () => {
      if (search && search !== "" && isSearchValid) {
        const data = await searchDocuments(search);

        return data;
      } else return null;
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window?.innerWidth >= 992) setDeviceType("desktop");
      else setDeviceType("mobile");
    }
  }, [deviceType]);

  console.log(documents);

  let content = (
    <>
      <section className="mb-6">
        <h6 className="font-bold text-lg mb-3">Projects</h6>
        <ul>
          {documents?.projects?.map((project) => (
            <li>
              <Link
                href={`/projects/${project._id}`}
                className="flex items-start"
                onClick={handleSearchBar}
              >
                <Image
                  src={project.project_logo}
                  width={32}
                  height={32}
                  alt="Project"
                />
                <section className="ms-3">
                  <h1 className="font-bold">{project.project_name}</h1>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                    {project.project_description}
                  </p>
                </section>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h6 className="font-bold text-lg mb-3">Articles</h6>
        <ul>
          {documents?.articles?.map((article) => (
            <li className="my-4 last:mb-0">
              <Link
                href={`/articles/${article._id}`}
                className="flex items-start"
                onClick={handleSearchBar}
              >
                <Image
                  src={article.article_thumbnail}
                  width={1080}
                  height={1350}
                  className="w-16 rounded"
                  alt="Article Thumbnail"
                />
                <section className="ms-3">
                  <h1 className="font-bold">{article.article_title}</h1>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                    {article.article_description}
                  </p>
                </section>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );

  if (searchedDocuments) content = undefined;

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
            autoFocus={true}
          />
        </Offcanvas.Header>
        <Offcanvas.Body>{content}</Offcanvas.Body>
        <Offcanvas.Footer />
      </Offcanvas>
    );
};

export default Searchbar;
