import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import PageHeader from '../../shared/SharedPageHeader/PageHeader';
import WishlistCart from "./WishlistCart";

interface Props {
}

const WishList: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div>
            <div>
                <PageHeader slug="Wishlist" link="/wishlist" title="Wishlist" />
                <WishlistCart></WishlistCart>
            </div>
        </div>
    )
};

export default WishList