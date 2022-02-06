import React from 'react'


const Biodata = ({formData,setFormData}) => {
   
    return (
        <>
        
        <div class="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6 flex flex-col items-center max-w-xl mx-auto"></div>
         <div class="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto">
         <h1 className="text-2xl font-bold mb-8 text-gray-600">Biodata / University </h1>
        <div class="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div class="flex flex-col w-full my-2">
            <label class="text-sm font-semibold text-gray-600 dark:text-white">University</label>
            <input 
            type="text" 
            placeholder="university" 
            value={formData.university} 
            name="university" 
            onChange={e => setFormData({...formData, university:e.target.value})} 
            class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
          </div>
        </div>
        <div class="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div class="flex flex-col w-full my-2">
            <label class="text-sm font-semibold text-gray-600 dark:text-white">Title of person who signed your internship letter</label>
            <input type="text" placeholder="Title of person who signed your internship letter" value={formData.title} name="title" onChange={e => setFormData({...formData, title:e.target.value})} class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
          </div>
        </div>
        <div class="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div class="flex flex-col w-full my-2">
            <label class="text-sm font-semibold text-gray-600 dark:text-white">College/School/Faculty</label>
            <input type="text" placeholder="College/School/Faculty" value={formData.college} name="college" onChange={e => setFormData({...formData, college:e.target.value})} class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
          </div>
        </div>
        <div class="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div class="flex flex-col w-full my-2">
            <label class="text-sm font-semibold text-gray-600 dark:text-white">Department</label>
            <input type="text" placeholder="Department" value={formData.sdepart} name="sdepart" onChange={e => setFormData({...formData, sdepart:e.target.value})} class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
          </div>
        </div>
        <div class="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
          <div class="flex flex-col w-full my-2">
            <label class="text-sm font-semibold text-gray-600 dark:text-white">Phone Number</label>
            <input type="text" placeholder="phone number" value={formData.telno} name="telno" onChange={e => setFormData({...formData, telno:e.target.value})} class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
          </div>
        </div>
        
  {/* <div class="fex flex-row w-full">
    <button class="bg-red-500 to-grey-500 px-4 py-2 my-8 text-white rounded-md">Next</button>
  </div> */}
  </div>

  </>
    )
}

export default Biodata
