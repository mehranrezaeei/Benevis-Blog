import React from "react";
import logo from "../assets/images/benevis-v2.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-center z-10 bg-medium-steel-blue-700 text-white shadow-md fixed top-0 w-full h-[70px] ">
      <div className="C-container w-full flex items-center justify-between py-3">
        <div>جایی برای نوشتن</div>
        <Link to="/" className=" flex items-center h-full">
          <img src={logo} alt="" className="w-12 h-full" />
        </Link>
        <div className="flex items-center ">
          <Link to="/account/login">ورود</Link>
          <span className="w-[1px] h-5 mx-3 bg-white"></span>
          <Link to="/account/signup">ثبت نام</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
