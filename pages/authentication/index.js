import { useRouter } from "next/router";

const AuthenticationPage = () => {
  const router = useRouter();
  const { auth } = router.query;
};

export default AuthenticationPage;
