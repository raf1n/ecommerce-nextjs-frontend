import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import Shopbybrand from "./shopbybrand/Shopbybrand";
import Toprated from "./topratedproducts/Toprated";

interface Props { }

const Homepage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <div>homepage
    <Shopbybrand></Shopbybrand>
    <Toprated></Toprated>
  </div>;
};

export default Homepage;
