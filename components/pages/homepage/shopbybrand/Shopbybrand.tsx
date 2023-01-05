import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'

interface Props {
}

const Shopbybrand: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states);

    return (
        <div className=' w-full'>
            <div className='container-x mx-auto pb-[60px]'>
                <div >
                    <h1 className='sm:text-3xl text-xl font-600 font-semibold mb-10'>Shop by Brand</h1>
                    <div className='grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 '>
                        <div className='grid place-items-center border border-primarygray h-32 px-5'><img src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Foneplus-2022-09-25-04-15-53-8330.png&w=1920&q=75" alt="" /> </div>
                        <div className=' grid place-items-center border border-primarygray  h-32 px-5'>
                            <img src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Ftencent-2022-09-25-04-16-01-9474.png&w=1920&q=75" alt="" />
                        </div>
                        <div className='grid place-items-center border border-primarygray  h-32 px-5'>
                            <img src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fapple-2022-09-25-04-16-05-2914.png&w=1920&q=75" alt="" />
                        </div>
                        <div className='grid place-items-center border border-primarygray  h-32 px-5'>
                            <img src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmircrosoft-2022-09-25-04-16-10-7094.png&w=1920&q=75" alt="" />
                        </div>
                        <div className='grid place-items-center border border-primarygray  h-32 px-5'>
                            <img src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Flenovo-2022-09-25-04-16-19-9532.png&w=1920&q=75" alt="" />
                        </div>
                        <div className='grid place-items-center border border-primarygray  h-32 px-5'>
                            <img src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fhuawei-2022-09-25-04-16-23-2134.png&w=1920&q=75" alt="" />
                        </div>
                        <div className='grid place-items-center border border-primarygray  h-32 px-5'>
                            <img src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fnexus-2022-09-25-04-16-31-3263.png&w=1920&q=75" alt="" />
                        </div>
                        <div className='grid place-items-center border border-primarygray  h-32 px-5'>
                            <img src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fgoogle-2022-09-25-04-16-35-5464.png&w=1920&q=75" alt="" />
                        </div>
                        <div className='grid place-items-center border border-primarygray   h-32 px-5'>
                            <img src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Ffirefox-2022-09-25-04-16-43-3374.png&w=1920&q=75" alt="" />
                        </div>
                        <div className='grid place-items-center border border-primarygray  h-32 px-5'>
                            <img src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Ftesla-2022-09-25-04-16-47-6997.png&w=1920&q=75" alt="" />
                        </div>
                        <div className='grid place-items-center border border-primarygray  h-32 px-5'>
                            <img src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fbrave-2022-09-25-04-16-55-9281.png&w=1920&q=75" alt="" />
                        </div>
                        <div className='grid place-items-center border border-primarygray h-32 px-5'>
                            <img src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Ffacebook-2022-09-25-04-17-01-2209.png&w=1920&q=75" alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Shopbybrand