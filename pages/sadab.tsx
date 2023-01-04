import React from 'react'
import { useSelector } from 'react-redux'
import FAQ from '../components/pages/faq/FAQ'
import Banner1 from '../components/pages/homepage/Banners/Banner1'
import Contact from '../components/pages/homepage/contact/Contact'
import Itemdetails from '../components/pages/homepage/itemdetails/Itemdetails'
import ProductCategory from '../components/pages/homepage/ProductCategory/ProductCategory'
import Shopbybrand from '../components/pages/homepage/shopbybrand/Shopbybrand'
import Toprated from '../components/pages/homepage/topratedproducts/Toprated'
import { controller } from '../src/state/StateController'

interface Props {
}

const sadab: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <>
            <Shopbybrand />
            <Toprated />
            {/* <ProductCategory />
            <Banner1 /> */}
            <Itemdetails />
            <Contact></Contact>
            <FAQ></FAQ>
        </>
    )
}

export default sadab