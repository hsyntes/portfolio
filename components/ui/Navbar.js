import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Container from "../container/Container";
import Button from "./Button";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const [searchbar, setSearchbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleSearchBar = () => setSearchbar(!searchbar);
  const handleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav>
        <Container className="grid grid-cols-12 items-center">
          <Link href="/" className="col-span-2">
            <Image
              src="/logo.svg"
              width={32}
              height={32}
              alt="Logo"
              priority={true}
            />
          </Link>
          <ul className="col-span-8">
            <li className="relative">
              <input
                type="text"
                name="search"
                className="form-input block w-full bg-light dark:bg-black caret-light dark:caret-black rounded border-gray-300 dark:border-gray-600 py-1 lg:py-1.5 placeholder:text-gray-500 placeholder:ps-6 placeholder:text-sm placeholder:lg:text-base focus:border-gray-300 focus:dark:border-gray-600 focus:ring-0"
                placeholder="Search documents"
                onClick={handleSearchBar}
                readOnly
              />

              <FontAwesomeIcon
                icon={faSearch}
                className="absolute text-gray-500 top-1/2 left-4 -translate-y-1/2"
              />
            </li>
          </ul>
          <ul className="col-span-2 flex lg:hidden items-center justify-end ms-auto">
            <li>
              <Button
                type="button"
                variant="none"
                className="text-secondary !text-base !px-0"
                onClick={handleSidebar}
              >
                <FontAwesomeIcon icon={faBars} size="xl" />
              </Button>
            </li>
          </ul>
          <ul className="col-span-2 items-center ms-auto hidden lg:flex">
            <li>
              <Link
                href="https://github.com/hsyntes"
                className="text-gray-500 dark:text-gray-400 hover:text-dark hover:dark:text-white transition"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </Link>
            </li>
            <li className="mx-4">
              <Link
                href="https://linkedin.com/in/hsyntes"
                target="_blank"
                className="text-gray-500 dark:text-gray-400 hover:text-dark hover:dark:text-white transition"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </Link>
            </li>
            <li>
              <Link href="/authentication?auth=signup">
                <Button type="button" variant="primary">
                  Sign up
                </Button>
              </Link>
            </li>
          </ul>
        </Container>
      </nav>
      <Sidebar show={sidebar} handleSidebar={handleSidebar} />
      <Searchbar show={searchbar} handleSearchBar={handleSearchBar} />
    </>
  );
};
export default Navbar;
