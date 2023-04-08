import React from 'react';

type ErrorToastProps = {
  msg: string;
};

export const ErrorToast = ({ msg }: ErrorToastProps) => {
  return (
    <div
      className="bg-[#e2445c] flex justify-center items-center text-white box-border rounded-none w-full py-3 px-8 my-10 leading-4"
      role="alert"
    >
      {msg}
    </div>
  );
};

export default ErrorToast;
