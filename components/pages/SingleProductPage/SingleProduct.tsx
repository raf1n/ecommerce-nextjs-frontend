import React, { useState } from "react";
import ItemDetailsLeft from "./ItemDetailsLeft/ItemDetailsLeft";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import ProductDetails from "./ProductDetails";
import { Jsondata } from "../../../src/utils/Jsondata";
import Breadcrumb from "../../shared/SharedBreadcrumb/Breadcrumb";
import ReportedItemModal from "./ReportedItemModal/ReportedItemModal";
import { useRouter } from "next/router";
import { EcommerceApi } from "../../../src/API/EcommerceApi";

interface Props {}

const SingleProduct: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const { itemDetail } = Jsondata;
  const router = useRouter();
  const { asPath } = router;
  console.log(asPath.split("=")[1]);

  const [reportModalSlug, setReportModalSlug] = useState<any | string>("");
  const handleReport = (e: any) => {
    e.preventDefault();
    const reportedItem = {
      product_slug: asPath.split("=")[1],
      user_slug: "user_slug_1",
      title: e.target.title.value,
      note: e.target.note.value,
    };
    EcommerceApi.addReportedItem(reportedItem);
    setReportModalSlug("");
  };
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
                <ProductDetails
                  setReportModalSlug={setReportModalSlug}
                  itemDetail={itemDetail}
                ></ProductDetails>
              </div>
            </div>
            <ReportedItemModal
              setReportModalSlug={setReportModalSlug}
              handleReport={handleReport}
              reportModalSlug={reportModalSlug}
            ></ReportedItemModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
