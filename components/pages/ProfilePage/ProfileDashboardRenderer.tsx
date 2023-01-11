import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import ChangePassword from "./ChangePassword/ChangePassword";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import ProfileAddress from "./ProfileAddress/ProfileAddress";
import ProfileDashboard from "./ProfileDashboard/ProfileDashboard";
import ProfileOrder from "./ProfileOrder/ProfileOrder";
import ProfileReviews from "./ProfileReviews/ProfileReviews";
import ProfileWishlist from "./ProfileWishlist/ProfileWishlist";

interface Props {}

const ProfileDashboardRenderer: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const { asPath } = useRouter();

  const hash = asPath.split("#")[1];

  switch( hash ) {
    case "dashboard": {
      return <ProfileDashboard />;
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
      return <ProfileDashboard />;
    }
  }
};

export default ProfileDashboardRenderer;
