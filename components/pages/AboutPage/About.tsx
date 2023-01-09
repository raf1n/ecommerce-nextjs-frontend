import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import PageHeader from '../../shared/SharedPageHeader/PageHeader'
import { AiFillCheckCircle } from 'react-icons/ai';
import styles from './About.module.css';

interface Props {
}

const About: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

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

            </div>
        </div>
    )
}

export default About