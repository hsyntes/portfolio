import Container from "@/components/container/Container";
import Jumbotron from "@/components/jumbotron/Jumbotron";
import Projects from "@/components/documentations/projects/Projects";
import Articles from "@/components/documentations/articles/Articles";
import Summary from "@/components/summary/Summary";
import Expertise from "@/components/expertise/Expertise";
import fetchData from "@/utils/fetchData";
import SendEmail from "@/components/links/SendEmail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { themeSliceActions } from "@/store/theme-slice/theme-slice";

export default function Home({ projects, articles, icons }) {
  const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const { theme } = themeState;

  if (typeof window !== "undefined")
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        dispatch(themeSliceActions.switchTheme(e.matches ? "dark" : "light"))
      );

  useEffect(() => {
    const [html, body] = [
      document.querySelector("html"),
      document.querySelector("body"),
    ];

    if (theme === "dark") {
      html.classList.add("dark");
      body.className = "!bg-black !text-white";
    } else {
      html.classList.remove("dark");
      body.className = "!bg-light !text-dark";
    }
  }, [theme]);

  return (
    <Container>
      <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto mt-20">
        <Jumbotron icons={icons} />
      </header>
      <section className="text-gray-500 lg:text-lg text-justify my-20 lg:my-40">
        <Summary />
      </section>
      <center className="my-20 lg:my-40">
        <SendEmail />
      </center>
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
