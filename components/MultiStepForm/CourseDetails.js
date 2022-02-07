import React from 'react'


const CourseDetails = ({formData,setFormData}) => {
      
    return (

      <>
       
      <div className="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6 flex flex-col items-center max-w-xl mx-auto"></div>
      <div className="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-gray-600">Course Details</h1>
     <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
       <div className="flex flex-col w-full my-2">
         <label className="text-sm font-semibold text-gray-600 dark:text-white">Course Field</label>
         <input type="text" placeholder="course field" value={formData.cfield} name="cfield" required={true}  onChange={e => setFormData({...formData, cfield:e.target.value})} className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
       </div>
     </div>
     <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
       <div className="flex flex-col w-full my-2">
         <label className="text-sm font-semibold text-gray-600 dark:text-white">Specify Course</label>
         <input type="text" placeholder="specify course" value={formData.specify} name="specify" required={true}  onChange={e => setFormData({...formData, specify:e.target.value})} className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
       </div>
     </div>
     <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
       <div className="flex flex-col w-full my-2">
         <label className="text-sm font-semibold text-gray-600 dark:text-white">Choose what department you want to do internship in</label>
         <input type="text" placeholder="department" name="depart" required={true} value={formData.depart} onChange={e => setFormData({...formData, depart:e.target.value})} className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
       </div>
     </div>
     <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
       <div className="flex flex-col w-full my-2">
         <label className="text-sm font-semibold text-gray-600 dark:text-white">Year of Study</label>
         <input type="text" placeholder="year of study" name="yos" required={true} value={formData.yos} onChange={e => setFormData({...formData, yos:e.target.value})} className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
       </div>
     </div>
     <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
       <div className="flex flex-col w-full my-2">
         <label className="text-sm font-semibold text-gray-600 dark:text-white">Registration Number</label>
         <input type="text" placeholder="registration number" value={formData.regno} name="regno" required={true} onChange={e => setFormData({...formData, regno:e.target.value})} className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
       </div>
     </div>
{/* <div className="fex flex-row w-full">
 <button className="bg-red-500 to-grey-500 px-4 py-2 my-8 text-white rounded-md">Next</button>
</div> */}
</div>
</>
    )
}

export default CourseDetails
