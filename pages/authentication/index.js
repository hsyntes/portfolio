import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Card from "@/components/ui/Card";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const AuthenticationPage = () => {
  const router = useRouter();
  const { auth } = router.query;

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Huseyin Ates @hsyntes | Full Stack MERN Developer with proficiency in using React & Next.js to create interactive user interfaces and skilled in handling server-side development using Node.js, Express.js, WebSocket with MVC architecture, handling database operations including data models and advanced schema design using MongoDB, implementing Amazon Web Services (AWS) & Cloud Computing."
        />
        <meta
          name="keywords"
          content="Huseyin Ates, hsyntes, signup, login, authentication, Full-Stack Developer, Full Stack Developer, Web Development, Web Developer, Frontend, Backend, API"
        />
        <title>Signup - Huseyin Ates | Full Stack MERN Developer</title>
      </Head>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card className="dark:!bg-black lg:dark:!bg-dark !shadow-none lg:shadow w-5/6 lg:w-3/4 xl:w-2/4 !p-0 lg:!px-16 lg:!py-24">
          <Card.Header>
            <Link href="/">
              <Image src="/logo.svg" width={32} height={32} alt="App" />
            </Link>
            <h1 className="font-bold text-2xl ms-4">{`${auth
              ?.slice(0, 1)
              .toUpperCase()}${auth?.slice(1)}`}</h1>
          </Card.Header>
          {auth === "signup" ? <Signup /> : <Login />}
        </Card>
      </div>
    </>
  );
};

AuthenticationPage.getLayout = function getLayout(page) {
  return page;
};

export default AuthenticationPage;
