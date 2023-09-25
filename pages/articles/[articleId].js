import Container from "@/components/container/Container";
import Button from "@/components/ui/Button";
import HighLightCode from "@/components/ui/HighlightCode";
import fetchData from "@/utils/fetchData";
import { faAppStore, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const ArticleDetailPage = ({ article }) => {
  const { article_documentation } = article;
  const { headings } = article_documentation;

  console.log(article);

  console.log(headings);

  return (
    <>
      <Head>
        <meta name="description" content={article_documentation.description} />
        <meta
          name="keywords"
          content={article_documentation.keywords.join(", ")}
        />
        <title>{article_documentation.title}</title>
      </Head>
      <Container className="mt-10">
        <section className="mb-10">
          <h1 className="font-bold text-2xl lg:text-4xl mb-4">
            {article_documentation.title}
          </h1>
          {article.article_related_repo && (
            <>
              <p className="mb-2">
                You can contribute to the github repo on this topic or check out
                my related project below.
              </p>
              <Link href={article.article_related_repo} target="_blank">
                <Button
                  type="button"
                  variant="blue-link"
                  className="!text-base"
                >
                  <span className="me-2">Related Repo</span>
                  <FontAwesomeIcon icon={faGithub} />
                </Button>
              </Link>
            </>
          )}
          <br />
          {article.article_related_app && (
            <Link href={article.article_related_app} target="_blank">
              <Button type="button" variant="link" className="!text-base">
                <span className="me-2">Related App</span>
                <FontAwesomeIcon icon={faAppStore} className="text-secondary" />
              </Button>
            </Link>
          )}
        </section>
        {headings?.map((heading, index) => {
          return (
            <ul className="mb-12" key={index}>
              <li key={heading._id}>
                {heading.sub_title && (
                  <h2 className="font-bold text-xl lg:text-2xl mb-2">
                    {heading.sub_title}
                  </h2>
                )}
                {heading.paragraph && (
                  <p className="text-gray-500 dark:text-gray-400">
                    {heading.paragraph}
                  </p>
                )}
                {heading.paragraphs &&
                  heading.paragraphs.map((paragraph, index) => (
                    <p
                      className="text-gray-500 dark:text-gray-400 mb-1"
                      key={index}
                    >
                      {paragraph}
                    </p>
                  ))}
                {heading.code && (
                  <HighLightCode codeString={heading.code} className="my-4" />
                )}
                {heading.image && (
                  <Image
                    src={heading.image.src}
                    width={heading.image.width}
                    height={heading.image.height}
                    className="my-4"
                    alt={article_documentation.description}
                    key={index}
                    priority={true}
                  />
                )}
                {article.article_related_repo && (
                  <>
                    <p className="mb-2">
                      You can contribute to the github repo on this topic or
                      check out my related project below.
                    </p>
                    <Link href={article.article_related_repo} target="_blank">
                      <Button
                        type="button"
                        variant="blue-link"
                        className="!text-base"
                      >
                        <span className="me-2">Related Repo</span>
                        <FontAwesomeIcon icon={faGithub} />
                      </Button>
                    </Link>
                  </>
                )}
                <br />
                {article.article_related_app && (
                  <Link href={article.article_related_app} target="_blank">
                    <Button type="button" variant="link" className="!text-base">
                      <span className="me-2">Related App</span>
                      <FontAwesomeIcon
                        icon={faAppStore}
                        className="text-secondary"
                      />
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          );
        })}
      </Container>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { articleId } = params;

  const response = await fetchData(`articles/id/${articleId}`);

  const { article } = await response.data;

  return {
    props: {
      article,
    },
  };
}

export default ArticleDetailPage;
