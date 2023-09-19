import Navbar from "./ui/Navbar";
import Container from "./container/Container";
import Hr from "./ui/Hr";
import Brand from "./ui/Brand";
import Links from "./links/Links";

// * Root layout
const Layout = ({ children }) => (
  <>
    <header className="bg-light dark:bg-black sticky top-0 py-4 mb-10 z-10">
      <Navbar />
    </header>
    <main className="my-20 lg:my-40">
      {/* Wrap the app with Container */}
      <Container>{children}</Container>
    </main>
    <Container>
      <Hr />
    </Container>
    <footer className="my-6 mb-24">
      <Container>
        <section>
          <Brand />
        </section>
        <section>
          <Links />
        </section>
      </Container>
    </footer>
  </>
);

export default Layout;
