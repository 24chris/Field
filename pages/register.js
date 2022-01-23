import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from 'next/link'
import React,{ useState } from "react";
import emailjs from 'emailjs-com'
import {PrismaClient} from '@prisma/client'
import Router from "next/router";



const register = () => {
  // const initialState = {name:'',email:'',password:'',checkbox:''}
  // const [userData,setUserData] = useState(initialState)
  // const { name, email,password,choice} = userData

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [choice, setChoice] = useState('') 
  
  // const[signup,setSignup] = useState()

     
    const submitData  = async e =>{
      e.preventDefault()
      try{
        const body = {username,email,password}
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
            // async(data,e)=>{
          //   try{
          //     setUserData([...userData,data]);
          //     e.target.reset();
          //   }catch(err){
          //     console.log(err)
          //   }
          // }}
          >
         <div class="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6 flex flex-col items-center max-w-xl mx-auto"></div>
         <div class="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto">
            <div class="flex flex-col sm:flex-row items-center justify-between my-2 w-full">
              {/* <div class="flex flex-col w-full my-2">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">First Name</label>
                <input type="text" placeholder="Peter" class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
              <div class="flex flex-col w-full mx-8 my-2">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Last Name</label>
                <input type="text" value={} name="email" class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div> */}
              <div class="flex flex-col w-full my-2">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Name</label>
                <input type="text" value={username} name="username" onChange={e => setUsername(e.target.value)}  class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-between my-2 w-full">
              <div class="flex flex-col w-full my-2">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Email</label>
                <input type="email" value={email} name="email" onChange={e => setEmail(e.target.value)} placeholder="peterasizu@gmail.com" class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-between my-0 w-full">
              <div class="flex flex-col w-full my-0">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}name="password" placeholder="" class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            {/* <div class="flex flex-col sm:flex-row items-center justify-between my-2 w-full">
            <div class="w-full">
              <label class="text-sm font-semibold text-gray-600 dark:text-white">Student</label>
              <input class="flex flex-col mt-4"  onChange={e => setChoice(e.target.value)} name="choice" type="checkbox">
              </input>
            </div>
            <div class="flex flex-col w-full mx-8 my-0">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Non-student</label>
                <input type="checkbox"  name="choice"  class="border-b py-2 mt-4 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div> */}
            <div class="fex flex-row w-full">
              <button class="bg-red-500 to-grey-500 px-4 py-2 my-5 text-white rounded-md">Next</button>
            </div>
          </div>
          </form>
  <Footer/>
  </>
        
        
     );
}
 
export default register;