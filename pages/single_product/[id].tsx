import React from "react";
import { useSelector } from "react-redux";
import ItemDetails from "../../components/pages/HomePage/ItemDetails/ItemDetails";
import RelatedProductSection from "../../components/pages/HomePage/RelatedProductSection/RelatedProductSection";
import SingleProduct from "../../components/pages/SingleProduct/SingleProduct";

import { controller } from "../../src/state/StateController";

interface Props { }

const SingleProductPage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <SingleProduct />
      <ItemDetails />
      <RelatedProductSection />
    </div>
  );
};

export default SingleProductPage;
