import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from 'next/link'
import React,{ useState } from "react";
// import {PrismaClient} from '@prisma/client'
import Router from "next/router";



export default function Register() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [choice,setChoice] = useState('')
  
  // const[signup,setSignup] = useState()


    const submitData  = async e =>{
      e.preventDefault()
      try{
        const body = {username,email,password,choice}
        await fetch('http://localhost:3000/api/user',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(body)
        })
        await Router.push('/step1')
      }catch(error){
        console.log(error)
      }
    }
  
    return ( 
        <>
         <Navbar/>
         <div className="w-64 shadow-md mt-6 px-2 ml-3 py-2 pl-8 font-sans ">
          Use names in your ID
          {/* <span className="shadow-md float-right">x</span> */}
        </div>
          <form onSubmit={submitData}
          
          >
         <div className="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between my-2 w-full">
              {/* <div className="flex flex-col w-full my-2">
                <label className="text-sm font-semibold text-gray-600 dark:text-white">First Name</label>
                <input type="text" placeholder="Peter" className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
              <div className="flex flex-col w-full mx-8 my-2">
                <label className="text-sm font-semibold text-gray-600 dark:text-white">Last Name</label>
                <input type="text" value={} name="email" className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div> */}
              <div className="flex flex-col w-full my-2">
                <label className="text-sm font-semibold text-gray-600 dark:text-white">Name</label>
                <input type="text" 
                value={username} 
                name="username" 
                onChange={e => setUsername(e.target.value)}  
                className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between my-2 w-full">
              <div className="flex flex-col w-full my-2">
                <label className="text-sm font-semibold text-gray-600 dark:text-white">Email</label>
                <input type="email" 
                value={email} 
                name="email" 
                onChange={e => setEmail(e.target.value)} 
                placeholder="peterasizu@gmail.com" 
                className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between my-0 w-full">
              <div className="flex flex-col w-full my-0">
                <label className="text-sm font-semibold text-gray-600 dark:text-white">Password</label>
                <input type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                name="password" 
                placeholder="" 
                className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between my-0 w-full">
              <div className="flex flex-col w-full my-0">
                <label className="text-sm font-semibold text-gray-600 dark:text-white">Student</label>
                <input type="radio" 
                value="student"
                onChange={e => {setChoice(e.target.value)}}
                checked={choice==="student"}
                placeholder="" 
                className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
              <div className="flex flex-col w-full my-0">
                <label className="text-sm font-semibold text-gray-600 dark:text-white">Non-Student</label>
                <input type="radio" 
                value="nonStudent"
                checked={choice==="nonStudent"}
                onChange={e => {setChoice(e.target.value)}} 
                placeholder="" 
                className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div className="fex flex-row w-full">
              <button className="bg-red-500 to-grey-500 px-4 py-2 my-5 text-white rounded-md">Next</button>
            </div>
          </div>
          </form>
  <Footer/>
  </>
        
        
     );
}
 
// export default register;