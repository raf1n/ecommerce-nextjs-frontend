import React from "react";
import ItemDetailsLeft from "./ItemDetailsLeft/ItemDetailsLeft";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import ProductDetails from "./ProductDetails";
import { Jsondata } from "../../../src/utils/Jsondata";
import Breadcrumb from "../../shared/SharedBreadcrumb/Breadcrumb";

interface Props { }

const SingleProduct: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const { itemDetail } = Jsondata;

  return (
    <div className="w-full min-h-screen  pt-0 pb-0">
      <div className="product-view-main-wrapper bg-white pt-[30px] w-full">
        <div className="w-full bg-white pb-[60px] ">
          <div className="container-x mx-auto ">
            <Breadcrumb
              slug={`${itemDetail.name}`}
              link={`${itemDetail.slug}`}
            ></Breadcrumb>
            <div className="lg:flex justify-between">
              <div className="lg:w-1/2 xl:mr-[70px] lg:mr-[50px]">
                <ItemDetailsLeft images={itemDetail.images}></ItemDetailsLeft>
              </div>
              <div className="flex-1">
                <ProductDetails itemDetail={itemDetail}></ProductDetails>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
