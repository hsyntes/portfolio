import Container from "@/components/container/Container";
import MernText from "@/components/mern-text/MernText";
import Summary from "@/components/summary/Summary";
import Head from "next/head";
import Image from "next/image";

const ArticlesPage = () => {
  return (
    <>
      <Head>
        <title>
          Learn MERN Development - Huseyin Ates @hsyntes | Software Engineer
          Full Stack MERN Developer
        </title>
      </Head>
      <Container className="my-20">
        <section className="flex flex-col lg:flex-row lg:items-center mb-4">
          <h1 className="order-last lg:order-first font-bold text-2xl lg:text-4xl">
            LEARN <MernText /> DEVELOPMENT
          </h1>
          <section className="lg:ms-auto mb-2 lg:mb-0"></section>
        </section>
        <section>
          <h1 className="font-bold text-gray-500 mb-2">
            Hi👋 I'm Huseyin Ates
          </h1>
          <Summary />
        </section>
        <section></section>
      </Container>
    </>
  );
};

export default ArticlesPage;
