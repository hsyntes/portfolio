import Head from "next/head";

const ProjectDetailPage = ({ project }) => {
  console.log(project);
  return (
    <>
      <Head>
        <meta name="description" content={project.description} />
        <meta
          name="keywords"
          content={project.documentation.keywords.join(", ")}
        />
        <title>
          {project.documentation.title} - {project.description}
        </title>
      </Head>
      <section>
        <h1 className="font-bold text-4xl">{project.documentation.title}</h1>
      </section>
    </>
  );
};

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
