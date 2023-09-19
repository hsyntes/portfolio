import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Brand from "./Brand";
import Button from "./Button";
import Hr from "./Hr";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faEnvelope,
  faPowerOff,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const OffcanvasHeader = ({ handleOffcanvas }) => (
  <div className="offcanvas-header bg-white dark:bg-black flex items-center sticky top-0 z-10 px-6 py-4">
    {/* <Brand onClick={handleOffcanvas} /> */}
    <Image src="/logo.svg" width={32} height={32} />
    <FontAwesomeIcon
      icon={faTimes}
      size="xl"
      className="text-secondary cursor-pointer ms-auto"
      onClick={handleOffcanvas}
    />
  </div>
);

const OffcanvasBody = ({ handleOffcanvas }) => (
  <div className="offcanvas-body px-6 py-4">
    <section className="grid grid-cols-12 gap-4 mb-8">
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
            Check the full code of my projects
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
            Read all the articles of my blog
          </p>
        </section>
      </Link>
    </section>
    <section className="bg-white dark:bg-dark rounded shadow-md p-4 mb-8">
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
          Sign up now to be informed about the latest articles, source codes of
          excellent projects, and comment them!
        </p>
        <Button type="button" variant="link" className="!text-base dark:hidden">
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
    </section>
    <ul className="mb-8">
      <li>
        <Link href="#articles" className="flex items-center" scroll={false}>
          <Button
            type="button"
            variant="link"
            className="!text-lg"
            onClick={handleOffcanvas}
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
            onClick={handleOffcanvas}
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
    <section>
      <h6 className="font-bold text-lg dark:text-white mb-2">
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Contact Me
        </span>
      </h6>
      <p className="text-gray-500 mb-3">
        Hello! I'm delighted that you want to reach out to me. I'am here to hear
        from you for any questions you may have. Whether it's feedback,
        collaboration opportunities, or simply to say hello, please feel free to
        contact me. 🤗
      </p>
      <Link
        href={"mailto:se.hsyntes@gmail.com"}
        target="_blank"
        className="block font-bold"
      >
        <Button type="button" variant="link" className="!text-base">
          <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
          <span className="ms-2">se.hsyntes@gmail.com</span>
        </Button>
      </Link>
      <Link
        href="https://twitter.com/hsyntes"
        target="_blank"
        className="block font-bold text-blue-500 my-1"
      >
        <FontAwesomeIcon icon={faTwitter} />
        <span className="ms-2">Twitter</span>
      </Link>
      <Link
        href="https://instagram.com/hsyntes"
        target="_blank"
        className="block font-bold text-pink-500"
      >
        <FontAwesomeIcon icon={faInstagram} />
        <span className="ms-2">Instagram</span>
      </Link>
    </section>
  </div>
);

const OffcanvasFooter = () => (
  <div className="offcanvas-footer mt-auto px-6 py-4">
    <Hr className="mb-4" />
    <Brand />
  </div>
);

const Offcanvas = ({ show, handleOffcanvas }) => {
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

  // * Closing the offcanvas when clicked outside of the offcanvas or
  // * pressed the ESC key
  document.body.addEventListener("click", (e) => {
    if (e.target === document.getElementById("offcanvas-overlay"))
      handleOffcanvas();
  });

  document.body.addEventListener("keyup", (e) => {
    if (e.key === "Escape") handleOffcanvas();
  });

  return createPortal(
    <div id="offcanvas-overlay" className="z-20" style={{ height: "100vh" }}>
      <motion.div
        animate={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ ease: "easeOut", duration: 0.25 }}
        className="offcanvas flex flex-col w-full backdrop-blur overflow-y-scroll"
      >
        <Offcanvas.Header handleOffcanvas={handleOffcanvas} />
        <Offcanvas.Body handleOffcanvas={handleOffcanvas} />
        <Offcanvas.Footer />
      </motion.div>
    </div>,
    document.getElementById("offcanvas-backdrop")
  );
};

Offcanvas.Header = OffcanvasHeader;
Offcanvas.Body = OffcanvasBody;
Offcanvas.Footer = OffcanvasFooter;

export default Offcanvas;
