import Container from "../container/Container";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState();
  const handleSidebar = () => setSidebar(!sidebar);

  // flex items-center justify-center w-full md:w-9/12 xl:w-10/12

  return (
    <>
      <nav>
        <Container className="grid grid-cols-12 items-center">
          <Link href="/" className="col-span-2 lg:col-span-3">
            <Image
              src="/logo.svg"
              width={32}
              height={32}
              alt="Logo"
              priority={true}
            />
          </Link>
          <ul className="col-span-8 lg:col-span-6 w-full">
            <li className="relative">
              <input
                type="text"
                name="search"
                className="form-input block w-full bg-light dark:bg-black caret-light dark:caret-black rounded border-gray-500 py-1 placeholder:ps-6 placeholder:text-sm placeholder:lg:text-base focus:border-gray-500 focus:ring-0"
                placeholder="Search documentation..."
                readOnly
              />

              <FontAwesomeIcon
                icon={faSearch}
                className="absolute text-gray-500 top-1/2 left-3 -translate-y-1/2"
              />
            </li>
          </ul>
          <ul className="col-span-2 lg:col-span-3 flex lg:hidden items-center ms-auto">
            <li>
              <Button
                type="button"
                variant="none"
                className="text-secondary !p-0"
                onClick={handleSidebar}
              >
                <FontAwesomeIcon icon={faBars} size="xl" />
              </Button>
            </li>
          </ul>
          <ul className="col-span-2 lg:col-span-3 items-center ms-auto hidden lg:flex">
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
    </>
  );
};
export default Navbar;
