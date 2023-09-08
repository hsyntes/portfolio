import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Huseyin Ates @hsyntes | Full Stack MERN Developer with proficient in using React & Next.js to create interactive user interfaces and skilled in handling server-side development using Node.js, Express.js, WebSocket with MVC architecture, handling database operations including data models and advanced schema design using MongoDB, implementing Amazon Web Servides (AWS) & Cloud Computing."
        />
        <meta
          name="keywords"
          content="Huseyin Ates, hsyntes, Full-Stack Developer, Full Stack Developer, Web Development, Web Developer, Frontend, Backend, API"
        />
        <title>
          Huseyin Ates - Software Engineer | Full Stack MERN Developer
        </title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
