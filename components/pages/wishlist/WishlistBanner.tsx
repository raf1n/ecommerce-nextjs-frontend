import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import PageHeader from '../../shared/pageHeader/PageHeader'

interface Props {
}

const WishlistBanner: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div>
            <PageHeader slug="Wishlist" link="/wishlist" title="Wishlist"></PageHeader>
        </div>
    )
}

export default WishlistBanner