import Navbar from "./navbar/Navbar";
import Container from "./container/Container";

const Layout = ({ children }) => (
  <>
    <header className="backdrop-blur sticky top-0 py-2 my-4">
      <Navbar />
    </header>
    <main className="my-12 lg:my-24">
      <Container>{children}</Container>
    </main>
    <footer className="my-12 lg:my-24"></footer>
  </>
);

export default Layout;
