import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'
import DashboardBreadcrumb from './DashboardBreadcrumb';
import styles from "./Myprofile.module.css"

interface Props {
    // slug: string;
    // link: string;
    // title: string;
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
                        <div className={`${styles['row']} mt-4`}>
                            <div className='grid grid-cols-8'>
                                <div className={`${styles['card']} ${styles['profile-widget']}`}>
                                    <div className={`${styles['profile-widget-header']} `}>
                                        <img className={`rounded-full   ${styles['profile-widget-picture']} `} src="https://api.websolutionus.com/shopo/uploads/website-images/ibrahim-khalil-2022-01-30-02-48-50-5743.jpg" alt="" />
                                    </div>
                                    <div className={`${styles['profile-widget-description']}`}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>


        </div>
    )
}

export default MyProfile;