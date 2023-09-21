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
      <section>
        <h1 className="font-bold text-2xl lg:text-4xl block w-full lg:flex items-center mb-4">
          <span className="order-last lg:order-first">
            LEARN <MernText /> DEVELOPMENT
          </span>
          <Image
            src={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/icons/mern-light.png`}
            width={675}
            height={234}
            className="hidden dark:block w-20 mx-auto lg:ms-auto"
            alt="Mern Stack"
          />
          <Image
            src={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/icons/mern-dark.png`}
            width={675}
            height={234}
            className="block dark:hidden w-20 mx-auto lg:ms-auto"
            alt="Mern Stack"
          />
        </h1>
        <h1 className="font-bold text-gray-500 mb-2">
          Hi 👋, I'm Huseyin Ates
        </h1>
        <Summary />
      </section>
    </>
  );
};

export default ArticlesPage;
