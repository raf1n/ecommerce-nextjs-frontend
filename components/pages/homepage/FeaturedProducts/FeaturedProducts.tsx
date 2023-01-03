import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'

interface Props {
}

const FeaturedProducts: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    
    return (
        <div>
            FeaturedProducts
        </div>
    )
}

export default FeaturedProducts