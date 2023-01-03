import React from 'react'
import { useSelector } from 'react-redux'
import Homepage from '../components/pages/homepage/Homepage'
import { controller } from '../src/state/StateController'
import DeliberyCompenents from '../components/pages/homepage/DeliberyPolicyData/DeliberyCompenents'

interface Props {
}

const ironman: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    
    return (
        <div>
       <DeliberyCompenents/>
        </div>

    )
}

export default ironman