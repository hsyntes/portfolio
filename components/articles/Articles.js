import { motion } from "framer-motion";
import Image from "next/image";

const Articles = ({ icons, articles }) => {
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
            {/* <li className="text-center my-12 lg:my-24">
              <Image
                src={icons[0].icon_link}
                className="mx-auto mb-4"
                width={64}
                height={64}
                alt={icons[0].icon_name}
              />
              <span className="text-2xl">Ticks & Trips</span>
            </li> */}
          </motion.li>
        ))}
      </ul>
      <ul>
        {articles?.map((article) => (
          <li
            className="grid grid-cols-12 gap-3 lg:gap-6 rounded hover:bg-white hover:dark:bg-dark-darker hover:shadow p-4 my-12 lg:my-24 transition"
            key={article._id}
          >
            <Image
              src={article.article_thumbnail}
              width={1080}
              height={1350}
              className="col-span-3 lg:col-span-2 rounded"
              alt={article.article_title}
            />
            <section className="col-span-9 lg:col-span-10">
              <h1 className="font-bold text-2xl lg:text-3xl mb-2">
                {article.article_title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm lg:text-base">
                {article.article_description}
              </p>
            </section>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Articles;
