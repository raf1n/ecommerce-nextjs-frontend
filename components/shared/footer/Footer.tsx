import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import FooterBody from './FooterBody'
import FooterBottom from './FooterBottom'
import FooterCta from './FooterCta'


interface Props {
}

const Footer: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <>
            <FooterCta />
            <FooterBody />
            <FooterBottom />
        </>
    )
}

export default Footer