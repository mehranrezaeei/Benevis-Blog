import React, { useState } from "react";
import accountBg from "../../assets/images/alessio-soggetti-cfKC0UOZHJo-unsplash.jpg";
import { Link } from "react-router-dom";
import { signupFormValidation } from "../formValidation/validation";
// react Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [rolesChecked, setroleChecked] = useState(false);
  const [errors, seterrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const fromErrors = signupFormValidation(
      name,
      email,
      password,
      confirmPassword,
      rolesChecked
    );
    console.log(fromErrors);
    if (Object.keys(fromErrors).length > 0) {
      seterrors(fromErrors);
      console.log("Hi");
    } else {
      toast.success("ثبت نام شما با موفقیت انجام شد", {
        theme: "colored",
      });
      setemail("");
      setname("");
      setconfirmPassword("");
      setpassword("");
      seterrors({});
    }
  };
  return (
    <div className="flex  h-screen relative">
      <ToastContainer />
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
      <div className="C-bg-img-registerPage w-[40%] h-full md:block hidden">
        <img src={accountBg} alt="" className="w-full h-full" />
      </div>
      <div className="md:w-[60%] w-full h-screen flex flex-col justify-center md:p-20 sm:p-10 p-5">
        <h2 className="text-[2rem] font-[600] md:mb-16 mb-10 text-medium-steel-blue-700">
          ایجاد حساب کاربری
        </h2>
        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="نام"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className={`w-full h-14 border px-4 rounded-md outline-none ${
                errors.name ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.name && (
              <span className="text-red-500 font-[300]">{errors.name}</span>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="ایمیل"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className={`w-full h-14 border px-4 rounded-md outline-none ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.email && (
              <span className="text-red-500 font-[300]">{errors.email}</span>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className={`w-full h-14 border px-4 rounded-md outline-none ${
                errors.password ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.password && (
              <span className="text-red-500 font-[300]">{errors.password}</span>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="تکرار رمز عبور"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              className={`w-full h-14 border px-4 rounded-md outline-none ${
                errors.confirmPassword ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 font-[300]">
                {errors.confirmPassword}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 w-full">
            <input
              type="checkbox"
              id="roles-policy"
              className="w-4 h-4 cursor-pointer"
              value={rolesChecked}
              onClick={(e) => setroleChecked(e.target.checked)}
            />
            <label
              for="roles-policy"
              className={`cursor-pointer ${
                errors.rolesConditions ? "text-red-500" : "text-black"
              }`}
            >
              پذیرش قوانین و مقررات
            </label>
          </div>
          <input
            type="submit"
            className="h-14 w-full bg-medium-steel-blue-700 text-white text-lg font-[600] rounded-md shadow-md cursor-pointer"
            value="ثبت نام"
          />
          <div>
            <Link to="/account/login" className="font-[300]">
              قبلا عضو شدید؟ رفتن به صفحه ورود
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
