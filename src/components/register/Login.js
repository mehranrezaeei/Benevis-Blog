import React, { useState } from "react";
import { Link } from "react-router-dom";
import accountBg from "../../assets/images/alessio-soggetti-cfKC0UOZHJo-unsplash.jpg";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className="flex h-screen relative">
      {/* Arrow Buttom  */}
      <Link to="/" className="absolute top-0 left-0 p-3 m-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-7 stroke-[2]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </Link>
      <div className="C-bg-img-registerPage w-[40%]  h-full md:block hidden">
        <img src={accountBg} alt="" className="w-full h-full" />
      </div>
      <div className="md:w-[60%] w-full h-screen flex flex-col justify-center md:p-20 sm:p-10 p-5">
        <h2 className="text-[2rem] font-[600] md:mb-16 mb-10 text-medium-steel-blue-700">
          ورود به حساب کاربری
        </h2>
        <form className="flex flex-col gap-6 w-full">
          <input
            type="text"
            placeholder="ایمیل"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="w-full h-14 border px-4 rounded-md"
          />
          <input
            type="text"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="w-full h-14 border px-4 rounded-md"
          />
          <button
            type="button"
            className="h-14 w-full bg-medium-steel-blue-700 text-white text-lg font-[600] rounded-md shadow-md"
          >
            ورود
          </button>
          <div>
            <Link to="/account/signup" className="font-[300]">
              عضو نیستید ؟ ثبت نام کنید
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
