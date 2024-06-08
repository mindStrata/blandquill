"use client";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="flex justify-center items-center font-ibm-mono text-xl">
      Error occured{String(error)}
    </div>
  );
};
export default Error;
