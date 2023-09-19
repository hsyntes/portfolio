import Link from "next/link";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Brand from "./Brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";
import Hr from "./Hr";
import Image from "next/image";

const OffcanvasHeader = ({ handleOffcanvas }) => (
  <div className="offcanvas-header relative flex items-center">
    {/* <Brand onClick={handleOffcanvas} /> */}
    <Image src="/logo.svg" width={32} height={32} />
    <FontAwesomeIcon
      icon={faTimes}
      size="xl"
      className="text-dark dark:text-white cursor-pointer absolute top-1/2 right-0 -translate-y-1/2"
      onClick={handleOffcanvas}
    />
  </div>
);

const OffcanvasBody = ({ handleOffcanvas }) => (
  <div className="offcanvas-body my-8">
    <section className="grid grid-cols-12 gap-2 mb-10">
      <Link
        href="https://github.com/hsyntes"
        className="col-span-6 bg-white dark:bg-dark w-full rounded shadow p-4"
        target="_blank"
      >
        <section className="flex items-center mb-1">
          <FontAwesomeIcon icon={faGithub} />
          <h6 className="font-bold ms-1">GitHub</h6>
        </section>
        <section>
          <p className="text-gray-500 text-sm">
            Check the full code of my projects
          </p>
        </section>
      </Link>
      <Link
        href="https://linkedin.com/in/hsyntes"
        className="col-span-6 bg-white dark:bg-dark w-full rounded shadow p-4"
        target="_blank"
      >
        <section className="flex items-center mb-1">
          <FontAwesomeIcon icon={faLinkedin} />
          <h6 className="font-bold ms-1">LinkedIn</h6>
        </section>
        <section>
          <p className="text-gray-500 text-sm">
            Read all the articles of my blog
          </p>
        </section>
      </Link>
    </section>
    <section className="mb-10">
      <section className="flex items-center mb-1">
        <FontAwesomeIcon icon={faPowerOff} />
        <h6 className="font-bold text-lg ms-2">Sign up</h6>
      </section>
      <section>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
          Sign up now to be informed about the latest articles, source codes of
          excellent projects, and comment them!
        </p>
        <Button type="button" variant="link" className="!text-base">
          Sign up
        </Button>
      </section>
    </section>
    <ul className="mb-10">
      <li>
        <Link href="#articles" className="block" scroll={false}>
          <Button
            type="button"
            variant="link"
            className="!text-base"
            onClick={handleOffcanvas}
          >
            Articles
          </Button>
        </Link>
      </li>
      <li>
        <Link href="#projects" className="block" scroll={false}>
          <Button
            type="button"
            variant="link"
            className="!text-base"
            onClick={handleOffcanvas}
          >
            Projects
          </Button>
        </Link>
      </li>
    </ul>
  </div>
);

const OffcanvasFooter = () => (
  <div className="offcanvas-footer mt-auto">
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
        className="offcanvas flex flex-col w-full backdrop-blur px-6 py-4"
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
