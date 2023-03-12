import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IReview } from "../../../../interfaces/models";
import { EcommerceApi } from "../../../../src/API/EcommerceApi";
import { controller } from "./../../../../src/state/StateController";
import ProfileReviewItem from "./ProfileReviewItem";

interface Props {}

const ProfileReviews: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [reviewDatas, setReviewDatas] = useState([]);

  const getAllReviews = async () => {
    const { res, err } = await EcommerceApi.getAllReviews("user_slug_1");
    if (res) {
      console.log("res from get-all-reviews =", res);
      setReviewDatas(res);
    } else {
      console.log(" reviews=", err);
    }
  };
  useEffect(() => {
    getAllReviews();
  }, []);
  // console.log("reviewDatas= ", reviewDatas);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
      {reviewDatas.map((review, idx) => (
        <ProfileReviewItem review={review} />
      ))}
    </div>
  );
};

export default ProfileReviews;
