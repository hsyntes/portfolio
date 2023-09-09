import Head from "next/head";

const ProjectDetailPage = ({ project }) => {
  console.log(project);

  const { documentation } = project;

  return (
    <>
      <Head>
        <meta name="description" content={documentation.description} />
        <meta name="keywords" content={documentation.keywords.join(", ")} />
        <title>
          {documentation.title} - {documentation.description}
        </title>
      </Head>
      <section>
        <h1 className="font-bold text-4xl mb-4">{documentation.title}</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {documentation.description}
        </p>
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
