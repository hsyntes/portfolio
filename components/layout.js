import Navbar from "./navbar/Navbar";
import Container from "./container/Container";

const Layout = ({ children }) => (
  <>
    <header className="backdrop-blur bg-opacity-0 sticky top-0 py-8">
      <Navbar />
    </header>
    <main className="my-24 lg:my-32">
      <Container>{children}</Container>
    </main>
    <footer className="my-24 lg:my-32"></footer>
  </>
);

export default Layout;
