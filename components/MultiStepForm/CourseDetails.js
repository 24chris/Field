import React from 'react'


const CourseDetails = ({formData,setFormData}) => {
      
    return (

      <>
       
      <div class="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6 flex flex-col items-center max-w-xl mx-auto"></div>
      <div class="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-gray-600">Course Details</h1>
     <div class="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
       <div class="flex flex-col w-full my-2">
         <label class="text-sm font-semibold text-gray-600 dark:text-white">Course Field</label>
         <input type="text" placeholder="course field" value={formData.cfield} name="cfield" onChange={e => setFormData({...formData, cfield:e.target.value})} class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
       </div>
     </div>
     <div class="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
       <div class="flex flex-col w-full my-2">
         <label class="text-sm font-semibold text-gray-600 dark:text-white">Specify Course</label>
         <input type="text" placeholder="specify course" value={formData.specify} name="specify" onChange={e => setFormData({...formData, specify:e.target.value})} class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
       </div>
     </div>
     <div class="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
       <div class="flex flex-col w-full my-2">
         <label class="text-sm font-semibold text-gray-600 dark:text-white">Choose what department you want to do internship in</label>
         <input type="text" placeholder="department" name="depart" value={formData.depart} onChange={e => setFormData({...formData, depart:e.target.value})} class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
       </div>
     </div>
     <div class="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
       <div class="flex flex-col w-full my-2">
         <label class="text-sm font-semibold text-gray-600 dark:text-white">Year of Study</label>
         <input type="text" placeholder="year of study" name="yos" value={formData.yos} onChange={e => setFormData({...formData, yos:e.target.value})} class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
       </div>
     </div>
     <div class="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
       <div class="flex flex-col w-full my-2">
         <label class="text-sm font-semibold text-gray-600 dark:text-white">Registration Number</label>
         <input type="text" placeholder="registration number" value={formData.regno} name="regno" onChange={e => setFormData({...formData, regno:e.target.value})} class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
       </div>
     </div>
{/* <div class="fex flex-row w-full">
 <button class="bg-red-500 to-grey-500 px-4 py-2 my-8 text-white rounded-md">Next</button>
</div> */}
</div>
</>
    )
}

export default CourseDetails
