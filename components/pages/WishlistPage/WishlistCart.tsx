import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import Styles from "./WishlistCart.module.css";
import SharedWishlistTable from './../../shared/SharedWishlistTable/SharedWishlistTable';
import { IProduct } from "../../../interfaces/models";


interface Props {

}

const WishlistCart: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <>
      {
        states.wishlistData.length === 0 ? <>
          <p>Wishlist Empty</p>
        </>

          : <div className="bg-white py-6">
            <div className="w-full">
              <div className="container-x mx-auto">
                <div className="w-full mb-[30px]">
                  <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
                    <SharedWishlistTable wishlistData={states.wishlistData} />
                  </div>
                  <div className="w-full mt-[30px] flex sm:justify-end justify-start">
                    <div className="sm:flex sm:space-x-[30px] items-center">
                      <button type="button"
                        onClick={() => controller.setClearWishlist()}
                      >
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
              </div>
            </div>
          </div>
      }
    </>
  );
};

export default WishlistCart;
