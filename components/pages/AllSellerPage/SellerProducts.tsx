import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IProduct, ISeller } from "../../../interfaces/models";
import { EcommerceApi } from "../../../src/API/EcommerceApi";
import { controller } from "../../../src/state/StateController";
import CategoryItemsRight from "../CategorizedItem/CategoryItemsRight";
import FilterAd from "../CategoryProductPage/FilterAd";
import FilterWidget from "../CategoryProductPage/FilterWidget";
import SellerHeader from "./SellerHeader";

interface Props {
  sellerData: ISeller;
  filteredProducts: IProduct[];
  count: number;
}

const SellerProducts: React.FC<Props> = ({
  sellerData,
  filteredProducts,
  count,
}) => {
  const states = useSelector(() => controller.states);
  // const [sellerData, setSellerData] = useState<ISeller>();

  const [showFilterWidget, setShowFilterWidget] = useState(false);
  const [value, setValue] = useState({
    min: 0,
    max: 15000,
  });
  // const [count, setCount] = useState<number>(0);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(9);

  // useEffect(() => {
  //   const handleFilteredProducts = async () => {
  //     controller.setApiLoading(true);
  //     const { res, err } = await EcommerceApi.getFilteredProductsBySeller(
  //       states.searchSeller,
  //       states.searchString,
  //       states.searchCategory,
  //       states.searchSubCategory,
  //       states.searchBrand,
  //       states.searchHighlight,
  //       value.min,
  //       value.max
  //     );

  //     if (res) {
  //       setSellerData(res.sellerData);
  //       controller.setFilteredProducts(res.filteredProducts);
  //       setCount(res.count);
  //     }
  //     controller.setApiLoading(false);
  //   };

  //   handleFilteredProducts();
  // }, [
  //   states.searchSeller,
  //   states.searchString,
  //   states.searchCategory,
  //   states.searchSubCategory,
  //   states.searchBrand,
  //   states.searchHighlight,
  //   value,
  // ]);

  return (
    <div className="w-full min-h-screen  pt-[22px] pb-[60px] mx-auto">
      <div className="products-page-wrapper w-full">
        <div className="p-2">
          <div className="container-x mx-auto">
            {sellerData && <SellerHeader sellerData={sellerData} />}
          </div>

          {/* <CategoryPage /> */}
          <div className="container-x mx-auto px-2">
            <div className="lg:flex lg:gap-x-[30px]">
              <div className="lg:w-[270px] my-10">
                <FilterWidget
                  showFilterWidget={showFilterWidget}
                  setShowFilterWidget={setShowFilterWidget}
                  value={value}
                  setValue={setValue}
                />
                <FilterAd />
              </div>
              <div className="flex-1 min-h-screen my-10">
                <CategoryItemsRight
                  filteredProducts={filteredProducts}
                  setShowFilterWidget={setShowFilterWidget}
                  count={count}
                  skip={skip}
                  limit={limit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProducts;
