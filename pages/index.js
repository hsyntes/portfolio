"use client";

import { useQuery } from "react-query";
import Jumbotron from "@/components/jumbotron/Jumbotron";
import Projects from "@/components/projects/Projects";
import getCurrentUser from "@/utils/getCurrentUser";
import HighLightCode from "@/components/ui/HighlightCode";
// import from "highlight.js";

export default function Home({ BACKEND_API, s3Bucket, projects }) {
  const { data } = useQuery(["getCurrentUser", BACKEND_API], {
    queryFn: () => getCurrentUser(BACKEND_API),
  });

  const codeString = `
  const mutation = useMutation(login, {
    onSuccess: (data) => {
      console.log(data);

      if (data?.status === "fail") {
        setErrorDialog(true);
        setErrorMessage(data?.message);
      }

      if (data?.status === "success") {
        setToast(true);
        setToastMessage(data.message);

        queryClient.refetchQueries("getCurrentUser");
        queryClient.invalidateQueries("getCurrentUser");

        setTimeout(() => {
          router.push("/");
        }, 2500);
      }
    },
  });
  `;

  return (
    <>
      <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto">
        {/* Jumbotron */}
        <Jumbotron s3Bucket={s3Bucket} />
      </header>
      <section className="text-gray-500 lg:text-lg text-justify my-12 lg:my-24">
        <h2>
          <strong className="text-dark dark:text-white">Full Stack MERN</strong>{" "}
          Developer with proficient in using React & Next.js, TailwindCSS &
          Bootstrap to create interactive user interfaces and skilled in
          handling server-side development using Node.js, Express.js, WebSocket
          with MVC architecture, handling database operations including data
          models and advanced schema design using MongoDB, implementing Amazon
          Web Services & Cloud Computing.
        </h2>
      </section>
      <section className="my-12 lg:my-24">
        <HighLightCode codeString={codeString} />
      </section>
      <section className="my-12 lg:my-24">
        <Projects projects={projects} />
      </section>
    </>
  );
}

// * Fetch the projects
export async function getServerSideProps() {
  // * Access to the Server Local Variable(s)
  const [BACKEND_API, s3Bucket] = [
    process.env.REACT_APP_BACKEND_API,
    process.env.REACT_APP_AWS_S3_BUCKET,
  ];

  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/hsyntes/projects`
  );

  const { data } = await response.json();
  const { projects } = data;

  return {
    props: {
      BACKEND_API,
      s3Bucket,
      projects,
    },
  };
}
