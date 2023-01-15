import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { Jsondata } from "../../../src/utils/Jsondata";
import PageHeader from "../../shared/SharedPageHeader/PageHeader";
import SellerCard from "./SellerCard";

interface Props {}

const AllSellerPage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full min-h-screen  pt-0 pb-0">
      <PageHeader slug="All Seller" link="/allseller" title="All Seller" />
      <div className="content-wrapper w-full mb-[60px]">
        <div className="container-x mx-auto w-full">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1  lg:gap-[30px] gap-5">
            {Jsondata.sellerAddress.map((sellerAdd, index) => (
              <SellerCard key={index} sellerAdd={sellerAdd}></SellerCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSellerPage;
