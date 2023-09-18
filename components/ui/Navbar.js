import Container from "../container/Container";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Offcanvas from "./Offcanvas";

const Navbar = () => {
  const [offcanvas, setOffcanvas] = useState();

  const handleOffcanvas = () => setOffcanvas(!offcanvas);

  return (
    <>
      <nav>
        <Container className="flex items-center w-full">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={36}
              height={36}
              alt="Logo"
              priority={true}
            />
          </Link>
          <ul className="flex lg:hidden items-center ms-auto">
            <li>
              <Button
                type="button"
                variant="none"
                className="text-secondary !p-0"
                onClick={handleOffcanvas}
              >
                <FontAwesomeIcon icon={faBars} size="xl" />
              </Button>
            </li>
          </ul>
          <ul className="items-center ms-auto hidden lg:flex">
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
      <Offcanvas show={offcanvas} handleOffcanvas={handleOffcanvas} />
    </>
  );
};
export default Navbar;
