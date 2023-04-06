import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { Jsondata } from "../../../src/utils/Jsondata";
import ShopNowBtn from "../../helpers/Buttons/ShopNowBtn";
import ProductCard from "../../shared/SharedProductCard/ProductCard";
import BestDealBanner from "../HomePagee/BestDealBanner/BestDealBanner";
import ProductCardVertical from "./../../shared/SharedProductCard/ProductCardVertical";
import { IProduct } from "../../../interfaces/models";
import { FilterIcon, NormalOrientation, VerticalOrientation } from "../../../src/utils/SvgReturn";

interface Props {
  filteredProducts: IProduct[];
  bannerImg?: string;
  setShowFilterWidget: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  skip: number;
  limit: number;
}

const CategoryItemsRight: React.FC<Props> = ({
  filteredProducts,
  setShowFilterWidget,
  count,
  skip,
  limit,
}) => {
  const states = useSelector(() => controller.states);

  const [cardType, setCardType] = useState("normal");

  const bannerImg =
    "https://api.websolutionus.com/shopo/uploads/website-images/Mega-menu-2022-10-27-01-44-41-4959.png";

  const showCountResult = (count: number) => {
    if (!count) {
      return `0 results`;
    } else if (count === 1) {
      return `${count} of ${count} result`;
    } else if (count <= limit) {
      return `1-${count} of ${count} results`;
    } else if (count > limit) {
      return `1-${limit} of ${count} results`;
    }
  };

  return (
    <div className="w-full">
      <div className="products-sorting w-full bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mb-[40px]">
        <div>
          <p className="font-400 text-[13px]">
            <span className="text-qgray"> Showing</span>{" "}
            {showCountResult(count)}
          </p>
        </div>
        <div className="flex space-x-3 items-center">
          <span className="font-bold text-qblack text-[13px]">View by :</span>
          <button
            type="button"
            className={`hover:text-qgreen w-6 h-6 ${
              cardType === "normal" ? "text-qgreen" : "text-qgray"
            }`}
            onClick={() => setCardType("normal")}
          >
            <NormalOrientation />
          </button>
          <button
            type="button"
            className={`hover:text-qgreen w-6 h-6 ${
              cardType === "vertical" ? "text-qgreen" : "text-qgray"
            }`}
            onClick={() => setCardType("vertical")}
          >
            <VerticalOrientation />
          </button>
        </div>
        <button
          type="button"
          onClick={() => setShowFilterWidget(true)}
          className="w-10 lg:hidden h-10 rounded flex justify-center items-center border border-qyellow text-qyellow"
        >
          <FilterIcon />
        </button>
      </div>
      <div
        className={`grid ${
          cardType === "normal"
            ? "xl:grid-cols-3 sm:grid-cols-2"
            : "lg:grid-cols-2"
        }  grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]`}
      >
        {filteredProducts.slice(0, 6).map((product) => {
          if (cardType === "normal") {
            return <ProductCard product={product} />;
          } else {
            return <ProductCardVertical product={product} />;
          }
        })}
      </div>
      {/******************************** banner ads **********************************/}
      <div className="w-full relative text-qblack mb-[40px]">
        <div className="one-column-ads-one sm:h-[166px] h-[100px] w-full">
          <div
            data-aos="fade-right"
            className="w-full h-full flex justify-center items-center md:pl-[80px] pl-3 md:py-[40px] py-4 group aos-init aos-animate"
            style={{
              backgroundImage: `url(${bannerImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full flex flex-col justify-evenly">
              <div>
                <div className="">
                  <h1 className="md:text-[30px] text-[20px] md:leading-[40px] font-semibold">
                    Get the best deal for Headphones
                  </h1>
                </div>
              </div>
              <ShopNowBtn color={{ textColor: "text-qred" }} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`grid ${
          cardType === "normal"
            ? "xl:grid-cols-3 sm:grid-cols-2"
            : "lg:grid-cols-2"
        }  grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]`}
      >
        {filteredProducts.slice(6).map((product) => {
          if (cardType === "normal") {
            return <ProductCard product={product} />;
          } else {
            return <ProductCardVertical product={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default CategoryItemsRight;
