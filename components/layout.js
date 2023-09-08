import Navbar from "./navbar/Navbar";
import Container from "./container/Container";

const Layout = ({ children }) => (
  <>
    <header className="my-8">
      <Navbar />
    </header>
    <main className="my-24 lg:my-32">
      <Container>{children}</Container>
    </main>
    <footer className="my-24 lg:my-32"></footer>
  </>
);

export default Layout;
