import React from 'react'
import Footer from '../components/Footer'
import InAppBottom from '../components/InAppBottom'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

const dashboard = () => {
    return (
        <div>
            <Navbar/>
            <SideBar/>
            {/* <div className="flex flex-col items-center bg-red-400 max-w-lg">
                <div className="grid grid-cols-3 gap-4">
                    Video goes here
                </div>
            </div> */}
            <InAppBottom/>
            <Footer/>
        </div>
    )
}

export default dashboard
