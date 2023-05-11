import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { SvgPaths } from "../../../src/utils/SvgPaths";
import SvgIconRenderer from "../../helpers/SvgIconRenderer";
import PageHeader from "../../shared/SharedPageHeader/PageHeader";
import sslcommerze from "../../../public/images/sslcommerze.png";
import bkashLogo from "../../../public/images/bkash_logo.png";
import { EcommerceApi } from "../../../src/API/EcommerceApi";
import { CartHandler } from "../../../src/utils/CartHandler";
import SharedAddNewAddress from "../../shared/SharedAddNewAddress/SharedAddNewAddress";
import { IAddress } from "../../../interfaces/models";
import SharedDeleteModal from "../../shared/SharedDeleteModal/SharedDeleteModal";
import { useRouter } from "next/navigation";
import { CookiesHandler } from "../../../src/utils/CookiesHandler";
import toast from "react-hot-toast";
import { FaCheckSquare } from "react-icons/fa";

interface Props {}

const CheckoutPage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [form, setForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [addressData, setAddressData] = useState<IAddress[]>([]);
  const [deleteModalSlug, setDeleteModalSlug] = useState<any | string>("");
  const [refresh, setRefresh] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<IAddress | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [transactionId, setTransactionId] = useState("");
  // const [coupon, setCoupon] = useState<string>("");
  const [values, setValues] = useState({
    coupon: "",
  });

  const [discount, setDiscount] = useState<any>(0);
  const [shippingCost, setShippingCost] = useState<number>(50);

  const handleSelect = (addressData: IAddress) => {
    setSelectedAddress(addressData);
  };

  const handleDelete = async () => {
    controller.setApiLoading(true);
    const { res, err } = await EcommerceApi.deleteAddress(deleteModalSlug);
    if (res) {
      setDeleteModalSlug("");
      const remainingAddress = addressData.filter(
        (product) => product.slug !== deleteModalSlug
      );
      setAddressData(remainingAddress);
    }
    controller.setApiLoading(false);
  };

  useEffect(() => {
    const allAddress = async () => {
      const { res, err } = await EcommerceApi.allAddress(states.user?.email);
      if (err) {
        console.log(err);
      } else {
        // console.log(res);
        setAddressData(res);
      }
    };

    if (states.user?.email) {
      allAddress();
    }
  }, [refresh, states.user?.email]);

  // ----------------------------------- //
  const router = useRouter();
  const cartListProduct = states.cartlistData;
  const user_slug = CookiesHandler.getSlug();
  // -----------------------------------//
  // var today = new Date();
  // var todayInSeconds = today.getTime();
  // console.log("td", todayInSeconds);

  const applyCoupon = async () => {
    setDiscount(0);
    const { res, err } = await EcommerceApi.applyCoupon(values.coupon);

    if (res) {
      const dateString = res.expired_date;
      const expDate = new Date(dateString);
      const expTimeInSeconds = expDate.getTime();
      // console.log("ed", expTimeInSeconds);
      var today = new Date();
      // console.log("td", today.getTime());

      if (
        res.status === "active" &&
        res.items_number > 0 &&
        expTimeInSeconds > today.getTime() &&
        res.minimum_purchase <= CartHandler.cartSubTotal(cartListProduct)
      ) {
        if (res.discount.role === "amount") {
          setDiscount(res.discount.value);
          toast.success("Successfully applied coupon in taka !");
        }

        if (res.discount.role === "percent") {
          setDiscount(
            (CartHandler.cartSubTotal(cartListProduct) * res.discount.value) /
              100
          );
          toast.success("Successfully applied coupon in percent!");
        }
      } else {
        toast.error(
          `Expired / coupon date over  or minimum purchase should be ${res.minimum_purchase} !`
        );
      }
    } else {
      toast.error("Invalid coupon");
    }
  };

  // ------------------------------------- //
  const order = {
    product_list: cartListProduct,
    user_name: states.user?.fullName,
    user_slug: user_slug,
    user_email: states.user?.email,
    // user_phone: states.user?.phone,
    user_phone: states.user?.phone,
    payment_method: selectedMethod,
    address: {
      country: selectedAddress?.division,
      state: selectedAddress?.district,
      city: selectedAddress?.thana,
      address: selectedAddress?.address,
    },
    subTotal: CartHandler.cartSubTotal(cartListProduct),

    total: CartHandler.cartSubTotal(cartListProduct) - discount + shippingCost,
  };

  const handleCheckout = async () => {
    if (selectedMethod === "") {
      toast.error("Please Select a Payment Method");
      return;
    } else if (selectedMethod === "bKash" && !transactionId) {
      toast.error("Please provide your TrxID");
      return;
    }

    if (addressData?.length === 0) {
      toast.error("Please Add Shipping Address");
      return;
    } else if (!selectedAddress && addressData?.length !== 0) {
      toast.error("Please Select Shipping Address");
      return;
    }

    if (selectedMethod === "bKash") {
      //@ts-ignore
      order.transaction_id = transactionId;
    }

    controller.setApiLoading(true);

    const { res, err } = await EcommerceApi.postOrder(order);
    if (
      res.message === "COD Order successful" ||
      res.message === "BKash Order successful"
    ) {
      controller.setClearCartlist();
      const { res: cartdelRes, err } =
        await EcommerceApi.deleteAllCartlistProduct(user_slug);
      if (cartdelRes) {
        toast.success("Your Order is Placed");
        setDiscount(0);
        console.log(values.coupon);
        // setCoupon("");
        setValues({ coupon: "" });
      }
    }
    if (err) {
      console.log(err);
    } else if (res.message === "SSL Order successful") {
      router.push(res.data);
      console.log(res);
      // controller.setClearCartlist();
      // const { res: cartdelRes, err } =
      //   await EcommerceApi.deleteAllCartlistProduct(user_slug);
      // if (cartdelRes) {
      //   // router.push(res.data);
      // }
    }
    controller.setApiLoading(false);
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
                <div className="lg:w-4/6 w-full px-2 py-1">
                  <h1 className="sm:text-2xl text-xl text-qblack font-medium mt-5 mb-5">
                    Addresses
                  </h1>
                  <div className="addresses-widget w-full">
                    <div className="flex lg:flex-row  justify-between items-center w-full mb-5">
                      <div className=" rounded ">
                        <span
                          // type="button"
                          className="px-4 py-3 text-sm lg:text-md font-medium rounded-md  text-qblack bg-qyellow "
                        >
                          Shipping Address
                        </span>
                      </div>
                      <button
                        onClick={() => setForm(true)}
                        type="button"
                        className="w-[100px] h-[40px] lg:mt-2 sm:mt-0 border rounded border-qblack hover:bg-qblack hover:text-white transition-all duration-300 ease-in-out"
                      >
                        <span className="text-sm font-semibold">Add New</span>
                      </button>
                    </div>
                    {!form ? (
                      <div
                        data-aos="zoom-in"
                        className="grid sm:grid-cols-2 grid-cols-1 gap-3 aos-init aos-animate"
                      >
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
                            }
                          >
                            <div className="flex justify-between items-center">
                              <p className="title text-[22px] font-semibold">
                                {`Address ${index + 1}`}
                              </p>
                              <button
                                onClick={() =>
                                  setDeleteModalSlug(singleAddress.slug)
                                }
                                type="button"
                                className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center"
                              >
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
                                      {/* {states?.user?.fullName} */}
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
                                      Division:
                                    </td>
                                    <td className="text-base text-qblack line-clamp-1 font-medium">
                                      {singleAddress.division}
                                    </td>
                                  </tr>
                                  <tr className="flex mb-3">
                                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                      District:
                                    </td>
                                    <td className="text-base text-qblack line-clamp-1 font-medium">
                                      {singleAddress?.district}
                                    </td>
                                  </tr>
                                  <tr className="flex mb-3">
                                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                                      Thana:
                                    </td>
                                    <td className="text-base text-qblack line-clamp-1 font-medium">
                                      {singleAddress?.thana}
                                    </td>
                                  </tr>
                                  <tr className="flex mb-3">
                                    <td className="text-base text-qgraytwo w-[70px] block  capitalize">
                                      Area:
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

                <div className="flex-1 p-2">
                  <div className="mb-10">
                    <h1 className="sm:text-2xl text-xl text-qblack font-medium mt-5 mb-5">
                      Apply Coupon
                    </h1>
                    <div className="discount-code w-full mb-5 sm:mb-0 h-[50px] flex ">
                      <div className="flex-1 h-full">
                        <div className="input-com w-full h-full">
                          <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
                            <input
                              value={values.coupon}
                              onChange={(e) =>
                                setValues({ ...values, coupon: e.target.value })
                              }
                              placeholder="Discount Code"
                              className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none "
                              type="text"
                              name="coupon"
                              id="coupon"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={applyCoupon}
                        type="submit"
                        disabled={!values.coupon}
                        className="w-[90px] h-[50px] black-btn disabled:bg-opacity-50 disabled:cursor-not-allowed"
                      >
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
                                    className="text-[15px] text-qblack line-clamp-1 mb-2.5"
                                  >
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
                          {discount}
                        </p>
                      </div>

                      <div className=" flex justify-between mb-5">
                        <p className="text-[13px] text-qblack uppercase font-bold">
                          Shipping (+)
                        </p>
                        <p className="text-[15px] font-bold text-qblack uppercase">
                          {shippingCost}
                        </p>
                      </div>
                    </div>

                    {/* <div className="shipping mb-6 mt-6">
                      <span className="text-[15px] font-medium text-qblack mb-[18px] block">
                        Shipping (+) {shippingCost}
                      </span>
                      <div className="flex flex-col space-y-2.5">
                        <div></div>
                        <div></div>
                      </div>
                    </div> */}
                    <div className="mt-[30px]">
                      <div className=" flex justify-between mb-5">
                        <p className="text-2xl font-medium text-qblack capitalize">
                          Total
                        </p>
                        <p className="text-2xl font-medium text-qred">
                          $
                          {CartHandler.cartSubTotal(states.cartlistData) -
                            discount +
                            shippingCost}
                        </p>
                      </div>
                    </div>
                    <div className="mt-[30px] mb-5 relative">
                      <div className="w-full">
                        <div className="flex flex-col space-y-3">
                          {/* cash on delivery method */}
                          <div
                            onClick={() => setSelectedMethod("cod")}
                            className={`payment-item relative bg-[#F8F8F8] text-center w-full h-[50px] text-sm text-qgreen flex justify-center items-center px-3 uppercase cursor-pointer
                            ${
                              selectedMethod === "cod"
                                ? "border-2 border-qyellow"
                                : "border border-gray-200"
                            }`}
                          >
                            <div className="w-full">
                              <span className="text-qblack font-bold text-base">
                                Cash On Delivery
                              </span>
                            </div>

                            {/* selected indicator */}
                            {selectedMethod === "cod" && (
                              <span
                                data-aos="zoom-in"
                                className="absolute text-white z-10 w-6 h-6 rounded-full bg-qyellow -right-2.5 -top-2.5 aos-init aos-animate"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            )}
                          </div>

                          {/* sslcommerze method */}
                          <div
                            onClick={() => setSelectedMethod("ssl")}
                            className={`payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer   ${
                              selectedMethod === "ssl"
                                ? "border-2 border-qyellow"
                                : "border border-gray-200"
                            }`}
                          >
                            <div className="w-full flex justify-center ">
                              <span className=" w-[120px] ">
                                <img src={sslcommerze.src} alt="sslcommerze" />
                              </span>
                            </div>

                            {/* selected indicator */}
                            {selectedMethod === "ssl" && (
                              <span
                                data-aos="zoom-in"
                                className="absolute text-white z-10 w-6 h-6 rounded-full bg-qyellow -right-2.5 -top-2.5 aos-init aos-animate"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            )}
                          </div>

                          {/* bKash method */}
                          <div
                            onClick={() => setSelectedMethod("bKash")}
                            className={`payment-item text-center bg-[#F8F8F8] relative w-full h-[50px] font-bold text-sm text-white text-qyellow  flex justify-center items-center px-3 uppercase cursor-pointer   ${
                              selectedMethod === "bKash"
                                ? "border-2 border-qyellow"
                                : "border border-gray-200"
                            }`}
                          >
                            <div className="w-full flex justify-center ">
                              <img
                                src={bkashLogo.src}
                                className="h-[45px]"
                                alt="sslcommerze"
                              />
                            </div>

                            {/* selected indicator */}
                            {selectedMethod === "bKash" && (
                              <span
                                data-aos="zoom-in"
                                className="absolute text-white z-10 w-6 h-6 rounded-full bg-qyellow -right-2.5 -top-2.5 aos-init aos-animate"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            )}
                          </div>

                          {selectedMethod === "bKash" && (
                            <div className="w-full bank-inputs mt-5">
                              <div className="input-item mb-5">
                                <div className="bank-info-alert flex flex-col gap-1 w-full p-5 bg-amber-100 rounded mb-4 text-sm">
                                  <div>
                                    <span className="">
                                      <span className="text-[#e2116e]  font-medium">
                                        বিকাশ নাম্বারঃ{" "}
                                      </span>{" "}
                                      01671918124 (মার্চেন্ট অ্যাকাউন্ট) <br />
                                    </span>
                                    <span className="text-[#e2116e]  font-medium">
                                      পেমেন্ট করার নিয়মঃ <br />
                                    </span>
                                  </div>
                                  <span className="flex gap-2">
                                    <FaCheckSquare className="h-5 w-5 flex-shrink-0 text-[#e2116e]" />{" "}
                                    *247# ডায়াল করো বা বিকাশ মোবাইল অ্যাপ-এ যাও{" "}
                                    <br />
                                  </span>
                                  <span className="flex gap-2">
                                    <FaCheckSquare className="h-5 w-5 flex-shrink-0 text-[#e2116e]" />{" "}
                                    পেমেন্ট অপশন সিলেক্ট করো <br />
                                  </span>
                                  <span className="flex gap-2">
                                    <FaCheckSquare className="h-5 w-5 flex-shrink-0 text-[#e2116e]" />{" "}
                                    <span>
                                      আমাদের বিকাশ মার্চেন্ট নাম্বারঃ{" "}
                                      <span className="text-[#e2116e]  font-medium">
                                        01671918124
                                      </span>{" "}
                                      লিখো <br />
                                    </span>
                                  </span>
                                  <span className="flex gap-2">
                                    <FaCheckSquare className="h-5 w-5 flex-shrink-0 text-[#e2116e]" />{" "}
                                    টাকার পরিমানঃ $
                                    {CartHandler.cartSubTotal(
                                      states.cartlistData
                                    )}
                                    <br />
                                  </span>
                                  <span className="flex gap-2">
                                    <FaCheckSquare className="h-5 w-5 flex-shrink-0 text-[#e2116e]" />{" "}
                                    রেফারেন্সঃ তোমার নাম <br />
                                  </span>
                                  <span className="flex gap-2">
                                    <FaCheckSquare className="h-5 w-5 flex-shrink-0 text-[#e2116e]" />{" "}
                                    কাউন্টার নাম্বারঃ 1 <br />
                                  </span>
                                  <span className="flex gap-2">
                                    <FaCheckSquare className="h-5 w-5 flex-shrink-0 text-[#e2116e]" />{" "}
                                    তোমার পিন নাম্বার দিয়ে পেমেন্ট কমপ্লিট করো{" "}
                                    <br />
                                  </span>
                                  <span className="flex gap-2">
                                    <FaCheckSquare className="h-5 w-5 flex-shrink-0 text-[#e2116e]" />{" "}
                                    ট্রানজেকশন আইডি/TrxID ফর্মে ফিলাপ করে দাও।{" "}
                                    <br />
                                  </span>
                                  <span className="flex gap-2">
                                    <FaCheckSquare className="h-5 w-5 flex-shrink-0 text-[#e2116e]" />{" "}
                                    ট্রানজেকশন আইডি/TrxID দেওয়ার সময় অবশ্যই ভাল
                                    করে খেয়াল করে, জিরো '0', ইংরেজি ও 'o',
                                    ইংরেজি বড় হাতে অক্ষর আই 'I' ও ইংরেজি ছোট
                                    হাতে অক্ষর এল 'l' দেখে দিবে। সাধারন ভাবে
                                    ট্রানজেকশন আইডি/ বড় হাতে অক্ষরে দেওয়া থাকে
                                  </span>
                                </div>
                                <h6 className="input-label capitalize text-[13px] font-600 leading-[24px] text-qblack block mb-2 ">
                                  Transaction Information*
                                </h6>
                                <input
                                  onChange={(e) =>
                                    setTransactionId(e.target.value)
                                  }
                                  name="trxId"
                                  className="w-full focus:ring-0 focus:outline-none py-3 px-4 border placeholder:text-sm text-sm"
                                  placeholder="Example: TrxID"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleCheckout}
                      type="button"
                      className="w-full"
                    >
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
