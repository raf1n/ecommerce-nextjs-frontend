import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import { Jsondata } from "../../../../src/utils/Jsondata";
import ProductCard from "../../../shared/SharedProductCard/ProductCard";
import { useRouter } from "next/router";
import { EcommerceApi } from "../../../../src/API/EcommerceApi";
import { IProduct } from "../../../../interfaces/models";

interface Props {}

const RelatedProductSection: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  // const [categorySlug, setCategorySlug] = useState<string | undefined>("");
  const [relatedProduct, setRelatedProduct] = useState<any>([]);
  const { asPath } = useRouter();
  const productSlug = asPath.split("=")[1];
  // console.log(productSlug);
  let categorySlug: string | undefined = "";

  useEffect(() => {
    const fetchProductData = async () => {
      if (productSlug !== "[id]") {
        const { res, err } = await EcommerceApi.getSingleProduct(productSlug);
        console.log(res);

        if (res) {
          console.log(res.catSlug);

          categorySlug = res.catSlug;
          console.log(categorySlug ? categorySlug : "null");

          if (categorySlug) {
            const { res, err } = await EcommerceApi.getRelatedProduct(
              categorySlug
            );
            if (res) {
              setRelatedProduct(res);
              console.log(res);
            }
          }
        }
      }

      // console.log(states.brands);
      // const brandName = states.brands.find(
      //   (brand) => brand.slug === res?.brandSlug
      // );
      // setBrand(brandName?.name);
    };

    // const getRelatedProduct = async () => {
    //   console.log(categorySlug);
    //   if (categorySlug) {
    //     const { res, err } = await EcommerceApi.getRelatedProduct(categorySlug);
    //     setRelatedProduct(res);
    //     console.log(res);
    //   }

    // };

    // getRelatedProduct();

    if (!states.initialDataLoading) {
      fetchProductData();
    }
  }, [productSlug, states.initialDataLoading, categorySlug]);

  return (
    <div>
      <div className="related-product w-full bg-white px-2 md:px-0">
        <div className="container-x mx-auto">
          <div className="w-full py-[60px]">
            <h1 className="sm:text-3xl text-xl font-600 text-qblacktext leading-none mb-[30px]">
              Related Product
            </h1>

            <div className="section-style-one new-products md:mb-[60px] mb-[30px] bg-white">
              <div className="section-wrapper w-full ">
                <div className="container-x mx-auto">
                  <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                    {relatedProduct
                      .slice(0, 4)
                      .map((product: IProduct, slug: any) => (
                        <ProductCard key={slug} product={product}></ProductCard>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProductSection;
