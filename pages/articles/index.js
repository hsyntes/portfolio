import Container from "@/components/container/Container";
import MernText from "@/components/mern-text/MernText";
import Head from "next/head";

const ArticlesPage = () => {
  return (
    <>
      <Head>
        <title>
          Learn MERN Development - Huseyin Ates @hsyntes | Software Engineer
          Full Stack MERN Developer
        </title>
      </Head>
      <header
        style={{
          height: "35vh",
          backgroundImage: `url("${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/banner.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="order-last lg:order-first font-bold text-2xl lg:text-5xl !text-dark text-center">
          LEARN
          <br />
          <MernText />
          &nbsp;DEVELOPMENT
        </h1>
      </header>
      <Container className="my-20"></Container>
    </>
  );
};

export default ArticlesPage;
