import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../src/state/StateController";

interface Props {}

const HeroStatic: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="flex-1 flex xl:flex-col flex-row xl:space-y-[30px] xl:h-full md:h-[350px] h-[150px] aos-init aos-animate">
      <div
        className="w-full xl:h-1/2 xl:mr-o mr-2 relative flex items-center group md:pl-[40px] pl-[30px]"
        style={{
          backgroundImage: `url(
            "https://api.websolutionus.com/shopo/uploads/website-images/Mega-menu-2022-10-27-01-41-46-7345.png"
          )`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="flex flex-col justify-between">
          <div>
            <div className="md:w-[112px] w-[100px] shadow md:h-[25px] h-[18px] flex items-center justify-center bg-white rounded-full md:mb-[22px] mb-[15px]">
              <span className="text-qblack uppercase md:text-xs text-[10px] font-semibold">
                Gaming
              </span>
            </div>
            <div className="md:mb-[30px] mb-2.5">
              <p className="md:text-[30px] leading-none text-qblack font-semibold md:mb-3">
                Apple
              </p>
              <h1 className="md:text-[30px] md:leading-[40px] text-qblack font-semibold">
                Smart Watch
              </h1>
            </div>
          </div>
          <div className="w-[90px]">
            <a rel="noopener noreferrer" href="/products?category=electronics">
              <div className="cursor-pointer w-full relative ">
                <div className="inline-flex space-x-1.5 items-center relative z-20">
                  <span className="text-sm text-qblack font-medium leading-[30px]">
                    Shop Now
                  </span>
                  <span className="leading-[30px]">
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="2.08984"
                        y="0.636719"
                        width="6.94219"
                        height="1.54271"
                        transform="rotate(45 2.08984 0.636719)"
                        fill="#1D1D1D"></rect>
                      <rect
                        x="7"
                        y="5.54492"
                        width="6.94219"
                        height="1.54271"
                        transform="rotate(135 7 5.54492)"
                        fill="#1D1D1D"></rect>
                    </svg>
                  </span>
                </div>
                <div className="w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[0px] bg-qyellow absolute left-0 bottom-0 z-10"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        className="w-full xl:h-1/2 relative flex items-center pl-[40px] group"
        style={{
          backgroundImage: `url(
            "https://api.websolutionus.com/shopo/uploads/website-images/Mega-menu-2022-10-27-01-42-01-1798.png"
          )`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="flex flex-col justify-between">
          <div>
            <div className="md:w-[112px] w-[100px] shadow md:h-[25px] h-[18px] flex items-center justify-center bg-white rounded-full md:mb-[22px] mb-[15px]">
              <span className="text-qblack uppercase md:text-xs text-[10px] font-semibold">
                Gaming
              </span>
            </div>
            <div className="md:mb-[30px] mb-2.5">
              <p className="md:text-[30px] leading-none text-qblack font-semibold md:mb-3">
                Xbox
              </p>
              <h1 className="md:text-[30px] md:leading-[40px] text-qblack font-semibold">
                5th Version
              </h1>
            </div>
          </div>
          <div className="w-[90px]">
            <a rel="noopener noreferrer" href="/products?category=electronics">
              <div className="cursor-pointer w-full relative ">
                <div className="inline-flex space-x-1.5 items-center relative z-20">
                  <span className="text-sm text-qblack font-medium leading-[30px]">
                    Shop Now
                  </span>
                  <span className="leading-[30px]">
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="2.08984"
                        y="0.636719"
                        width="6.94219"
                        height="1.54271"
                        transform="rotate(45 2.08984 0.636719)"
                        fill="#1D1D1D"></rect>
                      <rect
                        x="7"
                        y="5.54492"
                        width="6.94219"
                        height="1.54271"
                        transform="rotate(135 7 5.54492)"
                        fill="#1D1D1D"></rect>
                    </svg>
                  </span>
                </div>
                <div className="w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[0px] bg-qyellow absolute left-0 bottom-0 z-10"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStatic;
