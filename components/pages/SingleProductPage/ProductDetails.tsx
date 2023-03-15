import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FaRegHeart, FaFlag } from "react-icons/fa";
// import ReactStars from "react-rating-stars-component";
import { useRouter } from "next/router";
import FacebookIcon from "react-share/lib/FacebookIcon";
import TwitterIcon from "react-share/lib/TwitterIcon";
import { IProduct } from "../../../interfaces/models";

// const secondExample = {
//   size: 50,
//   count: 10,
//   color: "black",
//   activeColor: "red",
//   value: 7.5,
//   a11y: true,
//   isHalf: true,
//   emptyIcon: <i className="far fa-star" />,
//   halfIcon: <i className="fa fa-star-half-alt" />,
//   filledIcon: <i className="fa fa-star" />,
//   onChange: (newValue: string) => {
//     console.log(`Example 2: new value is ${newValue}`);
//   },
// };

// const style = {
//   root: {
//     // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     borderRadius: 3,
//     border: 0,
//     padding: 0,
//     // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: "white",
//   },
//   makeStylesContainer1: {
//     padding: 0,
//     "&:makeStyles-iconContainer-3": {
//       padding: 0,
//     }
//   },
//   makeStylesIconContainer3: {
//     padding: 0,
//   },
//   copyContainer: {
//     display: "none",
//     border: "1px solid blue",
//     background: "rgb(0,0,0,0.7)",
//   },
//   title: {
//     color: "aquamarine",
//     fontStyle: "italic",
//   },
// };

interface Props {
  // brand: string;
  singleProduct: IProduct | null;
  setReportModalSlug: Dispatch<SetStateAction<string>>;
}

const ProductDetails: React.FC<Props> = (props) => {
  const { singleProduct } = props;
  const states = useSelector(() => controller.states);
  const [brandName, setBrandName] = useState<string | undefined>("");
  useEffect(() => {
    const handleBrand = () => {
      if (states.brands && singleProduct && singleProduct.brandSlug) {
        let brand = states.brands.find(
          (b) => b.slug === singleProduct.brandSlug
        );
        setBrandName(brand?.name);
      }
    };
    handleBrand();
  }, [singleProduct]);
  const { setReportModalSlug } = props;
  const router = useRouter();

  const shareableRoute = process.env.NEXT_PUBLIC_API_ENDPOINT + router.asPath;
  // const shareableRoute = "https://www.google.com" || undefined;

  // console.log({ shareableRoute, router });

  return (
    <div className="mt-10 lg:mt-0">
      <span className="text-xs text-qgray font-normal uppercase tracking-wider mb-2 inline-block">
        {brandName}
      </span>

      <h1 className="text-xl text-qblack font-medium mb-4">
        {props.singleProduct?.productName}
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
          {/* {props.itemDetail?.reviews?.length}  */}
          Reviews
        </span>
      </div>

      <div className="flex gap-x-2 items-baseline mb-7">
        <span className="font-semibold line-through text-qgray text-[15px]">
          ${props.singleProduct?.price}
        </span>
        <span className="text-red-500 font-semibold text-[24px] ml-2">
          ${props.singleProduct?.offerPrice}
        </span>
      </div>

      <div className="mb-[30px]">
        <p className="text-qgray text-sm font-normal leading-7">
          {props.singleProduct?.description}
        </p>
        <button type="button" className="text-blue-500 text-xs font-bold">
          See Less
        </button>
      </div>

      <div className="p-3 bg-[rgb(249,243,231)] flex items-center gap-x-2 mb-[30px] rounded-lg w-fit">
        <span className="text-base font-bold text-qblack">Availability :</span>
        <span className="text-base font-bold text-qyellow">
          {props.singleProduct?.stock} Products Available
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
          <span className="text-qblack">Category :</span>
        </p>
      </div>

      <div className="flex gap-x-2 items-center mb-[20px] text-qred">
        <FaFlag className="w-3 h-3" />
        <button
          onClick={() => setReportModalSlug("aaa")}
          type="button"
          className="font-semibold text-[13px]"
        >
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
        <div className="flex items-center">
          <div
            aria-label="facebook"
            className="bg-transparent border-none p-0 cursor-pointer"
          >
            <FacebookShareButton url={shareableRoute}>
              <FacebookIcon
                size={40}
                iconFillColor="#3E75B2"
                bgStyle={{ display: "none" }}
              />
            </FacebookShareButton>
          </div>
          <div
            aria-label="twitter"
            className="bg-transparent border-none p-0 cursor-pointer"
          >
            <TwitterShareButton url={shareableRoute}>
              <TwitterIcon
                size={40}
                iconFillColor="#3FD1FF"
                bgStyle={{ display: "none" }}
              />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
