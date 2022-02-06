import React from 'react'


const universitydetails = ({formData,setFormData}) => {
  
    return (
        <>
         
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
  {/* <div className="fex flex-row w-full">
    <button className="bg-red-500 to-grey-500 px-4 py-2 my-8 text-white rounded-md">Next</button>
  </div> */}
  </div>
        </>
    )
}

export default universitydetails
