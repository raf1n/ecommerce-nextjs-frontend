import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import CategoryItemsRight from "./CategoryItemsRight";

interface Props {}

const CategorizedItem: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full min-h-screen  pt-[30px] pb-[60px]">
      <div className="products-page-wrapper w-full">
        <div className="container-x mx-auto">
          <div className="w-full lg:flex lg:space-x-[30px]">
            <div className="lg:w-[270px]">{/* category topics  */}</div>
            <div className="flex-1">
              <CategoryItemsRight></CategoryItemsRight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorizedItem;
