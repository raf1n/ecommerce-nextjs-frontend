import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import Shopbybrand from "./shopbybrand/Shopbybrand";
import Toprated from "./topratedproducts/Toprated";
import Banner1 from "./Banners/Banner1";
import ProductCategory from "./ProductCategory/ProductCategory";

interface Props { }

const Homepage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <div>homepage
    {/* <Shopbybrand></Shopbybrand>
    <Toprated></Toprated>
    <ProductCategory />
    <Banner1 /> */}
  </div>;

};

export default Homepage;
