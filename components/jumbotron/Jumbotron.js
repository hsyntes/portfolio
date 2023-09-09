import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Jumbotron = ({ s3Bucket }) => {
  const [text] = useState("<Full-Stack/>");

  return (
    <>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ ease: "easeOut", delay: 0.75, duration: 0.25 }}
        className="text-center mb-6 lg:mb-0"
      >
        <Image
          src="/logo.svg"
          className="w-32 lg:w-72 xl:w-96 mx-auto mb-8 lg:mb-0"
          width={192}
          height={192}
          alt="Logo"
          priority={true}
        />
        <ul className="flex items-center justify-center lg:hidden">
          <li className="mx-1.5">
            <Link
              href="https://github.com/hsyntes"
              className="text-gray-500 hover:text-dark hover:dark:text-white transition"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </Link>
          </li>
          <li className="mx-1.5">
            <Link
              href="https://linkedin.com/in/hsyntes"
              target="_blank"
              className="text-gray-500 hover:text-dark hover:dark:text-white transition"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </Link>
          </li>
        </ul>
      </motion.div>
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
            <li className="flex items-start lg:items-center justify-start">
              <img src={`${s3Bucket}/icons/idea.png`} width={20} height={20} />
              <span className="text-base lg:text-lg leading-6 ms-2">
                Solving problems with creative and efficient approaches
              </span>
            </li>
            <li className="flex items-start lg:items-center justify-start">
              <img
                src={`${s3Bucket}/icons/experience.png`}
                width={20}
                height={20}
              />
              <span className="text-base lg:text-lg leading-6 ms-2">
                Sharing my knowledge and experiences
              </span>
            </li>
            <li className="flex items-start lg:items-center justify-start">
              <img
                src={`${s3Bucket}/icons/develop.png`}
                width={20}
                height={20}
              />
              <span className="text-base lg:text-lg leading-6 ms-2">
                Developing Full-Stack applications
              </span>
            </li>
          </ul>
        </div>
        <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
          <Button type="button" variant="primary" className="mb-4 lg:mb-0">
            <FontAwesomeIcon icon={faFile} className="text-white !text-lg" />
            <span className="ms-2">See the articles</span>
          </Button>
          <Button
            type="button"
            variant="link"
            className="group relative block lg:inline-block !text-lg mx-auto lg:mx-0 lg:ms-4 !pb-1"
          >
            <FontAwesomeIcon icon={faProjectDiagram} className="text-primary" />
            <span className="ms-2">Go to the projects</span>
            <div className="absolute rounded w-0 h-0.5 bg-gradient-to-r from-primary to-secondary bottom-0 left-0 group-hover:w-full transition-all"></div>
          </Button>
        </section>
      </section>
    </>
  );
};

export default Jumbotron;
