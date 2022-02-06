import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from 'next/link'
import React,{ useState } from "react";
// import emailjs from 'emailjs-com'
// import {PrismaClient} from '@prisma/client'
import Router from "next/router";


const studentForm = () =>{
    return(
        <>
        
        <div className="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6 flex flex-col items-center max-w-xl mx-auto"></div>
         <div className="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto">
         <h1 className="text-2xl font-bold mb-8 text-gray-600">Biodata / University </h1>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">University</label>
            <input 
            type="text" 
            placeholder="university" 
            value={formData.university} 
            name="university" 
            onChange={e => setFormData({...formData, university:e.target.value})} 
            className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">Title of person who signed your internship letter</label>
            <input type="text" placeholder="Title of person who signed your internship letter" value={formData.title} name="title" onChange={e => setFormData({...formData, title:e.target.value})} className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">College/School/Faculty</label>
            <input type="text" placeholder="College/School/Faculty" value={formData.college} name="college" onChange={e => setFormData({...formData, college:e.target.value})} className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">Department</label>
            <input type="text" placeholder="Department" value={formData.sdepart} name="sdepart" onChange={e => setFormData({...formData, sdepart:e.target.value})} className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div className="flex flex-col w-full my-2">
            <label className="text-sm font-semibold text-gray-600 dark:text-white">Phone Number</label>
            <input type="text" placeholder="phone number" value={formData.telno} name="telno" onChange={e => setFormData({...formData, telno:e.target.value})} className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
          </div>
        </div>

        <div className="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6 flex flex-col items-center max-w-xl mx-auto"></div>
      <div className="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-gray-600">Course Details</h1>
     <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
       <div className="flex flex-col w-full my-2">
         <label className="text-sm font-semibold text-gray-600 dark:text-white">Course Field</label>
         <input type="text" placeholder="course field" value={formData.cfield} name="cfield" onChange={e => setFormData({...formData, cfield:e.target.value})} className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
       </div>
     </div>
     <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
       <div className="flex flex-col w-full my-2">
         <label className="text-sm font-semibold text-gray-600 dark:text-white">Specify Course</label>
         <input type="text" placeholder="specify course" value={formData.specify} name="specify" onChange={e => setFormData({...formData, specify:e.target.value})} className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
       </div>
     </div>
     <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
       <div className="flex flex-col w-full my-2">
         <label className="text-sm font-semibold text-gray-600 dark:text-white">Choose what department you want to do internship in</label>
         <input type="text" placeholder="department" name="depart" value={formData.depart} onChange={e => setFormData({...formData, depart:e.target.value})} className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
       </div>
     </div>
     <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
       <div className="flex flex-col w-full my-2">
         <label className="text-sm font-semibold text-gray-600 dark:text-white">Year of Study</label>
         <input type="text" placeholder="year of study" name="yos" value={formData.yos} onChange={e => setFormData({...formData, yos:e.target.value})} className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
       </div>
     </div>
     <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
       <div className="flex flex-col w-full my-2">
         <label className="text-sm font-semibold text-gray-600 dark:text-white">Registration Number</label>
         <input type="text" placeholder="registration number" value={formData.regno} name="regno" onChange={e => setFormData({...formData, regno:e.target.value})} className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
       </div>
     </div>
     <div className="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6 flex flex-col items-center max-w-xl mx-auto"></div>
         <div className="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto">
         <h1 className="text-2xl font-bold mb-8 text-gray-600">University Details</h1>
         <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
    <div className="flex flex-col w-full my-2">
      <label className="text-sm font-semibold text-gray-600 dark:text-white">Area of residence</label>
      <input 
      type="text" 
      placeholder="area of residence" 
      value={formData.residence} 
      name="reidence" 
      onChange={e => setFormData({...formData, residence:e.target.value})}
       className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
    </div>
  </div>
  <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
    <div className="flex flex-col w-full my-2">
      <label className="text-sm font-semibold text-gray-600 dark:text-white">Guardian Name</label>
      <input 
      type="text" 
      placeholder="Guardian name" 
      value={formData.guardname} 
      name="guardname" 
      onChange={e => setFormData({...formData, guardname:e.target.value})} 
      className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
    </div>
    <div className="flex flex-col w-full mx-8 my-2">
      <label className="text-sm font-semibold text-gray-600 dark:text-white">Tel No:</label>
      <input 
      type="text" 
      placeholder="Telephone number" 
      value={formData.stelno} 
      name="stelno" 
      onChange={e => setFormData({...formData, stelno:e.target.value})} 
      className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
    </div>
  </div>
  <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
    <div className="flex flex-col w-full my-2">
      <label className="text-sm font-semibold text-gray-600 dark:text-white">Upload Internship Letter</label>
      <input 
      type="file" 
      placeholder="Internship letter" 
      value={formData.inletter} 
      name="inletter" 
      onChange={e => setFormData({...formData, inletter:e.target.value})}
      className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
    </div>
  </div>
  <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
    <div className="flex flex-col w-full my-2">
      <label className="text-sm font-semibold text-gray-600 dark:text-white">Upload university ID</label>
      <input 
      type="file" 
      placeholder="university ID" 
      value={formData.inID} 
      name="inID" 
      onChange={e => setFormData({...formData, inID:e.target.value})} 
      className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
    </div>
  </div>
  <div className="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6 flex flex-col items-center max-w-xl mx-auto"></div>
        <div className="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-gray-600">Course Details</h1>
        <div className=" text-sm font-semibold text-gray-600 dark:text-white ">Do you want to work as a Group or indiviual?</div>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
            <div className="w-full">
                <label className="text-sm font-semibold text-gray-600 dark:text-white">Group</label>
                <input className="flex flex-col mt-4" value={formData.group} name="group" onChange={e => setFormData({...formData, group:e.target.value})}  type="radio">
                </input>
            </div>
            <div className="flex flex-col w-full mx-8 my-2">
                <label className="text-sm font-semibold text-gray-600 dark:text-white">Indiviual</label>
                <input type="radio" placeholder="+11 9876543321" value={formData.indi} name="indi" onChange={e => setFormData({...formData, indi:e.target.value})}  className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
                </div>
            </div>
                <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
                    <div className="flex flex-col w-full my-2">
                    <label className="text-sm font-semibold text-gray-600 dark:text-white">Time of convenience for doing Internship</label>
                    <input type="time" placeholder="Time of convenience" value={formData.con} name="con" onChange={e => setFormData({...formData, con:e.target.value})}  className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
                    </div>
                </div>
                
            <div className="fex flex-row w-full">
            <button className="bg-red-500 to-grey-500 px-4 py-2 my-8 text-white rounded-md">Next</button>
            </div>
            </div>
            
            </div>
        
   <div className="fex flex-row w-full">
    <button className="bg-red-500 to-grey-500 px-4 py-2 my-8 text-white rounded-md">Next</button>
  </div> 
  </div>
  </div>
  </>
    );
}

export default studentForm
