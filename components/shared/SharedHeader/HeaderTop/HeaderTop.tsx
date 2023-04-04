import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import { CartHandler } from "../../../../src/utils/CartHandler";
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";
import styles from "./styles.module.css";
import { EcommerceApi } from "../../../../src/API/EcommerceApi";
import { ICartProduct, ICategories } from "../../../../interfaces/models";
import { useRouter } from "next/router";
import { CookiesHandler } from "../../../../src/utils/CookiesHandler";
import { SocialLogin } from "../../../helpers/SocialLogin";
import { toast } from "react-hot-toast";
import {
  AnchorIcon,
  ArrowIcon,
  CartIcon,
  CrossIcon,
  DownArrowIcon,
  EmailIcon,
  HeartIcon,
  PhoneIcon,
  ProfileIcon,
  RedCrossIcon,
  SearchIcon,
} from "../../../../src/utils/SvgReturn";

interface Props {}

const user_slug = CookiesHandler.getSlug();
console.log(user_slug);

const HeaderTop: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [sideDropdownOpen, setSideDropdownOpen] = useState(false);
  const [showCategory, setShowCategory] = useState(true);
  const [showTopAllCatgory, setShowTopAllCatgory] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [searchCategory, setSearchCategory] = useState<ICategories | undefined>(
    undefined
  );

  const [searchString, setSearchString] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const { asPath, pathname } = router;

  console.log({ asPath, router });

  if (pathname !== "/products" && searchRef.current) {
    searchRef.current.value === "";
  }

  const sideDropdown = () => {
    // console.log("open");
    setSideDropdownOpen(!sideDropdownOpen);
  };

  const routeSideDropdown = () => {
    // console.log("open2");
    setShowCategory(!showCategory);
  };

  const topAllCategoriesDropdown = () => {
    // console.log("open2");
    setShowTopAllCatgory(!showTopAllCatgory);
  };

  const signOut = async () => {
    await SocialLogin.logOut();
    controller.setUser(null);
  };

  const handleProfileDropdown = () => {
    if (states.user) {
      toggleDropdown();
    } else {
      router.push("/login");
    }
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const fetchAllCategories = async () => {
    const { res, err } = await EcommerceApi.getCategories();
    if (res) {
      controller.setCategories(res);
      // console.log(res);
    }
  };

  const fetchAllSubCategories = async () => {
    const { res, err } = await EcommerceApi.getSubCategories();
    if (res) {
      controller.setSubCategories(res);
    }
  };

  const fetchAllBrands = async () => {
    const { res, err } = await EcommerceApi.getBrands();

    if (err) {
    } else {
      controller.setBrands(res);
    }
  };

  const getSingleUser = async () => {
    const { res, err } = await EcommerceApi.getSingleUser(user_slug);

    if (err) {
    } else if (res) {
      console.log(res);
      controller.setUser(res);
    }
  };

  useEffect(() => {
    const getAllCartData = async () => {
      const { res, err } = await EcommerceApi.getAllCartData(user_slug);
      if (res) {
        controller.setAllCartListData(res);
      }
    };

    const getAllWishlistData = async () => {
      const { res, err } = await EcommerceApi.getAllWishlistProducts(user_slug);
      if (res) {
        controller.setAllWishlistData(res);
      }
    };

    getSingleUser();
    getAllWishlistData();
    getAllCartData();
    fetchAllCategories();
    fetchAllSubCategories();
    fetchAllBrands();
    controller.setInitialDataLoading();
  }, []);

  const handleChangeSearch = (e: any) => {
    const input = e.target.value;
    setSearchString(input);
  };

  const handleSearch = () => {
    if (searchString) {
      controller.setSearchString(searchString);
    }

    if (searchCategory) {
      const selectedCategory = states.categories.find(
        (cat) => cat.cat_name === searchCategory.cat_name
      );

      if (selectedCategory) {
        controller.setSearchCategory(selectedCategory.cat_slug, true);
      }
    }

    if (searchCategory || searchString) {
      router.push(
        `/products?${searchString ? `search=${searchString}` : ""}${
          searchCategory
            ? `${searchString ? "&" : ""}category=${searchCategory.cat_name}`
            : ""
        }`
      );
    }
  };

  const handleDeleteFromCart = async (
    item: ICartProduct,
    user_slug: string
  ) => {
    controller.setApiLoading(true);
    await CartHandler.handleDeleteFromCart(item, user_slug as string);
    toast.success("Item Removed From Cart");
    controller.setApiLoading(false);
  };

  return (
    <div className="print:hidden">
      {sideDropdownOpen && (
        <div
          onClick={() => {
            sideDropdown();
          }}
          className="w-full h-screen bg-black bg-opacity-40 z-40 left-0 top-0 fixed"
        ></div>
      )}
      {/* {sideDropdownOpen && ( */}
      <div
        className={`w-[280px] transition-all duration-300 ease-in-out h-screen overflow-y-auto overflow-x-hidden overflow-style-none bg-white fixed left-0 top-0 z-50 ${
          sideDropdownOpen ? "-left-[0px]" : "-left-[280px]"
        } ${styles["sideDropdownScrollStyle"]}`}
      >
        <div className="w-full px-5 mt-5 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-5 items-center">
              <div className="favorite relative">
                <span>
                  <HeartIcon />
                </span>
                <span className="w-[18px] h-[18px] rounded-full bg-qyellow absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                  1
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                sideDropdown();
              }}
            >
              <RedCrossIcon />
            </button>
          </div>
        </div>
        <div className="w-full mt-5 px-5">
          <div className="search-bar w-full h-[34px] flex ">
            <div className="flex-1 bg-white h-full border border-r-0 border-[#E9E9E9]">
              <input
                type="search"
                className="w-full text-xs h-full focus:outline-none focus:ring-0 placeholder:text-qgraytwo pl-2.5 "
                placeholder="Search Product..."
                onChange={handleChangeSearch}
              />
            </div>
            <div
              className="cursor-pointer w-[40px] h-full bg-qyellow flex justify-center items-center"
              onClick={() => handleSearch()}
            >
              <span>
                <SearchIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mt-5 px-5 flex items-center space-x-3">
          <span
            className="text-base font-semibold  text-qblack"
            onClick={() => {
              routeSideDropdown();
            }}
          >
            Categories
          </span>
          <span className="w-[1px] h-[14px] bg-qgray"></span>
          <span
            className="text-base font-semibold text-qgray "
            onClick={() => {
              routeSideDropdown();
            }}
          >
            Main Menu
          </span>
        </div>

        {showCategory && (
          //Catagory
          <div className="category-item mt-5 w-full">
            <ul className="categories-list">
              {states.categories.map((category: ICategories) => (
                <li key={category.cat_slug} className="category-item">
                  <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                    <div className="flex items-center space-x-6">
                      <span>
                        <span>
                          <AnchorIcon />
                        </span>
                      </span>
                      <span className="text-sm font-normal capitalize">
                        {category.cat_name}
                      </span>
                    </div>
                    <div>
                      <span>
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <header className="header-section-wrapper relative ">
        <div className="shop-topbar w-full bg-white h-10 border-b border-qgray-border">
          <div className="container-x mx-auto h-full ">
            <div className="flex justify-between items-center h-full px-4">
              <div className="topbar-nav">
                <ul className="flex space-x-6">
                  <li>
                    <Link rel="noopener noreferrer" href="/profile">
                      <span className="text-xs leading-6 text-qblack font-semibold cursor-pointer">
                        Account
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link rel="noopener noreferrer" href="/track_order">
                      <span className="text-xs leading-6 text-qblack font-semibold cursor-pointer">
                        Track Order
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link rel="noopener noreferrer" href="/faq">
                      <span className="text-xs leading-6 text-qblack font-semibold cursor-pointer">
                        Support
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topbar-dropdowns lg:block hidden">
                <div className="flex space-x-6 items-center">
                  <div className="flex space-x-2 items-center">
                    {states.user?.phone && (
                      <>
                        <span>
                          <PhoneIcon />
                        </span>
                        <span className="text-xs text-qblack font-medium leading-none">
                          {states.user.phone}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex space-x-2 items-center">
                    {states.user && (
                      <>
                        <span>
                          <EmailIcon />
                        </span>
                        <span className="text-xs text-qblack font-medium leading-none">
                          {states.user.email}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="block lg:hidden">
                <Link rel="noopener noreferrer" href="/become-seller">
                  <span className="text-xs leading-6 text-qblack px-3 py-1 bg-qyellow font-medium cursor-pointer">
                    Become seller
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[86px] bg-white lg:block hidden">
          <div className="container-x mx-auto h-full ">
            <div className="relative h-full">
              <div className="flex justify-between items-center h-full">
                <div className="relative">
                  <Link rel="noreferrer" href="/">
                    <span className={`${styles["spanStyle"]}`}>
                      <span className={`${styles["spanStyle2"]}`}>
                        <img
                          className={`${styles["imgStyle2"]}`}
                          src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fwebsite-images%2Flogo-2023-01-26-01-30-26-1795.png&w=256&q=75"
                          alt="logo"
                        />
                      </span>

                      <img
                        className={`${styles["imgStyle"]}`}
                        src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fwebsite-images%2Flogo-2023-01-26-01-30-26-1795.png&w=256&q=75"
                        alt="logo"
                      />
                    </span>
                  </Link>
                </div>
                <div className="w-[517px] h-[44px]">
                  <div className="w-full h-full flex items-center  border border-qgray-border bg-white  search-com">
                    <div className="flex-1 bg-red-500 h-full">
                      <div className="h-full">
                        <input
                          onChange={handleChangeSearch}
                          name="searchInput"
                          type="text"
                          className={styles["search-input"]}
                          placeholder="Search Products..."
                          ref={searchRef}
                        />
                      </div>
                    </div>
                    <div className="w-[1px] h-[22px] bg-qgrayLite"></div>
                    <div className="flex-1 flex items-center px-4 relative">
                      <button
                        className="w-full text-xs font-medium text-qgray flex justify-between items-center"
                        onClick={() => {
                          topAllCategoriesDropdown();
                        }}
                      >
                        <span className={styles["line-clamp-1"]}>
                          {searchCategory
                            ? searchCategory.cat_name
                            : "All Categories"}
                        </span>
                        <span>
                          <DownArrowIcon />
                        </span>
                      </button>
                      {/* all categories div */}

                      {showTopAllCatgory && (
                        <div>
                          <div
                            className="w-full h-full fixed left-0 top-0 z-50"
                            onClick={() => {
                              topAllCategoriesDropdown();
                            }}
                          ></div>
                          <div
                            className="w-[227px] h-auto absolute bg-white left-0 top-[29px] z-50 p-5"
                            style={{
                              boxShadow:
                                "rgba(0, 0, 0, 0.14) 0px 15px 50px 0px",
                            }}
                          >
                            <ul className="flex flex-col space-y-2">
                              {states.categories.map(
                                (items: ICategories, index) => (
                                  <>
                                    <li
                                      onClick={() => {
                                        topAllCategoriesDropdown();
                                        setSearchCategory(items);
                                      }}
                                    >
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        {items.cat_name}
                                      </span>
                                    </li>
                                  </>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => handleSearch()}
                      className="search-btn w-[93px] bg-qyellow h-full text-sm font-semibold"
                    >
                      Search
                    </button>
                  </div>
                </div>

                <div className="flex space-x-6 items-center relative">
                  <div className="favorite relative">
                    <Link rel="noopener noreferrer" href="/wishlist">
                      <span className="cursor-pointer">
                        <HeartIcon />
                      </span>
                    </Link>
                    <span className="w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">
                      {states.wishlistData.length}
                    </span>
                  </div>
                  <div className="cart-wrapper group relative py-4">
                    <div className="cart relative cursor-pointer">
                      <Link rel="noopener noreferrer" href="/cart">
                        <span className="cursor-pointer">
                          <CartIcon />
                        </span>
                      </Link>
                      <span className="w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">
                        {states.cartlistData.length}
                      </span>
                    </div>
                    <div
                      className={`${styles["cart-wrappwer"]} w-[300px] bg-white border-t-[3px] absolute -right-[45px] top-11 z-50 hidden group-hover:block`}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.14) 0px 15px 50px 0px",
                      }}
                    >
                      <div className="w-full h-full">
                        <div
                          className={`${styles["productItems"]} h-[310px] overflow-y-scroll`}
                        >
                          {states.cartlistData.length === 0 && (
                            <p className="text-sm text-gray-400 mt-10 text-center">
                              No items found
                            </p>
                          )}
                          <ul>
                            {states.cartlistData.map((item, idx) => (
                              <li className="w-full h-full flex justify-between">
                                <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                                  <div className="w-[65px] h-full relative">
                                    <span
                                      style={{
                                        boxSizing: "border-box",
                                        display: "block",
                                        overflow: "hidden",
                                        width: "initial",
                                        height: "initial",
                                        background: "none",
                                        opacity: "1",
                                        border: "0px",
                                        margin: "0px",
                                        padding: "0px",
                                        position: "absolute",
                                        inset: "0px",
                                      }}
                                    >
                                      <img
                                        alt=""
                                        sizes="100vw"
                                        src={item.imageURL[0]}
                                        // src="/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fapple-watch-pro-2022-09-26-12-04-40-6657.png&amp;w=3840&amp;q=75"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="w-full h-full object-contain"
                                        style={{
                                          position: "absolute",
                                          inset: "0px",
                                          boxSizing: "border-box",
                                          padding: "0px",
                                          border: "none",
                                          margin: "auto",
                                          display: "block",
                                          width: "0px",
                                          height: "0px",
                                          minWidth: "100%",
                                          maxWidth: "100%",
                                          minHeight: "100%",
                                          maxHeight: "100%",
                                        }}
                                      />
                                    </span>
                                  </div>
                                  <div className="flex-1 h-full flex flex-col justify-center ">
                                    <Link
                                      href={"single_product?slug=" + item.slug}
                                      className="title mb-2 text-[13px] font-semibold text-qblack leading-4 line-clamp-2 hover:text-blue-600 cursor-pointer"
                                    >
                                      {item.productName}
                                    </Link>
                                    <p className="price">
                                      <span className="offer-price text-qred font-semibold text-[15px] ml-2">
                                        <span className="text-qblack font-semibold">
                                          {item.quantity} &#10005;
                                        </span>{" "}
                                        $
                                        {item.offerPrice
                                          ? item.offerPrice
                                          : item.price}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <span
                                  className="mt-[20px] mr-[15px] inline-flex cursor-pointer"
                                  onClick={() =>
                                    handleDeleteFromCart(
                                      item,
                                      user_slug as string
                                    )
                                  }
                                >
                                  <CrossIcon />
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="w-full px-4 mt-[20px] mb-[12px]">
                          <div className="h-[1px] bg-[#F0F1F3]"></div>
                        </div>
                        <div className="product-actions px-4 mb-[30px]">
                          <div className="total-equation flex justify-between items-center mb-[28px]">
                            <span className="text-[15px] font-medium text-qblack">
                              Subtotal
                            </span>
                            <span className="text-[15px] font-medium text-qred ">
                              ${CartHandler.cartSubTotal(states.cartlistData)}
                            </span>
                          </div>
                          <div className=" product-action-btn">
                            <Link href="/cart">
                              <div
                                className={`${styles["gray-btn"]} w-full h-[50px] mb-[10px] cursor-pointer`}
                              >
                                <span>View Cart</span>
                              </div>
                            </Link>
                            <div className="w-full h-[50px] cursor-pointer">
                              <Link href="/checkout">
                                <div className="yellow-btn">
                                  <span className="text-sm">Checkout Now</span>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="w-full px-4 mt-[20px]">
                          <div className="h-[1px] bg-[#F0F1F3]"></div>
                        </div>
                        <div className="flex justify-center py-[15px]">
                          <p className="text-[13px] font-medium text-qgray">
                            Get Return within 30 days
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={handleProfileDropdown}
                    className="cart-wrapper group relative py-4"
                  >
                    <div className="cart relative cursor-pointer"></div>
                    <span className="cursor-pointer">
                      <ProfileIcon />
                      <div className="dropdown">
                        <span className="w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ">
                          <div
                            className={`${
                              styles["cart-wrappwer"]
                            } w-[200px] bg-white mt-2 border-t-[3px] absolute -right-[45px] top-11 z-50 hidden ${
                              isOpen ? "group-hover:block" : ""
                            }`}
                            style={{
                              boxShadow:
                                "rgba(0, 0, 0, 0.14) 0px 15px 50px 0px",
                            }}
                          >
                            <div className="w-full h-full">
                              <div
                                className={`${styles["productItems"]} h-[250px] overflow-y-scroll p-5`}
                              >
                                {isOpen && (
                                  // <ul>
                                  //   <li>Option 1</li>
                                  //   <li>Option 2</li>
                                  //   <li>Option 3</li>
                                  // </ul>
                                  <div>
                                    <ul className="w-full flex flex-col space-y-5 text-left ">
                                      <li className="text-base text-qgraytwo">
                                        <span>
                                          Hi,{" "}
                                          {states.user?.displayName
                                            ? states.user?.displayName
                                            : states.user?.fullName}
                                          {/* {states.user?.displayName} */}
                                        </span>
                                      </li>
                                      <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                                        <Link
                                          rel="noopener noreferrer"
                                          href="/profile#dashboard"
                                        >
                                          <span className="capitalize">
                                            profile
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                                        <Link
                                          rel="noopener noreferrer"
                                          href="/contact"
                                        >
                                          <span className="capitalize">
                                            Support
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                                        <Link
                                          rel="noopener noreferrer"
                                          href="/faq"
                                        >
                                          <span className="capitalize">
                                            FAQ
                                          </span>
                                        </Link>
                                      </li>
                                    </ul>
                                    <div className="w-full flex justify-center items-center border-t border-qgray-border">
                                      {/* <Link href={"/login"}> */}
                                      <button
                                        onClick={() => signOut()}
                                        type="button"
                                        className="text-qblack text-base font-semibold pt-2"
                                      >
                                        Sign Out
                                      </button>
                                      {/* </Link> */}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          {/* <button onClick={toggleDropdown}></button> */}
                        </span>
                      </div>
                    </span>
                  </div>
                  {/* <button
                    className="compaire relative"
                    onClick={toggleDropdown}
                  >
                    <Link rel="noopener noreferrer" href="/profile">
                    </Link>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quomodo-shop-drawer lg:hidden block w-full h-[60px] bg-white">
          <div className="w-full h-full flex justify-between items-center px-5">
            <div
              onClick={() => {
                sideDropdown();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h7"
                ></path>
              </svg>
            </div>
            <div className="w-[200px] h-full relative">
              <Link rel="noreferrer" href="/">
                <span className={`${styles["spanStyle"]}`}>
                  <span className={`${styles["spanStyle2"]}`}>
                    <img
                      className={`${styles["imgStyle2"]}`}
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27153%27%20height=%2744%27/%3e"
                      alt="logo"
                    />
                    6
                  </span>
                  <img
                    className={`${styles["imgStyle"]}`}
                    src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fwebsite-images%2Flogo-2022-11-22-11-19-02-4634.png&w=256&q=75"
                    alt="logo"
                  />
                </span>
              </Link>
            </div>
            <Link href="/checkout" className="cart relative cursor-pointer">
              <span>
                <CartIcon />
              </span>
              <span className="w-[18px] h-[18px] rounded-full bg-qyellow absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                0
              </span>
            </Link>
          </div>
        </div>
        <HeaderDropdown />
      </header>
    </div>
  );
};

export default HeaderTop;
