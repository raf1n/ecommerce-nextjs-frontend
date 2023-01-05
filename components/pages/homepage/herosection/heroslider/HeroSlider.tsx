import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../src/state/StateController";
import Slider from "react-slick";
import ShopNowBtn from '../../Buttons/ShopNowBtn';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

interface Props { }

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
      <div className={`slider-wrapper w-full h-full`}>
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
                  <ShopNowBtn color={{ textColor: 'text-qblack' }} />
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
