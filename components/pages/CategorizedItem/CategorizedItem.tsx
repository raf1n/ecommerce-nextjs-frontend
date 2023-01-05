import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";

interface Props {}

const CategorizedItem: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full min-h-screen  pt-[30px] pb-[60px]">
      <div className="products-page-wrapper w-full">
        <div className="container-x mx-auto"></div>
      </div>
    </div>
  );
};

export default CategorizedItem;
