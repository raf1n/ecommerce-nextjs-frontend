import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../../../src/state/StateController";
//@ts-ignore
import ReactStars from "react-rating-stars-component";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  review: {
    reviewDate: string;
    status: string;
    rating: number;
    message: string;
    reviewProducts: any;
  };
}

const ProfileReviewItem: React.FC<Props> = ({
  review: { reviewDate, reviewProducts, status, rating, message },
}) => {
  const states = useSelector(() => controller.states);

  return (
    <div
      className="min-h-[170px] bg-white group"
      style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px" }}
    >
      <div className="flex gap-x-2 items-center w-full h-full p-2 relative">
        <div className="w-1/3 h-full flex justify-center">
          <img
            className="max-h-[152px] object-contain"
            src={reviewProducts?.imageURL}
            alt=""
          />
        </div>

        {/* rating component */}
        <div className="flex-1 flex flex-col justify-center h-full">
          <div>
            <span className="text-qgray text-sm mb-1.5 block">
              {reviewDate}
            </span>

            <div className="flex items-center space-x-2">
              <ReactStars
                count={5}
                value={rating}
                edit={false}
                size={24}
                isHalf={true}
                emptyIcon={<FaRegStar />}
                halfIcon={<FaStarHalfAlt />}
                fullIcon={<FaStar />}
                activeColor="#ffd700"
                color="#d3d3d3"
              />
              <span className="text-[13px] font-normal text-qblack mt-1 inline-block">
                ({rating})
              </span>
            </div>
            <div className="flex mb-1.5"></div>
            <Link href={`/single_product/slug=${reviewProducts.product_slug}`}>
              <h6 className="title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-1 hover:text-blue-600 cursor-pointer">
                {reviewProducts.productName}
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
