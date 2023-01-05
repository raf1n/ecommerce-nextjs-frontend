import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "../../components/pages/Admin/Dashboard/Dashboard";
import DeliveryComponents from "../../components/pages/Homepage/DeliveryPolicyData/DeliveryComponents";
import FeaturedProducts from "../../components/pages/Homepage/FeaturedProducts/FeaturedProducts";
import NewReleasedProducts from "../../components/pages/Homepage/NewReleasedProducts/NewReleasedProducts";
import PopularCategory from "../../components/pages/Homepage/PopularCategory/PopularCategory";
import RelatedProductSection from "../../components/pages/Homepage/RelatedProductSection/RelatedProductSection";
import Wishlist from "../../components/pages/Wishlist/Wishlist";
import { controller } from "../../src/state/StateController";

interface Props {}

const ironman: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <DeliveryComponents></DeliveryComponents>
      <FeaturedProducts></FeaturedProducts>
      <NewReleasedProducts></NewReleasedProducts>
      <PopularCategory></PopularCategory>
      <Wishlist></Wishlist>
      <RelatedProductSection></RelatedProductSection>
      <Dashboard></Dashboard>
    </div>
  );
};

export default ironman;
