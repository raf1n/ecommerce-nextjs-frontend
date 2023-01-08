import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import Styles from "./WishlistCart.module.css";

interface Props { }

const WishlistCart: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <div className="w-full mt-[23px]">
        <div className="container-x mx-auto">
          <div className="w-full mb-[30px]">
            <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
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
                            }}>
                            <img
                              alt="product"
                              src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjbl-clip-4-orange-portable-speaker-2022-09-27-03-24-27-9922.png&w=1920&q=75"
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
                            JBL Clip 4 Orange Portable Speaker
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-4 capitalize px-2">
                      <div className="flex space-x-1 items-center justify-center">
                        <span className="text-[15px] font-normal">$133.00</span>
                      </div>
                    </td>
                    <td className="text-right py-4 capitalize">
                      <div className="flex space-x-1 items-center justify-center">
                        <span className="cursor-pointer">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"
                              fill="#AAAAAA"></path>
                          </svg>
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full mt-[30px] flex sm:justify-end justify-start">
            <div className="sm:flex sm:space-x-[30px] items-center">
              <button type="button">
                <div className=" w-full text-sm font-semibold text-qred mb-5 sm:mb-0">
                  Clean Wishlist
                </div>
              </button>
              <div
                className={`${Styles["yellow-btn"]}  w-[180px] h-[50px]  flex justify-center items-center cursor-pointer`}>
                <span className="w-full text-sm font-semibold text-center">
                  View Cards
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCart;
