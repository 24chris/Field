import { getSession } from 'next-auth/react'
import React from 'react'
import Footer from '../components/Footer'
import NonInAppBottom from '../components/NonInAppBottom'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

const dashboard = ({session}) => {
    return (
        <div>
            <Navbar/>
            <SideBar/>
            {/* <div className="flex flex-col items-center bg-red-400 max-w-lg">
                <div className="grid grid-cols-3 gap-4">
                    Video goes here
                </div>
            </div> */}
            <NonInAppBottom/>
            <Footer/>
        </div>
    )
}

export default dashboard


export async function getServerSideProps({req}){
    const session = await getSession()

    if(!session){
        return{
            redirect:{
                destination:'/login',
                permanent:false,
            }
        }
    console.log(session)
    return{
        props:{
            session,
        }
    }
    }
}