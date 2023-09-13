import { useQuery } from "react-query";
import Jumbotron from "@/components/jumbotron/Jumbotron";
import Projects from "@/components/projects/Projects";
import getCurrentUser from "@/utils/getCurrentUser";
import Articles from "@/components/articles/Articles";
import Image from "next/image";

export default function Home({ projects, articles, icons }) {
  return (
    <>
      <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto">
        <Jumbotron icons={icons} />
      </header>
      <section className="text-gray-500 lg:text-lg text-justify my-20 lg:my-40">
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
      <Projects projects={projects} />
      <Articles icons={icons} articles={articles} />
    </>
  );
}

// * Fetching backend data
const fetchData = async (BACKEND_API, route) => {
  const response = await fetch(`${BACKEND_API}/hsyntes/${route}`);

  const { data } = await response.json();

  return data;
};

// * Fetch the projects
export async function getServerSideProps() {
  // * Access to the Server Local Variable(s)
  const [BACKEND_API, s3Bucket] = [
    process.env.BACKEND_API,
    process.env.AWS_S3_BUCKET,
  ];

  const projectsData = await fetchData(BACKEND_API, "projects");
  const articlesData = await fetchData(BACKEND_API, "articles");
  const iconsData = await fetchData(BACKEND_API, "icons");

  return {
    props: {
      projects: projectsData.projects,
      articles: articlesData.articles,
      icons: iconsData.icons,
    },
  };
}
