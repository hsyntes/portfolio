import Container from "@/components/container/Container";
import MernText from "@/components/mern-text/MernText";
import Button from "@/components/ui/Button";
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
        className="lg:grid lg:grid-cols-12"
        style={{
          height:
            typeof window !== "undefined" && window.innerWidth >= 992
              ? "40vh"
              : "30vh",
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
            alt="Expressjs"
          />
        </section>
        <section className="col-span-6 xl:col-span-4 h-full flex flex-col items-center justify-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/icons/mern-dark.png`}
            width={675}
            height={234}
            className="w-32 lg:hidden"
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
              <section className="flex items-center col-span-4 mx-2">
                <Image
                  src={icon.icon_link}
                  width={20}
                  height={20}
                  alt={icon.icon_name}
                />
                <p className="text-gray-600 text-sm lg:text-base ms-1">
                  {icon.icon_name === "idea" && "Tricks & Tips"}
                  {icon.icon_name === "experience" && "Experiences"}
                  {icon.icon_name === "develop" && "Real Apps"}
                </p>
              </section>
            ))}
          </section>
          <Button
            type="button"
            variant="primary"
            className="!text-xs my-3 text-center"
          >
            See more
          </Button>
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
