import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import PageHeader from "../../shared/SharedPageHeader/PageHeader";

interface Props {}

const CheckoutPage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <div className="w-full min-h-screen  pt-0 pb-0">
        <div className="checkout-page-wrapper w-full bg-white pb-[60px]">
          <div className="w-full mb-5">
            <PageHeader
              slug="checkout"
              link="/checkout"
              title="Check out"></PageHeader>
          </div>
          <div className="checkout-main-content w-full">
            <div className="container-x mx-auto">
              <div className="w-full lg:flex lg:space-x-[30px]">
                <div className="lg:w-4/6 w-full">
                  <h1 className="sm:text-2xl text-xl text-qblack font-medium mt-5 mb-5">
                    Addresses
                  </h1>
                  <div className="addresses-widget w-full">
                    <div className="sm:flex justify-between items-center w-full mb-5">
                      <div className="bg-[#FFFAEF] border border-qyellow rounded p-2">
                        <button
                          type="button"
                          className="px-4 py-3 text-md font-medium rounded-md  text-qblack bg-qyellow ">
                          Billing Address
                        </button>
                        <button
                          type="button"
                          className="px-4 py-3 text-md font-medium rounded-md ml-1 text-qyellow ">
                          Shipping Address
                        </button>
                      </div>
                      <button
                        type="button"
                        className="w-[100px] h-[40px] mt-2 sm:mt-0 border border-qblack hover:bg-qblack hover:text-white transition-all duration-300 ease-in-out">
                        <span className="text-sm font-semibold">Add New</span>
                      </button>
                    </div>
                    <div
                      data-aos="zoom-in"
                      className="grid sm:grid-cols-2 grid-cols-1 gap-3 aos-init aos-animate">
                      <div className="w-full p-5 border cursor-pointer relative border-qyellow bg-[#FFFAEF]">
                        <div className="flex justify-between items-center">
                          <p className="title text-[22px] font-semibold">
                            Address #1
                          </p>
                          <button
                            type="button"
                            className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center">
                            <svg
                              width="17"
                              height="19"
                              viewBox="0 0 17 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M15.7768 5.95215C15.6991 6.9104 15.6242 7.84603 15.5471 8.78237C15.3691 10.9285 15.1917 13.0747 15.0108 15.2209C14.9493 15.9473 14.9097 16.6773 14.8065 17.3988C14.6963 18.1726 14.0716 18.7161 13.2929 18.7196C10.3842 18.7323 7.47624 18.7337 4.56757 18.7189C3.70473 18.7146 3.08639 18.0794 3.00795 17.155C2.78181 14.493 2.57052 11.8302 2.35145 9.16821C2.2716 8.19442 2.1875 7.22133 2.10623 6.24824C2.09846 6.15638 2.09563 6.06451 2.08998 5.95286C6.65579 5.95215 11.2061 5.95215 15.7768 5.95215ZM5.25375 8.05803C5.25234 8.05803 5.25163 8.05803 5.25022 8.05803C5.27566 8.4573 5.3011 8.85657 5.32583 9.25584C5.46717 11.5228 5.60709 13.7891 5.75125 16.0561C5.77245 16.3897 5.99081 16.6038 6.28196 16.6024C6.58724 16.601 6.80066 16.3636 6.8056 16.0159C6.80702 15.9339 6.80136 15.8512 6.79571 15.7692C6.65367 13.4789 6.51304 11.1886 6.36888 8.89826C6.33849 8.41702 6.31164 7.93507 6.26146 7.45524C6.22966 7.1549 6.0318 6.99732 5.73076 6.99802C5.44526 6.99873 5.24033 7.2185 5.23043 7.52873C5.22619 7.7054 5.24598 7.88207 5.25375 8.05803ZM12.6102 8.05521C12.6088 8.05521 12.6074 8.05521 12.606 8.05521C12.6152 7.89055 12.6321 7.7259 12.6307 7.56195C12.6286 7.24465 12.4399 7.02417 12.1622 6.99873C11.888 6.97329 11.6484 7.16268 11.5961 7.46443C11.5665 7.63756 11.5615 7.81494 11.5502 7.9909C11.4626 9.38799 11.3749 10.7851 11.2887 12.1822C11.2103 13.4499 11.1276 14.7184 11.0576 15.9869C11.0379 16.3431 11.2463 16.5819 11.5495 16.6003C11.8562 16.6194 12.088 16.4017 12.1099 16.0505C12.2788 13.3856 12.4441 10.7208 12.6102 8.05521ZM9.45916 11.814C9.45916 10.4727 9.45986 9.13147 9.45916 7.79091C9.45916 7.25101 9.28603 6.99449 8.92845 6.99661C8.56805 6.99802 8.40198 7.24819 8.40198 7.79586C8.40127 10.4664 8.40127 13.1369 8.40268 15.8074C8.40268 15.948 8.37088 16.1289 8.44296 16.2194C8.56946 16.3763 8.76591 16.5748 8.93198 16.5741C9.09805 16.5734 9.29309 16.3727 9.41746 16.2151C9.48955 16.124 9.45704 15.9431 9.45704 15.8032C9.46057 14.4725 9.45916 13.1432 9.45916 11.814Z"
                                fill="#EB5757"></path>
                              <path
                                d="M5.20143 2.75031C5.21486 2.49449 5.21839 2.2945 5.23747 2.09593C5.31733 1.25923 5.93496 0.648664 6.77449 0.637357C8.21115 0.618277 9.64923 0.618277 11.0859 0.637357C11.9254 0.648664 12.5438 1.25852 12.6236 2.09522C12.6427 2.2938 12.6462 2.49379 12.6582 2.73335C12.7854 2.739 12.9084 2.74889 13.0314 2.7496C13.9267 2.75101 14.8221 2.74677 15.7174 2.75172C16.4086 2.75525 16.8757 3.18774 16.875 3.81244C16.8742 4.43643 16.4078 4.87103 15.716 4.87174C11.1926 4.87386 6.66849 4.87386 2.14508 4.87174C1.45324 4.87103 0.986135 4.43713 0.985429 3.81314C0.984722 3.18915 1.45183 2.75525 2.14296 2.75243C3.15421 2.74677 4.16545 2.75031 5.20143 2.75031ZM11.5799 2.73335C11.5799 2.59625 11.5806 2.49096 11.5799 2.38637C11.5749 1.86626 11.4018 1.69313 10.876 1.69242C9.55878 1.69101 8.24225 1.68959 6.92501 1.69313C6.48546 1.69454 6.30031 1.87545 6.28265 2.3051C6.27699 2.4422 6.28194 2.58 6.28194 2.73335C8.05851 2.73335 9.7941 2.73335 11.5799 2.73335Z"
                                fill="#EB5757"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="mt-5">
                          <table>
                            <tbody>
                              <tr className="flex mb-3">
                                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                  Name:
                                </td>
                                <td className="text-base text-qblack line-clamp-1 font-medium">
                                  Md Iqbal Hasan Rumon
                                </td>
                              </tr>
                              <tr className="flex mb-3">
                                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                  Email:
                                </td>
                                <td className="text-base text-qblack line-clamp-1 font-medium">
                                  iamhasan9501@gmail.com
                                </td>
                              </tr>
                              <tr className="flex mb-3">
                                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                  phone:
                                </td>
                                <td className="text-base text-qblack line-clamp-1 font-medium">
                                  01518618789
                                </td>
                              </tr>
                              <tr className="flex mb-3">
                                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                  Country:
                                </td>
                                <td className="text-base text-qblack line-clamp-1 font-medium">
                                  Bangladesh
                                </td>
                              </tr>
                              <tr className="flex mb-3">
                                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                  State:
                                </td>
                                <td className="text-base text-qblack line-clamp-1 font-medium">
                                  Chattogram
                                </td>
                              </tr>
                              <tr className="flex mb-3">
                                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                  City:
                                </td>
                                <td className="text-base text-qblack line-clamp-1 font-medium">
                                  Kazir Dewori
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <span className="text-qblack bg-qyellow px-2 text-sm absolute right-2 -top-2 font-medium">
                          Selected
                        </span>
                      </div>
                      <div className="w-full p-5 border cursor-pointer relative border-transparent bg-primarygray">
                        <div className="flex justify-between items-center">
                          <p className="title text-[22px] font-semibold">
                            Address #2
                          </p>
                          <button
                            type="button"
                            className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center">
                            <svg
                              width="17"
                              height="19"
                              viewBox="0 0 17 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M15.7768 5.95215C15.6991 6.9104 15.6242 7.84603 15.5471 8.78237C15.3691 10.9285 15.1917 13.0747 15.0108 15.2209C14.9493 15.9473 14.9097 16.6773 14.8065 17.3988C14.6963 18.1726 14.0716 18.7161 13.2929 18.7196C10.3842 18.7323 7.47624 18.7337 4.56757 18.7189C3.70473 18.7146 3.08639 18.0794 3.00795 17.155C2.78181 14.493 2.57052 11.8302 2.35145 9.16821C2.2716 8.19442 2.1875 7.22133 2.10623 6.24824C2.09846 6.15638 2.09563 6.06451 2.08998 5.95286C6.65579 5.95215 11.2061 5.95215 15.7768 5.95215ZM5.25375 8.05803C5.25234 8.05803 5.25163 8.05803 5.25022 8.05803C5.27566 8.4573 5.3011 8.85657 5.32583 9.25584C5.46717 11.5228 5.60709 13.7891 5.75125 16.0561C5.77245 16.3897 5.99081 16.6038 6.28196 16.6024C6.58724 16.601 6.80066 16.3636 6.8056 16.0159C6.80702 15.9339 6.80136 15.8512 6.79571 15.7692C6.65367 13.4789 6.51304 11.1886 6.36888 8.89826C6.33849 8.41702 6.31164 7.93507 6.26146 7.45524C6.22966 7.1549 6.0318 6.99732 5.73076 6.99802C5.44526 6.99873 5.24033 7.2185 5.23043 7.52873C5.22619 7.7054 5.24598 7.88207 5.25375 8.05803ZM12.6102 8.05521C12.6088 8.05521 12.6074 8.05521 12.606 8.05521C12.6152 7.89055 12.6321 7.7259 12.6307 7.56195C12.6286 7.24465 12.4399 7.02417 12.1622 6.99873C11.888 6.97329 11.6484 7.16268 11.5961 7.46443C11.5665 7.63756 11.5615 7.81494 11.5502 7.9909C11.4626 9.38799 11.3749 10.7851 11.2887 12.1822C11.2103 13.4499 11.1276 14.7184 11.0576 15.9869C11.0379 16.3431 11.2463 16.5819 11.5495 16.6003C11.8562 16.6194 12.088 16.4017 12.1099 16.0505C12.2788 13.3856 12.4441 10.7208 12.6102 8.05521ZM9.45916 11.814C9.45916 10.4727 9.45986 9.13147 9.45916 7.79091C9.45916 7.25101 9.28603 6.99449 8.92845 6.99661C8.56805 6.99802 8.40198 7.24819 8.40198 7.79586C8.40127 10.4664 8.40127 13.1369 8.40268 15.8074C8.40268 15.948 8.37088 16.1289 8.44296 16.2194C8.56946 16.3763 8.76591 16.5748 8.93198 16.5741C9.09805 16.5734 9.29309 16.3727 9.41746 16.2151C9.48955 16.124 9.45704 15.9431 9.45704 15.8032C9.46057 14.4725 9.45916 13.1432 9.45916 11.814Z"
                                fill="#EB5757"></path>
                              <path
                                d="M5.20143 2.75031C5.21486 2.49449 5.21839 2.2945 5.23747 2.09593C5.31733 1.25923 5.93496 0.648664 6.77449 0.637357C8.21115 0.618277 9.64923 0.618277 11.0859 0.637357C11.9254 0.648664 12.5438 1.25852 12.6236 2.09522C12.6427 2.2938 12.6462 2.49379 12.6582 2.73335C12.7854 2.739 12.9084 2.74889 13.0314 2.7496C13.9267 2.75101 14.8221 2.74677 15.7174 2.75172C16.4086 2.75525 16.8757 3.18774 16.875 3.81244C16.8742 4.43643 16.4078 4.87103 15.716 4.87174C11.1926 4.87386 6.66849 4.87386 2.14508 4.87174C1.45324 4.87103 0.986135 4.43713 0.985429 3.81314C0.984722 3.18915 1.45183 2.75525 2.14296 2.75243C3.15421 2.74677 4.16545 2.75031 5.20143 2.75031ZM11.5799 2.73335C11.5799 2.59625 11.5806 2.49096 11.5799 2.38637C11.5749 1.86626 11.4018 1.69313 10.876 1.69242C9.55878 1.69101 8.24225 1.68959 6.92501 1.69313C6.48546 1.69454 6.30031 1.87545 6.28265 2.3051C6.27699 2.4422 6.28194 2.58 6.28194 2.73335C8.05851 2.73335 9.7941 2.73335 11.5799 2.73335Z"
                                fill="#EB5757"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="mt-5">
                          <table>
                            <tbody>
                              <tr className="flex mb-3">
                                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                  Name:
                                </td>
                                <td className="text-base text-qblack line-clamp-1 font-medium">
                                  Md Iqbal Hasan
                                </td>
                              </tr>
                              <tr className="flex mb-3">
                                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                  Email:
                                </td>
                                <td className="text-base text-qblack line-clamp-1 font-medium">
                                  iqbal@gmail.com
                                </td>
                              </tr>
                              <tr className="flex mb-3">
                                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                  phone:
                                </td>
                                <td className="text-base text-qblack line-clamp-1 font-medium">
                                  01834093014
                                </td>
                              </tr>
                              <tr className="flex mb-3">
                                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                  Country:
                                </td>
                                <td className="text-base text-qblack line-clamp-1 font-medium">
                                  Bangladesh
                                </td>
                              </tr>
                              <tr className="flex mb-3">
                                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                  State:
                                </td>
                                <td className="text-base text-qblack line-clamp-1 font-medium">
                                  Chattogram
                                </td>
                              </tr>
                              <tr className="flex mb-3">
                                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                  City:
                                </td>
                                <td className="text-base text-qblack line-clamp-1 font-medium">
                                  Muradpur
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-10">
                    <h1 className="sm:text-2xl text-xl text-qblack font-medium mt-5 mb-5">
                      Apply Coupon
                    </h1>
                    <div className="discount-code w-full mb-5 sm:mb-0 h-[50px] flex ">
                      <div className="flex-1 h-full">
                        <div className="input-com w-full h-full">
                          <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
                            <input
                              placeholder="Discount Code"
                              className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none "
                              type="text"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="w-[90px] h-[50px] black-btn">
                        <span className="text-sm font-semibold">Apply</span>
                      </button>
                    </div>
                  </div>
                  <h1 className="sm:text-2xl text-xl text-qblack font-medium mt-5 mb-5">
                    Order Summary
                  </h1>
                  <div className="w-full px-10 py-[30px] border border-[#EDEDED]">
                    <div className="sub-total mb-6">
                      <div className=" flex justify-between mb-5">
                        <p className="text-[13px] font-medium text-qblack uppercase">
                          Product
                        </p>
                        <p className="text-[13px]  text-qblack uppercase font-bold">
                          Total
                        </p>
                      </div>
                      <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                    </div>
                    <div className="product-list w-full mb-[30px]">
                      <ul className="flex flex-col space-y-5">
                        <li>
                          <div className="flex justify-between items-center">
                            <div>
                              <h4
                                title="Apple watch pro"
                                className="text-[15px] text-qblack line-clamp-1 mb-2.5">
                                Apple watch pro{" "}
                                <sup className="text-[13px] text-qgray ml-2 mt-2">
                                  x1
                                </sup>
                              </h4>
                              <p className="text-[13px] text-qgray line-clamp-1"></p>
                            </div>
                            <div>
                              <span className="text-[15px] text-qblack font-medium">
                                $40000.00
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center">
                            <div>
                              <h4
                                title="Samsung Galaxy A52 (8/128 GB)"
                                className="text-[15px] text-qblack line-clamp-1 mb-2.5">
                                Samsung Galaxy A52{" "}
                                <sup className="text-[13px] text-qgray ml-2 mt-2">
                                  x1
                                </sup>
                              </h4>
                              <p className="text-[13px] text-qgray line-clamp-1"></p>
                            </div>
                            <div>
                              <span className="text-[15px] text-qblack font-medium">
                                $9.99
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center">
                            <div>
                              <h4
                                title="Samsung Galaxy A52 (8/128 GB)"
                                className="text-[15px] text-qblack line-clamp-1 mb-2.5">
                                Samsung Galaxy A52{" "}
                                <sup className="text-[13px] text-qgray ml-2 mt-2">
                                  x1
                                </sup>
                              </h4>
                              <p className="text-[13px] text-qgray line-clamp-1"></p>
                            </div>
                            <div>
                              <span className="text-[15px] text-qblack font-medium">
                                $9.99
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center">
                            <div>
                              <h4
                                title="Samsung Galaxy A52 (8/128 GB)"
                                className="text-[15px] text-qblack line-clamp-1 mb-2.5">
                                Samsung Galaxy A52{" "}
                                <sup className="text-[13px] text-qgray ml-2 mt-2">
                                  x1
                                </sup>
                              </h4>
                              <p className="text-[13px] text-qgray line-clamp-1"></p>
                            </div>
                            <div>
                              <span className="text-[15px] text-qblack font-medium">
                                $9.99
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center">
                            <div>
                              <h4
                                title="Samsung Galaxy A52 (8/128 GB)"
                                className="text-[15px] text-qblack line-clamp-1 mb-2.5">
                                Samsung Galaxy A52{" "}
                                <sup className="text-[13px] text-qgray ml-2 mt-2">
                                  x1
                                </sup>
                              </h4>
                              <p className="text-[13px] text-qgray line-clamp-1"></p>
                            </div>
                            <div>
                              <span className="text-[15px] text-qblack font-medium">
                                $9.99
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center">
                            <div>
                              <h4
                                title="Samsung Galaxy A52 (8/128 GB)"
                                className="text-[15px] text-qblack line-clamp-1 mb-2.5">
                                Samsung Galaxy A52{" "}
                                <sup className="text-[13px] text-qgray ml-2 mt-2">
                                  x1
                                </sup>
                              </h4>
                              <p className="text-[13px] text-qgray line-clamp-1"></p>
                            </div>
                            <div>
                              <span className="text-[15px] text-qblack font-medium">
                                $9.99
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                    <div className="mt-[20px]">
                      <div className=" flex justify-between mb-5">
                        <p className="text-[13px] text-qblack uppercase font-bold">
                          SUBTOTAL
                        </p>
                        <p className="text-[15px] font-bold text-qblack uppercase">
                          $40049.95
                        </p>
                      </div>
                      <div className=" flex justify-between mb-5">
                        <p className="text-[13px] text-qblack uppercase font-bold">
                          Discount coupon (-)
                        </p>
                        <p className="text-[15px] font-bold text-qblack uppercase">
                          $0.00
                        </p>
                      </div>
                    </div>
                    <div className="shipping mb-6 mt-6">
                      <span className="text-[15px] font-medium text-qblack mb-[18px] block">
                        Shipping (+)
                      </span>
                      <div className="flex flex-col space-y-2.5">
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                    <div className="mt-[30px]">
                      <div className=" flex justify-between mb-5">
                        <p className="text-2xl font-medium text-qblack capitalize">
                          Total
                        </p>
                        <p className="text-2xl font-medium text-qred">
                          $40049.95
                        </p>
                      </div>
                    </div>
                    <div className="mt-[30px] mb-5 relative">
                      <div className="w-full">
                        <div className="flex flex-col space-y-3">
                          <div
                            className="payment-item relative bg-[#F8F8F8] text-center w-full h-[50px] text-sm text-qgreen flex justify-center items-center px-3 uppercase cursor-pointer
                              border border-gray-200
                              ">
                            <div className="w-full">
                              <span className="text-qblack font-bold text-base">
                                Cash On Delivery
                              </span>
                            </div>
                          </div>
                          <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
                            <div className="w-full flex justify-center">
                              <span>
                                <svg
                                  viewBox="0 0 60 25"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="60"
                                  height="25"
                                  className="UserLogo variant-- ">
                                  <title>Stripe logo</title>
                                  <path
                                    fill="var(--userLogoColor, #0A2540)"
                                    d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z"
                                    fill-rule="evenodd"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
                            <div className="w-full flex justify-center">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="#072654"
                                  width="100"
                                  height="50"
                                  viewBox=".8 .48 1894.74 400.27">
                                  <path
                                    d="m122.63 105.7-15.75 57.97 90.15-58.3-58.96 219.98 59.88.05 87.1-324.92"
                                    fill="#3395ff"></path>
                                  <path d="m25.6 232.92-24.8 92.48h122.73l50.22-188.13zm426.32-81.42c-3 11.15-8.78 19.34-17.4 24.57-8.6 5.22-20.67 7.84-36.25 7.84h-49.5l17.38-64.8h49.5c15.56 0 26.25 2.6 32.05 7.9s7.2 13.4 4.22 24.6m51.25-1.4c6.3-23.4 3.7-41.4-7.82-54-11.5-12.5-31.68-18.8-60.48-18.8h-110.47l-66.5 248.1h53.67l26.8-100h35.2c7.9 0 14.12 1.3 18.66 3.8 4.55 2.6 7.22 7.1 8.04 13.6l9.58 82.6h57.5l-9.32-77c-1.9-17.2-9.77-27.3-23.6-30.3 17.63-5.1 32.4-13.6 44.3-25.4a92.6 92.6 0 0 0 24.44-42.5m130.46 86.4c-4.5 16.8-11.4 29.5-20.73 38.4-9.34 8.9-20.5 13.3-33.52 13.3-13.26 0-22.25-4.3-27-13-4.76-8.7-4.92-21.3-.5-37.8s11.47-29.4 21.17-38.7 21.04-13.95 34.06-13.95c13 0 21.9 4.5 26.4 13.43 4.6 8.97 4.7 21.8.2 38.5zm23.52-87.8-6.72 25.1c-2.9-9-8.53-16.2-16.85-21.6-8.34-5.3-18.66-8-30.97-8-15.1 0-29.6 3.9-43.5 11.7s-26.1 18.8-36.5 33-18 30.3-22.9 48.4c-4.8 18.2-5.8 34.1-2.9 47.9 3 13.9 9.3 24.5 19 31.9 9.8 7.5 22.3 11.2 37.6 11.2a82.4 82.4 0 0 0 35.2-7.7 82.11 82.11 0 0 0 28.4-21.2l-7 26.16h51.9l47.39-176.77h-52zm238.65 0h-150.93l-10.55 39.4h87.82l-116.1 100.3-9.92 37h155.8l10.55-39.4h-94.1l117.88-101.8m142.4 52c-4.67 17.4-11.6 30.48-20.75 39-9.15 8.6-20.23 12.9-33.24 12.9-27.2 0-36.14-17.3-26.86-51.9 4.6-17.2 11.56-30.13 20.86-38.84 9.3-8.74 20.57-13.1 33.82-13.1 13 0 21.78 4.33 26.3 13.05 4.52 8.7 4.48 21.67-.13 38.87m30.38-80.83c-11.95-7.44-27.2-11.16-45.8-11.16-18.83 0-36.26 3.7-52.3 11.1a113.09 113.09 0 0 0 -41 32.06c-11.3 13.9-19.43 30.2-24.42 48.8-4.9 18.53-5.5 34.8-1.7 48.73 3.8 13.9 11.8 24.6 23.8 32 12.1 7.46 27.5 11.17 46.4 11.17 18.6 0 35.9-3.74 51.8-11.18 15.9-7.48 29.5-18.1 40.8-32.1 11.3-13.94 19.4-30.2 24.4-48.8s5.6-34.84 1.8-48.8c-3.8-13.9-11.7-24.6-23.6-32.05m185.1 40.8 13.3-48.1c-4.5-2.3-10.4-3.5-17.8-3.5-11.9 0-23.3 2.94-34.3 8.9-9.46 5.06-17.5 12.2-24.3 21.14l6.9-25.9-15.07.06h-37l-47.7 176.7h52.63l24.75-92.37c3.6-13.43 10.08-24 19.43-31.5 9.3-7.53 20.9-11.3 34.9-11.3 8.6 0 16.6 1.97 24.2 5.9m146.5 41.1c-4.5 16.5-11.3 29.1-20.6 37.8-9.3 8.74-20.5 13.1-33.5 13.1s-21.9-4.4-26.6-13.2c-4.8-8.85-4.9-21.6-.4-38.36 4.5-16.75 11.4-29.6 20.9-38.5 9.5-8.97 20.7-13.45 33.7-13.45 12.8 0 21.4 4.6 26 13.9s4.7 22.2.28 38.7m36.8-81.4c-9.75-7.8-22.2-11.7-37.3-11.7-13.23 0-25.84 3-37.8 9.06-11.95 6.05-21.65 14.3-29.1 24.74l.18-1.2 8.83-28.1h-51.4l-13.1 48.9-.4 1.7-54 201.44h52.7l27.2-101.4c2.7 9.02 8.2 16.1 16.6 21.22 8.4 5.1 18.77 7.63 31.1 7.63 15.3 0 29.9-3.7 43.75-11.1 13.9-7.42 25.9-18.1 36.1-31.9s17.77-29.8 22.6-47.9c4.9-18.13 5.9-34.3 3.1-48.45-2.85-14.17-9.16-25.14-18.9-32.9m174.65 80.65c-4.5 16.7-11.4 29.5-20.7 38.3-9.3 8.86-20.5 13.27-33.5 13.27-13.3 0-22.3-4.3-27-13-4.8-8.7-4.9-21.3-.5-37.8s11.42-29.4 21.12-38.7 21.05-13.94 34.07-13.94c13 0 21.8 4.5 26.4 13.4 4.6 8.93 4.63 21.76.15 38.5zm23.5-87.85-6.73 25.1c-2.9-9.05-8.5-16.25-16.8-21.6-8.4-5.34-18.7-8-31-8-15.1 0-29.68 3.9-43.6 11.7-13.9 7.8-26.1 18.74-36.5 32.9s-18 30.3-22.9 48.4c-4.85 18.17-5.8 34.1-2.9 47.96 2.93 13.8 9.24 24.46 19 31.9 9.74 7.4 22.3 11.14 37.6 11.14 12.3 0 24.05-2.56 35.2-7.7a82.3 82.3 0 0 0 28.33-21.23l-7 26.18h51.9l47.38-176.7h-51.9zm269.87.06.03-.05h-31.9c-1.02 0-1.92.05-2.85.07h-16.55l-8.5 11.8-2.1 2.8-.9 1.4-67.25 93.68-13.9-109.7h-55.08l27.9 166.7-61.6 85.3h54.9l14.9-21.13c.42-.62.8-1.14 1.3-1.8l17.4-24.7.5-.7 77.93-110.5 65.7-93 .1-.06h-.03z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
                            <div className="w-full flex justify-center">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="60"
                                  viewBox="-135.4 209.8 604.3 125.4"
                                  width="120">
                                  <path
                                    d="m67.2 244.4h.2c1.2 0 1.9.9 1.9 2.1v53.9c0 .9-.7 1.9-1.9 1.9-.9 0-1.9-.7-1.9-1.9v-54.1c0-1 .7-1.9 1.7-1.9zm-51.3 2.8h35.3c1.2 0 1.9 1.2 1.9 2.1s-.7 1.9-1.9 1.9h-33.4v22.5h30.2c.9 0 1.9.7 1.9 1.9 0 .9-.7 1.9-1.9 1.9h-29.9v23.2c-.2 1.2-1.2 2.1-2.3 2.1-1.2 0-2.1-.9-2.1-2.1v-51.3h.2a2 2 0 0 1 2-2.2zm102.5 16.7c0-1.2-.9-1.9-1.9-1.9-1.2 0-1.9.9-1.9 1.9v22.5c0 7.7-6.3 13.7-14 13.5-8.2 0-12.9-5.3-12.9-13.7v-22.3c0-1.2-.9-1.9-1.9-1.9-.9 0-1.9.9-1.9 1.9v23c0 9.5 6.1 16.5 16.1 16.5 6.1.2 11.9-3 14.7-8.4v5.8c0 1.2.9 1.9 1.9 1.9 1.2 0 1.9-.9 1.9-1.9h-.2v-36.9zm35.5.3c0 .9-.9 1.6-1.9 1.6h-12.9v25.8c0 5.8 3.3 7.9 8.2 7.9 1.6 0 3.3-.2 4.7-.7.9 0 1.6.7 1.6 1.6 0 .7-.5 1.4-1.2 1.6-1.9.7-4 .9-5.8.9-6.1 0-11.2-3.5-11.2-10.9v-26.2h-4.4c-.9 0-1.9-.9-1.9-1.9 0-.9.9-1.6 1.9-1.6h4.4v-11.1c0-.9.7-1.9 1.6-1.9h.2c.9 0 1.9.9 1.9 1.9v11.1h12.9c1 0 1.9.9 1.9 1.9zm30 1.6c.9 0 1.9-.7 1.9-1.6s-.9-1.9-1.9-1.9h-12.9v-11.1c0-.9-.9-1.9-1.9-1.9h-.2c-.9 0-1.6.9-1.6 1.9v11.1h-4.4c-.9 0-1.9.7-1.9 1.6s.9 1.9 1.9 1.9h4.4v26.2c0 7.4 5.1 10.9 11.2 10.9 1.9 0 4-.2 5.8-.9.7-.2 1.2-.9 1.2-1.6 0-.9-.7-1.6-1.6-1.6-1.4.5-3 .7-4.7.7-4.9 0-8.2-2.1-8.2-7.9v-25.8zm8.9 16.5c0-11.8 8.2-21.1 19.2-21.1 11.5 0 18.7 9.3 18.7 21.1 0 .9-.9 1.9-1.9 1.9h-31.8c.7 10 8 15.8 15.9 15.8 4.9 0 9.8-2.1 13.1-5.6.2-.2.7-.5 1.2-.5.9 0 1.9.9 1.9 1.9 0 .5-.2.9-.7 1.4-4 4.4-9.8 6.7-15.7 6.5-10.8 0-19.9-8.4-19.9-21.1zm53.1-8.4c2.6-6.7 8.9-11.6 16.1-12.1 1.2 0 2.1.9 2.1 2.3 0 .9-.7 2.1-1.9 2.1h-.2c-8.7.9-16.1 7.2-16.1 20.2v14.9c-.2 1.2-.9 1.9-2.1 1.9-.9 0-1.9-.9-1.9-1.9v-37.2c.2-1.2.9-1.9 2.1-1.9.9 0 1.9.9 1.9 1.9zm79.9-14.2c-2.8 0-5.1 1.9-5.8 4.6l-6.8 21.6-6.8-21.6c-.7-2.8-3.3-4.9-6.3-4.9h-.7c-3 0-5.6 1.9-6.3 4.9l-6.8 21.4-6.5-21.6c-.7-2.6-3-4.6-5.8-4.6h-.2c-3 0-5.4 2.6-5.4 5.6 0 .9.2 1.9.5 2.8l10.5 30c.7 3 3.3 5.1 6.5 5.3h.5c3 0 5.6-2.1 6.5-5.1l6.8-21.4 6.8 21.4c.7 3 3.5 5.1 6.5 5.1h.5c3.3 0 6.1-2.1 6.8-5.3l10.5-30.2c.2-.7.5-1.6.5-2.3v-.2c-.1-3.1-2.4-5.5-5.5-5.5zm16.4 2.1c4.4-1.4 8.9-2.3 13.6-2.1 6.5 0 11.2 1.9 14.7 4.9 3.3 3.7 4.9 8.6 4.7 13.5v19c0 3.3-2.6 5.8-5.8 5.8-3 0-5.6-2.1-5.8-5.1-3.3 3.5-8 5.6-12.9 5.3-7.7 0-14.5-4.6-14.5-13 0-9.3 7-13.7 17.1-13.7 3.5 0 7 .5 10.3 1.6v-.7c0-5.1-3-7.7-9.1-7.7-2.8 0-5.6.2-8.4 1.2-.5.2-1.2.2-1.6.2-2.8.2-5.1-1.9-5.1-4.6-.2-2 .9-3.9 2.8-4.6zm69 1.9c.7-2.6 3-4.2 5.6-4.2 3.3 0 5.8 2.6 5.8 5.6v.2c0 .9-.2 1.9-.7 2.8l-12.6 30c-1.2 3-4 4.9-7 5.1h-.7c-3.3-.2-5.8-2.3-6.8-5.3l-13.1-30c-.5-.9-.7-1.9-.7-2.8.2-3.3 2.8-5.6 5.8-5.6 2.8 0 5.1 1.9 5.8 4.4l9.1 24.4zm16.2 19.5c.5 11.6 10.5 20.7 22.2 20 5.4 0 10.5-1.6 14.7-5.1 1.2-.9 1.6-2.1 1.6-3.5v-.2c0-2.6-2.1-4.6-4.7-4.6-.9 0-2.1.2-2.8.9-2.6 1.9-5.6 3-8.7 2.8-5.1.2-9.6-3.3-10.3-8.4h24.1c3-.2 5.4-2.8 5.1-5.8v-.9c0-10.5-9.1-19.3-20.3-19-12.4 0-21.1 10-21.1 22.1v1.7z"
                                    fill="#10112b"></path>
                                  <path
                                    d="m196.7 280.4c.7-8.8 7-15.6 15-15.6 9.1 0 14 7.4 14.5 15.6zm167 7c0 4.6-4 7.4-9.6 7.2-3.7 0-6.5-1.9-6.5-5.1v-.2c0-3.5 3.3-5.8 8.4-5.8 2.6 0 5.4.7 7.7 1.6zm84.7-18.4c-4.9 0-8.2 3.5-9.1 9.1h18c-.7-5.4-4-9.1-8.9-9.1z"
                                    fill="#fff"></path>
                                  <path
                                    d="m-46.7 217.7c52.6-7.9 18.9 36.9 2.6 49.5 11.2 8.6 22.7 20.7 27.6 34.4 9.1 25.1-13.3 28.8-30.2 22.5-18.5-6.5-34.8-20.4-45.6-36.7-3 0-6.3-.5-9.4-1.4 6.1 17.2 8.7 34.8 7 49.2 0-29-13.8-57.8-33.7-81.8-7-8.4.2-14.6 6.5-6.5 4.3 5.9 8.2 12 11.7 18.3 6.9-23.6 40.5-44.2 63.5-47.5zm-7.5 42.7c10.3-6.3 41.6-39.9 12.4-36.9-16.8 1.9-37.2 17.4-45.6 27.4 11.7-1.4 23.6 3.7 33.2 9.5zm-29 26.1c9.4 10.5 22.2 20.7 36 24.4 8 2.1 16.8 1.2 13.6-10.2-3.3-10.5-11.7-19.7-19.9-26.7-2.3 1.6-4.9 3.3-7.5 4.4-7 3.9-14.5 6.7-22.2 8.1z"
                                    fill="#eba12a"></path>
                                  <path
                                    d="m-87.7 258.3c8-.7 16.6 3.5 23.2 7.7-6.3 3-13.3 4.9-20.6 5.3-10.7.1-12.9-12-2.6-13z"
                                    fill="#fff"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
                            <div className="w-full flex justify-center">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  enable-background="new 0 0 2500 738.6"
                                  viewBox="0 0 2500 738.6"
                                  height="30"
                                  width="70">
                                  <path d="m1057.4 241.2c-137.3 0-248.7 111.7-248.7 248.7s111.7 248.7 248.7 248.7 248.7-111.7 248.7-248.7-111.4-248.7-248.7-248.7zm0 379.7c-72.1 0-130.8-58.7-130.8-130.8s58.7-130.8 130.8-130.8 130.8 58.7 130.8 130.8-58.7 130.8-130.8 130.8z"></path>
                                  <path d="m1884.7 155.1c42.8 0 77.6-34.7 77.6-77.6s-34.8-77.5-77.6-77.5-77.6 34.7-77.6 77.6 34.8 77.5 77.6 77.5z"></path>
                                  <path d="m549.6 241.4c-6.5-.5-12.7-.8-19.1-.8-60 0-116.9 24.6-157.7 68-40.8-43.2-97.5-68-156.9-68-119 .1-215.9 96.7-215.9 215.7v272.2h116.3v-268.9c0-49.4 40.6-94.9 88.4-99.8 3.4-.3 6.7-.5 9.8-.5 53.8 0 97.7 43.9 98 97.7v271.4h118.9v-269.3c0-49.1 40.3-94.6 88.4-99.5 3.4-.3 6.7-.5 9.8-.5 53.8 0 98 43.7 98.2 97.2v272.2h118.9v-268.9c0-54.5-20.2-107.1-56.6-147.6-36.3-40.8-86.2-65.9-140.5-70.6z"></path>
                                  <path d="m1489.1 11.6h-118.9v717.4h118.9zm227.6 0h-118.9v717.4h118.9zm227.5 241.5h-118.9v475.7h118.9z"></path>
                                  <path d="m2500 478.8c0-63.1-24.6-122.5-69-167.8-44.7-45.2-103.7-70.3-166.5-70.3h-3.1c-65.1.8-126.7 26.6-172.7 72.9s-71.9 107.5-72.6 172.9c-.8 66.7 24.8 129.8 72.1 177.6s109.9 74.2 176.6 74.2h.3c87.4 0 169.3-46.8 214.1-122l5.7-9.6-98.2-48.3-4.9 8c-24.8 40.6-67.4 64.6-114.7 64.6-60.5 0-112.7-40.3-128.8-97.7h361.7zm-240.2-130.1c54.3 0 102.9 35.7 120 86.3h-239.7c16.8-50.6 65.4-86.3 119.7-86.3z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
                            <div className="w-full flex justify-center">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.0"
                                  height="50"
                                  width="100"
                                  viewBox="0 0 400.000000 92.000000"
                                  preserveAspectRatio="xMidYMid meet">
                                  <g
                                    transform="translate(0.000000,92.000000) scale(0.100000,-0.100000)"
                                    fill="#000000"
                                    stroke="none">
                                    <path d="M54 904 c-36 -19 -44 -31 -44 -72 0 -40 38 -82 74 -82 14 0 37 11 52 23 69 59 -2 172 -82 131z"></path>
                                    <path d="M1180 506 c0 -205 1 -214 23 -247 34 -52 79 -71 159 -67 88 5 94 12 74 80 l-15 53 -43 0 -43 0 -3 103 -3 102 46 0 45 0 0 60 0 60 -45 0 c-45 0 -45 0 -45 35 l0 35 -75 0 -75 0 0 -214z"></path>
                                    <path d="M356 630 c-106 -53 -125 -99 -126 -292 l0 -148 75 0 75 0 0 135 c0 122 2 137 20 155 11 11 32 20 48 20 60 0 72 -30 72 -184 l0 -126 76 0 76 0 -4 153 c-3 151 -4 155 -33 202 -58 93 -185 132 -279 85z"></path>
                                    <path d="M838 635 c-60 -22 -86 -44 -103 -89 -14 -35 -14 -47 -3 -81 17 -52 61 -80 147 -95 79 -13 116 -33 91 -50 -22 -14 -100 -12 -155 5 -27 8 -50 13 -51 12 -14 -18 -44 -92 -41 -102 10 -24 130 -48 215 -43 102 6 162 37 186 98 21 53 8 110 -32 138 -34 24 -87 42 -122 42 -40 0 -90 20 -90 36 0 27 44 37 107 26 32 -6 65 -13 73 -16 11 -4 21 9 38 46 12 28 20 53 18 55 -2 2 -28 11 -57 19 -67 17 -172 17 -221 -1z"></path>
                                    <path d="M1621 637 c-115 -44 -181 -173 -147 -291 31 -107 112 -163 221 -154 31 3 62 12 73 21 24 22 32 21 32 -3 0 -18 7 -20 71 -20 l70 0 -3 148 c-3 145 -4 150 -33 198 -43 69 -109 107 -189 111 -33 1 -76 -3 -95 -10z m138 -134 c23 -19 37 -77 28 -115 -25 -96 -153 -89 -173 10 -8 40 0 72 26 100 26 27 88 30 119 5z"></path>
                                    <path d="M2135 636 c-46 -20 -94 -64 -115 -107 -17 -33 -20 -59 -20 -189 l0 -150 73 0 72 0 -3 92 c-4 116 4 174 29 199 28 28 73 25 98 -7 19 -24 21 -40 21 -155 l0 -129 75 0 75 0 0 133 c0 120 2 135 20 155 26 28 73 29 100 2 18 -18 20 -33 20 -155 l0 -135 75 0 75 0 0 145 c0 100 -4 156 -13 178 -37 88 -124 142 -217 135 -31 -2 -75 -14 -97 -25 l-41 -21 -48 24 c-54 27 -130 32 -179 10z"></path>
                                    <path d="M2932 637 c-82 -26 -152 -125 -152 -215 0 -98 72 -196 163 -221 91 -26 210 1 263 61 82 89 78 245 -8 325 -60 56 -178 78 -266 50z m141 -128 c15 -11 32 -37 38 -59 10 -32 9 -44 -7 -76 -60 -123 -208 -41 -164 90 20 61 85 83 133 45z"></path>
                                    <path d="M3310 407 c0 -251 -2 -262 -42 -283 -16 -9 -15 -14 9 -67 24 -54 29 -58 52 -52 43 11 85 39 108 75 22 32 23 39 23 301 l0 269 -75 0 -75 0 0 -243z"></path>
                                    <path d="M3650 629 c-92 -42 -135 -108 -134 -209 1 -138 96 -229 239 -230 218 0 326 240 175 390 -71 72 -186 92 -280 49z m144 -110 c27 -13 56 -64 56 -99 0 -35 -29 -86 -56 -99 -39 -17 -61 -13 -96 18 -29 26 -33 35 -33 81 0 46 4 55 33 81 35 31 57 35 96 18z"></path>
                                    <path d="M0 400 l0 -210 26 -10 c32 -13 86 -13 118 0 l26 10 0 210 0 210 -27 -6 c-15 -4 -41 -7 -58 -7 -17 0 -43 3 -58 7 l-27 6 0 -210z"></path>
                                  </g>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
                            <div className="w-full flex justify-center">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="50"
                                  width="100"
                                  viewBox="-131.2 222 600.2 106.9">
                                  <path
                                    d="m-45.8 232.2h-80.4c-2.7 0-5 2.3-5 5.1v9.1c0 2.8 2.3 5.1 5 5.1h80.4c2.8 0 5-2.3 5.1-5.1v-9c0-2.9-2.3-5.2-5.1-5.2zm0 50.5h-80.4c-1.3 0-2.6.5-3.5 1.5-1 1-1.5 2.2-1.5 3.6v9.1c0 2.8 2.3 5.1 5 5.1h80.4c2.8 0 5-2.2 5.1-5.1v-9.1c-.1-2.9-2.3-5.1-5.1-5.1zm-35.1 25.2h-45.3c-1.3 0-2.6.5-3.5 1.5s-1.5 2.2-1.5 3.6v9.1c0 2.8 2.3 5.1 5 5.1h45.2c2.8 0 5-2.3 5-5v-9.1c.1-3-2.1-5.3-4.9-5.2zm40.2-50.5h-85.5c-1.3 0-2.6.5-3.5 1.5s-1.5 2.2-1.5 3.6v9.1c0 2.8 2.3 5.1 5 5.1h85.4c2.8 0 5-2.3 5-5.1v-9.1c.1-2.8-2.2-5-4.9-5.1zm0 0"
                                    fill="#00c3f7"></path>
                                  <path
                                    d="m52.8 252.6c-2.5-2.6-5.4-4.6-8.7-6s-6.8-2.1-10.4-2.1c-3.5-.1-6.9.7-10.1 2.2-2.1 1-4 2.4-5.6 4.1v-1.6c0-.8-.3-1.6-.8-2.2s-1.3-1-2.2-1h-11.1c-.8 0-1.6.3-2.1 1-.6.6-.9 1.4-.8 2.2v74.8c0 .8.3 1.6.8 2.2.6.6 1.3.9 2.1.9h11.4c.8 0 1.5-.3 2.1-.9.6-.5 1-1.3.9-2.2v-25.6c1.6 1.8 3.7 3.1 6 3.9 3 1.1 6.1 1.7 9.3 1.7 3.6 0 7.2-.7 10.5-2.1s6.3-3.4 8.8-6c2.6-2.7 4.6-5.9 6-9.4 1.6-3.9 2.3-8.1 2.2-12.3.1-4.2-.7-8.4-2.2-12.4-1.5-3.3-3.5-6.5-6.1-9.2zm-10.2 27.1c-.6 1.6-1.5 3-2.7 4.3-2.3 2.5-5.6 3.9-9 3.9-1.7 0-3.4-.3-5-1.1-1.5-.7-2.9-1.6-4.1-2.8s-2.1-2.7-2.7-4.3c-1.3-3.4-1.3-7.1 0-10.5.6-1.6 1.6-3 2.7-4.2 1.2-1.2 2.6-2.2 4.1-2.9 1.6-.7 3.3-1.1 5-1.1 1.8 0 3.4.3 5.1 1.1 1.5.7 2.9 1.6 4 2.8 1.2 1.2 2 2.6 2.7 4.2 1.2 3.5 1.1 7.2-.1 10.6zm79.6-33.6h-11.3c-.8 0-1.6.3-2.1.9-.6.6-.9 1.4-.9 2.3v1.4c-1.4-1.7-3.2-3-5.1-3.9-3.1-1.5-6.5-2.2-9.9-2.2-7.3 0-14.2 2.9-19.4 8-2.7 2.7-4.8 5.9-6.2 9.4-1.6 3.9-2.4 8.1-2.3 12.4-.1 4.2.7 8.4 2.3 12.4 1.5 3.5 3.5 6.7 6.2 9.4 5.1 5.2 12.1 8.1 19.3 8.1 3.4.1 6.8-.7 9.9-2.2 1.9-1 3.8-2.3 5.2-3.9v1.5c0 .8.3 1.6.9 2.2.6.5 1.3.9 2.1.9h11.3c.8 0 1.6-.3 2.1-.9.6-.6.9-1.4.9-2.2v-50.3c0-.8-.3-1.6-.8-2.2-.6-.7-1.4-1.1-2.2-1.1zm-15.3 33.6c-.6 1.6-1.5 3-2.7 4.3-1.2 1.2-2.5 2.2-4 2.9-3.2 1.5-6.9 1.5-10.1 0-1.5-.7-2.9-1.7-4.1-2.9s-2.1-2.7-2.7-4.3c-1.2-3.4-1.2-7.1 0-10.5.6-1.6 1.5-2.9 2.7-4.2 1.2-1.2 2.5-2.2 4.1-2.9 3.2-1.5 6.9-1.5 10 0 1.5.7 2.9 1.6 4 2.8s2 2.6 2.7 4.2c1.4 3.5 1.4 7.2.1 10.6zm127.9-6.8c-1.6-1.4-3.5-2.6-5.5-3.4-2.1-.9-4.4-1.5-6.6-2l-8.6-1.7c-2.2-.4-3.8-1-4.6-1.7-.7-.5-1.2-1.3-1.2-2.2s.5-1.7 1.6-2.4c1.5-.8 3.1-1.2 4.8-1.1 2.2 0 4.4.5 6.4 1.3 2 .9 3.9 1.8 5.7 3 2.5 1.6 4.7 1.3 6.2-.5l4.1-4.7c.8-.8 1.2-1.8 1.3-2.9-.1-1.2-.7-2.2-1.6-3-1.7-1.5-4.5-3.1-8.2-4.7s-8.4-2.4-13.9-2.4c-3.4-.1-6.7.4-9.9 1.4-2.7.9-5.3 2.2-7.6 3.9-2.1 1.6-3.7 3.6-4.9 6-1.1 2.3-1.7 4.8-1.7 7.3 0 4.7 1.4 8.5 4.2 11.3s6.5 4.7 11.1 5.6l9 2c1.9.3 3.9.9 5.7 1.8 1 .4 1.6 1.4 1.6 2.5 0 1-.5 1.9-1.6 2.7s-2.9 1.3-5.3 1.3-4.9-.5-7.1-1.6c-2.1-1-4-2.3-5.8-3.8-.8-.6-1.6-1.1-2.6-1.5-1-.3-2.3 0-3.6 1.1l-4.9 3.7c-1.4 1-2.1 2.7-1.7 4.3.3 1.7 1.6 3.3 4.1 5.2 6.2 4.2 13.6 6.4 21.1 6.2 3.5 0 7-.4 10.3-1.4 2.9-.9 5.6-2.2 8-4 2.2-1.6 4-3.7 5.2-6.2 1.2-2.4 1.8-5 1.8-7.7.1-2.4-.4-4.8-1.4-7-1-1.6-2.3-3.3-3.9-4.7zm49.4 13.7c-.5-.9-1.4-1.5-2.5-1.7-1 0-2.1.3-2.9.9-1.4.9-3 1.4-4.6 1.5-.5 0-1.1-.1-1.6-.2-.6-.1-1.1-.4-1.5-.8-.5-.5-.9-1.1-1.2-1.7-.4-1-.6-2-.5-3v-20.5h14.6c.9 0 1.7-.4 2.3-1s1-1.3 1-2.2v-8.7c0-.9-.3-1.7-1-2.2-.6-.6-1.4-.9-2.2-.9h-14.7v-14c0-.8-.3-1.7-.9-2.2s-1.3-.8-2.1-.9h-11.4c-.8 0-1.6.3-2.2.9s-1 1.4-1 2.2v14h-6.5c-.8 0-1.6.3-2.2 1-.5.6-.8 1.4-.8 2.2v8.7c0 .8.3 1.6.8 2.2.5.7 1.3 1 2.2 1h6.5v24.4c-.1 2.9.5 5.8 1.7 8.4 1.1 2.2 2.5 4.1 4.4 5.7 1.8 1.5 3.9 2.6 6.2 3.2 2.3.7 4.7 1.1 7.1 1.1 3.1 0 6.3-.5 9.3-1.5 2.8-.9 5.3-2.5 7.3-4.6 1.3-1.3 1.4-3.4.4-4.9zm61.8-40.5h-11.3c-.8 0-1.5.3-2.1.9s-.9 1.4-.9 2.3v1.4c-1.4-1.7-3.1-3-5.1-3.9-3.1-1.5-6.5-2.2-9.9-2.2-7.3 0-14.2 2.9-19.4 8-2.7 2.7-4.8 5.9-6.2 9.4-1.6 3.9-2.4 8.1-2.3 12.3-.1 4.2.7 8.4 2.3 12.4 1.4 3.5 3.6 6.7 6.2 9.4 5.1 5.2 12 8.1 19.3 8.1 3.4.1 6.8-.7 9.9-2.1 2-1 3.8-2.3 5.2-3.9v1.5c0 .8.3 1.6.9 2.1.6.6 1.3.9 2.1.9h11.3c1.7 0 3-1.3 3-3v-50.3c0-.8-.3-1.6-.8-2.2-.5-.7-1.3-1.1-2.2-1.1zm-15.2 33.6c-.6 1.6-1.5 3-2.7 4.3-1.2 1.2-2.5 2.2-4 2.9-1.6.7-3.3 1.1-5.1 1.1s-3.4-.4-5-1.1c-1.5-.7-2.9-1.7-4.1-2.9s-2.1-2.7-2.6-4.3c-1.2-3.4-1.2-7.1 0-10.5.6-1.6 1.5-3 2.6-4.2 1.2-1.2 2.6-2.2 4.1-2.9 1.6-.7 3.3-1.1 5-1.1s3.4.3 5.1 1.1c1.5.7 2.8 1.6 4 2.8s2.1 2.6 2.7 4.2c1.3 3.4 1.3 7.2 0 10.6zm77.2 6.1-6.5-5c-1.2-1-2.4-1.3-3.4-.9-.9.4-1.7 1-2.4 1.7-1.4 1.7-3.1 3.2-4.9 4.5-2 1.1-4.1 1.7-6.3 1.5-2.6 0-5-.7-7.1-2.2s-3.7-3.5-4.5-6c-.6-1.7-.9-3.4-.9-5.1 0-1.8.3-3.5.9-5.3.6-1.6 1.4-3 2.6-4.2s2.5-2.2 4-2.8c1.6-.7 3.3-1.1 5.1-1.1 2.2-.1 4.4.5 6.3 1.6 1.9 1.2 3.5 2.7 4.9 4.5.6.7 1.4 1.3 2.3 1.7 1 .4 2.2.1 3.4-.9l6.5-4.9c.8-.5 1.4-1.3 1.7-2.2.4-1 .3-2.1-.3-3-2.5-3.9-5.9-7.1-10-9.4-4.3-2.4-9.4-3.7-15.1-3.7-4 0-8 .8-11.8 2.3-3.6 1.5-6.8 3.6-9.5 6.3s-4.9 5.9-6.4 9.5c-3.1 7.5-3.1 15.9 0 23.4 1.5 3.5 3.6 6.8 6.4 9.4 5.7 5.6 13.3 8.6 21.3 8.6 5.7 0 10.8-1.3 15.1-3.7 4.1-2.3 7.6-5.5 10.1-9.5.5-.9.6-2 .3-2.9-.4-.8-1-1.6-1.8-2.2zm60.2 11.7-17.9-26.2 15.3-20.2c.7-.9 1-2.2.6-3.3-.3-.8-1-1.6-2.9-1.6h-12.1c-.7 0-1.4.2-2 .5-.8.4-1.4 1-1.8 1.7l-12.2 17.1h-2.9v-40.4c0-.8-.3-1.6-.9-2.2s-1.3-.9-2.1-.9h-11.3c-.8 0-1.6.3-2.2.9s-.9 1.3-.9 2.2v74.5c0 .9.3 1.6.9 2.2s1.4.9 2.2.9h11.3c.8 0 1.6-.3 2.1-.9.6-.6.9-1.4.9-2.2v-19.7h3.2l13.3 20.4c.8 1.5 2.3 2.4 3.9 2.4h12.7c1.9 0 2.7-.9 3.1-1.7.5-1.2.4-2.5-.3-3.5zm-281.8-51.4h-12.7c-1 0-1.9.3-2.6 1-.6.6-1 1.3-1.2 2.1l-9.4 34.8h-2.3l-10-34.8c-.2-.7-.5-1.4-1-2.1-.6-.7-1.4-1.1-2.3-1.1h-12.9c-1.7 0-2.7.5-3.2 1.7-.3 1-.3 2.1 0 3.1l16 49c.3.7.6 1.5 1.2 2 .6.6 1.5.9 2.4.9h6.8l-.6 1.6-1.5 4.5c-.5 1.4-1.3 2.6-2.5 3.5-1.1.8-2.4 1.3-3.8 1.2-1.2 0-2.3-.3-3.4-.7-1.1-.5-2.1-1.1-3-1.8-.8-.6-1.8-.9-2.9-.9h-.1c-1.2.1-2.3.7-2.9 1.8l-4 5.9c-1.6 2.6-.7 4.2.3 5.1 2.2 2 4.7 3.5 7.5 4.4 3.1 1.1 6.3 1.6 9.5 1.6 5.8 0 10.6-1.6 14.3-4.7 3.8-3.4 6.7-7.8 8.1-12.8l18.6-60.6c.4-1.1.5-2.2.1-3.2-.1-.7-.8-1.5-2.5-1.5zm0 0"
                                    fill="#011b33"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
                            <div className="w-full flex justify-center">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-24 h-24"
                                  viewBox="-.02682843 0 123.63183286 30.17842908">
                                  <path
                                    d="m46.211 6.749h-6.839a.95.95 0 0 0 -.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zm.789 6.405c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zm19.654-.079h-3.275a.57.57 0 0 0 -.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.803l1.77-11.209a.568.568 0 0 0 -.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zm22.007-6.374h-3.291a.954.954 0 0 0 -.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0 -.912-.678h-3.234a.57.57 0 0 0 -.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0 -.468-.895z"
                                    fill="#253b80"></path>
                                  <path
                                    d="m94.992 6.749h-6.84a.95.95 0 0 0 -.938.802l-2.766 17.537a.569.569 0 0 0 .562.658h3.51a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zm19.653-.079h-3.273a.567.567 0 0 0 -.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.803l1.771-11.209a.571.571 0 0 0 -.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zm8.426-12.219-2.807 17.858a.569.569 0 0 0 .562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 0 0 -.562-.659h-3.16a.571.571 0 0 0 -.562.482z"
                                    fill="#179bd7"></path>
                                  <path
                                    d="m7.266 29.154.523-3.322-1.165-.027h-5.563l3.866-24.513a.316.316 0 0 1 .314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 0 1 1.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 0 1 -1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 0 0 -.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 0 1 -.096.035z"
                                    fill="#253b80"></path>
                                  <path
                                    d="m23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545h-2.752c-.661 0-1.218.48-1.321 1.132l-1.409 8.936-.399 2.533a.704.704 0 0 0 .695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.667 4.667 0 0 0 -1.336-1.03z"
                                    fill="#179bd7"></path>
                                  <path
                                    d="m21.754 7.151a9.757 9.757 0 0 0 -1.203-.267 15.284 15.284 0 0 0 -2.426-.177h-7.352a1.172 1.172 0 0 0 -1.159.992l-1.564 9.906-.045.289a1.336 1.336 0 0 1 1.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 0 0 -1.017-.429 9.045 9.045 0 0 0 -.277-.087z"
                                    fill="#222d65"></path>
                                  <path
                                    d="m9.614 7.699a1.169 1.169 0 0 1 1.159-.991h7.352c.871 0 1.684.057 2.426.177a9.757 9.757 0 0 1 1.481.353c.365.121.704.264 1.017.429.368-2.347-.003-3.945-1.272-5.392-1.399-1.593-3.924-2.275-7.155-2.275h-9.38c-.66 0-1.223.48-1.325 1.133l-3.907 24.765a.806.806 0 0 0 .795.932h5.791l1.454-9.225z"
                                    fill="#253b80"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
                            <div className="w-full">
                              <span className="text-qblack font-bold text-base">
                                Bank Payment
                              </span>
                            </div>
                          </div>
                          <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
                            <div className="w-full flex justify-center">
                              <span className="text-qblack font-bold text-base">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="128"
                                  height="24"
                                  viewBox="0 0 128 24"
                                  fill="none">
                                  <g clip-path="url(#clip0_2026_53)">
                                    <g clip-path="url(#clip1_2026_53)">
                                      <path
                                        d="M64.2467 0.877843C79.6216 0.877843 94.9965 0.863775 110.371 0.886284C114.463 0.891911 118.555 1.01008 122.647 1.06354C125.892 1.10574 128.094 3.01055 127.997 6.17585C127.859 10.6213 126.97 14.9993 125.906 19.3154C125.475 21.0682 123.802 21.7519 122.121 22.1599C119.867 22.7057 117.566 22.4413 115.289 22.4807C107.343 22.627 99.3942 22.6804 91.448 22.7845C77.5057 22.9674 63.5605 23.1503 49.6182 23.3501C37.4372 23.5245 25.2534 23.7186 13.0725 23.9071C10.9308 23.9409 8.78911 24.0169 6.6503 24C3.15328 23.9662 0.811451 21.8082 0.58842 18.3784C0.305342 14.0849 0.145217 9.78851 0.00510723 5.48933C-0.129283 1.49683 2.69006 0 5.70384 0C11.414 0.0028136 17.1271 0.07034 22.8401 0.123798C28.2672 0.177257 33.6914 0.284173 39.1157 0.303869C47.4936 0.334818 55.8688 0.312309 64.2467 0.312309C64.2467 0.500821 64.2467 0.689332 64.2467 0.877843ZM74.3232 11.8931C74.3232 10.7705 74.3232 9.65064 74.3232 8.52802C74.3232 8.10316 74.3518 7.52638 73.7885 7.55733C71.7812 7.66706 69.7281 7.06495 67.7695 7.88933C67.5979 7.96248 67.4406 8.12286 67.2834 7.97093C66.4341 7.16061 65.3819 7.63048 64.424 7.51512C63.0744 7.35475 61.7305 8.0272 60.3608 7.532C60.052 7.41946 59.5402 7.4279 59.4773 7.96248C59.4315 8.36764 59.28 9.03728 59.6717 9.12169C60.9956 9.41149 60.5495 10.3766 60.5781 11.1278C60.6268 12.3883 60.6553 13.6544 60.5724 14.9121C60.5038 15.9615 60.9956 16.1782 61.922 16.1641C62.7913 16.1529 63.3946 16.0685 63.346 14.9683C63.2774 13.4293 63.3575 11.8846 63.3203 10.3428C63.3003 9.52966 63.5319 9.07948 64.4497 9.22579C65.1646 9.34115 66.1568 8.93318 66.0853 10.3062C66.0052 11.8453 66.1196 13.3927 66.051 14.9318C66.0024 16.0009 66.5542 16.1698 67.4521 16.1585C68.3042 16.1472 68.9275 16.0853 68.8703 14.9683C68.7903 13.4293 68.8961 11.8846 68.836 10.3428C68.796 9.3102 69.3621 9.19203 70.1771 9.25111C70.9205 9.30457 71.7497 9.13013 71.704 10.34C71.6439 11.9268 71.7297 13.5193 71.6754 15.1062C71.6439 16.0628 72.1758 16.1726 72.9306 16.1472C73.6598 16.1247 74.4004 16.2204 74.3375 15.1118C74.2774 14.0455 74.3232 12.9679 74.3232 11.8931ZM90.8561 11.7974C90.8561 10.7226 90.8218 9.64502 90.8675 8.57022C90.9018 7.78804 90.6102 7.47855 89.7981 7.50105C88.3227 7.54326 86.8415 7.57984 85.3718 7.48417C84.7284 7.44197 84.2738 8.24103 83.8792 7.95686C82.7669 7.15498 81.5717 7.63611 80.4279 7.52638C79.2642 7.41665 78.1033 7.98218 76.9138 7.53482C76.5906 7.41383 76.1046 7.46448 76.0159 7.96811C75.9416 8.37608 75.8415 9.04291 76.2246 9.1245C77.54 9.40586 77.1311 10.3597 77.1597 11.1222C77.2026 12.3376 77.2369 13.5587 77.1511 14.7686C77.0796 15.7899 77.3999 16.1641 78.4807 16.181C79.6302 16.1979 79.9819 15.7871 79.9275 14.7011C79.8532 13.2549 79.939 11.8002 79.8989 10.3512C79.8761 9.54373 80.0877 9.08511 81.017 9.22579C81.749 9.33552 82.7212 8.97257 82.6611 10.3259C82.5896 11.9128 82.684 13.5081 82.6325 15.0978C82.5982 16.1838 83.2902 16.1472 84.0393 16.1557C84.8085 16.1613 85.4719 16.1444 85.4376 15.0809C85.389 13.5869 85.4604 12.0872 85.4118 10.5904C85.3832 9.69566 85.5462 9.17796 86.6442 9.23986C87.6421 9.29613 88.4085 9.30738 88.2941 10.6664C88.1711 12.1069 88.3198 13.5672 88.2483 15.0134C88.1997 16.015 88.703 16.1782 89.5493 16.1641C90.3614 16.1501 90.9419 16.0544 90.8732 15.0274C90.8018 13.9555 90.8561 12.875 90.8561 11.7974ZM21.8965 16.1444C21.8965 16.1472 21.8965 16.1472 21.8965 16.1501C22.3254 16.1501 22.7514 16.1501 23.1804 16.1501C27.2006 16.1501 27.1749 16.1501 27.0491 12.1885C27.0205 11.2882 26.7317 10.9224 25.7967 10.9646C24.2784 11.0349 22.7572 11.0237 21.236 11.0603C20.5097 11.0771 20.2323 10.7705 20.2495 10.0445C20.2638 9.31583 20.6641 9.20891 21.2589 9.21172C22.8744 9.22298 24.4928 9.20328 26.1084 9.21735C26.7489 9.22298 27.2207 9.13576 27.2235 8.32825C27.2292 7.45885 26.6574 7.5095 26.0712 7.5095C23.4091 7.51231 20.7442 7.532 18.0821 7.49824C17.2586 7.48699 16.8383 7.69238 16.8954 8.59273C16.9555 9.56905 16.9469 10.5566 16.8983 11.5358C16.8526 12.422 17.2672 12.664 18.0964 12.6415C19.6176 12.5993 21.1388 12.6387 22.6599 12.6246C23.2404 12.619 23.7036 12.6865 23.7208 13.4152C23.7379 14.2199 23.1546 14.144 22.6428 14.1468C21.073 14.158 19.5032 14.1608 17.9363 14.1524C17.2471 14.1468 16.8926 14.3831 16.8954 15.1343C16.8954 15.8603 17.19 16.1529 17.9048 16.1472C19.2316 16.136 20.564 16.1444 21.8965 16.1444ZM10.3703 7.51231C9.94144 7.51231 9.51539 7.51231 9.08649 7.51231C4.9118 7.51231 4.93467 7.51231 5.12625 11.5948C5.16342 12.3939 5.44364 12.6584 6.22711 12.6415C7.79405 12.6049 9.36671 12.6499 10.9336 12.6246C11.5684 12.6134 11.943 12.8047 11.9373 13.4743C11.9344 14.1721 11.4112 14.1468 10.9336 14.1496C9.46107 14.158 7.98563 14.1552 6.51019 14.1552C5.77819 14.1552 5.0948 14.0821 5.11481 15.1962C5.13483 16.2401 5.78963 16.1444 6.453 16.1472C8.06855 16.1557 9.68696 16.1501 11.3025 16.1501C15.3914 16.1501 15.3685 16.1501 15.2256 12.1238C15.197 11.2882 14.9339 10.9308 14.0647 10.9674C12.6893 11.0293 11.3111 11.0462 9.93286 11.0546C9.24661 11.0574 8.43741 11.2403 8.44599 10.1008C8.45457 9.04009 9.20372 9.22579 9.84136 9.22016C11.3139 9.20891 12.7894 9.21172 14.2648 9.21735C14.8624 9.22016 15.4143 9.23423 15.4486 8.39578C15.4886 7.43353 14.8453 7.5095 14.2162 7.51231C12.9381 7.51512 11.6542 7.51231 10.3703 7.51231ZM97.0666 16.0009C98.2533 16.0009 99.4428 16.0066 100.629 15.9953C100.947 15.9925 101.413 16.1275 101.536 15.7787C101.828 14.943 101.922 14.0427 101.479 13.238C101.27 12.861 98.8738 12.9088 98.788 13.2802C98.4163 14.8558 97.1782 14.1665 96.266 14.2931C95.4911 14.4 95.1795 14.0567 95.168 13.252C95.1566 12.3883 95.4826 12.0647 96.3346 12.1097C96.998 12.1463 97.6643 12.1154 98.3305 12.1154C101.885 12.1154 101.885 12.1154 101.722 8.59554C101.719 8.54771 101.716 8.5027 101.722 8.45486C101.799 7.70363 101.399 7.49543 100.698 7.50105C98.2276 7.52356 95.7571 7.52638 93.2866 7.49824C92.5345 7.4898 92.3001 7.7796 92.3086 8.49425C92.3401 10.641 92.343 12.7906 92.3086 14.9374C92.2943 15.7083 92.5431 16.0403 93.3666 16.0094C94.5961 15.9672 95.8314 16.0009 97.0666 16.0009ZM53.4869 7.51231C52.2516 7.51231 51.0164 7.54889 49.784 7.49824C48.9634 7.46448 48.706 7.79648 48.7146 8.56178C48.7432 10.7536 48.7375 12.9454 48.7174 15.1372C48.7117 15.8434 48.9977 16.1529 49.7268 16.1472C52.1945 16.1304 54.6621 16.1275 57.1297 16.1501C57.9361 16.1585 58.2049 15.8181 58.1934 15.0528C58.162 12.861 58.1677 10.6692 58.1906 8.47737C58.1991 7.76553 57.9304 7.47292 57.1869 7.49824C55.9545 7.54326 54.7193 7.51512 53.4869 7.51231ZM42.8271 7.51231C41.5919 7.51231 40.3566 7.54326 39.1214 7.50105C38.3179 7.47292 38.032 7.77116 38.0463 8.55897C38.0834 10.6579 38.1034 12.7625 38.0377 14.8614C38.0091 15.8462 38.3579 16.1838 39.3444 16.1613C41.386 16.1135 43.4305 16.1501 45.4721 16.1472C47.4994 16.1472 47.5108 16.1444 47.4507 14.1665C47.4393 13.7388 47.6738 13.0973 47.0018 13.0101C46.2269 12.9088 44.9259 12.5993 44.7429 13.1845C44.2196 14.8389 43.0159 14.2284 42.0065 14.3409C41.1887 14.4309 40.9113 14.0145 40.9314 13.2633C40.96 12.2363 40.9399 11.2094 40.9371 10.1824C40.9371 9.69285 40.9685 9.13857 41.6119 9.16952C42.5097 9.21454 43.9366 8.63493 44.1939 9.52685C44.6114 10.9843 45.5378 10.5679 46.3899 10.6073C47.7395 10.6664 47.365 9.63939 47.4079 8.91348C47.4479 8.20164 47.5165 7.46448 46.3899 7.50387C45.2033 7.54889 44.0138 7.51512 42.8271 7.51231ZM28.5817 11.7327C28.5817 12.7597 28.6503 13.7951 28.5646 14.8164C28.4731 15.9137 28.9763 16.1923 29.9771 16.1641C31.5926 16.1191 33.211 16.1529 34.8295 16.1529C36.9368 16.1529 36.934 16.1501 36.8425 14.0145C36.8196 13.5053 36.8968 12.8075 36.1505 12.8975C35.3213 12.9988 34.1175 12.1885 33.7229 13.4968C33.4541 14.3803 32.8994 14.2565 32.3046 14.2396C31.5097 14.2143 31.6212 13.5981 31.6155 13.1029C31.5984 11.5611 31.5869 10.0192 31.6098 8.47456C31.6298 7.21407 30.7034 7.54607 30.0028 7.52075C29.2966 7.49543 28.516 7.37163 28.5731 8.50832C28.6246 9.5803 28.5817 10.6579 28.5817 11.7327ZM106.337 12.6274C106.34 12.6274 106.34 12.6274 106.342 12.6274C106.342 11.6961 106.342 10.762 106.342 9.83071C106.342 9.45369 106.508 9.2061 106.911 9.16671C107.295 9.13013 107.844 9.09918 107.892 9.49871C108.101 11.1615 109.368 10.4188 110.208 10.506C111.555 10.6467 111.201 9.6 111.241 8.87128C111.278 8.15381 111.346 7.52075 110.22 7.48417C107.952 7.41102 105.693 7.80211 103.426 7.52356C103.123 7.48699 102.714 7.44197 102.608 7.87808C102.519 8.24103 102.425 8.81219 102.734 8.92192C103.978 9.36366 103.552 10.3512 103.583 11.1615C103.632 12.4192 103.586 13.6797 103.606 14.9374C103.612 15.3369 103.543 15.7787 104.092 15.9784C105.456 16.4736 106.331 15.8856 106.334 14.445C106.337 13.8401 106.337 13.2352 106.337 12.6274ZM118.841 13.0326C117.666 12.166 117.949 11.5695 118.844 10.9224C119.524 10.43 120.082 9.76319 120.677 9.16108C121.034 8.79812 121.163 8.35076 120.96 7.87245C120.771 7.4279 120.333 7.52075 119.967 7.51794C117.78 7.5095 115.593 7.51231 113.405 7.51512C112.885 7.51512 112.37 7.43071 112.353 8.25229C112.336 9.08792 112.793 9.11043 113.428 9.14138C114.566 9.19484 115.738 8.92755 116.851 9.30739C116.459 10.4553 115.81 10.5004 114.984 9.75193C115.018 13.6825 114.12 12.9144 118.252 13.1395C118.34 13.1451 118.435 13.1086 118.841 13.0326ZM114.406 11.8903C113.499 12.9538 112.89 13.66 112.293 14.3719C111.967 14.7601 111.501 15.1569 111.821 15.7139C112.11 16.2176 112.693 16.2232 113.214 16.2288C115.441 16.2401 117.668 16.212 119.896 16.2485C120.759 16.2626 121.06 15.9193 121.085 15.095C121.114 14.2171 120.545 14.3353 119.973 14.2368C118.623 14.0033 117.285 14.566 115.827 13.7416C115.089 13.3252 114.374 13.3111 114.406 11.8903Z"
                                        fill="#2A5CAA"></path>
                                      <path
                                        d="M74.3238 11.8929C74.3238 12.9677 74.278 14.0453 74.3381 15.1173C74.3981 16.2287 73.6575 16.1302 72.9313 16.1527C72.1764 16.178 71.6445 16.0683 71.676 15.1117C71.7303 13.5248 71.6445 11.9323 71.7046 10.3454C71.7503 9.13841 70.9211 9.31285 70.1777 9.25658C69.3628 9.19749 68.7966 9.31566 68.8366 10.3483C68.8967 11.8873 68.7909 13.4348 68.8709 14.9738C68.9281 16.0908 68.3048 16.1499 67.4527 16.164C66.5548 16.1752 66.003 16.0064 66.0516 14.9372C66.1202 13.3982 66.0087 11.8507 66.0859 10.3117C66.1574 8.93864 65.1623 9.3438 64.4503 9.23126C63.5325 9.08495 63.3009 9.53513 63.3209 10.3483C63.3581 11.8901 63.278 13.4348 63.3466 14.9738C63.3952 16.0739 62.7919 16.1555 61.9227 16.1696C60.9962 16.1808 60.5044 15.967 60.573 14.9175C60.6559 13.6599 60.6274 12.3937 60.5787 11.1333C60.5502 10.382 60.9962 9.41695 59.6723 9.12715C59.2806 9.04275 59.4321 8.3703 59.4779 7.96795C59.5408 7.43337 60.0526 7.42774 60.3614 7.53747C61.7311 8.02985 63.075 7.3574 64.4246 7.52059C65.3825 7.63595 66.4348 7.16608 67.284 7.97639C67.4413 8.12833 67.5985 7.96795 67.7701 7.8948C69.7288 7.07041 71.7818 7.66971 73.7891 7.56279C74.3524 7.53184 74.3238 8.11144 74.3238 8.53348C74.3266 9.65048 74.3238 10.7731 74.3238 11.8929Z"
                                        fill="#F3F6FA"></path>
                                      <path
                                        d="M90.8565 11.7973C90.8565 12.8721 90.8021 13.9526 90.8736 15.0245C90.9422 16.0543 90.3618 16.15 89.5497 16.1612C88.7034 16.1753 88.203 16.0149 88.2487 15.0105C88.3173 13.5643 88.1715 12.104 88.2945 10.6635C88.4117 9.30449 87.6454 9.29324 86.6446 9.23697C85.5495 9.17507 85.3836 9.69277 85.4122 10.5875C85.4608 12.0843 85.3865 13.5812 85.4379 15.078C85.4723 16.1415 84.8089 16.1612 84.0397 16.1528C83.2906 16.1472 82.5957 16.1809 82.6329 15.0949C82.6844 13.5052 82.59 11.9127 82.6615 10.323C82.7215 8.97249 81.7465 9.33544 81.0173 9.2229C80.0881 9.08222 79.8765 9.54083 79.8993 10.3483C79.9394 11.7973 79.8536 13.252 79.9279 14.6982C79.9851 15.7814 79.6334 16.1922 78.4811 16.1781C77.4002 16.164 77.08 15.7898 77.1515 14.7657C77.2373 13.5558 77.2029 12.3347 77.1601 11.1193C77.1343 10.3568 77.5403 9.40297 76.225 9.12161C75.8419 9.04001 75.9448 8.37319 76.0163 7.96522C76.1049 7.46158 76.591 7.40813 76.9141 7.53192C78.1036 7.9821 79.2646 7.41375 80.4283 7.52348C81.5721 7.63321 82.7673 7.14927 83.8796 7.95396C84.2742 8.23814 84.726 7.43907 85.3722 7.48128C86.8419 7.57694 88.3231 7.54036 89.7985 7.49816C90.6106 7.47565 90.8994 7.78515 90.8679 8.56733C90.8222 9.64494 90.8565 10.7225 90.8565 11.7973Z"
                                        fill="#F3F6FA"></path>
                                      <path
                                        d="M21.8968 16.1447C20.5643 16.1447 19.2347 16.1362 17.9022 16.1475C17.1874 16.1559 16.8929 15.8605 16.8929 15.1346C16.8929 14.3805 17.2446 14.147 17.9337 14.1526C19.5035 14.1611 21.0733 14.1583 22.6402 14.147C23.152 14.1442 23.7353 14.2202 23.7182 13.4155C23.7039 12.6868 23.2378 12.6192 22.6574 12.6249C21.1362 12.6389 19.6121 12.5995 18.0938 12.6417C17.2646 12.6642 16.85 12.4223 16.8957 11.536C16.9443 10.5569 16.9529 9.5721 16.8929 8.59297C16.8385 7.69262 17.2589 7.48722 18.0795 7.49848C20.7416 7.53224 23.4037 7.51255 26.0686 7.50973C26.6548 7.50973 27.2266 7.45909 27.2209 8.32849C27.2181 9.13599 26.7463 9.22321 26.1058 9.21759C24.4902 9.20352 22.8718 9.22321 21.2563 9.21196C20.6615 9.20915 20.2612 9.31606 20.2469 10.0448C20.2326 10.7679 20.5071 11.0774 21.2334 11.0605C22.7546 11.0239 24.2758 11.0352 25.7941 10.9648C26.7291 10.9226 27.0179 11.2884 27.0465 12.1887C27.1752 16.1503 27.1981 16.1503 23.1806 16.1503C22.7517 16.1503 22.3257 16.1503 21.8968 16.1503C21.8968 16.1503 21.8968 16.1475 21.8968 16.1447Z"
                                        fill="#F3F6FA"></path>
                                      <path
                                        d="M10.3705 7.51216C11.6544 7.51216 12.9382 7.51216 14.2221 7.51216C14.8511 7.51216 15.4945 7.43619 15.4545 8.39563C15.4202 9.23408 14.8683 9.2172 14.2707 9.2172C12.7953 9.21158 11.3227 9.20876 9.84724 9.22002C9.20674 9.22564 8.46044 9.03995 8.45186 10.1007C8.44042 11.2402 9.25249 11.0601 9.93874 11.0545C11.317 11.046 12.6952 11.0263 14.0705 10.9673C14.9398 10.9279 15.2 11.288 15.2314 12.1237C15.3744 16.1499 15.3944 16.1499 11.3084 16.1499C9.69283 16.1499 8.07442 16.1555 6.45888 16.1471C5.7955 16.1443 5.13784 16.2399 5.12069 15.1961C5.10067 14.0819 5.78406 14.1551 6.51606 14.1551C7.9915 14.1551 9.46408 14.1579 10.9395 14.1494C11.417 14.1466 11.9403 14.172 11.9432 13.4742C11.946 12.8017 11.5743 12.6132 10.9395 12.6245C9.36972 12.6498 7.79992 12.6076 6.23299 12.6414C5.44952 12.6582 5.1693 12.3938 5.13213 11.5947C4.93197 7.51216 4.91195 7.51216 9.08664 7.51216C9.51269 7.51216 9.9416 7.51216 10.3705 7.51216Z"
                                        fill="#F3F6FA"></path>
                                      <path
                                        d="M97.0668 16.001C95.8316 16.001 94.5963 15.9673 93.3611 16.0123C92.5376 16.0432 92.2917 15.7141 92.3031 14.9403C92.3403 12.7935 92.3374 10.6439 92.3031 8.49717C92.2917 7.78252 92.529 7.49271 93.281 7.50116C95.7515 7.52929 98.222 7.52366 100.693 7.50397C101.393 7.49834 101.793 7.70655 101.716 8.45778C101.71 8.5028 101.713 8.55063 101.716 8.59846C101.879 12.1183 101.879 12.1183 98.325 12.1183C97.6587 12.1183 96.9925 12.1492 96.3291 12.1126C95.4799 12.0648 95.1511 12.3912 95.1625 13.255C95.1711 14.0597 95.4856 14.4029 96.2605 14.296C97.1726 14.1694 98.4108 14.8587 98.7825 13.2831C98.8711 12.9145 101.267 12.8639 101.473 13.2409C101.916 14.0456 101.822 14.9459 101.53 15.7816C101.407 16.1333 100.944 15.9954 100.624 15.9982C99.443 16.0095 98.2535 16.001 97.0668 16.001ZM96.8209 10.8184C97.3985 10.613 98.1992 11.1448 98.5852 10.3823C98.751 10.0559 98.8425 9.40878 98.3764 9.27091C97.43 8.98955 96.4063 9.00643 95.4542 9.25684C94.9595 9.38627 95.0653 10.0081 95.2054 10.3513C95.5113 11.1026 96.2662 10.6439 96.8209 10.8184Z"
                                        fill="#F3F6FA"></path>
                                      <path
                                        d="M53.4874 7.51212C54.7227 7.51212 55.9579 7.54026 57.1903 7.50087C57.9337 7.47554 58.1997 7.76816 58.194 8.48C58.1711 10.6718 58.1654 12.8636 58.1968 15.0554C58.2082 15.8207 57.9395 16.1611 57.1331 16.1527C54.6655 16.1302 52.1978 16.133 49.7302 16.1499C49.0011 16.1555 48.7151 15.846 48.7208 15.1398C48.7409 12.948 48.7466 10.7562 48.718 8.56441C48.7094 7.79911 48.9667 7.4671 49.7874 7.50087C51.0169 7.5487 52.2522 7.51212 53.4874 7.51212ZM55.4918 11.8732C55.4375 8.86265 55.9493 9.34659 52.8927 9.23967C51.7689 9.20028 51.32 9.5351 51.4458 10.6577C51.5259 11.3949 51.5316 12.1546 51.4458 12.8889C51.3086 14.0566 51.7518 14.4054 52.9384 14.3717C55.4918 14.3041 55.4918 14.3632 55.4918 11.8732Z"
                                        fill="#F3F6FA"></path>
                                      <path
                                        d="M42.8277 7.51501C44.0143 7.51501 45.2038 7.54878 46.3905 7.50657C47.5171 7.46437 47.4484 8.20435 47.4084 8.91619C47.3655 9.64209 47.7401 10.6719 46.3905 10.61C45.5384 10.5706 44.6119 10.987 44.1945 9.52955C43.9371 8.64045 42.5103 9.21724 41.6124 9.17222C40.9691 9.14127 40.9376 9.69555 40.9376 10.1851C40.9376 11.2121 40.9576 12.239 40.9319 13.266C40.9119 14.0201 41.1864 14.4365 42.007 14.3436C43.0164 14.2311 44.2202 14.8388 44.7435 13.1872C44.9293 12.602 46.2275 12.9087 47.0024 13.0128C47.6772 13.1028 47.4399 13.7415 47.4513 14.1692C47.5113 16.1471 47.4999 16.1499 45.4726 16.1499C43.431 16.1499 41.3866 16.1162 39.345 16.164C38.3613 16.1865 38.0096 15.8461 38.0382 14.8641C38.1011 12.7652 38.084 10.6634 38.0468 8.56167C38.0325 7.77387 38.3213 7.47562 39.1219 7.50376C40.3572 7.54596 41.5924 7.5122 42.8277 7.51501Z"
                                        fill="#F3F6FA"></path>
                                      <path
                                        d="M28.5819 11.7325C28.5819 10.6577 28.6248 9.58007 28.5704 8.50809C28.5133 7.37139 29.2939 7.49519 30.0001 7.52051C30.6978 7.54584 31.6271 7.21665 31.6071 8.47433C31.5814 10.0162 31.5957 11.558 31.6128 13.1027C31.6185 13.5951 31.507 14.2141 32.3019 14.2394C32.8967 14.2591 33.4514 14.3801 33.7202 13.4966C34.1176 12.1883 35.3214 12.9986 36.1478 12.8973C36.8941 12.8073 36.8169 13.505 36.8398 14.0143C36.9313 16.1498 36.9341 16.1498 34.8268 16.1526C33.2084 16.1526 31.5928 16.1189 29.9744 16.1639C28.9736 16.192 28.4704 15.9135 28.5619 14.8162C28.6477 13.7948 28.5819 12.7594 28.5819 11.7325Z"
                                        fill="#F3F6FA"></path>
                                      <path
                                        d="M106.337 12.6276C106.337 13.2325 106.34 13.8403 106.337 14.4452C106.334 15.8857 105.459 16.4738 104.095 15.9786C103.549 15.7788 103.615 15.3371 103.609 14.9376C103.589 13.6799 103.638 12.4194 103.586 11.1617C103.555 10.3514 103.978 9.36382 102.737 8.92209C102.428 8.81236 102.523 8.2412 102.611 7.87824C102.717 7.44213 103.123 7.48715 103.429 7.52373C105.697 7.80509 107.955 7.41118 110.223 7.48434C111.352 7.52091 111.284 8.15397 111.244 8.87144C111.204 9.60016 111.558 10.6468 110.212 10.5061C109.374 10.4189 108.104 11.1617 107.895 9.49887C107.844 9.09934 107.298 9.12748 106.915 9.16687C106.509 9.20626 106.346 9.45667 106.346 9.83088C106.343 10.7622 106.346 11.6963 106.346 12.6276C106.34 12.6276 106.337 12.6276 106.337 12.6276Z"
                                        fill="#F3F6FA"></path>
                                      <path
                                        d="M118.841 13.0324C118.435 13.1084 118.344 13.1449 118.252 13.1393C114.121 12.9142 115.018 13.6823 114.984 9.75173C115.81 10.5002 116.46 10.4551 116.851 9.30719C115.736 8.92454 114.567 9.19464 113.429 9.14118C112.797 9.11023 112.336 9.08773 112.353 8.25209C112.371 7.43333 112.885 7.51774 113.406 7.51492C115.593 7.51211 117.781 7.5093 119.968 7.51774C120.334 7.51774 120.774 7.4277 120.96 7.87225C121.163 8.35056 121.035 8.79792 120.677 9.16088C120.082 9.7658 119.525 10.4298 118.844 10.9222C117.949 11.5665 117.666 12.1658 118.841 13.0324Z"
                                        fill="#F3F6FA"></path>
                                      <path
                                        d="M114.406 11.8901C114.378 13.311 115.093 13.3251 115.827 13.7415C117.286 14.5659 118.621 14.0031 119.973 14.2367C120.542 14.3352 121.112 14.217 121.086 15.0948C121.06 15.9192 120.757 16.2625 119.896 16.2484C117.669 16.2118 115.441 16.2428 113.214 16.2287C112.696 16.2259 112.11 16.2175 111.821 15.7138C111.501 15.1539 111.967 14.76 112.293 14.3717C112.888 13.6599 113.497 12.9565 114.406 11.8901Z"
                                        fill="#F3F6FA"></path>
                                      <path
                                        d="M96.8211 10.8185C96.2664 10.644 95.5144 11.1055 95.2027 10.3514C95.0626 10.0081 94.9568 9.38634 95.4515 9.25692C96.4037 9.00651 97.4273 8.98681 98.3738 9.27098C98.8399 9.40885 98.7483 10.056 98.5825 10.3824C98.1965 11.1448 97.3987 10.6103 96.8211 10.8185Z"
                                        fill="#2A5CAA"></path>
                                      <path
                                        d="M55.4919 11.8735C55.4919 14.3636 55.489 14.3017 52.9356 14.3748C51.749 14.4086 51.3058 14.0597 51.443 12.8921C51.5288 12.1577 51.5259 11.3952 51.443 10.6609C51.3201 9.53543 51.7661 9.20343 52.8899 9.24282C55.9494 9.34692 55.4404 8.8658 55.4919 11.8735Z"
                                        fill="#2A5CAA"></path>
                                    </g>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_2026_53">
                                      <rect
                                        width="128"
                                        height="24"
                                        fill="white"></rect>
                                    </clipPath>
                                    <clipPath id="clip1_2026_53">
                                      <rect
                                        width="128"
                                        height="24"
                                        fill="white"></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="w-full">
                      <div className="w-full h-[50px] bg-black text-white  flex justify-center items-center">
                        <span className="text-sm font-semibold">
                          Place Order Now
                        </span>
                      </div>
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

export default CheckoutPage;
