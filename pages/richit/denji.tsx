import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../src/state/StateController";

import SingleProduct from "../../components/pages/SingleProduct/SingleProduct";
import Contact from "../../components/pages/Contact/Contact";
import Blogs from "../../components/pages/Blogs/Blogs";
import CategorizedItem from "../../components/pages/CategorizedItem/CategorizedItems";
import AdminDetailsSummary from "../../components/pages/Admin/Dashboard/AdminDetailsSummary/AdminDetailsSummary";
import HeroSection from "../../components/pages/HomePage/HeroSection/HeroSection";
import ProductCategory from "../../components/pages/HomePage/ProductCategory/ProductCategory";

interface Props {}

const denji: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <>
      <HeroSection></HeroSection>
      <ProductCategory />
      <SingleProduct />
      <Contact />
      <Blogs />
      <CategorizedItem></CategorizedItem>
      <AdminDetailsSummary></AdminDetailsSummary>
    </>
  );
};

export default denji;
