import Navbar from "./ui/Navbar";
import Hr from "./ui/Hr";
import Brand from "./ui/Brand";
import Container from "./container/Container";
import Links from "./links/Links";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { themeSliceActions } from "@/store/theme-slice/theme-slice";

// * Root layout
const Layout = ({ children }) => {
  const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const { theme } = themeState;

  if (typeof window !== "undefined")
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        dispatch(themeSliceActions.switchTheme(e.matches ? "dark" : "light"))
      );

  useEffect(() => {
    const [html, body] = [
      document.querySelector("html"),
      document.querySelector("body"),
    ];

    if (theme === "dark") {
      html.classList.add("dark");
      body.className = "!bg-black !text-white";
    } else {
      html.classList.remove("dark");
      body.className = "!bg-light !text-dark";
    }

    dispatch(themeSliceActions.switchTheme(theme));
  }, [theme]);

  return (
    <>
      <header className="bg-light dark:bg-black sticky top-0 py-2 lg:py-4 z-10">
        <Navbar />
      </header>
      <main>
        {/* The pages */}
        {children}
      </main>
      <Container>
        <Hr />
      </Container>
      <footer className="my-6">
        <Container>
          <section>
            <Brand>
              <Links />
            </Brand>
          </section>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
