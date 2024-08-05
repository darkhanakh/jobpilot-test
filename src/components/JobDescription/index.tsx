import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface JobDescriptionProps {
  text: string;
}

const JobDescription: React.FC<JobDescriptionProps> = ({ text }) => {
  return (
    <div className="p-6 bg-white w-[65%]">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-semibold mb-4" {...props} />
          ),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-semibold mb-4" {...props} />
          ),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          p: ({ node, ...props }) => (
            <p className="mb-4 text-gray-700" {...props} />
          ),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside space-y-2 mb-4" {...props} />
          ),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          li: ({ node, ...props }) => (
            <li className="text-gray-700" {...props} />
          ),
        }}
      >
        {text}
      </Markdown>
    </div>
  );
};

export default JobDescription;
