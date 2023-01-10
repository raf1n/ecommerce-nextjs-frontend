import React from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../../src/state/StateController";
import Link from 'next/link';
import { FaGoogle } from "react-icons/fa";

interface Props {}

const LoginForm: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="lg:w-[572px] w-full h-[783px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center relative text-center mb-7">
          <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
            Log In
          </h1>
          <div className="-mt-6">
            <svg
              width="172"
              height="29"
              viewBox="0 0 172 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.08742C17.6667 19.0972 30.5 31.1305 62.5 27.2693C110.617 21.4634 150 -10.09 171 5.08727"
                stroke="#FFBB38"
              ></path>
            </svg>
          </div>
        </div>

        <div>
          <div className="mb-5">
            <div className="w-full h-full">
              <label
                className="capitalize block  mb-2 text-qgray text-[13px] font-normal"
                htmlFor="email"
              >
                Email Address*
              </label>
              <div className="border  w-full h-full overflow-hidden relative border-qgray-border">
                <input
                  placeholder="Email Address"
                  className="placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                  type="email"
                  id="email"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="w-full h-full">
              <label
                className="capitalize block  mb-2 text-qgray text-[13px] font-normal"
                htmlFor="password"
              >
                Password
              </label>
              <div className="border  w-full h-full overflow-hidden relative border-qgray-border">
                <input
                  placeholder="* * * * * *"
                  className="placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                  type="password"
                  id="password"
                />
              </div>
            </div>
          </div>
          <div className="forgot-password-area flex justify-between items-center mb-7">
            <div className="remember-checkbox flex items-center space-x-2.5">
            <input
                type="checkbox"
                className="w-5 h-5 text-qblack flex justify-center items-center border border-light-gray"
               />
              <span className="text-base text-black">Remember Me</span>
            </div>
            <Link href="/forgot-password" className="hover:underline">Forgot password</Link>
          </div>
              <div>
              <button
                type="button"
                className="bg-[rgb(34,34,34)] text-white mb-3 text-sm w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
              >
                Login
              </button>
              <button
                type="button"
                className="bg-[#4285F4] text-white mb-6 text-sm w-full h-[50px] font-semibold flex gap-x-2 justify-center items-center bg-purple items-center"
              >
                <FaGoogle className="w-6 h-6" />Sign In With Google
              </button>
              </div>
          <div className="flex justify-center">
            <p className="text-base text-qgraytwo font-normal">
              Dont't have an account ?
              <Link href="/signup" className="ml-2 text-qblack cursor-pointer capitalize hover:underline">
                sign up free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
