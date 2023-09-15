import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Article = ({ article }) => {
  // Set hoverend event
  const [articledHovered, setArticleHovered] = useState(false);

  return (
    <Link
      href="https://github.com/hsyntes"
      target="_blank"
      className="group relative overflow-hidden"
      onMouseEnter={() => setArticleHovered(true)}
      onMouseLeave={() => setArticleHovered(false)}
    >
      <Image
        src={article.article_thumbnail}
        width={1080}
        height={1350}
        className="rounded border group-hover:opacity-60 group-hover:dark:opacity-40 transition"
        alt={article.article_title}
        priority={true}
      />
      <motion.div className="block absolute w-full h-full top-full -translate-y-12 left-0 backdrop-blur group-hover:-translate-y-full transition-all duration-300">
        <Card.Header className="!block my-3">
          <motion.div
            animate={articledHovered ? { rotate: [0, 180] } : { rotate: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              animate={!articledHovered ? { y: [0, 5, 0] } : { y: [0] }}
              transition={{
                ease: "easeInOut",
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <FontAwesomeIcon
                icon={faAngleUp}
                size="xl"
                className={articledHovered ? "dark:text-white" : "text-dark"}
              />
            </motion.div>
          </motion.div>
          <h1 className="font-bold text-lg xl:text-2xl text-center my-4">
            {article.article_title}
          </h1>
        </Card.Header>
        <Card.Body className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6">
          <p className="block xl:hidden text-justify text-sm">
            {article.article_description.slice(0, 240)}...
          </p>
          <p className="hidden xl:block text-justify text-base">
            {article.article_description}
          </p>
        </Card.Body>
        <Card.Footer className="absolute bottom-6 left-1/2 -translate-x-1/2 ">
          <Button
            type="button"
            variant="none"
            className="bg-white text-white dark:bg-white dark:text-dark !text-xs"
          >
            Read More
          </Button>
        </Card.Footer>
      </motion.div>
    </Link>
  );
};

export default Article;
