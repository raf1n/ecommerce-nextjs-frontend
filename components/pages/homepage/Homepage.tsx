import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import Footer from "../../shared/footer/Footer";
import BestProducts from "./BestProducts/BestProducts";

interface Props {}

const Homepage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <div>
    <BestProducts />
    <Footer />
  </div>;
};

export default Homepage;
