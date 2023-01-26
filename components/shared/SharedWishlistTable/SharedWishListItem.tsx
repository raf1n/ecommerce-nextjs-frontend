import React from "react";
import { useSelector } from "react-redux";
import { IProduct } from "../../../interfaces/models";
import { controller } from "./../../../src/state/StateController";

interface Props {
  item: IProduct
}

const SharedWishListItem: React.FC<Props> = ({
  item
}) => {

  const states = useSelector(() => controller.states);

  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <td className="pl-10 py-4 capitalize w-[380px] ">
        <div className="flex space-x-6 items-center">
          <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED] relative">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,

                position: "absolute",
                inset: 0,
              }}
            >
              <img
                alt="product"
                src={item.image}
                decoding="async"
                data-nimg="fill"
                className="w-full h-full object-contain"
                style={{
                  position: "absolute",
                  inset: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: 100,
                  maxWidth: 100,
                  minHeight: 100,
                  maxHeight: 100,
                }}
                sizes="100vw"
              />
              <noscript></noscript>
            </span>
          </div>
          <div className="flex-1 flex flex-col">
            <p className="font-medium text-[15px] text-qblack hover:text-blue-500 cursor-pointer">
              {item.name}
            </p>
          </div>
        </div>
      </td>
      <td className="text-center py-4 capitalize px-2">
        <div className="flex space-x-1 items-center justify-center">
          <span className="text-[15px] font-normal">{item.offerPrice ? item.offerPrice : item.price}</span>
        </div>
      </td>
      <td className="text-right py-4 capitalize">
        <div className="flex space-x-1 items-center justify-center"
          onClick={() => controller.setRemoveWishlistSingleProduct(item)}
        >
          <span className="cursor-pointer">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"
                fill="#AAAAAA"
              ></path>
            </svg>
          </span>
        </div>
      </td>
    </tr>
  );
};

export default SharedWishListItem;
