import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import ChangePassword from "./ChangePassword/ChangePassword";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import ProfileAddress from "./ProfileAddress/ProfileAddress";
import ProfileDashboard from "./ProfileDashboard/ProfileDashboard";
import ProfileOrder from "./ProfileOrder/ProfileOrder";
import ProfileReviews from "./ProfileReviews/ProfileReviews";
import ProfileWishlist from "./ProfileWishlist/ProfileWishlist";
import { EcommerceApi } from "../../../src/API/EcommerceApi";
import { IOrder } from "../../../interfaces/models";

interface Props {}

const ProfileDashboardRenderer: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [allOrders, setAllOrders] = useState<IOrder[]>([]);
  const [allCompletedOrders, setAllCompletedOrders] = useState<IOrder[]>([]);

  const { asPath } = useRouter();

  const hash = asPath.split("#")[1];
  useEffect(() => {
    const getAllOrders = async () => {
      const { res, err } = await EcommerceApi.allOrders("User2");
      if (res) {
        setAllOrders(res.data);
        const completedOrders = res.data.filter(
          (dt) => dt.delivery_status === "completed"
        );
        setAllCompletedOrders(completedOrders);
      }
    };
    // const getAllCompletedOrders = async () => {
    //   const { res, err } = await EcommerceApi.allOrders("User2", "completed");
    //   if (res) {
    //     console.log(res);
    //   }
    // };
    // getAllCompletedOrders();
    getAllOrders();
  }, []);
  switch (hash) {
    case "dashboard": {
      return (
        <ProfileDashboard
          allCompletedOrders={allCompletedOrders}
          allOrders={allOrders}
        />
      );
    }
    case "personal_info": {
      return <PersonalInfo />;
    }
    case "order": {
      return <ProfileOrder />;
    }
    case "wishlist": {
      return <ProfileWishlist />;
    }
    case "address": {
      return <ProfileAddress />;
    }
    case "review": {
      return <ProfileReviews />;
    }
    case "change_password": {
      return <ChangePassword />;
    }
    default: {
      return (
        <ProfileDashboard
          allCompletedOrders={allCompletedOrders}
          allOrders={allOrders}
        />
      );
    }
  }
};

export default ProfileDashboardRenderer;
