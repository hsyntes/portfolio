import { motion } from "framer-motion";

const MernText = () => {
  const MERN = [
    { letter: "M", color: "text-green-500" },
    { letter: "E", color: "text-gray-500" },
    { letter: "R", color: "text-blue-500" },
    { letter: "N", color: "text-green-700" },
  ];

  return MERN.map((value, index) => (
    <motion.span
      key={index}
      whileInView={{ opacity: [0, 1], scale: [0.75, 1] }}
      transition={{ ease: "easeOut", delay: 0.5 * index, duration: 0.35 }}
      viewport={{ once: true }}
      className={value.color}
    >
      {value.letter}
    </motion.span>
  ));
};

export default MernText;
