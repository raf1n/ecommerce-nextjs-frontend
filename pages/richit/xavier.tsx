import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/shared/Header/HeaderTop/HeaderTop'
import { controller } from '../../src/state/StateController'

interface Props {
}

const xavier: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div>
            <Header />
        </div>
    )
}

export default xavier