import React from 'react'
import { useSelector } from 'react-redux'
import Contact from '../../components/pages/contact/Contact'
import FAQ from '../../components/pages/faq/FAQ'
import Itemdetails from '../../components/pages/homepage/itemdetails/Itemdetails'
import Shopbybrand from '../../components/pages/homepage/shopbybrand/Shopbybrand'
import Toprated from '../../components/pages/homepage/topratedproducts/Toprated'
import WishList from '../../components/pages/wishlist/Wishlist'
import { controller } from '../../src/state/StateController'


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
            <WishList></WishList>
        </>
    )
}

export default sadab