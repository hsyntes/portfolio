import { useQuery } from "react-query";
import Jumbotron from "@/components/jumbotron/Jumbotron";
import Projects from "@/components/projects/Projects";
import getCurrentUser from "@/utils/getCurrentUser";
import Articles from "@/components/articles/Articles";
import Image from "next/image";
import Summary from "@/components/summary/Summary";

export default function Home({ projects, articles, icons }) {
  const { data: currentUser } = useQuery(
    ["getCurrentUser", process.env.NEXT_PUBLIC_BACKEND_API],
    {
      queryFn: () => getCurrentUser(process.env.NEXT_PUBLIC_BACKEND_API),
    }
  );

  console.log(currentUser);

  return (
    <>
      <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto">
        <Jumbotron icons={icons} />
      </header>
      <Summary />
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
  const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;

  const projectsData = await fetchData(BACKEND_API, "projects");
  const articlesData = await fetchData(BACKEND_API, "articles");
  const iconsData = await fetchData(BACKEND_API, "icons");

  return {
    props: {
      BACKEND_API,
      projects: projectsData.projects,
      articles: articlesData.articles,
      icons: iconsData.icons,
    },
  };
}
