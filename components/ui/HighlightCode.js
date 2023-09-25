import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("javascript", javascript);

const HighLightCode = ({ codeString, className }) => {
  const highLightedCode = hljs.highlight(codeString, {
    language: "javascript",
  }).value;

  const classes = `bg-white dark:bg-dark rounded ${className} w-full overflow-hidden overflow-x-auto p-4`;

  return (
    <pre className={classes}>
      <code
        dangerouslySetInnerHTML={{
          __html: highLightedCode,
        }}
      />
    </pre>
  );
};

export default HighLightCode;
