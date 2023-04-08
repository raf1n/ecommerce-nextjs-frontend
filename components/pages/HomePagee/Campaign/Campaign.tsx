import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import { Jsondata } from "../../../../src/utils/Jsondata";
import ShopNowBtn from "../../../helpers/Buttons/ShopNowBtn";
import styles from "./Campaign.module.css";
import img1 from "./googlePlay.png";
import img2 from "./app.png";
import Link from "next/link";
import useCountDown from "../../../shared/hooks/useCountDown";
import { IFlashSale, IFlashSaleProducts } from "../../../../interfaces/models";
import { EcommerceApi } from "../../../../src/API/EcommerceApi";
import CountDown from "../../FlashSalePage/CountDown";

interface Props {
  // saleData: any;
}

const Campaign: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  // const { days, hours, minutes, seconds } = useCountDown("15 March, 2024");
  // console.log(days, hours, minutes, seconds); //"15 March, 2024"

  const [saleData, setSaleData] = useState<IFlashSale>();
  const [flashSaleData, setFlashSaleData] = useState<IFlashSaleProducts[]>([]);
  const [loading, setloading] = useState(true);
  const [outputTime, setOutputTime] = useState("");

  useEffect(() => {
    const fetchAllflashData = async () => {
      const { res, err } = await EcommerceApi.getFlashSaleContent(
        "flashcontnet"
      );
      if (err) {
        console.log(err);
      } else {
        // setSaleData(res);
        // controller.setflashSaleDataTime(res.time);
        // setloading(false);
        // const inputDate = states.flashSaleDataTime;
        const date = new Date(res.time);
        // const options = { day: "numeric", month: "long", year: "numeric" };
        const outputDate = date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        console.log(outputDate);
        setOutputTime(outputDate);
        setloading(false);

        // console.log(res);
      }
    };
    fetchAllflashData();
  }, [flashSaleData]);

  // if (!loading) {
  //   const { days, hours, minutes, seconds } = useCountDown(outputTime);
  // }

  useEffect(() => {
    const fetchAllFlashSalesData = async () => {
      const { res, err } = await EcommerceApi.getFlashSaleProductsData();
      if (err) {
        console.log(err);
      } else {
        setFlashSaleData(res);

        console.log(res);
      }
    };
    fetchAllFlashSalesData();
  }, []);

  // const inputDate = states.flashSaleDataTime;
  // const date = new Date(inputDate);
  // // const options = { day: "numeric", month: "long", year: "numeric" };
  // const outputDate = date.toLocaleDateString("en-US", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // });
  // console.log(outputDate);

  // const { days, hours, minutes, seconds } = useCountDown(outputDate);

  // useEffect(() => {
  //   const fetchAllflashData = async () => {
  //     const { res, err } = await EcommerceApi.getFlashSaleContent(
  //       "flashcontnet"
  //     );
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       setSaleData(res);

  //       console.log(res);
  //     }
  //   };
  //   fetchAllflashData();
  // }, []);

  // const saleTime = [
  //   {
  //     name: "Days",
  //     duration: days,
  //   },
  //   {
  //     name: "Hours",
  //     duration: hours,
  //   },
  //   {
  //     name: "Minutes",
  //     duration: minutes,
  //   },
  //   {
  //     name: "Seconds",
  //     duration: seconds,
  //   },
  // ];

  return (
    <div className="w-full lg:h-[460px] md:mb-[60px] mb-[30px]">
      <div className="container-x mx-auto h-full">
        <div className="lg:flex xl:space-x-[30px] lg:space-x-5 items-center h-full">
          <div
            className={`${styles["campaign-countdown"]} lg:w-1/2 h-[300px] sm:h-[400px] lg:h-full w-full mb-5 lg:mb-0`}
          >
            <div className="w-full xl:p-12 p-5">
              <div className="w-full flex lg:justify-between justify-evenly lg:mb-10 mb-2">
                {/* {saleTime.map((item, index) => {
                  return (
                    <div>
                      <div className="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                        <span className="font-bold sm:text-[30px] text-[14px] text-[#EB5757]">
                          {item.duration}
                        </span>
                      </div>
                      <p className="sm:text-[18px] text-[12px] font-medium text-center leading-8">
                        {item.name}
                      </p>
                    </div>
                  );
                })} */}
                {!loading && outputTime && (
                  <CountDown outputTime={outputTime} />
                )}
              </div>
              <div className="mb-4">
                <h1 className="text-[44px] text-qblack font-semibold">
                  {saleData?.title}
                </h1>
              </div>
              <Link href={"/flash_sale"}>
                <ShopNowBtn color={{ textColor: "text-qblack" }} />
              </Link>
            </div>
          </div>
          <div
            className={`${styles["download-app"]} flex-1 lg:h-full h-[430px] xl:p-12 p-5 aos-init aos-animate`}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <p className="text-[13px] font-semibold text-qblack mb-3">
                  MOBILE APP VERSION
                </p>
                <h1 className="lg:text-[30px] text-2xl font-semibold text-qblack leading-10 mb-8">
                  Get Our
                  <span className="text-qred border-b-2 border-qred mx-2">
                    Mobile App
                  </span>
                  <br />
                  It's Make easy for you life!
                </h1>
                <div className="flex space-x-5 items-center">
                  {/* {[img1, img2].map((item) => {
                    return ( */}
                  <div className="bg-white w-[170px] h-[60px] flex justify-center items-center cursor-pointer">
                    <Link
                      href={`https://play.google.com/store/apps`}
                      rel="noopener noreferrer"
                    >
                      <picture>
                        <img src={img1.src} alt="" />
                      </picture>
                    </Link>
                  </div>
                  <div className="bg-white w-[170px] h-[60px] flex justify-center items-center cursor-pointer">
                    <Link
                      href={`https://www.apple.com/app-store/`}
                      rel="noopener noreferrer"
                    >
                      <picture>
                        <img src={img2.src} alt="" />
                      </picture>
                    </Link>
                  </div>

                  {/* );
                  })} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
