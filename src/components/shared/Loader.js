import React from "react";
import { PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full fixed top-0 left-0  h-screen flex justify-center items-center bg-white">
      <PulseLoader color="#4682b4" margin={4} size={20} />
    </div>
  );
};

export default Loader;
