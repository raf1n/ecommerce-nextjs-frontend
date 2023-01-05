import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'
import DashboardBreadcrumb from './DashboardBreadcrumb';
import styles from "./Myprofile.module.css"

interface Props {
    slug: string;
    link: string;
    title: string;
}

const MyProfile: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div>
            <div className={`${styles['main-content']}`}>
                <section className={`${styles['section']}`}>
                    <div className={`${styles['section-header']}  justify-between`}>
                        <h1 className={`${styles['title']} `}>My Profile</h1>
                        <div className={`${styles['section-header-breadcrumb']} `}>
                            <DashboardBreadcrumb slug='My Profile' link='/myprofile'></DashboardBreadcrumb>
                        </div>
                    </div>
                    <div className='section-body'>
                        <div className={`${styles['row']} mt-sm-4`}>
                            <div className='col-8'>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>


        </div>
    )
}

export default MyProfile