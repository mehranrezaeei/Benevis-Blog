import React from "react";
import Authors from "./author/Authors";
import Blogs from "./blog/Blogs";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="C-container w-full mx-auto flex my-14">
        <div className="mt-14 flex py-5 lg:flex-row flex-col w-full h-full gap-2">
          <div className="lg:w-[25%] w-full h-fit ">
            <Authors />
          </div>
          <div className="lg:w-[75%] w-full px-2">
            <Blogs />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
