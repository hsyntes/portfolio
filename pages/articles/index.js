import Container from "@/components/container/Container";
import MernText from "@/components/mern-text/MernText";
import fetchData from "@/utils/fetchData";
import Head from "next/head";
import Image from "next/image";

const ArticlesPage = ({ icons }) => {
  return (
    <>
      <Head>
        <title>
          Learn MERN Development - Huseyin Ates @hsyntes | Software Engineer
          Full Stack MERN Developer
        </title>
      </Head>
      <header
        className="flex flex-col w-full items-center justify-center"
        style={{
          height:
            typeof window !== "undefined" && window.innerWidth >= 922
              ? "35vh"
              : "20vh",
          backgroundImage: `url("${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/banner.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-bold text-2xl lg:text-5xl !text-dark text-center mb-2">
          LEARN
          <br />
          <MernText />
          &nbsp;DEVELOPMENT
        </h1>
        <section className="grid grid-cols-12 gap-3 lg:gap-0 lg:w-1/3">
          <section className="flex items-center col-span-4">
            <Image
              src={icons[0].icon_link}
              width={24}
              height={24}
              alt={icons[0].icon_name}
            />
            <p className="text-gray-600 ms-1">Tricks & Tips</p>
          </section>
          <section className="flex items-center justify-center col-span-4 my-1 lg:my-0">
            <Image
              src={icons[1].icon_link}
              width={24}
              height={24}
              alt={icons[1].icon_name}
            />
            <p className="text-gray-600 ms-1">Experience</p>
          </section>
          <section className="flex items-center col-span-4 justify-end">
            <Image
              src={icons[2].icon_link}
              width={24}
              height={24}
              alt={icons[2].icon_name}
            />
            <p className="text-gray-600 ms-1">Real Apps</p>
          </section>
        </section>
      </header>
      <Container className="my-20"></Container>
    </>
  );
};

export async function getServerSideProps() {
  const iconsData = await fetchData("icons");

  return {
    props: {
      icons: iconsData.data.icons,
    },
  };
}

export default ArticlesPage;
