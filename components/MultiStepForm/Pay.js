import React from 'react'

const Pay = ({formData,setFormData}) => {
    return (
        <>
        <div class="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6 flex flex-col items-center max-w-xl mx-auto"></div>
        <div class="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-gray-600">Course Details</h1>
        <div className=" text-sm font-semibold text-gray-600 dark:text-white ">Do you want to work as a Group or indiviual?</div>
        <div class="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
            <div class="w-full">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Group</label>
                <input class="flex flex-col mt-4" value={formData.group} name="group" onChange={e => setFormData({...formData, group:e.target.value})}  type="radio">
                </input>
            </div>
            <div class="flex flex-col w-full mx-8 my-2">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Indiviual</label>
                <input type="radio" placeholder="+11 9876543321" value={formData.indi} name="indi" onChange={e => setFormData({...formData, indi:e.target.value})}  class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
                </div>
            </div>
                <div class="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
                    <div class="flex flex-col w-full my-2">
                    <label class="text-sm font-semibold text-gray-600 dark:text-white">Time of convenience for doing Internship</label>
                    <input type="time" placeholder="Time of convenience" value={formData.con} name="con" onChange={e => setFormData({...formData, con:e.target.value})}  class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
                    </div>
                </div>
                
            {/* <div class="fex flex-row w-full">
            <button class="bg-red-500 to-grey-500 px-4 py-2 my-8 text-white rounded-md">Next</button>
            </div> */}
            </div>
  </>
    )
}

export default Pay
