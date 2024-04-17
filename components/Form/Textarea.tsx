import React from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      {...props}
      className="block w-full rounded-sm border-tertiary border p-2.5 font-light placeholder:text-lg placeholder:font-light focus:border-solid focus:border-primary focus:ring-0 focus:outline-none"
    ></textarea>
  );
};
