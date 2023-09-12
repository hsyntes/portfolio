import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Card from "@/components/ui/Card";

// * User authentication
const AuthenticationPage = ({ BACKEND_API }) => {
  // * Access to the URL
  const router = useRouter();
  const { auth } = router.query;

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Huseyin Ates, hsyntes, signup, login, authentication, Full-Stack Developer, Full Stack Developer, Web Development, Web Developer, Frontend, Backend, API"
        />
        <title>Signup - Huseyin Ates | Full Stack MERN Developer</title>
      </Head>
      <div
        className="my-12"
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
          {/* Signup or Login based on the query URL (authMode) */}
          {auth === "signup" ? (
            <Signup BACKEND_API={BACKEND_API} />
          ) : (
            <Login BACKEND_API={BACKEND_API} />
          )}
        </Card>
      </div>
    </>
  );
};

// * Access to the Server Local Variable(s)
export async function getStaticProps() {
  const BACKEND_API = process.env.BACKEND_API;
  console.log(BACKEND_API);

  return {
    props: {
      BACKEND_API,
    },
  };
}

export default AuthenticationPage;
