import React from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../../src/state/StateController";
import SharedWishListItem from "./SharedWishListItem";

interface wishItem {
  name: string;
  imgUrl: string;
  price: number;
}

interface props  {
  wishlistData: wishItem[]
}

const SharedWishlistTable: React.FC<props> = ({ wishlistData }) => {
  const states = useSelector(() => controller.states);

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <tbody>
        <tr className="text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase">
          <td className="py-4 capitalize pl-10 block whitespace-nowrap">
            Product
          </td>
          <td className="py-4 capitalize whitespace-nowrap text-center">
            Price
          </td>
          <td className="py-4 capitalize whitespace-nowrap text-center block">
            Action
          </td>
        </tr>
        {wishlistData.map((item, idx) => (
          <SharedWishListItem wishItem={item} key={idx} />
        ))}
      </tbody>
    </table>
  );
};

export default SharedWishlistTable;
