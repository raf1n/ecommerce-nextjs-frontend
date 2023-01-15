import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../components/pages/AdminPage/Sidebar/Sidebar'
import AdminProfile from '../components/pages/ProfilePage/AdminProfile/AdminProfile'
import { controller } from '../src/state/StateController'

interface Props {
}

const admin_profile: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        // <div className="flex h-screen overflow-y-hidden">
        //     <Sidebar />
        //     <div className="flex-1 overflow-y-scroll py-8 px-14">
        //         <AdminProfile />
        //     </div>
        // </div>
        <></>
    )
}

export default admin_profile