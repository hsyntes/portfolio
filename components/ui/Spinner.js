import { motion } from "framer-motion";

const Spinner = ({ className, size }) => {
  const classes = `border-t-2 border-t-primary border-2 border-secondary ${className}`;

  return (
    <motion.div
      className={classes}
      style={{
        borderRadius: "100%",
        width: size === "sm" ? "16px" : "24px",
        height: size === "sm" ? "16px" : "24px",
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ ease: "easeOut", duration: 0.5, repeat: Infinity }}
    />
  );
};

export default Spinner;
