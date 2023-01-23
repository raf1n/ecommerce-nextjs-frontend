import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../../../src/state/StateController";

interface Props {
  review: {
    reviewDate: string;
    productName: string;
    status: string;
    rating: number;
    message: string;
    imageUrl: string;
    slug: string;
  };
}

const ProfileReviewItem: React.FC<Props> = ({
  review: { reviewDate, productName, status, rating, message, imageUrl, slug },
}) => {
  const states = useSelector(() => controller.states);

  return (
    <div
      className="min-h-[170px] bg-white group"
      style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px" }}
    >
      <div className="flex gap-x-2 items-center w-full h-full p-2 relative">
        <div className="w-1/3 h-full flex justify-center">
          <img className="max-h-[152px] object-contain" src={imageUrl} alt="" />
        </div>

        {/* rating component */}
        <div className="flex-1 flex flex-col justify-center h-full">
          <div>
            <span className="text-qgray text-sm mb-1.5 block">
              {reviewDate}
            </span>
            <div className="flex mb-1.5">
              <span>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                    fill="#FFA800"
                  ></path>
                </svg>
              </span>
              <span>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                    fill="#FFA800"
                  ></path>
                </svg>
              </span>
              <span>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                    fill="#FFA800"
                  ></path>
                </svg>
              </span>
              <span>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                    fill="#FFA800"
                  ></path>
                </svg>
              </span>
              <span>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                    fill="#FFA800"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="flex mb-1.5"></div>
            <Link href={`/single_product/slug=${slug}`}>
            <h6 className="title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-1 hover:text-blue-600 cursor-pointer">
              {productName}
            </h6>
            </Link>
            <p className="price mb-[26px] text-sm text-qgray line-clamp-2">
              {message}
            </p>
          </div>
        </div>

        {status === "pending" ? (
          <div className="absolute right-3 font-medium top-3 px-3 py-1 rounded bg-[#fff6dc] bg-opacity-50 text-qyellow border text-sm border-qyellow">
            Pending review
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileReviewItem;
