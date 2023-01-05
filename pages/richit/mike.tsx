import React from 'react'
import { useSelector } from 'react-redux'
import Contact from '../../components/pages/Contact/Contact'
import FAQ from '../../components/pages/FAQ/FAQ'
import Itemdetails from '../../components/pages/Homepage/ItemDetails/Itemdetails'
import Shopbybrand from '../../components/pages/Homepage/ShopByBrand/Shopbybrand'
import TopRated from '../../components/pages/Homepage/TopRatedProducts/Toprated'
import MyProfile from '../../components/pages/MyProfile/MyProfile'

import WishList from '../../components/pages/Wishlist/Wishlist'

import { controller } from '../../src/state/StateController'


interface Props {
}

const sadab: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <>
            <Shopbybrand />
            <TopRated />
            {/* <ProductCategory />
            <Banner1 /> */}
            <Itemdetails />
            <Contact></Contact>
            <FAQ></FAQ>
            <WishList></WishList>
            <MyProfile></MyProfile>
        </>
    )
}

export default sadab