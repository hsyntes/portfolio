import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Card from "@/components/ui/Card";
import Image from "next/image";
import { useRouter } from "next/router";

const AuthenticationPage = () => {
  const router = useRouter();
  const { auth } = router.query;

  return (
    <Card className="dark:bg-black lg:dark:bg-dark !shadow-none lg:shadow lg:w-5/6 xl:w-3/4 !p-0 lg:!p-12">
      <Card.Header>
        <Image src="/logo.svg" width={28} height={32} alt="App" />
        <h1 className="font-bold text-xl ms-4">{`${auth
          .slice(0, 1)
          .toUpperCase()}${auth.slice(1)}`}</h1>
      </Card.Header>
      {auth === "signup" ? <Signup /> : <Login />}
    </Card>
  );
};

export default AuthenticationPage;
