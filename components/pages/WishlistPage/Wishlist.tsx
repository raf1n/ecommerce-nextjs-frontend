import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import PageHeader from "../../shared/SharedPageHeader/PageHeader";
import WishlistCart from "./WishlistCart";

interface Props {}

const WishList: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full min-h-screen  pt-[30px] pb-[60px]">
      <PageHeader slug="Wishlist" link="/wishlist" title="Wishlist" />
      <WishlistCart></WishlistCart>
    </div>
  );
};

export default WishList;
