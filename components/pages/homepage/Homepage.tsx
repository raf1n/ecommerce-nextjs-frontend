import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import HeroSection from "./herosection/HeroSection";
import Banner1 from "./Banners/Banner1";
import ProductCategory from "./ProductCategory/ProductCategory";

interface Props {}

const Homepage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <div></div>;
};

export default Homepage;
