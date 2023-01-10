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
  };
}

const ProfileReviewItem: React.FC<Props> = ({
  review: { reviewDate, productName, status, rating, message, imageUrl },
}) => {
  const states = useSelector(() => controller.states);

  return (
    <div
      className="min-h-[170px] bg-white group"
      style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px" }}
    >
      <div className="flex gap-x-2 items-center w-full h-full p-2 relative">
        <div className="w-1/3 h-full">
          <img src={imageUrl} alt="" />
        </div>

        <div className="flex-1 flex flex-col justify-center h-full">
          <div>
            <span className="text-qgray text-sm mb-1.5 block">{reviewDate}</span>
            <div className="flex mb-1.5"></div>
            <p className="title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-1 hover:text-blue-600 cursor-pointer">
              {productName}
            </p>
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
