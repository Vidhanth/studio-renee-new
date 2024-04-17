import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="focus:outline-none block w-full rounded-sm border-tertiary border py-2.5 px-3.5 placeholder:text-lg placeholder:font-light focus:border-solid focus:border-primary focus:ring-0 font-light"
    />
  );
};
