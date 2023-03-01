import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import HeaderTop from './HeaderTop/HeaderTop'

interface Props {
}

const Header: React.FC<Props> = (props) => {
    const states = useSelector(() => controller.states);

    const previousRoute = document;

    console.log(previousRoute)

    return <>
        <HeaderTop />
    </>
}

export default Header