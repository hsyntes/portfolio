import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Card from "@/components/ui/Card";

// * User authentication
const AuthenticationPage = () => {
  // * Access to the URL
  const router = useRouter();
  const { auth } = router.query;

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Huseyin Ates, hsyntes, huseyin ates, huseyin ates full stack developer, huseyin ates mern developer"
        />
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
        <Card className="!bg-light lg:!bg-white dark:!bg-black lg:dark:!bg-dark w-5/6 lg:w-3/4 xl:w-2/4 !p-0 lg:!px-16 lg:!py-24">
          <Card.Header>
            <Link href="/">
              <Image src="/logo.svg" width={32} height={32} alt="App" />
            </Link>
            <h1 className="font-bold text-2xl ms-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{`${auth
                ?.slice(0, 1)
                .toUpperCase()}${auth?.slice(1)}`}</span>
            </h1>
          </Card.Header>
          {/* Signup or Login based on the query URL (authMode) */}
          {auth === "signup" ? <Signup /> : <Login />}
        </Card>
      </div>
    </>
  );
};

export default AuthenticationPage;
