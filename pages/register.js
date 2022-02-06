import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from 'next/link'
import React,{ useState } from "react";
import emailjs from 'emailjs-com'
// import {PrismaClient} from '@prisma/client'
import Router from "next/router";



const register = () => {
  // const initialState = {name:'',email:'',password:'',checkbox:''}
  // const [userData,setUserData] = useState(initialState)
  // const { name, email,password,choice} = userData

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
    // const sendEmail = async(e)=>{
    //   e.preventDefault();
    //   const results = await fetch('/api/email',{
    //     method:'POST',
    //     body:JSON.stringify({email:email})
    //   });
    //   if(results.status==200){
    //     console.log("success")
    //   }else{
    //     console.log("error")
    //   }
    // }
    return ( 
        <>
         <Navbar/>
         <div className="w-64 shadow-md mt-6 px-2 ml-3 py-2 pl-8 font-sans ">
          Use names in your ID
          {/* <span className="shadow-md float-right">x</span> */}
        </div>
          <form onSubmit={submitData}
          
          >
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
                <input type="text" 
                value={username} 
                name="username" 
                onChange={e => setUsername(e.target.value)}  
                class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-between my-2 w-full">
              <div class="flex flex-col w-full my-2">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Email</label>
                <input type="email" 
                value={email} 
                name="email" 
                onChange={e => setEmail(e.target.value)} 
                placeholder="peterasizu@gmail.com" 
                class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-between my-0 w-full">
              <div class="flex flex-col w-full my-0">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Password</label>
                <input type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                name="password" 
                placeholder="" 
                class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-between my-0 w-full">
              <div class="flex flex-col w-full my-0">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Student</label>
                <input type="radio" 
                value="student"
                onChange={e => {setChoice(e.target.value)}}
                checked={choice==="student"}
                placeholder="" 
                class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
              <div class="flex flex-col w-full my-0">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Non-Student</label>
                <input type="radio" 
                value="nonStudent"
                checked={choice==="nonStudent"}
                onChange={e => {setChoice(e.target.value)}} 
                placeholder="" 
                class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
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