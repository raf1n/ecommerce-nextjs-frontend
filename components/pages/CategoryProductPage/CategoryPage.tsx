import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import CategoryItemsRight from "../CategorizedItem/CategoryItemsRight";
import FilterWidget from "./FilterWidget";
import ShopNowBtn from "./../../helpers/Buttons/ShopNowBtn";
import FilterAd from "./FilterAd";
import { EcommerceApi } from "../../../src/API/EcommerceApi";

interface Props {}

const CategoryPage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [value, setValue] = useState({
    min: 0,
    max: 15000,
  });

  useEffect(() => {
    const handleFilteredProducts = async () => {
      const { res, err } = await EcommerceApi.getFilteredProducts(
        states.searchString,
        states.searchCategory,
        states.searchBrand,
        value.min,
        value.max
      );

      if (res) {
        controller.setFilteredProducts(res);
      }
    };

    handleFilteredProducts();
  }, [
    states.searchString,
    states.searchCategory,
    states.searchBrand,
    value,
  ]);

  return (
    <div className="container-x mx-auto px-2">
      <div className="lg:flex lg:gap-x-[30px]">
        <div className="lg:w-[270px] my-10">
          <FilterWidget
            value={value}
            setValue={setValue}
          />
          <FilterAd />
        </div>
        <div className="flex-1 min-h-screen my-10">
          <CategoryItemsRight />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
