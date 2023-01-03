import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../src/state/StateController";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Styles from "./heroslider.module.css";
interface Props {}

const HeroSlider: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="xl:w-[740px] w-full lg:h-full xl:h-full md:h-[500px] h-[220px] xl:mb-0 mb-2 aos-init aos-animate">
      <div className={`${Styles["sliderwrapper"]} w-full h-full`}>
        <Slider {...settings}>
          {[1, 2].map((el) => (
            <div
              style={{ width: "100%", display: " inline-block" }}
              className="w-full h-full "
            >
              <div
                className="flex w-full max-w-full relative items-center h-[200px] xl:h-[600px] md:h-[500px] lg:h-[600px] pl-[30px]"
                style={{
                  backgroundImage: `url(
       "https://api.websolutionus.com/shopo/uploads/custom-images/slider-2022-10-27-01-36-44-4193.png"
     )`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div>
                  <div className="md:w-[112px] w-[100px] shadow md:h-[25px] h-[18px] flex items-center justify-center bg-white rounded-full md:mb-[30px] mb-[15px]">
                    <span className="text-qblack uppercase md:text-xs text-[10px] font-semibold">
                      New released
                    </span>
                  </div>
                  <div className="md:mb-[30px] mb-[15px]">
                    <p className="md:text-[50px] text-[20px] leading-none text-qblack md:mb-3">
                      Headphone
                    </p>
                    <h1 className="md:text-[50px] text-[20px] md:w-[400px] md:leading-[66px] text-qblack font-bold">
                      JBL Music
                    </h1>
                  </div>
                  <div className="w-[90px]">
                    <a
                      rel="noopener noreferrer"
                      href="/single-product?slug=sony-joystick-v1"
                    >
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
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="2.08984"
                                y="0.636719"
                                width="6.94219"
                                height="1.54271"
                                transform="rotate(45 2.08984 0.636719)"
                                fill="#1D1D1D"
                              ></rect>
                              <rect
                                x="7"
                                y="5.54492"
                                width="6.94219"
                                height="1.54271"
                                transform="rotate(135 7 5.54492)"
                                fill="#1D1D1D"
                              ></rect>
                            </svg>
                          </span>
                        </div>
                        <div className="w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[2px] bg-qyellow absolute left-0 bottom-0 z-10"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;
