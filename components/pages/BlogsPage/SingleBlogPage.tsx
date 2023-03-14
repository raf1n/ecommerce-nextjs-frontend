import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";

interface Props {}

const SingleBlogPage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <div className="title-area mb-[60px]">
        <div className="w-full bg-[#FFFAEF] h-[173px] py-10">
          <div className="container-x mx-auto">
            <div className="font-normal text-[13px] text-qblack mb-[23px] print:hidden">
              <span>
                <Link href="/">
                  <span className="mx-1 capitalize">Home</span>
                </Link>
                <span className="separator">/</span>
              </span>
              <span>
                <Link href="/blogs/blog?slug=its-official-the-iphone-14-series-is-on-its-way-rumors-turned-out-to-be-true-the-goods-the-bads">
                  <span className="mx-1 capitalize">
                    blogs/
                    its-official-the-iphone-14-series-is-on-its-way-rumors-turned-out-to-be-true-the-goods-the-bads
                  </span>
                </Link>
              </span>
            </div>
            <div className="flex justify-center">
              <h1 className="text-3xl font-semibold text-qblack">
                Blog Details
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="content-area w-full">
        <div className="container-x mx-auto">
          <div className="blog-article lg:flex lg:space-x-[30px] rtl:space-x-reverse mb-7">
            <div className="flex-1">
              <div className="img w-full  relative">
                <span>
                  <img
                    className="w-full"
                    src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-18-09-8292.jpg&w=1920&q=75"
                    alt=""
                  />
                </span>
              </div>
              <div className="blog pt-[24px]">
                <div className="short-data flex space-x-9 rtl:space-x-reverse items-center mb-3">
                  <div className="flex space-x-1.5 rtl:space-x-reverse items-center">
                    <span>
                      <svg
                        width="12"
                        height="15"
                        viewBox="0 0 12 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      ></svg>
                      <path
                        d="M1.761 14.9996C1.55973 14.9336 1.35152 14.8896 1.16065 14.7978C0.397206 14.4272 -0.02963 13.6273 0.00160193 12.743C0.0397743 11.6936 0.275749 10.7103 0.765049 9.7966C1.42439 8.56373 2.36829 7.65741 3.59327 7.07767C3.67309 7.04098 3.7529 7.00428 3.85007 6.95658C2.68061 5.9512 2.17396 4.67062 2.43422 3.10017C2.58691 2.18285 3.03804 1.42698 3.72514 0.847238C5.24163 -0.42967 7.34458 -0.216852 8.60773 1.1738C9.36424 2.00673 9.70779 3.01211 9.61757 4.16426C9.52734 5.31642 9.01375 6.23374 8.14619 6.94924C8.33359 7.04098 8.50363 7.11436 8.6702 7.20609C10.1485 8.006 11.1618 9.24254 11.6997 10.9011C11.9253 11.5945 12.0328 12.3137 11.9912 13.0476C11.9357 14.0163 11.2243 14.8235 10.3151 14.9703C10.2908 14.974 10.2665 14.9886 10.2387 14.9996C7.41051 14.9996 4.58575 14.9996 1.761 14.9996ZM6.00507 13.8475C7.30293 13.8475 8.60079 13.8401 9.89518 13.8512C10.5684 13.8548 10.9571 13.3338 10.9015 12.7577C10.8807 12.5486 10.8773 12.3394 10.846 12.1303C10.6309 10.6185 9.92294 9.41133 8.72225 8.5784C7.17106 7.50331 5.50883 7.3602 3.84313 8.23349C2.05944 9.16916 1.15718 10.7506 1.09125 12.8568C1.08778 13.0072 1.12595 13.1723 1.18494 13.3044C1.36193 13.6934 1.68466 13.8438 2.08026 13.8438C3.392 13.8475 4.70027 13.8475 6.00507 13.8475ZM5.99119 6.53462C7.38969 6.54195 8.53833 5.33843 8.54527 3.85238C8.55221 2.37733 7.41745 1.16647 6.00507 1.15179C4.62046 1.13344 3.45794 2.35531 3.45099 3.8377C3.44405 5.31275 4.58922 6.52728 5.99119 6.53462Z"
                        fill="#FFBB38"
                      ></path>
                    </span>
                    <span className="text-base text-qgraytwo capitalize">
                      By Admin
                    </span>
                  </div>
                  <div className="flex space-x-1.5 rtl:space-x-reverse items-center">
                    <span></span>
                    <span className="text-base text-qgraytwo capitalize">
                      0 Comments
                    </span>
                  </div>
                </div>
                <div className="details">
                  <h1 className="text-[22px] text-qblack font-semibold line-clamp-2 mb-1 capitalize">
                    It’s official! The iPhone 14 Series is on its way! Rumors
                    turned out to be true. The Goods & the Bads.
                  </h1>
                  <div className="mb-10 text-qgraytwo">
                    <p className="text-[15px] leading-8 text-qgraytwo mb-4 ">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </p>
                    <p className="text-[15px] leading-8 text-qgraytwo mb-4 ">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections 1.10.32 and 1.10.33 of "de Finibus
                      Bonorum et Malorum" (The Extremes of Good and Evil) by
                      Cicero, written in 45 BC. This book is a treatise on the
                      theory of ethics, very popular during the Renaissance. The
                      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                      comes from a line in section 1.10.32.
                    </p>
                    <p className="text-[15px] leading-8 text-qgraytwo mb-4 ">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections 1.10.32 and 1.10.33 of "de Finibus
                      Bonorum et Malorum" (The Extremes of Good and Evil) by
                      Cicero, written in 45 BC. This book is a treatise on the
                      theory of ethics, very popular during the Renaissance. The
                      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                      comes from a line in section 1.10.32.
                    </p>
                    <p className="text-[15px] leading-8 text-qgraytwo mb-4 ">
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                      are also reproduced in their exact original form,
                      accompanied by English versions from the 1914 translation
                      by H. Rackham.
                    </p>
                  </div>
                </div>
              </div>
              <div className="extra-content w-full">
                <div className="w-full h-[1px] bg-[#DCDCDC]"></div>
                <div className="comment-area w-full mt-8">
                  <div className="w-full sm:flex justify-between items-center mb-8">
                    <span className="text-2xl text-qblack">Share:</span>
                    <div className="flex space-x-2.5 rtl:space-x-reverse items-center">
                      <button></button>
                      <button></button>
                    </div>
                  </div>
                </div>
                <div className="ronin bhai"></div>
              </div>
            </div>
            <div className="lg:w-[370px] w-full">
              <div className="search-widget w-full p-[30px] bg-white mb-[30px] aos-init aos-animate">
                <h1 className="text-[22px] text-qblack font-bold mb-5">
                  Search
                </h1>
                <div className="w-full h-[1px] bg-[#DCDCDC] mb-5"></div>
                <div className="w-full h-[60px] relative">
                  <input
                    type="text"
                    className="w-full h-full bg-[#F9F3E9] focus:outline-none focus:ring-0 pl-5 pr-16 placeholder:text-qgraytwo"
                  />
                  <span className="absolute right-5 top-[17px]"></span>
                </div>
              </div>
              <div className="latest-post-widget w-full bg-white p-[30px] mb-[30px] aos-init aos-animate">
                <h1 className="text-[22px] text-qblack font-bold mb-5">
                  Latest Post
                </h1>
                <div className="w-full h-[1px] bg-[#DCDCDC] mb-5"></div>
                <ul className="flex flex-col space-y-5">
                  <li className="flex space-x-5 rtl:space-x-reverse">
                    <div className="w-[85px] h-[92px] overflow-hidden rounded relative">
                      <span>
                        <img
                          className="h-full"
                          src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-09-44-5529.jpg&w=1920&q=75"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1 h-full flex flex-col justify-between">
                      <a href="/blogs/blog?slug=businesstoconsumer-that-involves-selling-fight-products-and-services">
                        <p className="text-[18px] text-qblack leading-7 cursor-pointer mb-3">
                          Business-to-consumer that involves selling fight
                          products and services
                        </p>
                      </a>
                      <div className="flex space-x-3 rtl:space-x-reverse items-center">
                        <span></span>
                        <span className="text-sm text-qgraytwo">
                          22 Sep 2022
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="flex space-x-5 rtl:space-x-reverse">
                    <div className="w-[85px] h-[92px] overflow-hidden rounded relative">
                      <span>
                        <img
                          className="h-full"
                          src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-09-44-5529.jpg&w=1920&q=75"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1 h-full flex flex-col justify-between">
                      <a href="/blogs/blog?slug=businesstoconsumer-that-involves-selling-fight-products-and-services">
                        <p className="text-[18px] text-qblack leading-7 cursor-pointer mb-3">
                          Business-to-consumer that involves selling fight
                          products and services
                        </p>
                      </a>
                      <div className="flex space-x-3 rtl:space-x-reverse items-center">
                        <span></span>
                        <span className="text-sm text-qgraytwo">
                          22 Sep 2022
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="flex space-x-5 rtl:space-x-reverse">
                    <div className="w-[85px] h-[92px] overflow-hidden rounded relative">
                      <span>
                        <img
                          className="h-full"
                          src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-09-44-5529.jpg&w=1920&q=75"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1 h-full flex flex-col justify-between">
                      <a href="/blogs/blog?slug=businesstoconsumer-that-involves-selling-fight-products-and-services">
                        <p className="text-[18px] text-qblack leading-7 cursor-pointer mb-3">
                          Business-to-consumer that involves selling fight
                          products and services
                        </p>
                      </a>
                      <div className="flex space-x-3 rtl:space-x-reverse items-center">
                        <span></span>
                        <span className="text-sm text-qgraytwo">
                          22 Sep 2022
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="flex space-x-5 rtl:space-x-reverse">
                    <div className="w-[85px] h-[92px] overflow-hidden rounded relative">
                      <span>
                        <img
                          className="h-full"
                          src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-09-44-5529.jpg&w=1920&q=75"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1 h-full flex flex-col justify-between">
                      <a href="/blogs/blog?slug=businesstoconsumer-that-involves-selling-fight-products-and-services">
                        <p className="text-[18px] text-qblack leading-7 cursor-pointer mb-3">
                          Business-to-consumer that involves selling fight
                          products and services
                        </p>
                      </a>
                      <div className="flex space-x-3 rtl:space-x-reverse items-center">
                        <span></span>
                        <span className="text-sm text-qgraytwo">
                          22 Sep 2022
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="categories-widget w-full bg-white p-[30px] mb-[30px] aos-init aos-animate">
                <h1 className="text-[22px] text-qblack font-bold mb-5">
                  Categories
                </h1>
                <div className="w-full h-[1px] bg-[#DCDCDC] mb-5"></div>
                <ul className="flex flex-col space-y-5">
                  <li className="flex justify-between items-center group">
                    <a href="/category-by-blogs?category=development">
                      <span className="text-base text-qgraytwo group-hover:text-qyellow cursor-pointer">
                        Development
                      </span>
                    </a>
                  </li>
                  <li className="flex justify-between items-center group">
                    <a href="/category-by-blogs?category=development">
                      <span className="text-base text-qgraytwo group-hover:text-qyellow cursor-pointer">
                        Guide
                      </span>
                    </a>
                  </li>
                  <li className="flex justify-between items-center group">
                    <a href="/category-by-blogs?category=development">
                      <span className="text-base text-qgraytwo group-hover:text-qyellow cursor-pointer">
                        Inspiration
                      </span>
                    </a>
                  </li>
                  <li className="flex justify-between items-center group">
                    <a href="/category-by-blogs?category=development">
                      <span className="text-base text-qgraytwo group-hover:text-qyellow cursor-pointer">
                        Latest News
                      </span>
                    </a>
                  </li>
                  <li className="flex justify-between items-center group">
                    <a href="/category-by-blogs?category=development">
                      <span className="text-base text-qgraytwo group-hover:text-qyellow cursor-pointer">
                        Revenue
                      </span>
                    </a>
                  </li>
                  <li className="flex justify-between items-center group">
                    <a href="/category-by-blogs?category=development">
                      <span className="text-base text-qgraytwo group-hover:text-qyellow cursor-pointer">
                        Development
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full h-[358px] aos-init aos-animate">
                <div className="w-full h-full p-[30px] bg-black bg-opacity-75 flex flex-col justify-between">
                  <div>
                    <h1 className="text-[22px] text-white font-bold mb-5">
                      Our Newsletter
                    </h1>
                    <div className="w-full h-[1px] bg-[#615B9C] mb-5"></div>
                    <p className="text-base text-white leading-[26px] line-clamp-2">
                      Follow our newsletter to stay updated about us.
                    </p>
                  </div>
                  <div>
                    <div className="w-full mb-3.5">
                      <input
                        placeholder="Enter Your Email Address"
                        type="text"
                        className="w-full h-[60px] bg-[#ECEAEC] pl-5 rtl:pr-5 focus:outline-none focus:ring-0 placeholder:text-[#9A9A9A]"
                      />
                    </div>
                    <button className="w-full h-[60px]">
                      <span
                        style={{ fontSize: "18px" }}
                        className="yellow-btn w-full h-full text-[18px]"
                      >
                        Subscribe
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
