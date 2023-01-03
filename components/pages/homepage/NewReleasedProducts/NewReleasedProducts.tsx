import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import { Jsondata } from "../../../../src/utils/Jsondata";
import ProductCard from "../../../ProductCard/ProductCard";

interface Props {}

const NewReleasedProducts: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="mx-20">
      <div>
        <h1 className="sm:text-3xl text-xl font-600 text-qblacktext leading-none">
          New Arrival
        </h1>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 ">
        {Jsondata.newReleasedProducts.map((Product) => {
          return <ProductCard Product={Product}></ProductCard>;
        })}
      </div>
    </div>
  );
};

export default NewReleasedProducts;
