import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";

interface Props {}

const FaqRight: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="bg-white sm:p-10 p-5">
      <div className="flex flex-col items-center">
        <h1 className="lg:text-[34px] text-xl font-bold text-qblack">
          Have Any Question
        </h1>
        <span className="-mt-3 block">
          <svg
            width="354"
            height="30"
            viewBox="0 0 354 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
              stroke="#FFBB38"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
          </svg>
        </span>
      </div>
      <div className="mt-5">
        <div className="input-com w-full h-full mb-4">
          <label
            className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
            htmlFor="first_name"
          >
            Name*
          </label>
          <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
            <input
              placeholder="Name"
              className="input-field placeholder:text-sm text-sm px-6 w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
              id="first_name"
              defaultValue=""
            />
          </div>
        </div>

        <div className="input-com w-full h-full mb-4">
          <label
            className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
            htmlFor="email"
          >
            Email Address*
          </label>
          <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
            <input
              placeholder="Email Address"
              className="input-field placeholder:text-sm text-sm px-6 w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
              id="email"
              defaultValue=""
            />
          </div>
        </div>

        <div className="input-com w-full h-full mb-4">
          <label
            className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
            htmlFor="subject"
          >
            Subject*
          </label>
          <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
            <input
              placeholder="Subject"
              className="input-field placeholder:text-sm text-sm px-6 w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
              id="subject"
              defaultValue=""
            />
          </div>
        </div>

        <div className="input-com w-full h-full mb-5">
          <label
            className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
            htmlFor="message"
          >
            Message*
          </label>
          <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
            <textarea
              placeholder="Type your message here"
              className="input-field placeholder:text-sm text-sm px-6 w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
              id="message"
              defaultValue=""
              spellCheck="false"
              style={{ height: "74px" }}
            />
          </div>
        </div>
        <button
          disabled={true}
          type="button"
          className="disabled:bg-gray-400 disabled:cursor-not-allowed bg-qblack text-white text-sm font-semibold w-full h-[50px] flex justify-center items-center"
        >
          Send Now
        </button>
      </div>
    </div>
  );
};

export default FaqRight;
