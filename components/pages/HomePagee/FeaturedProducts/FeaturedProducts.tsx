import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import { Jsondata } from "../../../../src/utils/Jsondata";
import ProductCard from "../../../shared/SharedProductCard/ProductCard";
import SectionHeader from "../SectionHeader";

interface Props {}

const FeaturedProducts: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <div
        data-aos="fade-up"
        className="section-style-one category-products md:mb-[60px] mb-[30px] aos-init aos-animate">
        <div className="section-wrapper w-full ">
          <div className="container-x mx-auto">
            <SectionHeader title="Featured Products" link="/" />
            <div className="section-content">
              <div className="products-section w-full">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                  <div className="category-card hidden xl:block w-full">
                    <div
                      className="category-card-wrappwer w-full h-full p-[30px]"
                      style={{
                        background:
                          "url(https://api.websolutionus.com/shopo/uploads/website-images/featured-cat-banner-2022-09-21-02-43-49-4710.jpg) 0% 0% / cover no-repeat",
                      }}>
                      <div>
                        <h1 className="text-base font-semibold tracking-wide mb-2">
                          Featured Products
                        </h1>
                        <div className="brands-list mb-[7px]">
                          <ul>
                            <li>
                              <span className="text-sm text-qgray hober:text-qBlack border-b border-transparent hover:border-qblack hover:text-qblack capitalize cursor-pointer">
                                Accessories
                              </span>
                            </li>
                            <li>
                              <span className="text-sm text-qgray hober:text-qBlack border-b border-transparent hover:border-qblack hover:text-qblack capitalize cursor-pointer">
                                Lifestyle
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <span className="text-qblack font-semibold text-sm">
                            Shop Now
                          </span>
                          <span>
                            <svg
                              width="7"
                              height="11"
                              viewBox="0 0 7 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <rect
                                x="2.08984"
                                y="0.636719"
                                width="6.94219"
                                height="1.54271"
                                transform="rotate(45 2.08984 0.636719)"
                                fill="#1D1D1D"></rect>
                              <rect
                                x="7"
                                y="5.54492"
                                width="6.94219"
                                height="1.54271"
                                transform="rotate(135 7 5.54492)"
                                fill="#1D1D1D"></rect>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*********** * card *********/}
                  {Jsondata.featuredProducts.map((product, index) => (
                    <ProductCard key={index} product={product}></ProductCard>
                  ))}

                  {/************ * card **********/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;