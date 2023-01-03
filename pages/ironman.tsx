import React from 'react'
import { useSelector } from 'react-redux'
import DeliberyComponents from '../components/pages/homepage/DeliberyPolicyData/DeliveryComponents'
import Homepage from '../components/pages/homepage/Homepage'
import { controller } from '../src/state/StateController'


interface Props {
}

const ironman: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    
    return (
        <div>
       <DeliberyComponents/>
        </div>

    )
}

export default ironman