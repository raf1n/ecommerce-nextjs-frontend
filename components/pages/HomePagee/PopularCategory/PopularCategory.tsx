import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IPopularCategories } from "../../../../interfaces/models";
import { EcommerceApi } from "../../../../src/API/EcommerceApi";
import { controller } from "../../../../src/state/StateController";
import ProductCard from "../../../shared/SharedProductCard/ProductCard";
import SectionHeader from "../SectionHeader";
import Link from "next/link";
import { ArrowIcon } from "../../../../src/utils/SvgReturn";
import useWindowDimensions from "../../../shared/hooks/useWindowDimensions";
import styles from "../../../../styles/Scrollbar.module.css";

interface Props {}

const PopularCategory: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [popularCategoriesData, setPopularCategoriesData] = useState<
    IPopularCategories[]
  >([]);
  const [slug, setSlug] = useState("");

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    const fetchAllPopularCategoriesData = async () => {
      const { res, err } = await EcommerceApi.allPopularCategories();
      if (err) {
        console.log(err);
      } else {
        setSlug(res[0]?.cat_slug);
        setPopularCategoriesData(res);
        console.log("Pop", res);
      }
    };
    fetchAllPopularCategoriesData();
  }, []);

  return (
    <div>
      <div className="section-wrapper w-full md:mb-[60px] mb-[30px]">
        <div className="container-x mx-auto">
          <SectionHeader
            title="Popular Category"
            link="/products?highlight=popular_category"
          />
          <div className="section-content">
            <div className="products-section w-full">
              <div
                className={
                  width && width > 640
                    ? "grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5"
                    : `flex flex-nowrap gap-3 overflow-scroll ${styles["scrollbar"]}`
                }
              >
                <div className="category-card hidden xl:block w-full">
                  <div
                    className="category-card-wrappwer w-full h-[445px] p-[30px]"
                    style={{
                      background:
                        "url(https://api.websolutionus.com/shopo/uploads/website-images/popular-cat-banner-2022-09-20-01-15-44-7577.jpg) 0% 0% / cover no-repeat",
                    }}
                  >
                    <div>
                      <h1 className="text-base font-semibold tracking-wide mb-2">
                        Popular Category
                      </h1>
                      <div className="brands-list mb-[7px]">
                        <ul>
                          {popularCategoriesData.map((singlePop, indx) => (
                            <>
                              <li key={indx}>
                                <span
                                  onClick={() => setSlug(singlePop?.cat_slug)}
                                  className="text-sm text-qgray hober:text-qBlack border-b border-transparent hover:border-qblack hover:text-qblack capitalize cursor-pointer"
                                >
                                  {singlePop?.categoriesData?.cat_name}
                                </span>
                              </li>
                            </>
                          ))}
                        </ul>
                      </div>
                      <div className="flex space-x-2 items-center">
                        <Link
                          href="/products?highlight=popular_category"
                          className=" text-qblack font-semibold text-sm"
                        >
                          Shop Now
                        </Link>
                        <span>
                          <ArrowIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {states.allProducts
                  .filter((product) => product.catSlug === slug)
                  .slice(0, 3)
                  .map((pro) => (
                    <ProductCard key={pro.slug} product={pro}></ProductCard>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
