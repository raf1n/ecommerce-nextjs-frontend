import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import WishlistCart from "./WishlistCart";

interface Props {}

const Wishlist: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <WishlistCart></WishlistCart>
    </div>
  );
};

export default Wishlist;
