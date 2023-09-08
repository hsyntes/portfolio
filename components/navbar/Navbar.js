import Image from "next/image";
import Container from "../container/Container";
import Link from "next/link";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav>
      <Container className="flex items-center w-full">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={32}
            height={32}
            alt="Logo"
            priority={true}
          />
        </Link>
        <ul className="flex items-center ms-auto">
          <li className="hidden lg:block">
            <Link
              href="https://github.com/hsyntes"
              className="text-gray-500 hover:text-dark hover:dark:text-white transition"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </Link>
          </li>
          <li className="hidden lg:block mx-4">
            <Link
              href="https://linkedin.com/in/hsyntes"
              target="_blank"
              className="text-gray-500 hover:text-dark hover:dark:text-white transition"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </Link>
          </li>
          <li>
            <Button
              type="button"
              variant="primary"
              onClick={() => router.push("/authentication")}
            >
              Sign up
            </Button>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
