import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from 'next/link'
import React,{ useState } from "react";
import {PrismaClient} from '@prisma/client'
import Router from "next/router";



export default function NonStForm() {

  const [pnumber, setNumber] = useState('')
  const [program, setProgram] = useState('')
  const [level, setLevel] = useState('')
  const [certificate,setCert] = useState('')
  
  // const[signup,setSignup] = useState()


    const sendData  = async e =>{
      e.preventDefault()
      try{
        const body = {number,program,level,certificate}
        await fetch('http://localhost:3000/api/nonstudent',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(body)
        })
        await Router.push('/dashboard2')
      }catch(error){
        console.log(error)
      }
    }
  
    return ( 
        <>
         <Header/>
          <form onSubmit={sendData}
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
                <label className="text-sm font-semibold text-gray-600 dark:text-white">Phone Number</label>
                <input type="text" 
                value={pnumber} 
                name="pnumber" 
                onChange={e => setNumber(e.target.value)}  
                required={true}
                className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between my-2 w-full">
              <div className="flex flex-col w-full my-2">
                <label className="text-sm font-semibold text-gray-600 dark:text-white">Program of Interest</label>
                <input type="text" 
                value={program} 
                name="program" 
                onChange={e => setProgram(e.target.value)}
                required={true} 
                placeholder="Engineering" 
                className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between my-0 w-full">
              <div className="flex flex-col w-full my-0">
                <label className="text-sm font-semibold text-gray-600 dark:text-white">Skill Level</label>
                <input type="text" 
                value={level} 
                onChange={e => setLevel(e.target.value)}
                required={true}
                name="level" 
                placeholder="" 
                className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between my-0 w-full">
              <div className="flex flex-col w-full my-0">
                <label className="text-sm font-semibold text-gray-600 dark:text-white">Do you require a certificate?</label>
                <input type="checkbox" 
                value="yes"
                onChange={e => {setCert(e.target.value)}}
                
                checked={certificate==="yes"}
                placeholder="" 
                className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
              <div className="flex flex-col w-full my-0">
                {/* <label className="text-sm font-semibold text-gray-600 dark:text-white">Non-Student</label>
                <input type="radio" 
                value="nonStudent"
                checked={choice==="nonStudent"}
                onChange={e => {setChoice(e.target.value)}} 
                
                placeholder="" 
                className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" /> */}
              </div>
            </div>
            <div className="fex flex-row w-full">
              <button className="bg-red-500 to-grey-500 px-4 py-2 my-5 text-white rounded-md">Submit</button>
            </div>
          </div>
          </form>
  {/* <Footer/> */}
  </>
        
        
     );
}
 
// export default register;