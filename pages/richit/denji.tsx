import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../src/state/StateController";
import CategoryPage from "../../components/pages/CategoryPage/CategoryPage";
import HeroSection from "../../components/pages/homepage/HeroSection/HeroSection";
import ProductCategory from "../../components/pages/homepage/ProductCategory/ProductCategory";
import SingleProduct from "../../components/pages/singleproduct/SingleProduct";
import Contact from "../../components/pages/contact/Contact";
import Blogs from "../../components/pages/Blogs/Blogs";
import AdminDetailsSummary from "../../components/pages/Admin/Dashboard/AdminDetailsSummary/AdminDetailsSummary";

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
      <CategoryPage />
      <CategoryPage></CategoryPage>
      <AdminDetailsSummary></AdminDetailsSummary>
    </>
  );
};

export default denji;
