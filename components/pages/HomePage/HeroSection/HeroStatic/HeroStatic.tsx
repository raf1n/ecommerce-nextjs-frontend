import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../src/state/StateController";
import ShopNowBtn from '../../../../helpers/Buttons/ShopNowBtn';

interface Props { }

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
          <ShopNowBtn color={{ textColor: 'text-qblack' }} />
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
          <ShopNowBtn color={{ textColor: 'text-qblack' }} />
        </div>
      </div>
    </div>
  );
};

export default HeroStatic;
