import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/HeaderTop/HeaderTop";
import AD1 from "./Ads/AD1";
import AD2 from "./Ads/AD2";
import AD3 from "./Ads/AD3";
import BestProducts from "./BestProducts/BestProducts";
import BestSeller from "./BestSeller/BestSeller";
import Campaign from "./Campaign/Campaign";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import HeroSection from "./herosection/HeroSection";
import NewReleasedProducts from "./NewReleasedProducts/NewReleasedProducts";
import PopularCategory from "./PopularCategory/PopularCategory";
import ProductCategory from "./ProductCategory/ProductCategory";
<<<<<<< HEAD
import ShopByBrand from "./shopbybrand/Shopbybrand";
import TopRated from "./topratedproducts/Toprated";
=======
import ShopByBrand from "./ShopByBrand/ShopByBrand";
import TopRated from "./TopRatedProducts/ToprRated";
>>>>>>> 06bd96c2c2017ab4ce57650327294d629d56c005

interface Props { }

const Homepage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <HeroSection />
      <ProductCategory />
      <PopularCategory />
      <ShopByBrand />
      <Campaign />
      <TopRated />
      <BestSeller />
      <AD1 />
      <FeaturedProducts />
      <AD2 />
      <NewReleasedProducts />
      <AD3 />
      <BestProducts />
    </div>
  );
};

export default Homepage;
