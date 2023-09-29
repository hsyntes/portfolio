import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import Layout from "@/components/layout";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import store from "@/store";

const queryClient = new QueryClient();
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Huseyin Ates @hsyntes | Full Stack MERN Developer with proficiency in using React & Next.js to create interactive user interfaces and skilled in handling server-side development using Node.js, Express.js, WebSocket with MVC architecture, handling database operations including data models and advanced schema design using MongoDB, implementing Amazon Web Services (AWS) & Cloud Computing."
        />
        <meta
          name="keywords"
          content="Hüseyin Ateş, Huseyin Ates, hsyntes, Huseyin Ates Full-Stack Developer, Huseyin Ates Full Stack Developer, huseyin ates full stack developer, huseyin ates mern developer, Huseyin Ates Software Engineer, huseyin ates software engineer"
        />
        <title>
          Huseyin Ates @hsyntes - Software Engineer | Full Stack MERN Developer
        </title>
      </Head>
      {/* Redux Provider */}
      <Provider store={store}>
        {/* React-Query Provider */}
        <QueryClientProvider client={queryClient}>
          {pathname === "/authentication" ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </QueryClientProvider>
      </Provider>
    </>
  );
}
