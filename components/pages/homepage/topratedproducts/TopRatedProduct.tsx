import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'

interface Props {
    product: any
}

const TopRatedProduct: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    const { name, image, rating, mainPrice, offerPrice } = props.product;
    return (
        <div>


            <div className='item w-full group'>
                <div className='main-wrapper-card relative'>
                    <div className='flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2'>
                        <div className='lg:w-1/2 w-1/3 h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out'>
                            <span className=''>
                                <img className='w-48 h-48 object-contain' src={image} alt="" />
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
                                    <span className='fill-qgray'>
                                        <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                            <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                            </path>
                                        </svg>
                                    </span>
                                    <span className='fill-qgray'>
                                        <svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                                            <path d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z fill="#D2D8E1"'>

                                            </path>
                                        </svg>
                                    </span>
                                </div>
                                <a href="/single-product?slug=sony-joystick-sj-pro-vlv">
                                    <p className='title mb-2 sm:text-[15px] text-[13px] text-slate-700 font-semibold leading-[24px] line-clamp-2 hover:text-blue-600 cursor-pointer'>{name}</p>
                                </a>
                                <p className='price mb-[26px]'>
                                    <span className='main-price font-semibold text-[18px] line-through text-gray-500'>
                                        <span>
                                            {mainPrice}
                                        </span>
                                    </span>
                                    <span className='offer-price text-red-500 font-semibold text-[18px] ml-2'>
                                        <span>
                                            {offerPrice}
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



        </div>
    )
}

export default TopRatedProduct