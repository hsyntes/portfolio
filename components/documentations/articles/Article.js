import Image from "next/image";
import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Article = ({ article }) => {
  // Set hoverend event
  const [articledHovered, setArticleHovered] = useState(false);

  return (
    <>
      <Image
        src={article.article_thumbnail}
        width={1080}
        height={1350}
        className="rounded border group-hover:opacity-60 group-hover:dark:opacity-40 transition"
        alt={article.article_title}
        priority={true}
        style={{ opacity: !articledHovered ? "100%" : undefined }}
        onMouseEnter={() => setArticleHovered(true)}
        onMouseLeave={() => setArticleHovered(false)}
        onClick={() => setArticleHovered(true)}
      />
      <motion.div
        className="block absolute w-full h-full top-full -translate-y-12 left-0 backdrop-blur group-hover:lg:-translate-y-full transition-all duration-300"
        style={{ transform: articledHovered ? "translateY(-100%)" : undefined }}
        onMouseEnter={() => setArticleHovered(true)}
        onMouseLeave={() => setArticleHovered(false)}
      >
        <Card.Header className="!block my-3">
          <motion.div
            animate={articledHovered ? { rotate: [0, 180] } : { rotate: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            onClick={() => setArticleHovered(!articledHovered)}
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
          <p className="text-justify line-clamp-6">
            {article.article_description}
          </p>
        </Card.Body>
        <Card.Footer className="absolute bottom-6 left-1/2 -translate-x-1/2 ">
          <Link href={`/articles/${article._id}`}>
            <Button
              type="button"
              variant="none"
              className="bg-dark text-white dark:bg-white dark:text-dark !text-xs"
            >
              Read More
            </Button>
          </Link>
        </Card.Footer>
      </motion.div>
    </>
  );
};

export default Article;
