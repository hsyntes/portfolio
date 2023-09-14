import Image from "next/image";
import Link from "next/link";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const Articles = ({ icons, articles }) => {
  console.log(articles);

  const [articledHovered, setArticleHovered] = useState(false);

  return (
    <section id="articles" className="my-20 lg:my-40">
      <h6 className="font-bold text-2xl lg:text-4xl text-center">
        Sharing my knowledge and experiences in Full Stack MERN Development
      </h6>
      <ul className="lg:flex lg:items-start lg:justify-evenly mb-12">
        {icons?.map((icon, index) => (
          <motion.li
            whileInView={{ opacity: [0, 1] }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
              delay: 0.3 * (index + 1),
            }}
            viewport={{ once: true }}
            className="text-center my-12 lg:my-24"
            key={icon._id}
          >
            <Image
              src={icon.icon_link}
              width={68}
              height={68}
              className="w-16 lg:w-auto drop-shadow mx-auto mb-4"
              alt={icon.icon_name}
            />
            <h6 className="font-semibold text-2xl mb-1">
              {icon.icon_name === "idea" && "Tricks & Tips"}
              {icon.icon_name === "experience" && "Experiences"}
              {icon.icon_name === "develop" && "Real-World Apps"}
            </h6>
            <p className="text-gray-500">
              {icon.icon_name === "idea" &&
                "Solving problems with creative and efficient approaches"}
              {icon.icon_name === "experience" &&
                "Sharing my knowledge and experiences"}
              {icon.icon_name === "develop" &&
                "Building real-world Full Stack web apps"}
            </p>
          </motion.li>
        ))}
      </ul>
      <ul className="grid grid-cols-12 gap-4">
        {articles?.map((article) => (
          <li
            key={article._id}
            className="col-span-6 lg:col-span-4 rounded overflow-hidden"
          >
            <Link
              href="https://github.com/hsyntes"
              className="group relative overflow-hidden"
              onMouseEnter={() => setArticleHovered(true)}
              onMouseLeave={() => setArticleHovered(false)}
            >
              <Image
                src={article.article_thumbnail}
                width={1080}
                height={1350}
                className="rounded border group-hover:opacity-75 group-hover:dark:opacity-40 transition"
                alt={article.article_title}
                priority={true}
              />
              <motion.div className="hidden lg:block absolute w-full h-96 top-full -translate-y-12 left-0 backdrop-blur group-hover:-translate-y-full transition-all duration-200">
                <Card.Header className="my-3">
                  <motion.div
                    animate={
                      articledHovered ? { rotate: [0, 180] } : { rotate: 0 }
                    }
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    className="mx-auto"
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
                        className={
                          articledHovered ? "dark:text-white" : "text-dark"
                        }
                      />
                    </motion.div>
                  </motion.div>
                </Card.Header>
                <Card.Body className="px-6">
                  <h1 className="font-bold text-lg text-center mb-3">
                    {article.article_title}
                  </h1>
                  <p className="text-justify">{article.article_description}</p>
                  <Button
                    type="button"
                    variant="light"
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 !text-xs"
                  >
                    Read More
                  </Button>
                </Card.Body>
              </motion.div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Articles;
