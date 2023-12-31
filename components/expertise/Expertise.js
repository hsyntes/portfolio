import { motion } from "framer-motion";
import Image from "next/image";

const Expertise = ({ icons }) => (
  <section className="my-20 lg:my-40">
    <h6 className="font-bold text-2xl lg:text-4xl text-center">
      Sharing my knowledge and experiences in Full Stack MERN Development
    </h6>
    <ul className="lg:grid lg:grid-cols-12 gap-6 lg:gap-12 xl:gap-24 my-12 lg:my-24">
      {icons?.map((icon, index) => (
        <motion.li
          style={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
            delay: 0.3 * (index + 1),
          }}
          viewport={{ once: true }}
          className="text-center col-span-12 lg:col-span-4 my-12 lg:my-0"
          key={icon._id}
        >
          <Image
            src={icon.icon_link}
            width={96}
            height={96}
            className="w-20 lg:w-auto drop-shadow mx-auto mb-4"
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
              "Building real-world Full Stack web apps with MERN"}
          </p>
        </motion.li>
      ))}
    </ul>
  </section>
);

export default Expertise;
