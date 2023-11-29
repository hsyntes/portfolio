import Image from "next/image";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../ui/Button";

const Certifications = ({ certifications }) => {
  console.log(certifications);
  return (
    <section className="my-20 lg:my-40">
      <h6 className="font-bold text-2xl lg:text-4xl text-center lg:text-start my-6 lg:my-24">
        Licenses & Certifications
      </h6>
      <ul className="grid grid-cols-12">
        {certifications?.map((certification) => (
          <motion.li
            style={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", delay: 0.25, duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-12 grid grid-cols-12 lg:col-span-4 items-start gap-4 lg:gap-8 py-8 my-3 lg:my-0"
            key={certification._id}
          >
            <section className="col-span-3 lg:col-span-4">
              <Image
                src={certification.icon}
                width={84}
                height={84}
                style={{ width: "100%" }}
              />
            </section>
            <section className="col-span-9 lg:col-span-7 flex flex-col h-full">
              <h1 className="font-bold text-lg">{certification.name}</h1>
              <p>{certification.company}</p>
              <Link
                href={certification.link}
                target="_blank"
                className="mt-auto"
              >
                <Button
                  type="button"
                  variant="blue-link"
                  className="!text-base"
                >
                  <span>Show credential</span>
                </Button>
              </Link>
            </section>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default Certifications;
