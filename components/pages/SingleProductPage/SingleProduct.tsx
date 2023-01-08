import React from "react";
import ItemDetailsLeft from "./ItemDetailsLeft/ItemDetailsLeft";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import ProductDetails from "./ProductDetails";

interface Props { }

const SingleProduct: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full bg-white pb-[60px] ">
      <div className="container-x mx-auto lg:flex justify-between ">
        <div className="lg:w-1/2 xl:mr-[70px] lg:mr-[50px]">
          <ItemDetailsLeft></ItemDetailsLeft>
        </div>
        <div className="flex-1">
          <ProductDetails />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
