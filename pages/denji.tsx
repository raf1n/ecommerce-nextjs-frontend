import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../src/state/StateController";
import HeroSection from "../components/pages/homepage/herosection/HeroSection";
import ProductCategory from "../components/pages/homepage/ProductCategory/ProductCategory";
import SingleProduct from "../components/pages/singleproduct/SingleProduct";
import Contact from "../components/pages/contact/Contact";
import Blogs from "../components/pages/blogs/Blogs";
import CategorizedItem from "../components/pages/categorizeditems/CategorizedItems";

interface Props {}

const denji: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <></>;
};

export default denji;
