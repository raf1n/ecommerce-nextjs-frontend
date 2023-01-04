import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import styles from "./Ads.module.css";

interface Props {
}

const AD2: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div className="one-column-ads-one md:h-[295px] h-[190px] md:mb-[60px] mb-[30px] w-full">
            <div className="container-x mx-auto h-full">
                <div className={`${styles['ad2-bg']} w-full h-full flex justify-center items-center xl:py-[60px] md:py-[40px] py-4 `}>
                    <div className="w-full h-full flex flex-col justify-between items-center">
                        <div>
                            <div className="md:mb-3 text-center">
                                <span className="text-qblack uppercase text-xs font-semibold">HEADPHONE</span>
                            </div>
                            <div className="flex justify-center">
                                <h1 className="w-[300px] md:text-[30px] text-[20px] md:leading-[40px] leading-1 text-qblack font-semibold text-center">
                                    Get the best deal for Headphones
                                </h1>
                            </div>
                        </div>
                        <div className="group">
                            <a href="" rel="noopener noreferrer">
                                <div className="w-[136px] h-[40px] bg-white relative flex justify-center overflow-hidden">
                                    <div className="w-full h-full bg-qyellow absolute transition-all duration-300 ease-in-out -left-[140px] group-hover:left-0 top-0"></div>
                                    <div className="flex space-x-2 items-center relative z-10">
                                        <span className="text-sm font-semibold transition-all duration-300 ease-in-out text-qyellow group-hover:text-qblack">
                                            Shop Now
                                        </span>
                                        <span className="text-qyellow transition-all duration-300 ease-in-out group-hover:text-qblack">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z" /></svg>
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AD2