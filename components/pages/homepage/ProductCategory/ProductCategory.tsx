import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import styles from "./ProductCategory.module.css";
interface Props {
}

const ProductCategory: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)


    const productCategories = [
        {
            name: 'Electronics',
            image: 'https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Felectronics-2022-11-19-02-48-28-5548.png&w=1920&q=75'
        },
        {
            name: 'Game',
            image: 'https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fgame-2022-11-19-02-48-48-6382.png&w=1920&q=75'
        },
        {
            name: 'Mobile',
            image: 'https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmobile-2022-11-19-02-49-20-2538.png&w=1920&q=75'
        },
        {
            name: 'Lifestyle',
            image: 'https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Flifestyle-2022-11-19-02-49-38-3139.png&w=1920&q=75'
        },
        {
            name: 'Babies & Toys',
            image: 'https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fbabies-toys-2022-11-19-02-50-00-3811.png&w=1920&q=75'
        },
        {
            name: 'Bike',
            image: 'https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fbike-2022-11-19-02-50-18-4648.png&w=1920&q=75'
        },
        {
            name: "Men's Fashion",
            image: 'https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmens-fasion-2022-11-19-02-50-39-5203.png&w=1920&q=75'
        },
        {
            name: 'Woman Fashion',
            image: 'https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fwomans-fasion-2022-11-19-02-52-58-2850.png&w=1920&q=75'
        }
    ]

    return (
        <div className="category-section-wrapper w-full">
            <div className="container-x mx-auto pb-[60px]">
                <div>
                    <div className="w-full grid xl:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-[30px]">
                        {
                            productCategories.map((item, index) => {
                                return (
                                    <div className="item w-full cursor-pointer group">
                                        <a href="/" rel='noopener noreferrer'>
                                            <div className="w-full h-[120px] relative rounded bg-white flex justify-center items-center">
                                                <div className="w-full h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out">
                                                    <span className={styles["h"]}>
                                                        <img src={item.image} alt={item.name} />
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-base text-qgray text-center mt-5 group-hover:text-qgreen transition duration-300 ease-in-out">{item.name}</p>
                                        </a>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCategory