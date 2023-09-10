import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* Modal & Toast backdrops */}
        <div id="modal-backdrop"></div>
        <div id="toast-backdrop"></div>
      </body>
    </Html>
  );
}
