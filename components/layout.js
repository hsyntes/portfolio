import Navbar from "./navbar/Navbar";
import Container from "./container/Container";

// * Root layout
const Layout = ({ children }) => (
  <>
    <header className="bg-light dark:bg-black sticky top-0 py-4 mb-10 z-10">
      <Navbar />
    </header>
    <main className="my-12 lg:my-24">
      {/* Wrap the app with Container */}
      <Container>{children}</Container>
    </main>
    <footer className="my-12 lg:my-24">
      <Container>
        <hr className="bg-gray-300 dark:bg-gray-600 h-0.5 border-none" />
      </Container>
    </footer>
  </>
);

export default Layout;
