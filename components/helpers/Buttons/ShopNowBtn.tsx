import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import Link from 'next/link';

interface Props {
    color: {
        textColor: string
    }
}

const ShopNowBtn: React.FC<Props> = ({ color }) => {

    const states = useSelector(() => controller.states)

    return (
        <div className="w-[100px] group">
            <Link href="" rel="noopener noreferrer">
                <div className="cursor-pointer w-full relative">
                    <div className="inline-flex items-center relative z-20">
                        <span className={`text-sm ${color.textColor} font-medium leading-[30px]`}>Shop Now</span>
                        <span className={`leading-[30px] ${color.textColor}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z" /></svg>
                        </span>
                    </div>
                    <div className="w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[2px] bg-qyellow absolute left-0 bottom-0 z-10">
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ShopNowBtn