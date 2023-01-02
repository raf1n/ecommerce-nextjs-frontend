import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { FaEnvelope } from 'react-icons/fa';

interface Props {}

const FooterCta: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    // <div className="w-full">
    <div
      className="h-[307px] bg-cover bg-center bg-no-repeat flex justify-center items-end"
      style={{
        backgroundImage:
          "url(https://api.websolutionus.com/shopo/uploads/website-images/banner-2022-09-25-05-12-43-6914.png)",
      }}
    >
      <div className="mb-[70px]">
        <h1 className="sm:text-3xl text-xl font-bold mb-2 text-center">
          Get our latest offer
        </h1>
        <p className="text-center sm:text-[18px] text-sm">by subscription</p>
        <div
          data-aos="fade-right"
          className="sm:w-[543px] w-[300px] h-[54px] flex mt-8 aos-init aos-animate"
        >
          <div className="flex-1 bg-white pl-4 flex space-x-2 items-center h-full">
            <span>
              <FaEnvelope className="text-lg text-[#9A9A9A]" />
            </span>
            <input
              type="email"
              name="email"
              className="w-full h-full focus:outline-none text-sm placeholder:text-xs tracking-wider"
              placeholder="EMAIL ADDRESS"
              // value=""
            />
          </div>
          <button
            type="button"
            className="sm:w-[158px] w-[80px] h-full text-sm bg-yellow-400 font-semibold"
          >
            Get the Coupon
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default FooterCta;
