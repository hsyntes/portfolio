import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectDetailPage = ({ project }) => {
  const { project_documentation } = project;
  const { headings } = project_documentation;

  return (
    <>
      <Head>
        <meta name="description" content={project_documentation.description} />
        <meta
          name="keywords"
          content={project_documentation.keywords.join(", ")}
        />
        <title>{`${project_documentation.title} - ${project_documentation.description}`}</title>
      </Head>
      <Container>
        <section className="mb-10">
          <h1 className="font-bold text-2xl lg:text-4xl mb-4">
            {project_documentation.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base lg:text-lg">
            {project_documentation.description}
          </p>
        </section>
        <Link
          href={`${project.project_link}`}
          target="_blank"
          className="flex items-center mb-10"
        >
          <Image
            src={project.project_logo}
            width={48}
            height={48}
            alt={project.project_name}
          />
          <h1 className="font-bold text-2xl lg:text-4xl ms-2">
            {project.project_name}
          </h1>
          <FontAwesomeIcon
            className="text-gray-500 ms-2"
            size="lg"
            icon={faUpRightFromSquare}
          />
        </Link>
        {headings?.map((heading, index) => {
          return (
            <ul className="mb-16" key={index}>
              <li key={heading._id}>
                {heading.sub_title && (
                  <h2 className="font-bold text-xl lg:text-2xl mb-2">
                    {heading.sub_title}
                  </h2>
                )}
                {heading.paragraph && (
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {heading.paragraph}
                  </p>
                )}
                {heading.link && (
                  <Link
                    href={Object.values(heading.link).join("")}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-700 transition mb-4"
                  >
                    {Object.keys(heading.link).join("")}
                  </Link>
                )}
                {heading.images && (
                  <div className="flex items-center flex-wrap">
                    {heading.images.map((image, index) => (
                      <Image
                        src={image}
                        width={1920}
                        height={1080}
                        className="w-96 lg:w-auto rounded my-4 last:mb-0 first:lg:me-6"
                        alt={project.project_name}
                        key={index}
                        priority={true}
                      />
                    ))}
                  </div>
                )}
                {heading.lists && (
                  <ul className="mb-2">
                    {heading.lists.map((list) => (
                      <li key={list}>{list}</li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          );
        })}
      </Container>
    </>
  );
};

// * Fetch the project based on ID
export async function getServerSideProps({ params }) {
  const { projectId } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/hsyntes/projects/id/${projectId}`
  );

  const { data } = await response.json();

  return {
    props: {
      project: data.project,
    },
  };
}

export default ProjectDetailPage;
