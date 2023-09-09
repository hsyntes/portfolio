import Jumbotron from "@/components/jumbotron/Jumbotron";
import Projects from "@/components/projects/Projects";

export default function Home({ s3Bucket, projects }) {
  return (
    <>
      <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto">
        <Jumbotron s3Bucket={s3Bucket} />
      </header>
      <section className="text-gray-500 text-justify my-12 lg:my-24">
        <h2>
          <strong className="text-dark dark:text-white">Full Stack MERN</strong>{" "}
          Developer with proficient in using React & Next.js, TailwindCSS &
          Bootstrap to create interactive user interfaces and skilled in
          handling server-side development using Node.js, Express.js, WebSocket
          with MVC architecture, handling database operations including data
          models and advanced schema design using MongoDB, implementing Amazon
          Web Services & Cloud Computing.
        </h2>
      </section>
      <section className="my-12 lg:my-24">
        <Projects projects={projects} />
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const s3Bucket = process.env.REACT_APP_AWS_S3_BUCKET;

  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/hsyntes/projects`
  );

  const { data } = await response.json();
  const { projects } = data;

  return {
    props: {
      s3Bucket,
      projects,
    },
  };
}
