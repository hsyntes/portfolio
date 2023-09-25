import { useQuery } from "react-query";
import Container from "@/components/container/Container";
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
    <Container>
      <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto mt-20">
        <Jumbotron icons={icons} />
      </header>
      <section className="text-gray-500 lg:text-lg text-justify my-20 lg:my-40">
        <Summary />
      </section>
      <Projects projects={projects} />
      <Expertise icons={icons} />
      <Articles articles={articles} />
    </Container>
  );
}

// * Fetch the backend data
export async function getServerSideProps() {
  const projectsResponse = await fetchData("projects");
  const articlesResponse = await fetchData("articles/suggestions");
  const iconsResponse = await fetchData("icons");

  const { projects } = projectsResponse.data;
  const { articles } = articlesResponse.data;
  const { icons } = iconsResponse.data;

  return {
    props: {
      projects,
      articles,
      icons,
    },
  };
}
