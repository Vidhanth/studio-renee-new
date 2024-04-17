import * as React from 'react';

type FieldProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
};

export const Field = (props: FieldProps) => {
  const { label, className, children } = props;
  return (
    <div className={className}>
      <label className="text-md mb-1 block text-gray-700">
        {label}
        <div className="mt-1">{children}</div>
      </label>
    </div>
  );
};
