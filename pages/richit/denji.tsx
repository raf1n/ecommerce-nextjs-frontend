import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../src/state/StateController";
import CategoryPage from "../../components/pages/CategoryPage/CategoryPage";
import HeroSection from "../../components/pages/HomePagee/HeroSectionArea/HeroSection";
import ProductCategory from "../../components/pages/HomePagee/ProductCategory/ProductCategory";
import SingleProduct from "../../components/pages/SingleProductPage/SingleProduct";
import Contact from "../../components/pages/ContactPage/Contact";
import Blogs from "../../components/pages/BlogsPage/Blogs";
import AdminDetailsSummary from "../../components/pages/AdminPage/Dashboard/AdminDetailsSummary/AdminDetailsSummary";


interface Props { }

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
      <AdminDetailsSummary></AdminDetailsSummary>
    </>
  );
};

export default denji;
