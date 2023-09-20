import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion, useScroll, useTransform } from "framer-motion";

const Jumbotron = ({ icons }) => {
  const [text] = useState("<Full-Stack/>");

  // * Scrolling animation with framer-motion
  const { scrollYProgress } = useScroll();

  let scale, opacity;
  if (scrollYProgress) {
    scale = useTransform(scrollYProgress, [0, 0.03], [1, 0.5]);
    opacity = useTransform(scrollYProgress, [0, 0.03], [1, 0]);
  }

  return (
    <>
      <motion.div
        animate={{ opacity: [0, 1] }}
        style={
          typeof window !== "undefined" && window.innerWidth <= 992
            ? { scale, opacity }
            : undefined
        }
        transition={{ ease: "easeOut", delay: 0.75, duration: 0.25 }}
        className="text-center"
      >
        <Image
          src="/logo.svg"
          className="w-32 lg:w-72 xl:w-96 mx-auto"
          width={192}
          height={192}
          alt="Logo"
          priority={true}
        />
      </motion.div>
      <ul className="flex items-center justify-center lg:hidden my-3 mt-6">
        <motion.li
          animate={{ opacity: [0, 1], scale: [0.75, 1] }}
          transition={{ ease: "easeOut", delay: 1, duration: 0.35 }}
          className="mx-1.5"
        >
          <Link
            href="https://github.com/hsyntes"
            className="text-gray-500 hover:text-dark hover:dark:text-white transition"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </Link>
        </motion.li>
        <motion.li
          animate={{ opacity: [0, 1], scale: [0.75, 1] }}
          transition={{ ease: "easeOut", delay: 1.25, duration: 0.35 }}
          className="mx-1.5"
        >
          <Link
            href="https://linkedin.com/in/hsyntes"
            target="_blank"
            className="text-gray-500 hover:text-dark hover:dark:text-white transition"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </Link>
        </motion.li>
      </ul>
      <section className="order-last lg:order-first">
        <h1 className="text-center lg:text-start">
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{ ease: "easeOut", delay: 1.5, duration: 0.25 }}
            className="block text-gray-500 text-lg lg:text-2xl xl:text-3xl mb-1"
          >
            Hi, I'm Huseyin Ates
          </motion.span>
          <span className="block font-bold text-5xl lg:text-6xl xl:text-8xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {Array.from(text).map((letter, index) => (
              <motion.span
                style={{ display: "none" }}
                animate={{ display: "inline-block" }}
                transition={{
                  ease: "easeInOut",
                  delay: 0.15 * index,
                  duration: 0.25,
                  repeat: Infinity,
                }}
                key={index}
              >
                {letter}
              </motion.span>
            ))}
          </span>
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{
              ease: "easeInOut",
              delay: 1.9,
              duration: 0.5,
            }}
            className="block font-bold text-5xl lg:text-6xl xl:text-8xl"
          >
            Developer
          </motion.span>
        </h1>
        <div className="flex items-center justify-center lg:justify-start my-12">
          <ul>
            {icons.map((icon) => (
              <li
                className="flex items-start lg:items-center justify-start"
                key={icon._id}
              >
                <Image
                  src={icon.icon_link}
                  width={20}
                  height={20}
                  alt={icon.icon_name}
                />
                <span className="text-base lg:text-lg leading-6 ms-2">
                  {icon.icon_name === "idea" &&
                    "Solving problems with creative and efficient approaches"}
                  {icon.icon_name === "experience" &&
                    "Sharing my knowledge and experiences"}
                  {icon.icon_name === "develop" &&
                    "Developing Full-Stack applications"}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
          <Link href="#articles" scroll={false}>
            <Button
              type="button"
              variant="primary"
              className="flex items-center mb-4 lg:mb-0 !px-6 !py-3"
            >
              <FontAwesomeIcon icon={faFile} className="text-white !text-lg" />
              <span className="ms-2">Read the articles</span>
            </Button>
          </Link>
          <Link href="#projects" scroll={false}>
            <Button
              type="button"
              variant="link"
              className="group relative flex items-center !text-lg mx-auto lg:mx-0 lg:ms-4 !pb-1"
            >
              <FontAwesomeIcon
                icon={faProjectDiagram}
                className="text-primary"
              />
              <span className="ms-2">Go to the projects</span>
              <div className="absolute rounded w-0 h-0.5 bg-gradient-to-r from-primary-darker to-secondary-darker bottom-0 left-0 group-hover:w-full transition-all"></div>
            </Button>
          </Link>
        </section>
      </section>
    </>
  );
};

export default Jumbotron;
