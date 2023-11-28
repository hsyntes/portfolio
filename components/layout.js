import Navbar from "./ui/Navbar";
import Hr from "./ui/Hr";
import Brand from "./ui/Brand";
import Container from "./container/Container";
import Links from "./links/Links";

// * Root layout
const Layout = ({ children }) => (
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

export default Layout;
