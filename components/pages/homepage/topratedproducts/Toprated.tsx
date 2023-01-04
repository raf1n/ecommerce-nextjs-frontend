import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import { Jsondata } from '../../../../src/utils/Jsondata'
import TopRatedProduct from './TopRatedProduct';
import { AiOutlineArrowRight } from "react-icons/ai";
interface Props {
}

const TopRated: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div className=' w-full'>
            <div className='container-x mx-auto pb-[60px]'>
                <div className=' section-title flex justify-between items-center mb-5'>
                    <div>
                        <h1 className='sm:text-3xl text-xl font-600 font-semibold mb-10'>Top Rated Products</h1>
                    </div>
                    <div className='view-more-btn flex items-center		'>
                        <button className='text-base font-600 font-semibold'>View More

                        </button>
                        <AiOutlineArrowRight />
                        <span className='animate-right'>

                        </span>
                    </div>
                </div>


                {/* <div className='section-content w-full grid sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5  '>
                    <div className='item w-full'>
                        <div className='main-wrapper-card relative'>
                            <div className='flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2'>
                                <div className='lg:w-1/2 w-1/3 h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out'>
                                    <span className=''>
                                        <img className='w-48 h-48 object-contain' src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fsony-joystick-sj-pro-2022-09-27-03-39-20-9931.png&w=2048&q=75" alt="" />
                                    </span>
                                </div>
                                <div className='flex-1 flex flex-col justify-center h-full'>
                                    <div>
                                        <div className='flex space-x-1 mb-3'>
                                            <span >
                                                <svg className='fill-qgray' width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="currentColor"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='fill-qgray'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#none"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='fill-qgray'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <a href="/single-product?slug=sony-joystick-sj-pro-vlv">
                                            <p className='title mb-2 sm:text-[15px] text-[13px] font-600 text-slate-700 font-semibold leading-[24px] line-clamp-2 hover:text-blue-600 cursor-pointer'>Sony joystick SJ pro</p>
                                        </a>
                                        <p className='price mb-[26px]'>
                                            <span className='main-price font-semibold  font-600 text-[18px] line-through text-gray-500'>
                                                <span>
                                                    $7000
                                                </span>
                                            </span>
                                            <span className='offer-price text-red-500 font-600 font-semibold text-[18px] ml-2'>
                                                <span>
                                                    $5000.00
                                                </span>
                                            </span>
                                        </p>
                                        <button type='button' className='w-[110px] h-[30px] '>
                                            <span className='btn bg-yellow-500 p-2 font-semibold'>Add To Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item w-full'>
                        <div className='main-wrapper-card relative'>
                            <div className='flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2'>
                                <div className='lg:w-1/2 w-1/3 h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-ou'>
                                    <span className='box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;'>
                                        <img className='w-48 h-48 object-contain' src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjbl-headphon-max-2022-09-26-01-55-56-9123.png&w=1920&q=75" alt="" />
                                    </span>
                                </div>
                                <div className='flex-1 flex flex-col justify-center h-full'>
                                    <div>
                                        <div className='flex space-x-1 mb-3'>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <a href="/single-product?slug=sony-joystick-sj-pro-vlv">
                                            <p className='title mb-2 sm:text-[15px] text-[13px] font-600 text-slate-700 font-semibold leading-[24px] line-clamp-2 hover:text-blue-600 cursor-pointer'>JBL headphone max</p>
                                        </a>
                                        <p className='price mb-[26px]'>
                                            <span className='main-price font-semibold  font-600 text-[18px] line-through text-gray-500'>
                                                <span>
                                                    $700
                                                </span>
                                            </span>
                                            <span className='offer-price text-red-500 font-600 font-semibold text-[18px] ml-2'>
                                                <span>
                                                    $650.00
                                                </span>
                                            </span>
                                        </p>
                                        <button type='button' className='w-[110px] h-[30px] '>
                                            <span className='btn bg-yellow-500 p-2 font-semibold'>Add To Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item w-full'>
                        <div className='main-wrapper-card relative'>
                            <div className='flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2'>
                                <div className='lg:w-1/2 w-1/3 h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-ou'>
                                    <span className='box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;'>
                                        <img className='w-48 h-48 object-contain' src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fsony-play-staton-5-2022-09-26-12-20-52-2324.png&w=1920&q=75" alt="" />
                                    </span>
                                </div>
                                <div className='flex-1 flex flex-col justify-center h-full'>
                                    <div>
                                        <div className='flex space-x-1 mb-3'>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <a href="/single-product?slug=sony-joystick-sj-pro-vlv">
                                            <p className='title mb-2 sm:text-[15px] text-[13px] font-600 text-slate-700 font-semibold leading-[24px] line-clamp-2 hover:text-blue-600 cursor-pointer'>Sony Play Station 5</p>
                                        </a>
                                        <p className='price mb-[26px]'>
                                            <span className='main-price font-semibold  font-600 text-[18px] line-through text-gray-500'>
                                                <span>
                                                    $88.88
                                                </span>
                                            </span>
                                            <span className='offer-price text-red-500 font-600 font-semibold text-[18px] ml-2'>
                                                <span>
                                                    $61.10
                                                </span>
                                            </span>
                                        </p>
                                        <button type='button' className='w-[110px] h-[30px] '>
                                            <span className='btn bg-yellow-500 p-2 font-semibold'>Add To Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item w-full'>
                        <div className='main-wrapper-card relative'>
                            <div className='flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2'>
                                <div className='lg:w-1/2 w-1/3 h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-ou'>
                                    <span className='box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;'>
                                        <img className='w-48 h-48 object-contain' src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Ffantech-octane-headset-2022-09-26-12-53-57-7709.png&w=1920&q=75" alt="" />
                                    </span>
                                </div>
                                <div className='flex-1 flex flex-col justify-center h-full'>
                                    <div>
                                        <div className='flex space-x-1 mb-3'>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                            <span className='text-gray-500'>
                                                <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                                    <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <a href="/single-product?slug=sony-joystick-sj-pro-vlv">
                                            <p className='title mb-2 sm:text-[15px] text-[13px] font-600 text-slate-700 font-semibold leading-[24px] line-clamp-2 hover:text-blue-600 cursor-pointer'>FANTECH OCTANE Headset</p>
                                        </a>
                                        <p className='price mb-[26px]'>
                                            <span className='main-price font-semibold  font-600 text-[18px] line-through text-gray-500'>
                                                <span>
                                                    $88
                                                </span>
                                            </span>
                                            <span className='offer-price text-red-500 font-600 font-semibold text-[18px] ml-2'>
                                                <span>
                                                    $59.40
                                                </span>
                                            </span>
                                        </p>
                                        <button type='button' className='w-[110px] h-[30px] '>
                                            <span className='btn bg-yellow-500 p-2 font-semibold'>Add To Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='section-content w-full grid sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5  '>
                    {
                        Jsondata.topRatedProducts.map((product: any) => {
                            return <TopRatedProduct product={product}></TopRatedProduct>
                        })
                    }
                </div>




            </div>
        </div>
    )
}

export default TopRated;