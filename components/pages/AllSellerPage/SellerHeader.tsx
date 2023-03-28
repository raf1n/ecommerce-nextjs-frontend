import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ISeller } from "../../../interfaces/models";
import { EcommerceApi } from "../../../src/API/EcommerceApi";
import { controller } from "../../../src/state/StateController";
import SellerHeaderCard from "./SellerHeaderCard";

interface Props {}

const SellerHeader: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [sellersData, setSellersData] = useState<ISeller[]>([]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortType, setSortType] = useState("desc");
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const fetchAllSeller = async () => {
      const { res, err } = await EcommerceApi.getAllSeller(
        `sortBy=${sortBy}&sortType=${sortType}&search=${searchString}&status=active`
      );
      if (err) {
        console.log(err);
      } else {
        setSellersData(res);
      }
    };
    fetchAllSeller();
  }, [searchString, sortBy, sortType]);

  return (
    <div className="w-full sm:h-[328px]  mx-auto ">
      {sellersData.map((sellerData, index) => (
        <SellerHeaderCard key={index} sellerData={sellerData} />
      ))}
    </div>
  );
};

export default SellerHeader;
