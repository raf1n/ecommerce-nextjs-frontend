import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
// @ts-ignore
import CountdownTimer from "react-component-countdown-timer";
import ProductCard from "../../shared/SharedProductCard/ProductCard";
interface Props {}

const FlashSale: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  class SimpleCountdownTimer extends React.Component {
    render() {
      var settings = {
        count: 5432,
        border: true,
        showTitle: true,
        noPoints: true,
      };
      return <CountdownTimer {...settings} />;
    }
  }

  return (
    <div className="w-full min-h-screen mt-10 pt-0 pb-0">
      <div className="container-x mx-auto">
        <div
          style={{
            backgroundImage:
              "url(https://api.websolutionus.com/shopo/uploads/website-images/flash_sale--2022-09-20-10-54-12-8555.png)",
          }}
          className="flash-ad w-full h-[400px] flex sm:justify-end justify-center items-center mb-10 aos-init aos-animate"
        >
          {/* <img
            src="https://api.websolutionus.com/shopo/uploads/website-images/flash_sale--2022-09-20-10-54-12-8555.png"
            alt=""
          /> */}
          <div className="ltr:sm:mr-[75px] rtl:sm:ml-[75px] pr-9">
            <div className="countdown-wrapper  w-full flex sm:space-x-6 rtl:space-x-reverse space-x-3 sm:justify-between justify-evenly">
              <div className="countdown-item ">
                <div className="  countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                  <span className=" font-700 sm:text-[30px] text-base text-[#EB5757]">
                    {/* <CountdownTimer
                      count={5432}
                      border
                      showTitle
                      responsive
                      size={22}
                      color="#fff"
                      backgroundColor="#e6e46f"
                    /> */}
                    5
                  </span>
                </div>
                <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">
                  Days
                </p>
              </div>
              <div className="countdown-item">
                <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                  <span className="font-700 sm:text-[30px] text-base text-[#EB5757]">
                    {/* <CountdownTimer
                      count={5432}
                      showTitle
                      size={20}
                      hideHours
                      hideMinutes
                      noPoints
                    /> */}
                    5
                  </span>
                </div>
                <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">
                  Hours
                </p>
              </div>
              <div className="countdown-item">
                <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                  <span className="font-700 sm:text-[30px] text-base text-[#EB5757]">
                    {/* <CountdownTimer
                      count={5432}
                      showTitle
                      size={20}
                      hideDay
                      hideHours
                      hideSeconds
                      noPoints
                    /> */}
                    15
                  </span>
                </div>
                <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">
                  Minutes
                </p>
              </div>
              <div className="countdown-item">
                <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                  <span className="font-700 sm:text-[30px] text-base text-[#EB5757]">
                    <CountdownTimer
                      count={5432}
                      // showTitle
                      size={20}
                      hideDay
                      hideHours
                      hideMinutes
                      noPoints
                    />
                  </span>
                </div>
                <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">
                  Seconds
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="products-section w-full">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
              {states.newProducts.map((product, index) => (
                <ProductCard key={index} product={product}></ProductCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
