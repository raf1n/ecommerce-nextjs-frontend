import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import WishlistBanner from './WishlistBanner'

interface Props {
}

const WishList: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div>
            <div>
                <WishlistBanner></WishlistBanner>
            </div>
        </div>
    )
}

export default WishList