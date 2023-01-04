import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import { Jsondata } from '../../../../src/utils/Jsondata'
import { AiOutlineArrowRight } from "react-icons/ai";
import TopRatedProduct from './TopRatedProduct';
interface Props {
}

const TopRated: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div className=' w-full'>
            <div className='container-x mx-auto pb-[60px]'>
                <div className=' section-title flex justify-between items-center mb-5'>
                    <div>
                        <h1 className='sm:text-3xl text-xl font-semibold font-semibold mb-10'>Top Rated Products</h1>
                    </div>
                    <div className='view-more-btn flex items-center		'>
                        <button className='text-base font-semibold font-semibold'>View More

                        </button>
                        <AiOutlineArrowRight />
                        <span className='animate-right'>

                        </span>
                    </div>
                </div>
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

export default TopRated



