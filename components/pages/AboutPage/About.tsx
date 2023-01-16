import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import PageHeader from "../../shared/SharedPageHeader/PageHeader";
import { AiFillCheckCircle } from "react-icons/ai";
import styles from "./About.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Slider from "react-slick";
import ViewMoreBtn from "../../helpers/Buttons/ViewMoreBtn";
import { Jsondata } from "../../../src/utils/Jsondata";

interface Props {}

const About: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const feedbacks = [
    {
      description:
        "Almost every imaginable design is possible and customizations are allowed on every level. Some features could make use of better controls. If you know how to operate your mouse, then you are all set to use this pagebuilder.",
      name: "Michael",
      designation: "CEO",
      picture:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjohn-doe-20220922033955.png&w=1920&q=75",
    },
    {
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
      name: "James Robert",
      designation: "CEO",
      picture:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjohn-doe-20220922033955.png&w=1920&q=75",
    },
    {
      description:
        "As a digital marketing agency our team works day in and day out on websites of all kinds. Some of the most common errors we see are websites not optimized for SEO because of old, boring, or out of date website themes or designs.",
      name: "John Doe",
      designation: "CEO",
      picture:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjohn-doe-20220922033955.png&w=1920&q=75",
    },
    {
      description:
        "Almost every imaginable design is possible and customizations are allowed on every level. Some features could make use of better controls. If you know how to operate your mouse, then you are all set to use this pagebuilder.",
      name: "Michael",
      designation: "CEO",
      picture:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjohn-doe-20220922033955.png&w=1920&q=75",
    },
    {
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
      name: "James Robert",
      designation: "CEO",
      picture:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjohn-doe-20220922033955.png&w=1920&q=75",
    },
    {
      description:
        "Almost every imaginable design is possible and customizations are allowed on every level. Some features could make use of better controls. If you know how to operate your mouse, then you are all set to use this pagebuilder.",
      name: "Michael",
      designation: "CEO",
      picture:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjohn-doe-20220922033955.png&w=1920&q=75",
    },
  ];
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="">
      <PageHeader slug="About Us" link="/aboutus" title="About Us" />
      <div className="w-full min-h-screen mt-10 pt-0 pb-0 bg-gray-50">
        <div className="aboutus-wrapper w-full py-2 ">
          <div className="container-x mx-auto">
            <div className="w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0">
              <div className="md:w-[570px] w-full md:h-[560px] h-auto rounded overflow-hidden my-5 lg:my-0 relative">
                <span>
                  <img
                    src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fabout-us-2022-09-22-04-39-05-2348.png&w=1920&q=75"
                    alt=""
                  />
                </span>
              </div>
              <div className="content flex-1">
                <div className="about-content">
                  <div>
                    <h1 className="text-2xl font-semibold mb-4 ">
                      What is e-commerce business?
                    </h1>
                    <br />
                    <p className="text-base text-[#797979] leading-8 ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries but also the on leap into electronic
                      typesetting.
                    </p>
                    <ul className="mt-5">
                      <li className="text-base text-[#797979] leading-8 flex items-center mb-3">
                        <div>
                          <AiFillCheckCircle
                            className={`${styles["checkmark"]}`}
                          />
                        </div>
                        <div>slim body with metal cover</div>
                      </li>
                      <li className="text-base text-[#797979] leading-8 flex items-center mb-3">
                        <div>
                          <AiFillCheckCircle
                            className={`${styles["checkmark"]}`}
                          />
                        </div>
                        <div>
                          latest Intel Core i5-1135G7 processor (4 cores / 8
                          threads)
                        </div>
                      </li>
                      <li className="text-base text-[#797979] leading-8 flex items-center mb-3">
                        <div>
                          <AiFillCheckCircle
                            className={`${styles["checkmark"]}`}
                          />
                        </div>
                        <div>8GB DDR4 RAM and fast 512GB PCIe SSD</div>
                      </li>
                      <li className="text-base text-[#797979] leading-8 flex items-center mb-3">
                        <div>
                          <AiFillCheckCircle
                            className={`${styles["checkmark"]}`}
                          />
                        </div>
                        <div className="leading-8">
                          NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit
                          keyboard
                        </div>
                      </li>
                      <li className="text-base text-[#797979] leading-8 flex items-center mb-3">
                        <div>
                          <AiFillCheckCircle
                            className={`${styles["checkmark"]}`}
                          />
                        </div>
                        <div>hello hello hello prashant sir ?</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="/contact">
                  <div className="w-[121px] h-10 mt-5 cursor-pointer">
                    <span className="yellow-btn">Contact Us</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="customer-feedback w-full bg-white py-[60px]">
          <div className="title flex justify-center mb-5">
            <h1 className="text-[30px] font-semibold text-qblack">
              Customers Feedback
            </h1>
          </div>
          <Slider
            ref={slider}
            {...settings}
            className="feedback-slider-wrapper  relative overflow-hidden mx-10"
          >
            {feedbacks.map((feedback, index) => (
              <div className="mt-3 w-full inline-block">
                <div className="item h-auto m-2">
                  {/* sm:px-5 sm:py-5 p-10 */}
                  <div className="bg-primarygray  p-10">
                    <div className="rating flex space-x-1 items-center mb-4 ">
                      <span>
                        <svg
                          className="fill-qyellow"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="currentColor"'></path>
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="fill-qyellow"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="currentColor"'></path>
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="fill-qyellow"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="currentColor"'></path>
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="fill-qyellow"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="currentColor"'></path>
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="fill-qyellow"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="currentColor"'></path>
                        </svg>
                      </span>
                      <div>
                        <span className="text-[13px] text-qblack">(5)</span>
                      </div>
                    </div>
                    <div className="text-[15px] text-qgray leading-[30px] line-clamp-6 mb-4">
                      {feedback.description}
                    </div>
                    <div className="flex items-center space-x-2.5 mt-3">
                      <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative">
                        <span>
                          <img src={feedback.picture} alt="" />
                        </span>
                      </div>
                      <div>
                        <p className="text-[18px] text-qblack font-medium">
                          {feedback.name}
                        </p>
                        <p className="text-qgray text-[13px]">
                          {feedback.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className='item h-auto sm:px-1 sm:py-9 p-10'>
                            <div className='bg-primarygray p-10'>
                                <div className='rating flex space-x-1 items-center mb-4'>
                                    <span>
                                        <svg
                                            className="fill-qyellow"
                                            width="18"
                                            height="17"
                                            viewBox="0 0 18 17"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="currentColor"'></path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg
                                            className="fill-qyellow"
                                            width="18"
                                            height="17"
                                            viewBox="0 0 18 17"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="currentColor"'></path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg
                                            className="fill-qyellow"
                                            width="18"
                                            height="17"
                                            viewBox="0 0 18 17"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="currentColor"'></path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg
                                            className="fill-qyellow"
                                            width="18"
                                            height="17"
                                            viewBox="0 0 18 17"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="currentColor"'></path>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg
                                            className="fill-qyellow"
                                            width="18"
                                            height="17"
                                            viewBox="0 0 18 17"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="currentColor"'></path>
                                        </svg>
                                    </span>
                                    <div >
                                        <span className='text-[13px] text-qblack'>(5)</span>
                                    </div>
                                </div>
                                <div className='text-[15px] text-qgray leading-[30px] line-clamp-6 mb-4'>
                                    As a digital marketing agency our team works day in and day out on websites of all kinds. Some of the most common errors we see are websites not optimized for SEO because of old, boring, or out of date website themes or designs.
                                </div>
                                <div className='flex items-center space-x-2.5 mt-3'>
                                    <div className='w-[50px] h-[50px] rounded-full overflow-hidden relative'>
                                        <span>
                                            <img src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjohn-doe-20220922033955.png&w=1920&q=75" alt="" />
                                        </span>
                                    </div>
                                    <div>
                                        <p className='text-[18px] text-qblack font-medium'>John Doe</p>
                                        <p className='text-qgray text-[13px]'>CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        */}
          </Slider>
          <div className=" flex justify-center mt-[40px]">
            <div className="flex space-x-5 item-center">
              <button
                //@ts-ignore
                onClick={() => slider?.current?.slickNext()}
                type="button"
                className="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qyellow text-qyellow focus:bg-qyellow focus:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button
                //@ts-ignore
                onClick={() => slider?.current?.slickPrev()}
                type="button"
                className="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qyellow text-qyellow focus:bg-qyellow focus:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="container-x mx-auto my-[60px]">
          <div
            data-aos="fade-up"
            className="best-services w-full bg-qyellow flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10 aos-init aos-animate"
          >
            <div className="item">
              <div className="flex space-x-5 items-center">
                <div>
                  <span className="w-10 h-10 text-black">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="truck-fast"
                      className="svg-inline--fa fa-truck-fast w-8 h-8"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M112 0C85.49 0 64 21.49 64 48V96H16C7.163 96 0 103.2 0 112C0 120.8 7.163 128 16 128H272C280.8 128 288 135.2 288 144C288 152.8 280.8 160 272 160H48C39.16 160 32 167.2 32 176C32 184.8 39.16 192 48 192H240C248.8 192 256 199.2 256 208C256 216.8 248.8 224 240 224H16C7.163 224 0 231.2 0 240C0 248.8 7.163 256 16 256H208C216.8 256 224 263.2 224 272C224 280.8 216.8 288 208 288H64V416C64 469 106.1 512 160 512C213 512 256 469 256 416H384C384 469 426.1 512 480 512C533 512 576 469 576 416H608C625.7 416 640 401.7 640 384C640 366.3 625.7 352 608 352V237.3C608 220.3 601.3 204 589.3 192L512 114.7C499.1 102.7 483.7 96 466.7 96H416V48C416 21.49 394.5 0 368 0H112zM544 237.3V256H416V160H466.7L544 237.3zM160 464C133.5 464 112 442.5 112 416C112 389.5 133.5 368 160 368C186.5 368 208 389.5 208 416C208 442.5 186.5 464 160 464zM528 416C528 442.5 506.5 464 480 464C453.5 464 432 442.5 432 416C432 389.5 453.5 368 480 368C506.5 368 528 389.5 528 416z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-black text-[15px] font-bold tracking-wide mb-1">
                    Free Shipping
                  </p>
                  <p className="text-sm text-qblack line-clamp-1">
                    Free Shipping on Payment
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="flex space-x-5 items-center">
                <div>
                  <span className="w-10 h-10 text-black">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="circle-chevron-left"
                      className="svg-inline--fa fa-circle-chevron-left w-8 h-8"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-black text-[15px] font-bold tracking-wide mb-1">
                    Return Policy
                  </p>
                  <p className="text-sm text-qblack line-clamp-1">
                    24 Hours Return Policy
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="flex space-x-5 items-center">
                <div>
                  <span className="w-10 h-10 text-black">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="cc-amazon-pay"
                      className="svg-inline--fa fa-cc-amazon-pay w-8 h-8"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M124.7 201.8c.1-11.8 0-23.5 0-35.3v-35.3c0-1.3 .4-2 1.4-2.7 11.5-8 24.1-12.1 38.2-11.1 12.5 .9 22.7 7 28.1 21.7 3.3 8.9 4.1 18.2 4.1 27.7 0 8.7-.7 17.3-3.4 25.6-5.7 17.8-18.7 24.7-35.7 23.9-11.7-.5-21.9-5-31.4-11.7-.9-.8-1.4-1.6-1.3-2.8zm154.9 14.6c4.6 1.8 9.3 2 14.1 1.5 11.6-1.2 21.9-5.7 31.3-12.5 .9-.6 1.3-1.3 1.3-2.5-.1-3.9 0-7.9 0-11.8 0-4-.1-8 0-12 0-1.4-.4-2-1.8-2.2-7-.9-13.9-2.2-20.9-2.9-7-.6-14-.3-20.8 1.9-6.7 2.2-11.7 6.2-13.7 13.1-1.6 5.4-1.6 10.8 .1 16.2 1.6 5.5 5.2 9.2 10.4 11.2zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zm-207.5 23.9c.4 1.7 .9 3.4 1.6 5.1 16.5 40.6 32.9 81.3 49.5 121.9 1.4 3.5 1.7 6.4 .2 9.9-2.8 6.2-4.9 12.6-7.8 18.7-2.6 5.5-6.7 9.5-12.7 11.2-4.2 1.1-8.5 1.3-12.9 .9-2.1-.2-4.2-.7-6.3-.8-2.8-.2-4.2 1.1-4.3 4-.1 2.8-.1 5.6 0 8.3 .1 4.6 1.6 6.7 6.2 7.5 4.7 .8 9.4 1.6 14.2 1.7 14.3 .3 25.7-5.4 33.1-17.9 2.9-4.9 5.6-10.1 7.7-15.4 19.8-50.1 39.5-100.3 59.2-150.5 .6-1.5 1.1-3 1.3-4.6 .4-2.4-.7-3.6-3.1-3.7-5.6-.1-11.1 0-16.7 0-3.1 0-5.3 1.4-6.4 4.3-.4 1.1-.9 2.3-1.3 3.4l-29.1 83.7c-2.1 6.1-4.2 12.1-6.5 18.6-.4-.9-.6-1.4-.8-1.9-10.8-29.9-21.6-59.9-32.4-89.8-1.7-4.7-3.5-9.5-5.3-14.2-.9-2.5-2.7-4-5.4-4-6.4-.1-12.8-.2-19.2-.1-2.2 0-3.3 1.6-2.8 3.7zM242.4 206c1.7 11.7 7.6 20.8 18 26.6 9.9 5.5 20.7 6.2 31.7 4.6 12.7-1.9 23.9-7.3 33.8-15.5 .4-.3 .8-.6 1.4-1 .5 3.2 .9 6.2 1.5 9.2 .5 2.6 2.1 4.3 4.5 4.4 4.6 .1 9.1 .1 13.7 0 2.3-.1 3.8-1.6 4-3.9 .1-.8 .1-1.6 .1-2.3v-88.8c0-3.6-.2-7.2-.7-10.8-1.6-10.8-6.2-19.7-15.9-25.4-5.6-3.3-11.8-5-18.2-5.9-3-.4-6-.7-9.1-1.1h-10c-.8 .1-1.6 .3-2.5 .3-8.2 .4-16.3 1.4-24.2 3.5-5.1 1.3-10 3.2-15 4.9-3 1-4.5 3.2-4.4 6.5 .1 2.8-.1 5.6 0 8.3 .1 4.1 1.8 5.2 5.7 4.1 6.5-1.7 13.1-3.5 19.7-4.8 10.3-1.9 20.7-2.7 31.1-1.2 5.4 .8 10.5 2.4 14.1 7 3.1 4 4.2 8.8 4.4 13.7 .3 6.9 .2 13.9 .3 20.8 0 .4-.1 .7-.2 1.2-.4 0-.8 0-1.1-.1-8.8-2.1-17.7-3.6-26.8-4.1-9.5-.5-18.9 .1-27.9 3.2-10.8 3.8-19.5 10.3-24.6 20.8-4.1 8.3-4.6 17-3.4 25.8zM98.7 106.9v175.3c0 .8 0 1.7 .1 2.5 .2 2.5 1.7 4.1 4.1 4.2 5.9 .1 11.8 .1 17.7 0 2.5 0 4-1.7 4.1-4.1 .1-.8 .1-1.7 .1-2.5v-60.7c.9 .7 1.4 1.2 1.9 1.6 15 12.5 32.2 16.6 51.1 12.9 17.1-3.4 28.9-13.9 36.7-29.2 5.8-11.6 8.3-24.1 8.7-37 .5-14.3-1-28.4-6.8-41.7-7.1-16.4-18.9-27.3-36.7-30.9-2.7-.6-5.5-.8-8.2-1.2h-7c-1.2 .2-2.4 .3-3.6 .5-11.7 1.4-22.3 5.8-31.8 12.7-2 1.4-3.9 3-5.9 4.5-.1-.5-.3-.8-.4-1.2-.4-2.3-.7-4.6-1.1-6.9-.6-3.9-2.5-5.5-6.4-5.6h-9.7c-5.9-.1-6.9 1-6.9 6.8zM493.6 339c-2.7-.7-5.1 0-7.6 1-43.9 18.4-89.5 30.2-136.8 35.8-14.5 1.7-29.1 2.8-43.7 3.2-26.6 .7-53.2-.8-79.6-4.3-17.8-2.4-35.5-5.7-53-9.9-37-8.9-72.7-21.7-106.7-38.8-8.8-4.4-17.4-9.3-26.1-14-3.8-2.1-6.2-1.5-8.2 2.1v1.7c1.2 1.6 2.2 3.4 3.7 4.8 36 32.2 76.6 56.5 122 72.9 21.9 7.9 44.4 13.7 67.3 17.5 14 2.3 28 3.8 42.2 4.5 3 .1 6 .2 9 .4 .7 0 1.4 .2 2.1 .3h17.7c.7-.1 1.4-.3 2.1-.3 14.9-.4 29.8-1.8 44.6-4 21.4-3.2 42.4-8.1 62.9-14.7 29.6-9.6 57.7-22.4 83.4-40.1 2.8-1.9 5.7-3.8 8-6.2 4.3-4.4 2.3-10.4-3.3-11.9zm50.4-27.7c-.8-4.2-4-5.8-7.6-7-5.7-1.9-11.6-2.8-17.6-3.3-11-.9-22-.4-32.8 1.6-12 2.2-23.4 6.1-33.5 13.1-1.2 .8-2.4 1.8-3.1 3-.6 .9-.7 2.3-.5 3.4 .3 1.3 1.7 1.6 3 1.5 .6 0 1.2 0 1.8-.1l19.5-2.1c9.6-.9 19.2-1.5 28.8-.8 4.1 .3 8.1 1.2 12 2.2 4.3 1.1 6.2 4.4 6.4 8.7 .3 6.7-1.2 13.1-2.9 19.5-3.5 12.9-8.3 25.4-13.3 37.8-.3 .8-.7 1.7-.8 2.5-.4 2.5 1 4 3.4 3.5 1.4-.3 3-1.1 4-2.1 3.7-3.6 7.5-7.2 10.6-11.2 10.7-13.8 17-29.6 20.7-46.6 .7-3 1.2-6.1 1.7-9.1 .2-4.7 .2-9.6 .2-14.5z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-black text-[15px] font-bold tracking-wide mb-1">
                    Secured Payment
                  </p>
                  <p className="text-sm text-qblack line-clamp-1">
                    Secure Card Payments
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="flex space-x-5 items-center">
                <div>
                  <span className="w-10 h-10 text-black">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="circle-check"
                      className="svg-inline--fa fa-circle-check w-8 h-8"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-black text-[15px] font-bold tracking-wide mb-1">
                    Best Quality
                  </p>
                  <p className="text-sm text-qblack line-clamp-1">
                    Best Quality Products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-post-wrapper w-full mb-[30px]">
          <div className="container-x mx-auto">
            <div className="blog-post-title flex justify-center items-cente mb-[30px]">
              <h1 className="text-3xl font-semibold text-qblack">
                My Latest News
              </h1>
            </div>
            <div className="blogs-wrapper w-full">
              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5">
                {Jsondata.blogsData.slice(0, 2).map((data, idx) => (
                  <div
                    key={idx}
                    data-aos="fade-up"
                    className="item w-full aos-init aos-animate"
                  >
                    <div className="blog-card-wrapper w-full border border-[#D3D3D3] ">
                      <div className="img w-full h-[340px] relative">
                        <span>
                          <img
                            alt="blog"
                            sizes="100vw"
                            src={data.blogThum}
                            decoding="async"
                            data-nimg="fill"
                            className="w-full h-full object-cover"
                          />
                        </span>
                      </div>
                      <div className="p-[24px]">
                        <div className="short-data flex space-x-9 items-center mb-3">
                          <div className="flex space-x-1.5 items-center">
                            <span>
                              <svg
                                width="12"
                                height="15"
                                viewBox="0 0 12 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.761 14.9996C1.55973 14.9336 1.35152 14.8896 1.16065 14.7978C0.397206 14.4272 -0.02963 13.6273 0.00160193 12.743C0.0397743 11.6936 0.275749 10.7103 0.765049 9.7966C1.42439 8.56373 2.36829 7.65741 3.59327 7.07767C3.67309 7.04098 3.7529 7.00428 3.85007 6.95658C2.68061 5.9512 2.17396 4.67062 2.43422 3.10017C2.58691 2.18285 3.03804 1.42698 3.72514 0.847238C5.24163 -0.42967 7.34458 -0.216852 8.60773 1.1738C9.36424 2.00673 9.70779 3.01211 9.61757 4.16426C9.52734 5.31642 9.01375 6.23374 8.14619 6.94924C8.33359 7.04098 8.50363 7.11436 8.6702 7.20609C10.1485 8.006 11.1618 9.24254 11.6997 10.9011C11.9253 11.5945 12.0328 12.3137 11.9912 13.0476C11.9357 14.0163 11.2243 14.8235 10.3151 14.9703C10.2908 14.974 10.2665 14.9886 10.2387 14.9996C7.41051 14.9996 4.58575 14.9996 1.761 14.9996ZM6.00507 13.8475C7.30293 13.8475 8.60079 13.8401 9.89518 13.8512C10.5684 13.8548 10.9571 13.3338 10.9015 12.7577C10.8807 12.5486 10.8773 12.3394 10.846 12.1303C10.6309 10.6185 9.92294 9.41133 8.72225 8.5784C7.17106 7.50331 5.50883 7.3602 3.84313 8.23349C2.05944 9.16916 1.15718 10.7506 1.09125 12.8568C1.08778 13.0072 1.12595 13.1723 1.18494 13.3044C1.36193 13.6934 1.68466 13.8438 2.08026 13.8438C3.392 13.8475 4.70027 13.8475 6.00507 13.8475ZM5.99119 6.53462C7.38969 6.54195 8.53833 5.33843 8.54527 3.85238C8.55221 2.37733 7.41745 1.16647 6.00507 1.15179C4.62046 1.13344 3.45794 2.35531 3.45099 3.8377C3.44405 5.31275 4.58922 6.52728 5.99119 6.53462Z"
                                  fill="#FFBB38"
                                ></path>
                              </svg>
                            </span>
                            <span className="text-base text-qgraytwo capitalize">
                              By Admin
                            </span>
                          </div>
                          <div className="flex space-x-1.5 items-center">
                            <span>
                              <svg
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.73636 12.2092C3.29706 12.1112 2.89189 11.9493 2.52936 11.698C1.55268 11.0206 1.02382 10.0834 1.01102 8.89479C0.989696 7.06292 0.993961 5.23105 1.00676 3.39919C1.02382 1.68235 2.23934 0.297797 3.94108 0.0379278C4.11168 0.0123668 4.29081 0.00384653 4.46567 0.00384653C7.15688 0.00384653 9.8481 -0.000413627 12.5393 0.00384653C14.2069 0.00810668 15.5717 1.10723 15.9172 2.73034C15.9684 2.97317 15.9897 3.22452 15.9897 3.47587C15.994 5.25236 15.9982 7.0331 15.994 8.80958C15.9897 10.5136 14.8637 11.8939 13.2047 12.2134C12.9701 12.2603 12.7312 12.2688 12.4924 12.2688C11.2939 12.2731 10.0997 12.2731 8.90127 12.2688C8.77332 12.2688 8.66669 12.2986 8.56007 12.3711C7.33175 13.1933 6.10343 14.0112 4.87511 14.8334C4.71731 14.9399 4.55097 15.0166 4.35478 14.9953C3.98799 14.957 3.74489 14.6843 3.74062 14.3009C3.73636 13.6747 3.74062 13.0442 3.74062 12.4179C3.73636 12.354 3.73636 12.2901 3.73636 12.2092ZM5.09262 13.0442C5.16939 12.9973 5.21631 12.9632 5.26322 12.9334C6.1802 12.3242 7.09717 11.715 8.00988 11.0973C8.20607 10.9652 8.40226 10.9098 8.63684 10.9098C9.94193 10.9141 11.2428 10.9141 12.5478 10.9098C13.742 10.9056 14.6334 10.0109 14.6334 8.81384C14.6334 7.02458 14.6334 5.23531 14.6334 3.44605C14.6334 2.26173 13.7378 1.36284 12.5521 1.36284C9.85663 1.36284 7.15688 1.36284 4.46141 1.36284C3.27147 1.36284 2.37582 2.26173 2.37582 3.45457C2.37582 5.23957 2.37582 7.02032 2.37582 8.80532C2.37582 9.9726 3.2075 10.8459 4.37611 10.9056C4.84952 10.9311 5.09262 11.1825 5.09689 11.6554C5.09262 12.1069 5.09262 12.5543 5.09262 13.0442Z"
                                  fill="#FFBB38"
                                ></path>
                                <path
                                  d="M8.48317 5.45638C7.13543 5.45638 5.79196 5.45638 4.44422 5.45638C3.93668 5.45638 3.60401 4.99628 3.77461 4.54044C3.87697 4.26353 4.09022 4.12295 4.38024 4.09313C4.43142 4.08887 4.48687 4.08887 4.53805 4.08887C7.17808 4.08887 9.81385 4.08887 12.4539 4.08887C12.569 4.08887 12.6885 4.09739 12.7994 4.13147C13.115 4.22945 13.2984 4.5447 13.2514 4.88552C13.2088 5.19651 12.9273 5.44786 12.5946 5.45212C12.2108 5.46064 11.8269 5.45212 11.4473 5.45212C10.4621 5.45638 9.47265 5.45638 8.48317 5.45638Z"
                                  fill="#FFBB38"
                                ></path>
                                <path
                                  d="M8.48349 8.17895C7.58784 8.17895 6.69646 8.18321 5.80507 8.17895C5.32739 8.17469 5.01178 7.78701 5.11841 7.3397C5.18238 7.05853 5.42975 6.84552 5.71977 6.82848C5.76242 6.82422 5.80507 6.82422 5.84772 6.82422C7.6177 6.82422 9.39194 6.82422 11.1619 6.82422C11.5586 6.82422 11.8272 7.02871 11.8955 7.37378C11.9765 7.78275 11.6822 8.16617 11.2643 8.17895C10.8889 8.19173 10.5094 8.18321 10.1298 8.18321C9.5796 8.17895 9.03368 8.17895 8.48349 8.17895Z"
                                  fill="#FFBB38"
                                ></path>
                              </svg>
                            </span>
                            <span className="text-base text-qgraytwo">
                              0 Comments
                            </span>
                          </div>
                        </div>
                        <div className="details">
                          <a
                            rel="noopener noreferrer"
                            href="/blogs/blog?slug=its-official-the-iphone-14-series-is-on-its-way-rumors-turned-out-to-be-true-the-goods-the-bads"
                          >
                            <h1 className="text-[22px] text-qblack hover:text-blue-500 font-semibold line-clamp-2 mb-1 capitalizen cursor-pointer">
                              {data?.tittle?.length > 72
                                ? data?.tittle?.slice(0, 72) + "..."
                                : data?.tittle}
                            </h1>
                          </a>
                          <div className="article-area line-clamp-2">
                            <p
                              style={{
                                marginRight: "0px",
                                marginBottom: "15px",
                                marginLeft: "0px",
                                padding: "0px",
                                textAlign: "justify",
                                color: "rgb(0, 0, 0)",
                              }}
                            ></p>

                            <p className="opacity-50">
                              {data.desciption.length > 130
                                ? data.desciption.slice(0, 130) + "..."
                                : data.desciption}
                            </p>
                          </div>
                          <div className="mt-4">
                            <ViewMoreBtn link="/blogs/blog" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
