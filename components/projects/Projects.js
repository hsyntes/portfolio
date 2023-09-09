import Image from "next/image";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCodeFork } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Projects = ({ projects }) => (
  <ul className="lg:mx-auto">
    {projects?.map((project) => (
      <li
        className="grid grid-cols-12 gap-2 lg:gap-4 xl:gap-0 my-24"
        key={project._id}
      >
        <Image
          src={project.logo}
          width={72}
          height={72}
          className="col-span-2 lg:col-span-1 hover:scale-110 hover:rotate-12 cursor-pointer transition-all"
          alt="Project"
          onClick={() => window.open(`${project.link}`, "_blank")}
        />
        <div className="col-span-10 lg:col-span-11">
          <h1 className="font-bold text-2xl mb-2">
            <Link href={`/projects/${project._id}`}>{project.name}</Link>
          </h1>
          <p className="mb-8">
            <Link href={`/projects/${project._id}`}>{project.description}</Link>
          </p>
          <div className="flex flex-col  lg:flex-row lg:items-center">
            <Link href={project.link} target="_blank">
              <Button type="button" variant="primary">
                Go to the project
              </Button>
            </Link>
            <Link
              href={project.repo}
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
      </li>
    ))}
  </ul>
);

export default Projects;
