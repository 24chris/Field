import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Biodata from './Biodata'
import CourseDetails from './CourseDetails'
import UniversityDetails from './UniversityDetails'
import Pay from './Pay'
import Router from "next/router";

const RegForm = () => {
    const [page,setPage] = useState(0);

    const FormTitles = ['Biodata','CourseDetails','UniversityDetails','Pay'];

    const [formData,setFormData]= useState({
        university:"",
        title:"",
        college:"",
        sdepart:"",
        telno:"",
        cfield:"",
        specify:"",
        depart:"",
        yos:"",
        regno:"",
        residence:"",
        guardname:"",
        stelno:"",
        inletter:"",
        inID:"",
        cat:"",
        con:"",
     })


    const [isShown,setIsShown] = useState(false)

    const PageDisplay = () =>{
        if(page == 0){
            return <Biodata formData={formData} setFormData={setFormData}/>
        }else if(page==1){
            return <CourseDetails formData={formData} setFormData={setFormData}/>
        }
        else if(page ==2){
            return <UniversityDetails formData={formData} setFormData={setFormData}/>
        }
        else{
            return <Pay formData={formData} setFormData={setFormData}/>
        }
    }
    const submitData  = async e =>{
        // e.preventDefault()
        try{
          const body = {formData}
          await fetch('http://localhost:3000/api/student',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(body)
          })
          await Router.push('/dashboard')
        }catch(error){
          console.log(error)
        }
      }
      const sendEmail = async(e)=>{
        e.preventDefault();
        const results = await fetch('/api/email',{
          method:'POST',
          body:JSON.stringify({regno:regno})
        })
      }
    
    return (
        <div className="fex flex-row w-full">
            
           
            {/* <h1>{FormTitles[page]}</h1> */}
            <div>{PageDisplay()}</div>
            
            <button 
            className="bg-blue-500 to-grey-500 px-4 py-2 my-8  text-white rounded-md" 
            onMouseEnter={()=>setIsShown(true)}
            onMouseLeave={()=>setIsShown(false)}

            onClick={()=>{
                if(page == FormTitles.length-1){
                    alert("Form submitted")
                    console.log(formData)
                    submitData()
                }else
                setPage((currPage) =>currPage+1)}}>
            {page == FormTitles.length-1?"Submit":"Next"}

            
            </button>
            
            {/* {isShown && (<div className=" bg-red-400 animate-bounce">Registration fee is 11,000/=</div>)} */}
        </div>
        
    )
}

export default RegForm
