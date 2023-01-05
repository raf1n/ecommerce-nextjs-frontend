import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import styles from './styles.module.css'

interface Props { }

const HeaderDropdown: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [openDropdown, setOpenDropdown] = useState(false)
  const openCategoryDropDown = () => {
    console.log('hello')
    setOpenDropdown(!openDropdown)
  }
  return (
    <div>
      <div className={`${styles['nav-widget-wrapper']} w-full  h-[60px] relative z-30  quomodo-shop-nav-bar lg:block hidden bg-qyellow`}>
        <div className="container-x mx-auto h-full">
          <div className="w-full h-full relative">
            <div className="w-full h-full flex justify-between items-center">
              <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
                <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                  {openDropdown && <div onClick={() => { openCategoryDropDown() }} className="fixed top-0 left-0 w-full h-full -z-10"></div>
                  }
                  <button
                    onClick={() => { openCategoryDropDown() }}
                    type="button"
                    className="w-full h-full flex justify-between items-center"
                  >
                    <div className="flex space-x-3 items-center">
                      <span>
                        <svg
                          width="14"
                          height="9"
                          viewBox="0 0 14 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="14" height="1" fill="#1D1D1D"></rect>
                          <rect y="8" width="14" height="1" fill="#1D1D1D"></rect>
                          <rect y="4" width="10" height="1" fill="#1D1D1D"></rect>
                        </svg>
                      </span>
                      <span className="text-sm font-600 text-qblacktext">
                        All Categories
                      </span>
                    </div>
                    <div>
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        className="fill-current text-qblacktext"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="9.18359"
                          y="0.90918"
                          width="5.78538"
                          height="1.28564"
                          transform="rotate(135 9.18359 0.90918)"
                        ></rect>
                        <rect
                          x="5.08984"
                          y="5"
                          width="5.78538"
                          height="1.28564"
                          transform="rotate(-135 5.08984 5)"
                        ></rect>
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`${styles['box']} ${styles['category-dropdown']} w-full absolute left-0 top-[53px]  ${openDropdown ? 'block' : 'hidden'}`}

                  >
                    <ul className={`${styles['categories-list']} relative`}>
                      <li className={`${styles['category-item']}`}>
                        <a
                          rel="noopener noreferrer"
                          href="/products?category=electronics"
                        >
                          <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                            <div className="flex items-center space-x-6">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="anchor"
                                  className="svg-inline--fa fa-anchor w-4 h-4"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M352 176C369.7 176 384 190.3 384 208C384 225.7 369.7 240 352 240H320V448H368C421 448 464 405 464 352V345.9L456.1 352.1C447.6 362.3 432.4 362.3 423 352.1C413.7 343.6 413.7 328.4 423 319L479 263C488.4 253.7 503.6 253.7 512.1 263L568.1 319C578.3 328.4 578.3 343.6 568.1 352.1C559.6 362.3 544.4 362.3 535 352.1L528 345.9V352C528 440.4 456.4 512 368 512H208C119.6 512 48 440.4 48 352V345.9L40.97 352.1C31.6 362.3 16.4 362.3 7.029 352.1C-2.343 343.6-2.343 328.4 7.029 319L63.03 263C72.4 253.7 87.6 253.7 96.97 263L152.1 319C162.3 328.4 162.3 343.6 152.1 352.1C143.6 362.3 128.4 362.3 119 352.1L112 345.9V352C112 405 154.1 448 208 448H256V240H224C206.3 240 192 225.7 192 208C192 190.3 206.3 176 224 176H234.9C209 158.8 192 129.4 192 96C192 42.98 234.1 0 288 0C341 0 384 42.98 384 96C384 129.4 366.1 158.8 341.1 176H352zM288 128C305.7 128 320 113.7 320 96C320 78.33 305.7 64 288 64C270.3 64 256 78.33 256 96C256 113.7 270.3 128 288 128z"
                                  ></path>
                                </svg>
                              </span>
                              <span className="text-xs font-400">
                                Electronics
                              </span>
                            </div>
                            <div>
                              <span>
                                <svg
                                  width="6"
                                  height="9"
                                  viewBox="0 0 6 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.49805"
                                    y="0.818359"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(45 1.49805 0.818359)"
                                    fill="#1D1D1D"
                                  ></rect>
                                  <rect
                                    x="5.58984"
                                    y="4.90918"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(135 5.58984 4.90918)"
                                    fill="#1D1D1D"
                                  ></rect>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </a>
                        <div
                          className={`${styles['height']} ${styles['sub-category-lvl-two']} absolute left-[270px] top-0 z-10 w-[270px] bg-white`}

                        >
                          <ul className="">
                            <li className={`${styles['category-item']}`}>
                              <a
                                rel="noopener noreferrer"
                                href="/products?sub_category=mobiles"
                              >
                                <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                  <div>
                                    <span className="text-xs font-400">
                                      Mobiles
                                    </span>
                                  </div>
                                  <div>
                                    <span>
                                      <svg
                                        width="6"
                                        height="9"
                                        viewBox="0 0 6 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="1.49805"
                                          y="0.818359"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(45 1.49805 0.818359)"
                                          fill="#1D1D1D"
                                        ></rect>
                                        <rect
                                          x="5.58984"
                                          y="4.90918"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(135 5.58984 4.90918)"
                                          fill="#1D1D1D"
                                        ></rect>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </a>
                              <div
                                className={`${styles['height']} ${styles['sub-category-lvl-three']} absolute left-[270px] top-0 z-10 w-[270px] bg-white`}

                              >
                                <ul className="">
                                  <li className={`${styles['category-item']}`}>
                                    <a
                                      rel="noopener noreferrer"
                                      href="/products?child_category=apple"
                                    >
                                      <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                        <div>
                                          <span className="text-xs font-400">
                                            Apple
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className={`${styles['category-item']}`}>
                              <a
                                rel="noopener noreferrer"
                                href="/products?sub_category=monitor"
                              >
                                <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                  <div>
                                    <span className="text-xs font-400">
                                      Monitor
                                    </span>
                                  </div>
                                  <div>
                                    <span>
                                      <svg
                                        width="6"
                                        height="9"
                                        viewBox="0 0 6 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="1.49805"
                                          y="0.818359"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(45 1.49805 0.818359)"
                                          fill="#1D1D1D"
                                        ></rect>
                                        <rect
                                          x="5.58984"
                                          y="4.90918"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(135 5.58984 4.90918)"
                                          fill="#1D1D1D"
                                        ></rect>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </a>
                              <div
                                className={`${styles['height']} ${styles['sub-category-lvl-three']} absolute left-[270px] top-0 z-10 w-[270px] bg-white`}

                              >
                                <ul className="">
                                  <li className={`${styles['category-item']}`}>
                                    <a
                                      rel="noopener noreferrer"
                                      href="/products?child_category=lg"
                                    >
                                      <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                        <div>
                                          <span className="text-xs font-400">
                                            LG
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className={`${styles['category-item']}`}>
                              <a
                                rel="noopener noreferrer"
                                href="/products?sub_category=camera"
                              >
                                <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                  <div>
                                    <span className="text-xs font-400">
                                      camera
                                    </span>
                                  </div>
                                  <div>
                                    <span>
                                      <svg
                                        width="6"
                                        height="9"
                                        viewBox="0 0 6 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="1.49805"
                                          y="0.818359"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(45 1.49805 0.818359)"
                                          fill="#1D1D1D"
                                        ></rect>
                                        <rect
                                          x="5.58984"
                                          y="4.90918"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(135 5.58984 4.90918)"
                                          fill="#1D1D1D"
                                        ></rect>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </a>
                              <div
                                className={`${styles['height']} ${styles['sub-category-lvl-three']} absolute left-[270px] top-0 z-10 w-[270px]`}

                              >
                                <ul className=""></ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className={`${styles['category-item']}`}>
                        <a
                          rel="noopener noreferrer"
                          href="/products?category=game"
                        >
                          <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                            <div className="flex items-center space-x-6">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="gamepad"
                                  className="svg-inline--fa fa-gamepad w-4 h-4"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M448 64H192C85.96 64 0 149.1 0 256s85.96 192 192 192h256c106 0 192-85.96 192-192S554 64 448 64zM247.1 280h-32v32c0 13.2-10.78 24-23.98 24c-13.2 0-24.02-10.8-24.02-24v-32L136 279.1C122.8 279.1 111.1 269.2 111.1 256c0-13.2 10.85-24.01 24.05-24.01L167.1 232v-32c0-13.2 10.82-24 24.02-24c13.2 0 23.98 10.8 23.98 24v32h32c13.2 0 24.02 10.8 24.02 24C271.1 269.2 261.2 280 247.1 280zM431.1 344c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40s39.1 17.88 39.1 40S454.1 344 431.1 344zM495.1 248c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40c22.12 0 39.1 17.88 39.1 40S518.1 248 495.1 248z"
                                  ></path>
                                </svg>
                              </span>
                              <span className="text-xs font-400">Game</span>
                            </div>
                            <div>
                              <span>
                                <svg
                                  width="6"
                                  height="9"
                                  viewBox="0 0 6 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.49805"
                                    y="0.818359"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(45 1.49805 0.818359)"
                                    fill="#1D1D1D"
                                  ></rect>
                                  <rect
                                    x="5.58984"
                                    y="4.90918"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(135 5.58984 4.90918)"
                                    fill="#1D1D1D"
                                  ></rect>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </a>
                        <div
                          className={`${styles['height']} ${styles['sub-category-lvl-two']}  absolute left-[270px] top-0 z-10 w-[270px] bg-white`}

                        >
                          <ul className="">
                            <li className={`${styles['category-item']}`}>
                              <a
                                rel="noopener noreferrer"
                                href="/products?sub_category=controller"
                              >
                                <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                  <div>
                                    <span className="text-xs font-400">
                                      Controller
                                    </span>
                                  </div>
                                  <div>
                                    <span>
                                      <svg
                                        width="6"
                                        height="9"
                                        viewBox="0 0 6 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="1.49805"
                                          y="0.818359"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(45 1.49805 0.818359)"
                                          fill="#1D1D1D"
                                        ></rect>
                                        <rect
                                          x="5.58984"
                                          y="4.90918"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(135 5.58984 4.90918)"
                                          fill="#1D1D1D"
                                        ></rect>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </a>
                              <div
                                className={`${styles['height']} ${styles['sub-category-lvl-three']} absolute left-[270px] top-0 z-10 w-[270px]`}

                              >
                                <ul className=""></ul>
                              </div>
                            </li>
                            <li className={`${styles['category-item']}`}>
                              <a
                                rel="noopener noreferrer"
                                href="/products?sub_category=playstation"
                              >
                                <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                  <div>
                                    <span className="text-xs font-400">
                                      PlayStation
                                    </span>
                                  </div>
                                  <div>
                                    <span>
                                      <svg
                                        width="6"
                                        height="9"
                                        viewBox="0 0 6 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="1.49805"
                                          y="0.818359"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(45 1.49805 0.818359)"
                                          fill="#1D1D1D"
                                        ></rect>
                                        <rect
                                          x="5.58984"
                                          y="4.90918"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(135 5.58984 4.90918)"
                                          fill="#1D1D1D"
                                        ></rect>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </a>
                              <div
                                className={`${styles['height']} ${styles['sub-category-lvl-three']} absolute left-[270px] top-0 z-10 w-[270px]`}

                              >
                                <ul className=""></ul>
                              </div>
                            </li>
                            <li className={`${styles['category-item']}`}>
                              <a
                                rel="noopener noreferrer"
                                href="/products?sub_category=need-for-speed"
                              >
                                <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                  <div>
                                    <span className="text-xs font-400">
                                      Need For Speed
                                    </span>
                                  </div>
                                  <div>
                                    <span>
                                      <svg
                                        width="6"
                                        height="9"
                                        viewBox="0 0 6 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="1.49805"
                                          y="0.818359"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(45 1.49805 0.818359)"
                                          fill="#1D1D1D"
                                        ></rect>
                                        <rect
                                          x="5.58984"
                                          y="4.90918"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(135 5.58984 4.90918)"
                                          fill="#1D1D1D"
                                        ></rect>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </a>
                              <div
                                className={`${styles['height']} ${styles['sub-category-lvl-three']} absolute left-[270px] top-0 z-10 w-[270px]`}

                              >
                                <ul className=""></ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className={`${styles['category-item']}`}>
                        <a
                          rel="noopener noreferrer"
                          href="/products?category=mobile"
                        >
                          <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                            <div className="flex items-center space-x-6">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="mobile-screen-button"
                                  className="svg-inline--fa fa-mobile-screen-button w-4 h-4"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 384 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z"
                                  ></path>
                                </svg>
                              </span>
                              <span className="text-xs font-400">Mobile</span>
                            </div>
                            <div>
                              <span>
                                <svg
                                  width="6"
                                  height="9"
                                  viewBox="0 0 6 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.49805"
                                    y="0.818359"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(45 1.49805 0.818359)"
                                    fill="#1D1D1D"
                                  ></rect>
                                  <rect
                                    x="5.58984"
                                    y="4.90918"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(135 5.58984 4.90918)"
                                    fill="#1D1D1D"
                                  ></rect>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </a>
                        <div
                          className={`${styles['height']} ${styles['sub-category-lvl-two']} absolute left-[270px] top-0 z-10 w-[270px]`}

                        >
                          <ul className=""></ul>
                        </div>
                      </li>
                      <li className={`${styles['category-item']}`}>
                        <a
                          rel="noopener noreferrer"
                          href="/products?category=lifestyle"
                        >
                          <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                            <div className="flex items-center space-x-6">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="house"
                                  className="svg-inline--fa fa-house w-4 h-4"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"
                                  ></path>
                                </svg>
                              </span>
                              <span className="text-xs font-400">Lifestyle</span>
                            </div>
                            <div>
                              <span>
                                <svg
                                  width="6"
                                  height="9"
                                  viewBox="0 0 6 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.49805"
                                    y="0.818359"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(45 1.49805 0.818359)"
                                    fill="#1D1D1D"
                                  ></rect>
                                  <rect
                                    x="5.58984"
                                    y="4.90918"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(135 5.58984 4.90918)"
                                    fill="#1D1D1D"
                                  ></rect>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </a>
                        <div
                          className={`${styles['height']} ${styles['sub-category-lvl-two']} absolute left-[270px] top-0 z-10 w-[270px]`}

                        >
                          <ul className=""></ul>
                        </div>
                      </li>
                      <li className={`${styles['category-item']}`}>
                        <a
                          rel="noopener noreferrer"
                          href="/products?category=babies-toys"
                        >
                          <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                            <div className="flex items-center space-x-6">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="basketball"
                                  className="svg-inline--fa fa-basketball w-4 h-4"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M148.7 171.3L64.21 86.83c-28.39 32.16-48.9 71.38-58.3 114.8C19.41 205.4 33.34 208 48 208C86.34 208 121.1 193.9 148.7 171.3zM194.5 171.9L256 233.4l169.2-169.2C380 24.37 320.9 0 256 0C248.6 0 241.2 .4922 233.1 1.113C237.8 16.15 240 31.8 240 48C240 95.19 222.8 138.4 194.5 171.9zM208 48c0-14.66-2.623-28.59-6.334-42.09C158.2 15.31 118.1 35.82 86.83 64.21l84.48 84.48C193.9 121.1 208 86.34 208 48zM171.9 194.5C138.4 222.8 95.19 240 48 240c-16.2 0-31.85-2.236-46.89-6.031C.4922 241.2 0 248.6 0 256c0 64.93 24.37 124 64.21 169.2L233.4 256L171.9 194.5zM317.5 340.1L256 278.6l-169.2 169.2C131.1 487.6 191.1 512 256 512c7.438 0 14.75-.4922 22.03-1.113C274.2 495.8 272 480.2 272 464C272 416.8 289.2 373.6 317.5 340.1zM363.3 340.7l84.48 84.48c28.39-32.16 48.9-71.38 58.3-114.8C492.6 306.6 478.7 304 464 304C425.7 304 390.9 318.1 363.3 340.7zM447.8 86.83L278.6 256l61.52 61.52C373.6 289.2 416.8 272 464 272c16.2 0 31.85 2.236 46.89 6.031C511.5 270.8 512 263.4 512 256C512 191.1 487.6 131.1 447.8 86.83zM304 464c0 14.66 2.623 28.59 6.334 42.09c43.46-9.4 82.67-29.91 114.8-58.3l-84.48-84.48C318.1 390.9 304 425.7 304 464z"
                                  ></path>
                                </svg>
                              </span>
                              <span className="text-xs font-400">
                                Babies &amp; Toys
                              </span>
                            </div>
                            <div>
                              <span>
                                <svg
                                  width="6"
                                  height="9"
                                  viewBox="0 0 6 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.49805"
                                    y="0.818359"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(45 1.49805 0.818359)"
                                    fill="#1D1D1D"
                                  ></rect>
                                  <rect
                                    x="5.58984"
                                    y="4.90918"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(135 5.58984 4.90918)"
                                    fill="#1D1D1D"
                                  ></rect>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </a>
                        <div
                          className={`${styles['height']} ${styles['sub-category-lvl-two']} absolute left-[270px] top-0 z-10 w-[270px]`}

                        >
                          <ul className=""></ul>
                        </div>
                      </li>
                      <li className={`${styles['category-item']}`}>
                        <a
                          rel="noopener noreferrer"
                          href="/products?category=bike"
                        >
                          <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                            <div className="flex items-center space-x-6">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="bicycle"
                                  className="svg-inline--fa fa-bicycle w-4 h-4"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M347.2 32C358.1 32 369.8 38.44 375.4 48.78L473.3 229.1C485.5 226.1 498.5 224 512 224C582.7 224 640 281.3 640 352C640 422.7 582.7 480 512 480C441.3 480 384 422.7 384 352C384 311.1 402.4 276.3 431.1 252.8L409.4 212.7L324.7 356.2C320.3 363.5 312.5 368 304 368H255C247.1 431.1 193.3 480 128 480C57.31 480 0 422.7 0 352C0 281.3 57.31 224 128 224C138.7 224 149.2 225.3 159.2 227.8L185.8 174.7L163.7 144H120C106.7 144 96 133.3 96 120C96 106.7 106.7 96 120 96H176C183.7 96 190.1 99.71 195.5 105.1L222.9 144H372.3L337.7 80H311.1C298.7 80 287.1 69.25 287.1 56C287.1 42.75 298.7 32 311.1 32H347.2zM440 352C440 391.8 472.2 424 512 424C551.8 424 584 391.8 584 352C584 312.2 551.8 280 512 280C508.2 280 504.5 280.3 500.8 280.9L533.1 340.6C539.4 352.2 535.1 366.8 523.4 373.1C511.8 379.4 497.2 375.1 490.9 363.4L458.6 303.7C447 316.5 440 333.4 440 352V352zM108.8 328.6L133.1 280.2C131.4 280.1 129.7 280 127.1 280C88.24 280 55.1 312.2 55.1 352C55.1 391.8 88.24 424 127.1 424C162.3 424 190.9 400.1 198.2 368H133.2C112.1 368 99.81 346.7 108.8 328.6H108.8zM290.3 320L290.4 319.9L217.5 218.7L166.8 320H290.3zM257.4 192L317 274.8L365.9 192H257.4z"
                                  ></path>
                                </svg>
                              </span>
                              <span className="text-xs font-400">Bike</span>
                            </div>
                            <div>
                              <span>
                                <svg
                                  width="6"
                                  height="9"
                                  viewBox="0 0 6 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.49805"
                                    y="0.818359"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(45 1.49805 0.818359)"
                                    fill="#1D1D1D"
                                  ></rect>
                                  <rect
                                    x="5.58984"
                                    y="4.90918"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(135 5.58984 4.90918)"
                                    fill="#1D1D1D"
                                  ></rect>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </a>
                        <div
                          className={`${styles['height']} ${styles['sub-category-lvl-two']} absolute left-[270px] top-0 z-10 w-[270px]`}

                        >
                          <ul className=""></ul>
                        </div>
                      </li>
                      <li className={`${styles['category-item']}`}>
                        <a
                          rel="noopener noreferrer"
                          href="/products?category=mens-fasion"
                        >
                          <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                            <div className="flex items-center space-x-6">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="street-view"
                                  className="svg-inline--fa fa-street-view w-4 h-4"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M320 64C320 99.35 291.3 128 256 128C220.7 128 192 99.35 192 64C192 28.65 220.7 0 256 0C291.3 0 320 28.65 320 64zM288 160C323.3 160 352 188.7 352 224V272C352 289.7 337.7 304 320 304H318.2L307.2 403.5C305.4 419.7 291.7 432 275.4 432H236.6C220.3 432 206.6 419.7 204.8 403.5L193.8 304H192C174.3 304 160 289.7 160 272V224C160 188.7 188.7 160 224 160H288zM63.27 414.7C60.09 416.3 57.47 417.8 55.33 419.2C51.7 421.6 51.72 426.4 55.34 428.8C64.15 434.6 78.48 440.6 98.33 446.1C137.7 456.1 193.5 464 256 464C318.5 464 374.3 456.1 413.7 446.1C433.5 440.6 447.9 434.6 456.7 428.8C460.3 426.4 460.3 421.6 456.7 419.2C454.5 417.8 451.9 416.3 448.7 414.7C433.4 406.1 409.9 399.8 379.7 394.2C366.6 391.8 358 379.3 360.4 366.3C362.8 353.3 375.3 344.6 388.3 347C420.8 352.9 449.2 361.2 470.3 371.8C480.8 377.1 490.6 383.5 498 391.4C505.6 399.5 512 410.5 512 424C512 445.4 496.5 460.1 482.9 469C468.2 478.6 448.6 486.3 426.4 492.4C381.8 504.7 321.6 512 256 512C190.4 512 130.2 504.7 85.57 492.4C63.44 486.3 43.79 478.6 29.12 469C15.46 460.1 0 445.4 0 424C0 410.5 6.376 399.5 13.96 391.4C21.44 383.5 31.24 377.1 41.72 371.8C62.75 361.2 91.24 352.9 123.7 347C136.7 344.6 149.2 353.3 151.6 366.3C153.1 379.3 145.4 391.8 132.3 394.2C102.1 399.8 78.57 406.1 63.27 414.7H63.27z"
                                  ></path>
                                </svg>
                              </span>
                              <span className="text-xs font-400">
                                Men's Fasion
                              </span>
                            </div>
                            <div>
                              <span>
                                <svg
                                  width="6"
                                  height="9"
                                  viewBox="0 0 6 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.49805"
                                    y="0.818359"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(45 1.49805 0.818359)"
                                    fill="#1D1D1D"
                                  ></rect>
                                  <rect
                                    x="5.58984"
                                    y="4.90918"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(135 5.58984 4.90918)"
                                    fill="#1D1D1D"
                                  ></rect>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </a>
                        <div
                          className={`${styles['height']} ${styles['sub-category-lvl-two']} absolute left-[270px] top-0 z-10 w-[270px]`}

                        >
                          <ul className=""></ul>
                        </div>
                      </li>
                      <li className={`${styles['category-item']}`}>
                        <a
                          rel="noopener noreferrer"
                          href="/products?category=woman-fashion"
                        >
                          <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                            <div className="flex items-center space-x-6">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fab"
                                  data-icon="android"
                                  className="svg-inline--fa fa-android w-4 h-4"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M420.5 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.94-83a10 10 0 1 0 -17.27-10h0l-48.54 84.07a301.3 301.3 0 0 0 -246.6 0L116.2 64.45a10 10 0 1 0 -17.27 10h0l47.94 83C64.53 202.2 8.24 285.5 0 384H576c-8.24-98.45-64.54-181.8-146.9-226.6"
                                  ></path>
                                </svg>
                              </span>
                              <span className="text-xs font-400">
                                Woman Fashion
                              </span>
                            </div>
                            <div>
                              <span>
                                <svg
                                  width="6"
                                  height="9"
                                  viewBox="0 0 6 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.49805"
                                    y="0.818359"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(45 1.49805 0.818359)"
                                    fill="#1D1D1D"
                                  ></rect>
                                  <rect
                                    x="5.58984"
                                    y="4.90918"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(135 5.58984 4.90918)"
                                    fill="#1D1D1D"
                                  ></rect>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </a>
                        <div
                          className={`${styles['height']} ${styles['sub-category-lvl-two']} absolute left-[270px] top-0 z-10 w-[270px]`}

                        >
                          <ul className=""></ul>
                        </div>
                      </li>
                      <li className={`${styles['category-item']}`}>
                        <a
                          rel="noopener noreferrer"
                          href="/products?category=talevision"
                        >
                          <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                            <div className="flex items-center space-x-6">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="circle-half-stroke"
                                  className="svg-inline--fa fa-circle-half-stroke w-4 h-4"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64V448C362 448 448 362 448 256C448 149.1 362 64 256 64z"
                                  ></path>
                                </svg>
                              </span>
                              <span className="text-xs font-400">Talevision</span>
                            </div>
                            <div>
                              <span>
                                <svg
                                  width="6"
                                  height="9"
                                  viewBox="0 0 6 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.49805"
                                    y="0.818359"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(45 1.49805 0.818359)"
                                    fill="#1D1D1D"
                                  ></rect>
                                  <rect
                                    x="5.58984"
                                    y="4.90918"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(135 5.58984 4.90918)"
                                    fill="#1D1D1D"
                                  ></rect>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </a>
                        <div
                          className={`${styles['height']} ${styles['sub-category-lvl-two']} absolute left-[270px] top-0 z-10 w-[270px]`}

                        >
                          <ul className=""></ul>
                        </div>
                      </li>
                      <li className={`${styles['category-item']}`}>
                        <a
                          rel="noopener noreferrer"
                          href="/products?category=accessories"
                        >
                          <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                            <div className="flex items-center space-x-6">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="gears"
                                  className="svg-inline--fa fa-gears w-4 h-4"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M286.3 155.1C287.4 161.9 288 168.9 288 175.1C288 183.1 287.4 190.1 286.3 196.9L308.5 216.7C315.5 223 318.4 232.1 314.7 241.7C312.4 246.1 309.9 252.2 307.1 257.2L304 262.6C300.1 267.6 297.7 272.4 294.2 277.1C288.5 284.7 278.5 287.2 269.5 284.2L241.2 274.9C230.5 283.8 218.3 290.9 205 295.9L198.1 324.9C197 334.2 189.8 341.6 180.4 342.8C173.7 343.6 166.9 344 160 344C153.1 344 146.3 343.6 139.6 342.8C130.2 341.6 122.1 334.2 121 324.9L114.1 295.9C101.7 290.9 89.5 283.8 78.75 274.9L50.53 284.2C41.54 287.2 31.52 284.7 25.82 277.1C22.28 272.4 18.98 267.5 15.94 262.5L12.92 257.2C10.13 252.2 7.592 247 5.324 241.7C1.62 232.1 4.458 223 11.52 216.7L33.7 196.9C32.58 190.1 31.1 183.1 31.1 175.1C31.1 168.9 32.58 161.9 33.7 155.1L11.52 135.3C4.458 128.1 1.62 119 5.324 110.3C7.592 104.1 10.13 99.79 12.91 94.76L15.95 89.51C18.98 84.46 22.28 79.58 25.82 74.89C31.52 67.34 41.54 64.83 50.53 67.79L78.75 77.09C89.5 68.25 101.7 61.13 114.1 56.15L121 27.08C122.1 17.8 130.2 10.37 139.6 9.231C146.3 8.418 153.1 8 160 8C166.9 8 173.7 8.418 180.4 9.23C189.8 10.37 197 17.8 198.1 27.08L205 56.15C218.3 61.13 230.5 68.25 241.2 77.09L269.5 67.79C278.5 64.83 288.5 67.34 294.2 74.89C297.7 79.56 300.1 84.42 304 89.44L307.1 94.83C309.9 99.84 312.4 105 314.7 110.3C318.4 119 315.5 128.1 308.5 135.3L286.3 155.1zM160 127.1C133.5 127.1 112 149.5 112 175.1C112 202.5 133.5 223.1 160 223.1C186.5 223.1 208 202.5 208 175.1C208 149.5 186.5 127.1 160 127.1zM484.9 478.3C478.1 479.4 471.1 480 464 480C456.9 480 449.9 479.4 443.1 478.3L423.3 500.5C416.1 507.5 407 510.4 398.3 506.7C393 504.4 387.8 501.9 382.8 499.1L377.4 496C372.4 492.1 367.6 489.7 362.9 486.2C355.3 480.5 352.8 470.5 355.8 461.5L365.1 433.2C356.2 422.5 349.1 410.3 344.1 397L315.1 390.1C305.8 389 298.4 381.8 297.2 372.4C296.4 365.7 296 358.9 296 352C296 345.1 296.4 338.3 297.2 331.6C298.4 322.2 305.8 314.1 315.1 313L344.1 306.1C349.1 293.7 356.2 281.5 365.1 270.8L355.8 242.5C352.8 233.5 355.3 223.5 362.9 217.8C367.6 214.3 372.5 210.1 377.5 207.9L382.8 204.9C387.8 202.1 392.1 199.6 398.3 197.3C407 193.6 416.1 196.5 423.3 203.5L443.1 225.7C449.9 224.6 456.9 224 464 224C471.1 224 478.1 224.6 484.9 225.7L504.7 203.5C511 196.5 520.1 193.6 529.7 197.3C535 199.6 540.2 202.1 545.2 204.9L550.5 207.9C555.5 210.1 560.4 214.3 565.1 217.8C572.7 223.5 575.2 233.5 572.2 242.5L562.9 270.8C571.8 281.5 578.9 293.7 583.9 306.1L612.9 313C622.2 314.1 629.6 322.2 630.8 331.6C631.6 338.3 632 345.1 632 352C632 358.9 631.6 365.7 630.8 372.4C629.6 381.8 622.2 389 612.9 390.1L583.9 397C578.9 410.3 571.8 422.5 562.9 433.2L572.2 461.5C575.2 470.5 572.7 480.5 565.1 486.2C560.4 489.7 555.6 492.1 550.6 496L545.2 499.1C540.2 501.9 534.1 504.4 529.7 506.7C520.1 510.4 511 507.5 504.7 500.5L484.9 478.3zM512 352C512 325.5 490.5 304 464 304C437.5 304 416 325.5 416 352C416 378.5 437.5 400 464 400C490.5 400 512 378.5 512 352z"
                                  ></path>
                                </svg>
                              </span>
                              <span className="text-xs font-400">
                                Accessories
                              </span>
                            </div>
                            <div>
                              <span>
                                <svg
                                  width="6"
                                  height="9"
                                  viewBox="0 0 6 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.49805"
                                    y="0.818359"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(45 1.49805 0.818359)"
                                    fill="#1D1D1D"
                                  ></rect>
                                  <rect
                                    x="5.58984"
                                    y="4.90918"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(135 5.58984 4.90918)"
                                    fill="#1D1D1D"
                                  ></rect>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </a>
                        <div
                          className={`${styles['height']} ${styles['sub-category-lvl-two']} absolute left-[270px] top-0 z-10 w-[270px] bg-white`}

                        >
                          <ul className="">
                            <li className={`${styles['category-item']}`}>
                              <a
                                rel="noopener noreferrer"
                                href="/products?sub_category=desktop"
                              >
                                <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                  <div>
                                    <span className="text-xs font-400">
                                      Desktop
                                    </span>
                                  </div>
                                  <div>
                                    <span>
                                      <svg
                                        width="6"
                                        height="9"
                                        viewBox="0 0 6 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="1.49805"
                                          y="0.818359"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(45 1.49805 0.818359)"
                                          fill="#1D1D1D"
                                        ></rect>
                                        <rect
                                          x="5.58984"
                                          y="4.90918"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(135 5.58984 4.90918)"
                                          fill="#1D1D1D"
                                        ></rect>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </a>
                              <div
                                className={`${styles['height']} ${styles['sub-category-lvl-three']} absolute left-[270px] top-0 z-10 w-[270px]`}
                              >
                                <ul className=""></ul>
                              </div>
                            </li>
                            <li className={`${styles['category-item']}`}>
                              <a
                                rel="noopener noreferrer"
                                href="/products?sub_category=headphone"
                              >
                                <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                  <div>
                                    <span className="text-xs font-400">
                                      Headphone
                                    </span>
                                  </div>
                                  <div>
                                    <span>
                                      <svg
                                        width="6"
                                        height="9"
                                        viewBox="0 0 6 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="1.49805"
                                          y="0.818359"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(45 1.49805 0.818359)"
                                          fill="#1D1D1D"
                                        ></rect>
                                        <rect
                                          x="5.58984"
                                          y="4.90918"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(135 5.58984 4.90918)"
                                          fill="#1D1D1D"
                                        ></rect>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </a>
                              <div
                                className={`${styles['height']} ${styles['sub-category-lvl-three']} absolute left-[270px] top-0 z-10 w-[270px]`}
                              >
                                <ul className=""></ul>
                              </div>
                            </li>
                            <li className={`${styles['category-item']}`}>
                              <a
                                rel="noopener noreferrer"
                                href="/products?sub_category=mouse"
                              >
                                <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                  <div>
                                    <span className="text-xs font-400">
                                      Mouse
                                    </span>
                                  </div>
                                  <div>
                                    <span>
                                      <svg
                                        width="6"
                                        height="9"
                                        viewBox="0 0 6 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="1.49805"
                                          y="0.818359"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(45 1.49805 0.818359)"
                                          fill="#1D1D1D"
                                        ></rect>
                                        <rect
                                          x="5.58984"
                                          y="4.90918"
                                          width="5.78538"
                                          height="1.28564"
                                          transform="rotate(135 5.58984 4.90918)"
                                          fill="#1D1D1D"
                                        ></rect>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </a>
                              <div
                                className={`${styles['height']} ${styles['sub-category-lvl-three']} absolute left-[270px] top-0 z-10 w-[270px]`}
                              >
                                <ul className=""></ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className={`${styles['category-item']}`}>
                        <a
                          rel="noopener noreferrer"
                          href="/products?category=john-doe"
                        >
                          <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                            <div className="flex items-center space-x-6">
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="circle-half-stroke"
                                  className="svg-inline--fa fa-circle-half-stroke w-4 h-4"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64V448C362 448 448 362 448 256C448 149.1 362 64 256 64z"
                                  ></path>
                                </svg>
                              </span>
                              <span className="text-xs font-400">John Doe</span>
                            </div>
                            <div>
                              <span>
                                <svg
                                  width="6"
                                  height="9"
                                  viewBox="0 0 6 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.49805"
                                    y="0.818359"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(45 1.49805 0.818359)"
                                    fill="#1D1D1D"
                                  ></rect>
                                  <rect
                                    x="5.58984"
                                    y="4.90918"
                                    width="5.78538"
                                    height="1.28564"
                                    transform="rotate(135 5.58984 4.90918)"
                                    fill="#1D1D1D"
                                  ></rect>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </a>
                        <div
                          className={`${styles['height']} ${styles['sub-category-lvl-two']} absolute left-[270px] top-0 z-10 w-[270px]`}
                        >
                          <ul className=""></ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`${styles['nav']}`}>
                  <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                    <li>
                      <span className="flex items-center text-sm font-600 cursor-pointer ">
                        <span>Shop</span>
                        <span className="ml-1.5 ">
                          <svg
                            width="10"
                            height="5"
                            viewBox="0 0 10 5"
                            fill="none"
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="9.18359"
                              y="0.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 9.18359 0.90918)"
                            ></rect>
                            <rect
                              x="5.08984"
                              y="5"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(-135 5.08984 5)"
                            ></rect>
                          </svg>
                        </span>
                      </span>
                      <div className={`${styles['sub-menu']} w-full absolute left-0 top-[60px]`} >
                        <div
                          className={`${styles['boxHeight']} mega-menu-wrapper w-full bg-white p-[30px] flex justify-between items-center`}

                        >
                          <div className="categories-wrapper flex-1 h-full flex justify-around -ml-[70px]">
                            <div>
                              <div className="category">
                                <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                  Electronics
                                </h1>
                              </div>
                              <div className="category-items">
                                <ul className="flex flex-col space-y-2">
                                  <li>
                                    <a
                                      rel="noopener noreferrer"
                                      href="/products?sub_category=mobiles"
                                    >
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Mobiles
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      rel="noopener noreferrer"
                                      href="/products?sub_category=monitor"
                                    >
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Monitor
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      rel="noopener noreferrer"
                                      href="/products?sub_category=camera"
                                    >
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        camera
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div>
                              <div className="category">
                                <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                  Game
                                </h1>
                              </div>
                              <div className="category-items">
                                <ul className="flex flex-col space-y-2">
                                  <li>
                                    <a
                                      rel="noopener noreferrer"
                                      href="/products?sub_category=controller"
                                    >
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Controller
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      rel="noopener noreferrer"
                                      href="/products?sub_category=playstation"
                                    >
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        PlayStation
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      rel="noopener noreferrer"
                                      href="/products?sub_category=need-for-speed"
                                    >
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Need For Speed
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div>
                              <div className="category">
                                <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                  Accessories
                                </h1>
                              </div>
                              <div className="category-items">
                                <ul className="flex flex-col space-y-2">
                                  <li>
                                    <a
                                      rel="noopener noreferrer"
                                      href="/products?sub_category=desktop"
                                    >
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Desktop
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      rel="noopener noreferrer"
                                      href="/products?sub_category=headphone"
                                    >
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Headphone
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      rel="noopener noreferrer"
                                      href="/products?sub_category=mouse"
                                    >
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Mouse
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`${styles['background']} thumbnil w-[348px] h-[235px] relative flex items-center pl-[40px] group`}

                          >
                            <div className="flex flex-col justify-between">
                              <div>
                                <div className=" mb-[10px]">
                                  <span className="text-qblack uppercase text-xs font-semibold">
                                    SMART WATCH
                                  </span>
                                </div>
                                <div className="mb-[30px]">
                                  <h1 className="w-[160px] text-[24px] leading-[32px] text-qblack font-semibold">
                                    Samsung Smart Watch
                                  </h1>
                                </div>
                              </div>
                              <div className="w-[90px]">
                                <a
                                  rel="noopener noreferrer"
                                  href="/products?category=electronics"
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
                                    <div className="w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[0px] bg-qyellow absolute left-0 bottom-0 z-10"></div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="/sellers">
                        <span className="flex items-center text-sm font-600 cursor-pointer ">
                          <span>Sellers</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="/blogs">
                        <span className="flex items-center text-sm font-600 cursor-pointer ">
                          <span className="capitalize">blogs</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="/about">
                        <span className="flex items-center text-sm font-600 cursor-pointer ">
                          <span>About</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="/contact">
                        <span className="flex items-center text-sm font-600 cursor-pointer ">
                          <span>Contact</span>
                        </span>
                      </a>
                    </li>
                    <li className="relative">
                      <span className="flex items-center text-sm font-600 cursor-pointer ">
                        <span>Pages</span>
                        <span className="ml-1.5 ">
                          <svg
                            width="10"
                            height="5"
                            viewBox="0 0 10 5"
                            fill="none"
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="9.18359"
                              y="0.90918"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(135 9.18359 0.90918)"
                            ></rect>
                            <rect
                              x="5.08984"
                              y="5"
                              width="5.78538"
                              height="1.28564"
                              transform="rotate(-135 5.08984 5)"
                            ></rect>
                          </svg>
                        </span>
                      </span>
                      <div className={`${styles['sub-menu']} w-[220px] absolute left-0 top-[60px]`}>
                        <div
                          className={`${styles['box']} w-full bg-white flex justify-between items-center `}

                        >
                          <div className="categories-wrapper w-full h-full p-5">
                            <div>
                              <div className="category-items">
                                <ul className="flex flex-col space-y-2">
                                  <li>
                                    <a
                                      rel="noopener noreferrer"
                                      href="/privacy-policy"
                                    >
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Privacy Policy
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      rel="noopener noreferrer"
                                      href="/terms-condition"
                                    >
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        Terms and Conditions
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      rel="noopener noreferrer"
                                      href="/seller-terms-condition"
                                    >
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qgreen hover:text-qgreen cursor-pointer">
                                        Seller terms and conditions
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a rel="noopener noreferrer" href="/faq">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        FAQ
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      rel="noopener noreferrer"
                                      href="/pages?custom=kibatu"
                                    >
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        kibatu
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="become-seller-btn" >
                <a rel="noopener noreferrer" href="/become-seller">
                  <div className=" w-[161px] h-[40px] flex justify-center items-center cursor-pointer bg-qblack text-white">
                    <div className="flex space-x-2 items-center">
                      <span className="text-sm font-600">Become seller</span>
                      <span>
                        <svg
                          width="6"
                          height="10"
                          viewBox="0 0 6 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <rect
                            x="1.08984"
                            width="6.94106"
                            height="1.54246"
                            transform="rotate(45 1.08984 0)"
                          ></rect>
                          <rect
                            x="6"
                            y="4.9082"
                            width="6.94106"
                            height="1.54246"
                            transform="rotate(135 6 4.9082)"
                          ></rect>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDropdown;