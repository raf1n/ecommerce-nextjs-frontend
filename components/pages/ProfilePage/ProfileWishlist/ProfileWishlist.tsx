import React from "react";
import { useSelector } from "react-redux";
import { Jsondata } from "../../../../src/utils/Jsondata";
import SharedWishlistTable from "../../../shared/SharedWishlistTable/SharedWishlistTable";
import { controller } from "./../../../../src/state/StateController";

import Styles from './ProfileWishlist.module.css';

interface Props {}

const ProfileWishlist: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const { wishlistData } = Jsondata;

  return (
    <div>
      <SharedWishlistTable wishlistData={wishlistData} />

      <div className="w-full mt-[30px] flex sm:justify-end justify-start">
        <div className="sm:flex sm:space-x-[30px] items-center">
          <button type="button">
            <div className=" w-full text-sm font-semibold text-qred mb-5 sm:mb-0">
              Clean Wishlist
            </div>
          </button>
          <div
            className={`${Styles["yellow-btn"]}  w-[180px] h-[50px]  flex justify-center items-center cursor-pointer`}
          >
            <span className="w-full text-sm font-semibold text-center">
              View Cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWishlist;
