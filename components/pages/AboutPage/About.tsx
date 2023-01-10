import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import PageHeader from '../../shared/SharedPageHeader/PageHeader'
import { AiFillCheckCircle } from 'react-icons/ai';
import styles from './About.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Slider from "react-slick";

interface Props {
}

const About: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    const feedbacks = [
        {
            description: "Almost every imaginable design is possible and customizations are allowed on every level. Some features could make use of better controls. If you know how to operate your mouse, then you are all set to use this pagebuilder.",
            name: "Michael",
            designation: "CEO",
            picture: "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjohn-doe-20220922033955.png&w=1920&q=75"
        },
        {
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
            name: "James Robert",
            designation: "CEO",
            picture: "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjohn-doe-20220922033955.png&w=1920&q=75"
        },
        {
            description: "As a digital marketing agency our team works day in and day out on websites of all kinds. Some of the most common errors we see are websites not optimized for SEO because of old, boring, or out of date website themes or designs.",
            name: "John Doe",
            designation: "CEO",
            picture: "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjohn-doe-20220922033955.png&w=1920&q=75"
        },
        {
            description: "Almost every imaginable design is possible and customizations are allowed on every level. Some features could make use of better controls. If you know how to operate your mouse, then you are all set to use this pagebuilder.",
            name: "Michael",
            designation: "CEO",
            picture: "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjohn-doe-20220922033955.png&w=1920&q=75"
        },
        {
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
            name: "James Robert",
            designation: "CEO",
            picture: "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjohn-doe-20220922033955.png&w=1920&q=75"
        },
        {
            description: "Almost every imaginable design is possible and customizations are allowed on every level. Some features could make use of better controls. If you know how to operate your mouse, then you are all set to use this pagebuilder.",
            name: "Michael",
            designation: "CEO",
            picture: "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjohn-doe-20220922033955.png&w=1920&q=75"
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className=''>
            <PageHeader slug="About Us" link="/aboutus" title="About Us" />
            <div className='w-full min-h-screen mt-10 pt-0 pb-0 bg-gray-50'>
                <div className='aboutus-wrapper w-full py-2 '>
                    <div className='container-x mx-auto'>
                        <div className='w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0'>
                            <div className='md:w-[570px] w-full md:h-[560px] h-auto rounded overflow-hidden my-5 lg:my-0 relative'>
                                <span>
                                    <img src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fabout-us-2022-09-22-04-39-05-2348.png&w=1920&q=75" alt="" />
                                </span>
                            </div>
                            <div className='content flex-1'>
                                <div className='about-content'>
                                    <div>
                                        <h1 className='text-2xl font-semibold mb-4 '>What is e-commerce business?
                                        </h1>
                                        <br />
                                        <p className='text-base text-[#797979] leading-8 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.</p>
                                        <ul className='mt-5'>
                                            <li className='text-base text-[#797979] leading-8 flex items-center mb-3'>
                                                <div>
                                                    < AiFillCheckCircle className={`${styles['checkmark']}`} />
                                                </div>
                                                <div>
                                                    slim body with metal cover
                                                </div>
                                            </li>
                                            <li className='text-base text-[#797979] leading-8 flex items-center mb-3'>
                                                <div>
                                                    < AiFillCheckCircle className={`${styles['checkmark']}`} />
                                                </div>
                                                <div>
                                                    latest Intel Core i5-1135G7 processor (4 cores / 8 threads)
                                                </div>
                                            </li>
                                            <li className='text-base text-[#797979] leading-8 flex items-center mb-3'>
                                                <div>
                                                    < AiFillCheckCircle className={`${styles['checkmark']}`} />
                                                </div>
                                                <div>
                                                    8GB DDR4 RAM and fast 512GB PCIe SSD
                                                </div>
                                            </li>
                                            <li className='text-base text-[#797979] leading-8 flex items-center mb-3'>
                                                <div>
                                                    < AiFillCheckCircle className={`${styles['checkmark']}`} />
                                                </div>
                                                <div className='leading-8'>
                                                    NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit

                                                    keyboard
                                                </div>
                                            </li>
                                            <li className='text-base text-[#797979] leading-8 flex items-center mb-3'>
                                                <div>
                                                    < AiFillCheckCircle className={`${styles['checkmark']}`} />
                                                </div>
                                                <div>
                                                    hello hello hello prashant sir ?
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="/contact">
                                    <div className='w-[121px] h-10 mt-5 cursor-pointer'>
                                        <span className='yellow-btn'>Contact Us</span>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='customer-feedback w-full bg-white py-[60px]'>
                    <div className='title flex justify-center mb-5'>
                        <h1 className='text-[30px] font-semibold text-qblack'>Customers Feedback</h1>
                    </div>
                    <Slider {...settings} className='feedback-slider-wrapper  relative overflow-hidden flex  mx-10'>

                        {feedbacks.map((feedback, index) => <>
                            <div className='item h-auto sm:px-1 sm:py-9 p-10'>
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
                                        {feedback.description}
                                    </div>
                                    <div className='flex items-center space-x-2.5 mt-3'>
                                        <div className='w-[50px] h-[50px] rounded-full overflow-hidden relative'>
                                            <span>
                                                <img src={feedback.picture} alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className='text-[18px] text-qblack font-medium'>{feedback.name}</p>
                                            <p className='text-qgray text-[13px]'>{feedback.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>)

                        }

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
                    <div className=' flex justify-center mt-[40px]'>
                        <div className='flex space-x-5 item-center'>
                            <button type="button" className="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qyellow text-qyellow focus:bg-qyellow focus:text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg></button>
                            <button type="button" className="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qyellow text-qyellow focus:bg-qyellow focus:text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About