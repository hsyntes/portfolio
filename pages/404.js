import Container from "@/components/container/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div
      style={{ width: "100%", height: "90vh" }}
      className="flex flex-col items-center justify-center"
    >
      <Container className="text-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={128}
            height={128}
            alt="Logo"
            priority={true}
            className="mx-auto"
          />
        </Link>
        <h1 className="text-4xl font-bold mt-8 mb-2">UPPS! 😟</h1>
        <p className="text-lg">
          We didn't break the internet, but couldn't find what you are looking
          for.
        </p>
        <Link href="/" className="block mx-auto my-4">
          <Button type="button" variant="primary">
            Go to the Homepage
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default ErrorPage;
