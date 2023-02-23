import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import CategoryItemsRight from "../CategorizedItem/CategoryItemsRight";
import FilterWidget from "./FilterWidget";
import ShopNowBtn from "./../../helpers/Buttons/ShopNowBtn";
import FilterAd from "./FilterAd";
import { EcommerceApi } from "../../../src/API/EcommerceApi";
import { useRouter } from 'next/router';

interface Props {}

const CategoryPage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  
  
  const [searchString, setSearchString] = useState<string>(states.searchString);
  const [filterCategory, setFilterCategory] = useState(states.searchCategory);
  const [filterBrand, setFilterBrand] = useState("");
  const [value, setValue] = useState({
    min: 0,
    max: 15000,
  });

  // const selectedCategory = states.categories.find(cat => cat.cat_name === query.category);

  // console.log(selectedCategory);

  // if (selectedCategory) {
  //   setFilterCategory(selectedCategory.cat_slug);
  // }
  
  useEffect(() => {
    // console.log({ filterCategory, filterBrand, value });
    console.log(states.searchString, searchString, states.searchCategory, filterCategory);

    const handleFilteredProducts = async () => {
      const { res, err } = await EcommerceApi.getFilteredProducts(
        searchString,
        filterCategory,
        filterBrand,
        value.min,
        value.max
      );

      // console.log({ res, err });

      if (res) {
        controller.setFilteredProducts(res);
      }
    };

    handleFilteredProducts();
  }, [states.searchString, states.searchCategory, filterCategory, filterBrand, value]);

  const handleCategorySelect = (category: string) => {
    if (filterCategory.includes(category)) {
      setFilterCategory((prevCategory) =>
        prevCategory.replace("+" + category, "")
      );
    } else {
      setFilterCategory((prevCategory) => prevCategory + "+" + category);
    }
  };

  const handleBrandSelect = (brand: string) => {
    if (filterBrand.includes(brand)) {
      setFilterBrand((prevBrand) => prevBrand.replace("+" + brand, ""));
    } else {
      setFilterBrand((prevBrand) => prevBrand + "+" + brand);
    }
  };

  return (
    <div className="container-x mx-auto px-2">
      <div className="lg:flex lg:gap-x-[30px]">
        <div className="lg:w-[270px] my-10">
          <FilterWidget
            value={value}
            setValue={setValue}
            handleCategorySelect={handleCategorySelect}
            handleBrandSelect={handleBrandSelect}
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
