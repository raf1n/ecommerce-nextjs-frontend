import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import { Jsondata } from '../../../../src/utils/Jsondata'
import ShopNowBtn from '../Buttons/ShopNowBtn'
import styles from './Campaign.module.css'
import img1 from "./googlePlay.png";
import img2 from "./app.png";

interface Props {
}

const Campaign: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div className="w-full lg:h-[460px] md:mb-[60px] mb-[30px]">
            <div className="container-x mx-auto h-full">
                <div className="lg:flex xl:space-x-[30px] lg:space-x-5 items-center h-full">
                    <div className={`${styles['campaign-countdown']} lg:w-1/2 h-[300px] sm:h-[400px] lg:h-full w-full mb-5 lg:mb-0`}>
                        <div className="w-full xl:p-12 p-5">
                            <div className="w-full flex lg:justify-between justify-evenly lg:mb-10 mb-2">
                                {
                                    Jsondata.saleTime.map((item, index) => {
                                        return (
                                            <div>
                                                <div className="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                                                    <span className="font-bold sm:text-[30px] text-[14px] text-[#EB5757]">{item.duration}</span>
                                                </div>
                                                <p className="sm:text-[18px] text-[12px] font-medium text-center leading-8">{item.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="mb-4">
                                <h1 className="text-[44px] text-qblack font-semibold">WOO! Flash Sale</h1>
                            </div>
                            <ShopNowBtn color={{ textColor: 'text-qblack' }} />
                        </div>
                    </div>
                    <div className={`${styles['download-app']} flex-1 lg:h-full h-[430px] xl:p-12 p-5 aos-init aos-animate`}>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <p className="text-[13px] font-semibold text-qblack mb-3">MOBILE APP VERSION</p>
                                <h1 className="lg:text-[30px] text-2xl font-semibold text-qblack leading-10 mb-8">
                                    Get Our
                                    <span className="text-qred border-b-2 border-qred mx-2">Mobile App</span>
                                    <br />
                                    It's Make easy for you life!
                                </h1>
                                <div className="flex space-x-5 items-center">
                                    {
                                        [img1, img2].map(item => {
                                            return (
                                                <div className="bg-white w-[170px] h-[60px] flex justify-center items-center cursor-pointer">
                                                    <a href="" rel='noopener noreferrer'>
                                                        <picture>
                                                            <img src={item.src} alt="" />
                                                        </picture>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Campaign