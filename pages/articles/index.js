import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container/Container";
import MernText from "@/components/mern-text/MernText";
import Button from "@/components/ui/Button";
import Summary from "@/components/summary/Summary";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fetchData from "@/utils/fetchData";

const ArticlesPage = ({ icons, articles }) => {
  return (
    <>
      <Head>
        <title>
          Learn MERN Development - Huseyin Ates @hsyntes | Software Engineer
          Full Stack MERN Developer
        </title>
      </Head>
      <header
        className="lg:grid lg:grid-cols-12"
        style={{
          height:
            typeof window !== "undefined" && window.innerWidth >= 992
              ? "40vh"
              : "25vh",
          backgroundImage: `url("${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/banner.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <section className="col-span-3 xl:col-span-4 hidden lg:flex items-center justify-evenly">
          <Image
            src={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/icons/mongodb.png`}
            width={52}
            height={52}
            alt="Mongodb"
          />
          <Image
            src={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/icons/express.png`}
            width={128}
            height={128}
            alt="Express"
          />
        </section>
        <section className="col-span-6 xl:col-span-4 h-full flex flex-col items-center justify-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/icons/mern-dark.png`}
            width={675}
            height={234}
            className="w-36 lg:hidden"
            alt="MERN Development"
          />
          <h1 className="font-bold text-3xl lg:text-5xl !text-dark text-center mt-3 mb-2">
            LEARN
            <br />
            <MernText />
            &nbsp;DEVELOPMENT
          </h1>
          <section className="flex items-center justify-center">
            {icons?.map((icon, index) => (
              <section
                className="flex items-center justify-center col-span-4 px-2"
                key={icon._id}
              >
                <Image
                  src={icon.icon_link}
                  width={20}
                  height={20}
                  alt={icon.icon_name}
                />
                <p className="text-gray-600 text-sm lg:text-base ms-1">
                  {icon.icon_name === "idea" && "Tips"}
                  {icon.icon_name === "experience" && "Knowledge"}
                  {icon.icon_name === "develop" && "Apps"}
                </p>
              </section>
            ))}
          </section>
        </section>
        <section className="col-span-3 xl:col-span-4 hidden lg:flex items-center justify-evenly">
          <Image
            src={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/icons/react.png`}
            width={96}
            height={96}
            alt="React"
          />
          <Image
            src={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/icons/nodejs.png`}
            width={84}
            height={84}
            alt="Nodejs"
          />
        </section>
      </header>
      <Container className="my-10">
        <h1 className="font-bold text-xl lg:text-2xl mb-2">
          Hi 👋 I'm Huseyin Ates
        </h1>
        <Summary />
        <ul>
          {articles?.map((article) => (
            <li className="flex items-start my-12" key={article._id}>
              <Image
                src={article.article_thumbnail}
                width={1080}
                height={1350}
                className="w-28 rounded shadow"
                alt="Article Thumbnail"
              />
              <section className="flex flex-col ms-4 lg:ms-8">
                <Link href={`/articles/${article._id}`} className="group">
                  <h1 className="font-bold mb-1">{article.article_title}</h1>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-black group-hover:dark:text-white text-sm line-clamp-4 lg:line-clamp-6 transition">
                    {article.article_description}
                  </p>
                </Link>
                <section className="mt-3">
                  {article.article_related_repo && (
                    <Link href={article.article_related_repo} target="_blank">
                      <Button type="button" variant="blue-link">
                        <span className="me-2">Related Repo</span>
                        <FontAwesomeIcon icon={faGithub} />
                      </Button>
                    </Link>
                  )}
                </section>
              </section>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export async function getServerSideProps() {
  const iconsData = await fetchData("icons");
  const articlesData = await fetchData("articles");

  const { icons } = iconsData.data;
  const { articles } = articlesData.data;

  return {
    props: {
      icons,
      articles,
    },
  };
}

export default ArticlesPage;
