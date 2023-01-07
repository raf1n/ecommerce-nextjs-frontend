import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'

interface Props {

    link: string
}

const ViewMoreBtn: React.FC<Props> = (props) => {
    const { link } = props;
    const states = useSelector(() => controller.states)


    return (
        <div>
            <a href={link} rel="noopener noreferrer">
                <div className="flex space-x-2 items-center cursor-pointer">
                    <p className="text-base font-bold text-qblack">View More</p>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6Z" /></svg>
                    </span>
                </div>
            </a>
        </div>
    )
}

export default ViewMoreBtn