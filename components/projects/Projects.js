import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
  faCodeFork,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = ({ projects }) => {
  const router = useRouter();

  return (
    <section id="projects" className="my-20 lg:my-40">
      <h6 className="font-bold text-2xl lg:text-4xl text-center">
        You can see the full code of my projects and contribute them on&nbsp;
        <Link
          href="https://github.com/hsyntes"
          target="_blank"
          className="text-blue-500 hover:text-blue-700 transition underline"
        >
          GitHub!
        </Link>
      </h6>
      <ul className="lg:mx-auto">
        {projects?.map((project) => (
          <motion.li
            whileInView={{ opacity: [0, 1], y: [150, 0] }}
            transition={{ ease: "easeOut", delay: 0.25, duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-2 lg:gap-4 xl:gap-0 rounded hover:bg-white hover:dark:bg-dark-darker hover:shadow p-4 my-12 lg:my-24 transition"
            key={project._id}
          >
            <Image
              src={project.project_logo}
              width={72}
              height={72}
              className="col-span-2 lg:col-span-1 cursor-pointer drop-shadow-md transition-all"
              alt={project.project_name}
            />
            <div className="col-span-10 lg:col-span-11">
              <Link href={`/projects/${project._id}`}>
                <h1 className="font-bold text-2xl mb-2">
                  {project.project_name}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 lg:text-base mb-8">
                  {project.project_description}
                </p>
              </Link>
              <div className="flex flex-col lg:flex-row lg:items-center">
                <Link href={project.project_link} target="_blank">
                  <Button type="button" variant="primary">
                    <span className="me-2">Go to the project</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </Button>
                </Link>
                <Link
                  href={project.project_repo}
                  target="_blank"
                  className="mt-6 lg:mt-0 lg:ms-4"
                >
                  <Button type="button" variant="link" className="!text-base">
                    <span>See the code</span>
                    <FontAwesomeIcon
                      icon={faCode}
                      className="text-secondary ms-2"
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
      <center className="my-12 lg:my-24">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", delay: 0.25, duration: 0.5 }}
        >
          <Button
            type="button"
            variant="link"
            onClick={() =>
              router.replace("https://github.com/hsyntes?tab=repositories")
            }
          >
            <span className="me-2">See all on GitHub</span>
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              className="text-secondary"
            />
          </Button>
        </motion.div>
      </center>
    </section>
  );
};

export default Projects;
