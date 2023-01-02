import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import Shopbybrand from "./shopbybrand/Shopbybrand";

interface Props { }

const Homepage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <div>homepage
    <Shopbybrand></Shopbybrand>
  </div>;
};

export default Homepage;
