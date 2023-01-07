import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import { Jsondata } from "../../../../src/utils/Jsondata";
import { AiOutlineArrowRight } from "react-icons/ai";
import TopRatedProduct from "./TopRatedProduct";
import SectionHeader from "../SectionHeader";
interface Props {}

const TopRated: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full">
      <div className="container-x mx-auto pb-[60px]">
        <SectionHeader title="Top Rated Products" link="/" />
        <div className="section-content w-full grid sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5  ">
          {Jsondata.topRatedProducts.map((product: any) => {
            return <TopRatedProduct product={product}></TopRatedProduct>;
          })}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
