import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import WishlistBanner from './WishlistBanner'
import WishlistCart from "./WishlistCart";

interface Props {
}

const WishList: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div>
            <div>
                <WishlistBanner></WishlistBanner>
                <WishlistCart></WishlistCart>
            </div>
        </div>
    )
};

export default WishList