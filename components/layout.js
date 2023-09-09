import Navbar from "./navbar/Navbar";
import Container from "./container/Container";

const Layout = ({ children }) => (
  <>
    <header className="backdrop-blur sticky top-0 py-2 my-4">
      <Navbar />
    </header>
    <main className="my-24 lg:my-32">
      <Container>{children}</Container>
    </main>
    <footer className="my-24 lg:my-32"></footer>
  </>
);

export default Layout;
