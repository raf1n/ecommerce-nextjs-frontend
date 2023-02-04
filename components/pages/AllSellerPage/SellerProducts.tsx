import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import CategoryPage from "../CategoryProductPage/CategoryPage";
import SellerHeader from "./SellerHeader";

interface Props {}

const SellerProducts: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full min-h-screen  pt-[22px] pb-[60px] mx-auto">
      <div className="products-page-wrapper w-full">
        <div className="p-2">
          <div className="container-x mx-auto">
            <SellerHeader />
          </div>

          <CategoryPage />
        </div>
      </div>
    </div>
  );
};

export default SellerProducts;
