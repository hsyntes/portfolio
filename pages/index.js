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
const fetchData = async (route) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/hsyntes/${route}`
  );

  const { data } = await response.json();

  return data;
};

// * Fetch the projects
export async function getServerSideProps() {
  // * Access to the Server Local Variable(s)

  const projectsData = await fetchData("projects");
  const articlesData = await fetchData("articles");
  const iconsData = await fetchData("icons");

  return {
    props: {
      projects: projectsData.projects,
      articles: articlesData.articles,
      icons: iconsData.icons,
    },
  };
}
