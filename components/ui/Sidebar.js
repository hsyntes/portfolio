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
} from "@fortawesome/free-solid-svg-icons";
import SendEmail from "../links/SendEmail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { themeSliceActions } from "@/store/theme-slice/theme-slice";

const Sidebar = ({ show, handleSidebar }) => {
  const [backdropColor, setBackdropColor] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const { theme } = themeState;

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
    dispatch(themeSliceActions.switchTheme(isChecked ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") setIsChecked(true);
    else setIsChecked(false);
  }, [theme]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (theme === "dark")
        setBackdropColor(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--color-black"
          )
        );
      else
        setBackdropColor(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--color-light"
          )
        );
    }
  }, [theme]);

  return (
    <Offcanvas
      show={show}
      handleSidebar={handleSidebar}
      style={{ backgroundColor: `rgba(${backdropColor}, 0.75)` }}
    >
      <Offcanvas.Header handleOffcanvas={handleSidebar}>
        <Link href="/" onClick={handleSidebar}>
          <Image src="/logo.svg" width={32} height={32} alt="Logo" />
        </Link>
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
              <p className="text-gray-500 text-sm line-clamp-2">
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
              <p className="text-gray-500 text-sm line-clamp-2">
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
                Sign up now to be informed about the latest articles, source
                codes of excellent projects, and comment them!
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
        <section className="mb-8">
          <label className="flex items-center cursor-pointer">
            <div
              className={`relative w-12 h-6 bg-gray-300 rounded-full cursor-pointer transition duration-300 ${
                isChecked ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={handleToggle}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={handleToggle}
              />
              <div
                className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 transition-transform ${
                  isChecked
                    ? "transform translate-x-8"
                    : "transform translate-x-0"
                }`}
              ></div>
            </div>
            <div className="ms-3">{isChecked ? "🌙" : "🌞"}</div>
          </label>
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
            Hello! I'm delighted that you want to reach out to me. I amm here to
            hear from you for any questions you may have. Whether it's feedback,
            collaboration opportunities, or simply to say hello, please feel
            free to contact me. 🤗
          </p>
          <SendEmail />
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
            className="block text-gray-600 dark:text-gray-400 my-1"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <span className="ms-2">Instagram</span>
          </Link>
          <Link
            href="https://linkedin.com/in/hsyntes"
            target="_blank"
            className="block text-gray-600 dark:text-gray-400 my-1"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="ms-2">LinkedIn</span>
          </Link>
        </section>
      </Offcanvas.Body>
      <Offcanvas.Footer />
    </Offcanvas>
  );
};

export default Sidebar;
