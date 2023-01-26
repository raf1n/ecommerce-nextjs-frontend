import React from "react";
import { useSelector } from "react-redux";
import { IProduct } from "../../../../interfaces/models";
import { controller } from "../../../../src/state/StateController";

interface Props {
  product: IProduct;
};

const BestProductCard: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const {
    product: { name, price, offerPrice, slug, image },
  } = props;

  return (
    <div className="h-[105px] bg-white border border-gray-100 px-5">
      <div className="flex gap-x-5 h-full items-center">
        <img src={image} className="w-[75px]" alt="" />
        <div className="flex-1 flex flex-col justify-center h-full">
          <a
            className="mb-2 sm:text-[15px] text-[13px] font-semibold leading-[24px] line-clamp-1 hover:text-blue-600 cursor-pointer"
            href={"/single-product?slug=" + slug}
            rel="noopener noreferrer"
            title={name}
          >
            {name}
          </a>
          <div>
            <span className="font-semibold text-lg line-through text-gray-400">${price}</span>
            <span className="font-semibold text-lg ml-2 text-red-600">${offerPrice}.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProductCard;
