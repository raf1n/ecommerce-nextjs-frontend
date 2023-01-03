import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../src/state/StateController";
import HeroSection from "../components/pages/homepage/herosection/HeroSection";
import ProductCategory from "../components/pages/homepage/ProductCategory/ProductCategory";
import Banner1 from "../components/pages/homepage/Banners/Banner1";
import SingleProduct from "../components/pages/singleproduct/SingleProduct";
import Contact from "../components/pages/contact/Contact";

interface Props {}

const denji: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <>
      <HeroSection></HeroSection>
      <ProductCategory />
      <Banner1 />
      <SingleProduct></SingleProduct>
      <Contact></Contact>
    </>
  );
};

export default denji;