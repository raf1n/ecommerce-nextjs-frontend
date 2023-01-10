import React from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../../../src/state/StateController";
import ProfileReviewItem from './ProfileReviewItem';

const profileReviewsData = [
  {
    reviewDate: "23 Nov 2022",
    productName: "Apple watch pro",
    status: "pending",
    rating: 4,
    message: "aaa",
    imageUrl: "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fapple-watch-pro-2022-09-26-12-04-40-6657.png&w=1920&q=75"
  },
  {
    reviewDate: "21 Nov 2022",
    productName: "Apple watch pro",
    status: "pending",
    rating: 4,
    message: "aaa",
    imageUrl: "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fapple-watch-pro-2022-09-26-12-04-40-6657.png&w=1920&q=75"
  },
  {
    reviewDate: "23 Nov 2022",
    productName: "Apple watch pro",
    status: "pending",
    rating: 4,
    message: "aaa",
    imageUrl: "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fapple-watch-pro-2022-09-26-12-04-40-6657.png&w=1920&q=75"
  },
  {
    reviewDate: "23 Nov 2022",
    productName: "Apple watch pro",
    status: "pending",
    rating: 4,
    message: "aaa",
    imageUrl: "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fapple-watch-pro-2022-09-26-12-04-40-6657.png&w=1920&q=75"
  },
];

interface Props {}

const ProfileReviews: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
    {
      profileReviewsData.map((review, idx) => <ProfileReviewItem review={review} />)
    }
  </div>;
};

export default ProfileReviews;
