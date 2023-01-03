import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { FaRegHeart, FaFlag, FaFacebookF, FaTwitter } from "react-icons/fa";
// import ReactStars from "react-rating-stars-component";

const itemDetail = {
  name: "Asus zenbook desktop",
  brand: "HUAWEI",
  rating: 3,
  reviews: [],
  formerPrice: 35000,
  currentPrice: 33000.0,
  description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
  availability: 2,
  category: "Accessories",
  sku: "kjhyy78",
};

const secondExample = {
  size: 50,
  count: 10,
  color: "black",
  activeColor: "red",
  value: 7.5,
  a11y: true,
  isHalf: true,
  emptyIcon: <i className="far fa-star" />,
  halfIcon: <i className="fa fa-star-half-alt" />,
  filledIcon: <i className="fa fa-star" />,
  onChange: (newValue: string) => {
    console.log(`Example 2: new value is ${newValue}`);
  },
};

interface Props {}

const ProductDetails: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="mt-10 lg:mt-0">
      <span className="text-xs text-qgray font-normal uppercase tracking-wider mb-2 inline-block">
        {itemDetail.brand}
      </span>
      <h1 className="text-xl text-qblack font-medium mb-4">
        {itemDetail.name}
      </h1>

      <div className="flex gap-x-[10px] items-center mb-6">
        <div className="flex">
          <span className="text-gray-500">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                fill="#D2D8E1"
              ></path>
            </svg>
          </span>
          <span className="text-gray-500">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                fill="#D2D8E1"
              ></path>
            </svg>
          </span>
          <span className="text-gray-500">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                fill="#D2D8E1"
              ></path>
            </svg>
          </span>
          <span className="text-gray-500">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                fill="#D2D8E1"
              ></path>
            </svg>
          </span>
          <span className="text-gray-500">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                fill="#D2D8E1"
              ></path>
            </svg>
          </span>
        </div>
        <span className="text-[13px] font-normal text-qblack">
          {itemDetail?.reviews?.length} Reviews
        </span>
      </div>

      <div className="flex gap-x-2 items-baseline mb-7">
        <span className="font-semibold line-through text-qgray text-[15px]">
          ${itemDetail.formerPrice}
        </span>
        <span className="text-red-500 font-semibold text-[24px] ml-2">
          ${itemDetail.currentPrice}.00
        </span>
      </div>

      <div className="mb-[30px]">
        <p className="text-qgray text-sm font-normal leading-7">
          {itemDetail.description}
        </p>
        <button type="button" className="text-blue-500 text-xs font-bold">
          See Less
        </button>
      </div>

      <div className="p-3 bg-[rgb(249,243,231)] flex items-center gap-x-2 mb-[30px] rounded-lg w-fit">
        <span className="text-base font-bold text-qblack">Availability :</span>
        <span className="text-base font-bold text-qyellow">
          {itemDetail.availability} Products Available
        </span>
      </div>

      <div className="w-full flex items-center h-[50px] gap-x-[10px] mb-[30px]">
        <div className="w-[120px] h-full px-[26px] flex items-center border border-gray-200">
          <div className="flex justify-between items-center w-full">
            <button type="button" className="text-base text-qgray">
              -
            </button>
            <span className="text-qblack">1</span>
            <button type="button" className="text-base text-qgray">
              +
            </button>
          </div>
        </div>

        <div className="w-[60px] h-full flex justify-center items-center border border-qgray-border">
          <button type="button">
            <span className="w-10 h-10 flex justify-center items-center">
              <FaRegHeart className="w-5 h-5" />
            </span>
          </button>
        </div>

        <div className="flex-1 h-full">
          <button
            type="button"
            className="bg-black text-white text-sm font-semibold w-full h-full"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="mb-[20px]">
        <p className="text-[13px] text-qgray leading-7">
          <span className="text-qblack">Category :</span> {itemDetail.category}
        </p>
        <p className="text-[13px] text-qgray leading-7">
          <span className="text-qblack uppercase">SKU:</span> {itemDetail.sku}
        </p>
      </div>

      <div className="flex gap-x-2 items-center mb-[20px] text-qred">
        <FaFlag className="w-3 h-3" />
        <button type="button" className="font-semibold text-[13px]">
          Report This Item
        </button>
      </div>

      <div
        data-aos="fade-up"
        className="social-share flex items-center w-full aos-init aos-animate"
      >
        <span className="text-qblack text-[13px] mr-[17px] inline-block">
          Share This
        </span>
        <div className="flex space-x-5 items-center">
          <button
            aria-label="facebook"
            className="bg-transparent border-none p-0 cursor-pointer"
          >
            <span className="cursor-pointer">
              <FaFacebookF className="text-blue-900" />
            </span>
          </button>
          <button
            aria-label="twitter"
            className="bg-transparent border-none p-0 cursor-pointer"
          >
            <span className="cursor-pointer">
              <FaTwitter className="text-blue-400" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
