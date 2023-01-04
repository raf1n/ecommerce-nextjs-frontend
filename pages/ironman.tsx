import React from "react";
import { useSelector } from "react-redux";
import BestDealBanner from "../components/pages/homepage/BestDealBanner/BestDealBanner";
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
      <br />
      <br />
      <FeaturedProducts></FeaturedProducts>
      <br />
      <br />
      <NewReleasedProducts></NewReleasedProducts>
      <br />
      <br />
      <PopularCategory></PopularCategory>
      <br />
      <br />
      <br />
      <BestDealBanner></BestDealBanner>
      <br />
      <br />
    </div>
  );
};

export default ironman;
