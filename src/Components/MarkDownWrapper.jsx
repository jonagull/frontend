import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkDownWrapper({ markdown }) {
  return (
    <>
      <div
        style={{
          whiteSpace: "pre-wrap",
        }}
      >
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </div>
    </>
  );
}
