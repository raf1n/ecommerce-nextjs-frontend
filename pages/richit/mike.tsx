import React from 'react'
import { useSelector } from 'react-redux'
import Contact from '../../components/pages/Contact/Contact'
import FAQ from '../../components/pages/FAQ/FAQ'
import Itemdetails from '../../components/pages/HomePage/ItemDetails/ItemDetails'
import TopRated from '../../components/pages/HomePage/TopRatedProducts/ToprRated'
import WishList from '../../components/pages/Wishlist/Wishlist'
import { controller } from '../../src/state/StateController'
import ShopByBrand from '../../components/pages/HomePage/ShopByBrand/ShopByBrand'
import MyProfile from '../../components/pages/MyProfile/MyProfile'


interface Props {
}

const sadab: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <>
            <ShopByBrand />
            <TopRated />
            <Itemdetails />
            <Contact />
            <FAQ />
            <WishList />
            <MyProfile />
        </>
    )
}

export default sadab