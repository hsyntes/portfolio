import Link from "next/link";
import Image from "next/image";
import Offcanvas from "./Offcanvas";
import Button from "./Button";
import Brand from "./Brand";
import Badge from "./Badge";
import Hr from "./Hr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faEnvelope,
  faPowerOff,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ show, handleSidebar }) => (
  <Offcanvas show={show} handleSidebar={handleSidebar}>
    <Offcanvas.Header>
      <Link href="/" onClick={handleSidebar}>
        <Image src="/logo.svg" width={32} height={32} alt="Logo" />
      </Link>
      <FontAwesomeIcon
        icon={faTimes}
        size="xl"
        className="text-secondary cursor-pointer ms-auto"
        onClick={handleSidebar}
      />
    </Offcanvas.Header>
    <Offcanvas.Body>
      <section className="grid grid-cols-12 gap-2 mb-8">
        <Link
          href="https://github.com/hsyntes"
          className="col-span-6 bg-white dark:bg-dark w-full rounded shadow-md p-4"
          target="_blank"
        >
          <section className="flex items-center mb-1">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-primary dark:text-white"
            />
            <h6 className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:text-white ms-2">
              GitHub
            </h6>
          </section>
          <section>
            <p className="text-gray-500 text-sm">
              Access the full code of my projects
            </p>
          </section>
        </Link>
        <Link
          href="https://linkedin.com/in/hsyntes"
          className="col-span-6 bg-white dark:bg-dark w-full rounded shadow-md p-4"
          target="_blank"
        >
          <section className="flex items-center mb-1">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-primary dark:text-white"
            />
            <h6 className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:text-white ms-2">
              LinkedIn
            </h6>
          </section>
          <section>
            <p className="text-gray-500 text-sm">
              Learn advanced MERN Stack Tricks & Tips
            </p>
          </section>
        </Link>
      </section>
      <section className="mb-8">
        <Link href="/authentication?auth=signup">
          <section className="flex items-center mb-1">
            <FontAwesomeIcon
              icon={faPowerOff}
              className="text-primary dark:text-white"
            />
            <h6 className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:text-white ms-2">
              Sign up
            </h6>
          </section>
          <section>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Sign up now to be informed about the latest articles, source codes
              of excellent projects, and comment them!
            </p>
            <Button
              type="button"
              variant="link"
              className="!text-base dark:hidden"
            >
              Sign up
            </Button>
            <Button
              type="button"
              variant="none"
              className="!text-base hidden dark:block !p-0"
            >
              Sign up
            </Button>
          </section>
        </Link>
      </section>
      <Hr />
      <ul className="my-4">
        <li>
          <Link href="#articles" className="flex items-center" scroll={false}>
            <Button
              type="button"
              variant="link"
              className="!text-lg"
              onClick={handleSidebar}
            >
              <span>Articles</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-secondary ms-2"
              />
            </Button>
          </Link>
        </li>
        <li>
          <Link href="#projects" className="flex items-center" scroll={false}>
            <Button
              type="button"
              variant="link"
              className="!text-lg"
              onClick={handleSidebar}
            >
              <span>Projects</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-secondary ms-2"
              />
            </Button>
          </Link>
        </li>
      </ul>
      <Hr className="mb-8" />
      <section>
        <h6 className="font-bold text-lg mb-2">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:text-white">
            Contact Me
          </span>
        </h6>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          Hello! I'm delighted that you want to reach out to me. I'am here to
          hear from you for any questions you may have. Whether it's feedback,
          collaboration opportunities, or simply to say hello, please feel free
          to contact me. 🤗
        </p>
        <Link
          href={"mailto:se.hsyntes@gmail.com"}
          target="_blank"
          className="block text-gray-600 dark:text-gray-400"
        >
          <Badge variant="primary" className="inline-block">
            Send an email now!
          </Badge>
          <div className="block">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="ms-2">se.hsyntes@gmail.com</span>
          </div>
        </Link>
        <Link
          href="https://twitter.com/hsyntes"
          target="_blank"
          className="block text-gray-600 dark:text-gray-400 my-1"
        >
          <FontAwesomeIcon icon={faTwitter} />
          <span className="ms-2">Twitter</span>
        </Link>
        <Link
          href="https://instagram.com/hsyntes"
          target="_blank"
          className="block text-gray-600 dark:text-gray-400"
        >
          <FontAwesomeIcon icon={faInstagram} />
          <span className="ms-2">Instagram</span>
        </Link>
      </section>
    </Offcanvas.Body>
    <Offcanvas.Footer>
      <Hr className="mb-4" />
      <Brand onClick={handleSidebar} />
    </Offcanvas.Footer>
  </Offcanvas>
);

export default Sidebar;
