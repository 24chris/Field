import React from 'react'
import RegForm from '../components/MultiStepForm/RegForm'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const completeRegistration = () => {
    return (
        <div>
            <Navbar/>
            <RegForm/>
            <Footer/>
        </div>
    )
}

export default completeRegistration
