import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("javascript", javascript);

const HighLightCode = ({ codeString }) => {
  const highLightedCode = hljs.highlight(codeString, {
    language: "javascript",
  }).value;

  return (
    <pre>
      <code
        dangerouslySetInnerHTML={{
          __html: highLightedCode,
        }}
      />
    </pre>
  );
};

export default HighLightCode;
