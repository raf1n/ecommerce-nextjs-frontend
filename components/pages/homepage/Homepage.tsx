import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import ProductCategory from "./ProductCategory/ProductCategory";

interface Props { }

const Homepage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <div>
    <ProductCategory />
  </div>
};

export default Homepage;
