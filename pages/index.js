import { useQuery } from "react-query";
import Jumbotron from "@/components/jumbotron/Jumbotron";
import Projects from "@/components/documentations/projects/Projects";
import Articles from "@/components/documentations/articles/Articles";
import Summary from "@/components/summary/Summary";
import Expertise from "@/components/expertise/Expertise";
import fetchData from "@/utils/fetchData";
import getCurrentUser from "@/utils/getCurrentUser";

export default function Home({ projects, articles, icons }) {
  const { data } = useQuery("getCurrentUser", {
    queryFn: getCurrentUser,
  });

  console.log(data);

  return (
    <>
      <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto">
        <Jumbotron icons={icons} />
      </header>
      <Summary />
      <Projects projects={projects} />
      <Expertise icons={icons} />
      <Articles articles={articles} />
    </>
  );
}

// * Fetch the backend data
export async function getServerSideProps() {
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
