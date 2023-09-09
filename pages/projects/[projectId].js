const ProjectDetailPage = ({ project }) => {};

export default ProjectDetailPage;

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
