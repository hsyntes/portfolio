import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const ProjectDetailPage = ({ project }) => {
  console.log(project);

  const { documentation } = project;
  const { headings } = documentation;

  return (
    <>
      <Head>
        <meta name="description" content={documentation.description} />
        <meta name="keywords" content={documentation.keywords.join(", ")} />
        <title>{`${documentation.title} - ${documentation.description}`}</title>
      </Head>
      <section>
        <section className="mb-10">
          <h1 className="font-bold text-2xl lg:text-4xl mb-4">
            {documentation.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base lg:text-lg">
            {documentation.description}
          </p>
        </section>
        <Link
          href={`${project.link}`}
          target="_blank"
          className="flex items-center mb-10"
        >
          <Image src={project.logo} width={48} height={48} alt="Project Icon" />
          <h1 className="font-bold text-2xl lg:text-4xl ms-2">
            {project.name}
          </h1>
          <FontAwesomeIcon
            className="text-gray-500 ms-2"
            size="lg"
            icon={faUpRightFromSquare}
          />
        </Link>
        {headings?.map((heading, index) => {
          return (
            <ul className="mb-10" key={index}>
              <li key={heading._id}>
                {heading.sub_title && (
                  <h2 className="font-bold text-xl lg:text-2xl mb-4">
                    {heading.sub_title}
                  </h2>
                )}
                {heading.paragraph && (
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {heading.paragraph}
                  </p>
                )}
                {/* {heading.image && (
                <Image src={heading.image} width={96} height={96} />
              )} */}
                {heading.lists && (
                  <ul className="mb-4">
                    {heading.lists.map((list) => (
                      <li key={list}>{list}</li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          );
        })}
      </section>
    </>
  );
};

// * Fetch the project based on ID
export async function getServerSideProps({ params }) {
  const { projectId } = params;

  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/hsyntes/projects/${projectId}`
  );

  const { data } = await response.json();

  return {
    props: {
      project: data.project,
    },
  };
}

export default ProjectDetailPage;
