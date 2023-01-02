import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import HeroSection from "./herosection/HeroSection";

interface Props {}

const Homepage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <HeroSection></HeroSection>
    </div>
  );
};

export default Homepage;
