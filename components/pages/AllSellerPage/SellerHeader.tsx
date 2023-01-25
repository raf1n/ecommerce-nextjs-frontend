import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { Jsondata } from "../../../src/utils/Jsondata";
import SellerHeaderCard from "./SellerHeaderCard";

interface Props {}

const SellerHeader: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full sm:h-[328px]  mx-auto ">
      {Jsondata.sellerAddress.slice(0, 1).map((sellerheadercard, index) => (
        <SellerHeaderCard key={index} sellerheadercard={sellerheadercard} />
      ))}
    </div>
  );
};

export default SellerHeader;
