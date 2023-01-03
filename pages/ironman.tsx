import React from "react";
import { useSelector } from "react-redux";
import DeliberyComponents from "../components/pages/homepage/DeliberyPolicyData/DeliveryComponents";
import FeaturedProducts from "../components/pages/homepage/FeaturedProducts/FeaturedProducts";
import Homepage from "../components/pages/homepage/Homepage";
import NewReleasedProducts from "../components/pages/homepage/NewReleasedProducts/NewReleasedProducts";
import PopularCategory from "../components/pages/homepage/PopularCategory/PopularCategory";
import { controller } from "../src/state/StateController";

interface Props {}

const ironman: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <DeliberyComponents />
      <FeaturedProducts></FeaturedProducts>
      <NewReleasedProducts></NewReleasedProducts>
      <PopularCategory></PopularCategory>
    </div>
  );
};

export default ironman;
