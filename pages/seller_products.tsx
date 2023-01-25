import React from "react";
import { useSelector } from "react-redux";
import SellerProducts from "../components/pages/AllSellerPage/SellerProducts";
import { controller } from "../src/state/StateController";

interface Props {}

const seller_products: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <SellerProducts />
    </div>
  );
};

export default seller_products;
