import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { SvgPaths } from "../../../src/utils/SvgPaths";
import SvgIconRenderer from "../../helpers/SvgIconRenderer";
import PageHeader from "../../shared/SharedPageHeader/PageHeader";
import sslcommerze from "../../../public/images/sslcommerze.png";
import { EcommerceApi } from "../../../src/API/EcommerceApi";
import { CartHandler } from "../../../src/utils/CartHandler";
import SharedAddNewAddress from "../../shared/SharedAddNewAddress/SharedAddNewAddress";
import { IAddress } from "../../../interfaces/models";
import SharedDeleteModal from "../../shared/SharedDeleteModal/SharedDeleteModal";
import { useRouter } from "next/navigation";

interface Props {}
const CheckoutPage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  // -------- mike ---------- //
  const [form, setForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [addressData, setAddressData] = useState<IAddress[]>([]);
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const [refresh, setRefresh] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<IAddress | null>(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const handleSelect = (addressData: IAddress) => {
    setSelectedAddress(addressData);
  };

  const handleDelete = async () => {
    const { res, err } = await EcommerceApi.deleteAddress(deleteModalSlug);
    if (res) {
      setDeleteModalSlug("");
      const remainingAddress = addressData.filter(
        (product) => product.slug !== deleteModalSlug
      );
      setAddressData(remainingAddress);
    }
  };

  useEffect(() => {
    const allAddress = async () => {
      const { res, err } = await EcommerceApi.allAddress();
      if (err) {
        console.log(err);
      } else {
        setAddressData(res);
      }
    };
    allAddress();
  }, [refresh]);

  // ---------------- ------------------- //
  const router = useRouter();
  const cartListProduct = states.cartlistData;

  const fetchOrderSum = async () => {
    const { res, err } = await EcommerceApi.getAllCartData(states.user?.slug);
    if (err) {
    } else {
      controller.setAllCartListData(res);
    }
  };
  useEffect(() => {
    fetchOrderSum();
  }, []);
  // -------------------------------- //

  const order = {
    product_list: cartListProduct,
    user_name: states.user?.fullName,
    user_slug: states.user?.slug,
    user_email: states.user?.email,
    // user_phone: states.user?.phone,
    user_phone: states.user?.phone,
    payment_method: "Bkash",
    // transaction_id: "1HJGXX1222",
    address: {
      country: selectedAddress?.country,
      state: selectedAddress?.state,
      city: selectedAddress?.city,
      address: selectedAddress?.address,
    },
    subTotal: CartHandler.cartSubTotal(cartListProduct),
    discount: 100,
    shippingCost: 50,
    total: CartHandler.cartSubTotal(cartListProduct) - 100 + 50,
  };
  const handleCheckout = async () => {
    if (!selectedAddress) {
      return;
    }
    const { res, err } = await EcommerceApi.postOrder(order);
    if (err) {
      console.log(err);
    } else if (res) {
      controller.setClearCartlist();
      router.push(res.data);
    }
  };
  // ------------------------------------ //

  return (
    <div>
      <div className="w-full min-h-screen  pt-0 pb-0">
        <div className="checkout-page-wrapper w-full bg-white pb-[60px]">
          <div className="w-full mb-5">
            <PageHeader slug="checkout" link="/checkout" title="Check out" />
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
                      <div className="bg-[#FFFAEF] border border-qyellow rounded ">
                        <button
                          type="button"
                          className="px-4 py-3 text-md font-medium rounded-md  text-qblack bg-qyellow ">
                          Shipping Address
                        </button>
                      </div>
                      <button
                        onClick={() => setForm(true)}
                        type="button"
                        className="w-[100px] h-[40px] mt-2 sm:mt-0 border border-qblack hover:bg-qblack hover:text-white transition-all duration-300 ease-in-out">
                        <span className="text-sm font-semibold">Add New</span>
                      </button>
                    </div>
                    {!form ? (
                      <div
                        data-aos="zoom-in"
                        className="grid sm:grid-cols-2 grid-cols-1 gap-3 aos-init aos-animate">
                        {addressData.map((singleAddress: IAddress, index) => (
                          <div
                            onClick={() => handleSelect(singleAddress)}
                            className={
                              singleAddress?.slug === selectedAddress?.slug
                                ? `w-full p-5 border cursor-pointer relative    border-qyellow bg-[#FFFAEF]
                                `
                                : `w-full p-5 border cursor-pointer relative   bg-primarygray
                                border-transparent
                                `
                            }>
                            <div className="flex justify-between items-center">
                              <p className="title text-[22px] font-semibold">
                                {`Address ${index + 1}`}
                              </p>
                              <button
                                onClick={() =>
                                  setDeleteModalSlug(singleAddress.slug)
                                }
                                type="button"
                                className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center">
                                <SvgIconRenderer
                                  width="17"
                                  height="19"
                                  viewBox="0 0 17 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  path={SvgPaths.deleteIcon}
                                  pathFill="#EB5757"
                                />
                              </button>
                            </div>
                            <SharedDeleteModal
                              deleteModalSlug={deleteModalSlug}
                              handleDelete={handleDelete}
                              setDeleteModalSlug={setDeleteModalSlug}
                            />
                            <div className="mt-5">
                              <table>
                                <tbody>
                                  <tr className="flex mb-3">
                                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                      Name:
                                    </td>
                                    <td className="text-base text-qblack line-clamp-1 font-medium">
                                      {singleAddress.name}
                                    </td>
                                  </tr>
                                  <tr className="flex mb-3">
                                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                      Email:
                                    </td>
                                    <td className="text-base text-qblack line-clamp-1 font-medium">
                                      {singleAddress.email}
                                    </td>
                                  </tr>
                                  <tr className="flex mb-3">
                                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                      phone:
                                    </td>
                                    <td className="text-base text-qblack line-clamp-1 font-medium">
                                      {singleAddress.phone}
                                    </td>
                                  </tr>
                                  <tr className="flex mb-3">
                                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                      Country:
                                    </td>
                                    <td className="text-base text-qblack line-clamp-1 font-medium">
                                      {singleAddress.country}
                                    </td>
                                  </tr>
                                  <tr className="flex mb-3">
                                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                      State:
                                    </td>
                                    <td className="text-base text-qblack line-clamp-1 font-medium">
                                      {singleAddress?.state}
                                    </td>
                                  </tr>
                                  <tr className="flex mb-3">
                                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                      City:
                                    </td>
                                    <td className="text-base text-qblack line-clamp-1 font-medium">
                                      {singleAddress?.city}
                                    </td>
                                  </tr>
                                  <tr className="flex mb-3">
                                    <td className="text-base text-qgraytwo w-[70px] block  capitalize">
                                      Address:
                                    </td>
                                    <td className="text-base text-qblack line-clamp-2 font-medium">
                                      {singleAddress.address}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            {singleAddress?.slug === selectedAddress?.slug && (
                              <span className="text-qblack bg-qyellow px-2 text-sm absolute right-2 -top-2 font-medium">
                                Selected
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <SharedAddNewAddress
                        setRefresh={setRefresh}
                        refresh={refresh}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                        setForm={setForm}
                        form={form}
                        singleAddressData={undefined}
                      />
                    )}
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
                        {states.cartlistData.map((pro) => (
                          <>
                            <li>
                              <div className="flex justify-between items-center">
                                <div>
                                  <h4
                                    title="Apple watch pro"
                                    className="text-[15px] text-qblack line-clamp-1 mb-2.5">
                                    {pro.productName}
                                    <sup className="text-[13px] text-qgray ml-2 mt-2">
                                      x{pro.quantity}
                                    </sup>
                                  </h4>
                                  <p className="text-[13px] text-qgray line-clamp-1"></p>
                                </div>
                                <div>
                                  <span className="text-[15px] text-qblack font-medium">
                                    ${CartHandler.getPrice(pro)}
                                  </span>
                                </div>
                              </div>
                            </li>
                          </>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                    <div className="mt-[20px]">
                      <div className=" flex justify-between mb-5">
                        <p className="text-[13px] text-qblack uppercase font-bold">
                          SUBTOTAL
                        </p>
                        <p className="text-[15px] font-bold text-qblack uppercase">
                          ${CartHandler.cartSubTotal(states.cartlistData)}
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
                          ${CartHandler.cartSubTotal(states.cartlistData)}
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
                          {/* Razor Pay */}
                          {/* <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
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
                          </div> */}
                          {/* Flutter wave */}
                          {/* <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
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
                          </div> */}
                          {/* mollie */}
                          {/* <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
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
                          </div> */}

                          {/* insta mojo */}
                          {/* <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
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
                          </div> */}

                          {/* pay stack */}
                          {/* <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
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
                          </div> */}
                          {/* paypal */}
                          {/* <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
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
                          </div> */}

                          <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
                            <div className="w-full">
                              <span className="text-qblack font-bold text-base">
                                Bank Payment
                              </span>
                            </div>
                          </div>
                          <div className="payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer border border-gray-200">
                            <div className="w-full flex justify-center ">
                              <span className=" w-[120px] ">
                                <img src={sslcommerze.src} alt="sslcommerze" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleCheckout}
                      type="button"
                      className="w-full">
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
