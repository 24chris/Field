import React from 'react'

const Pay = ({formData,setFormData}) => {
    return (
        <>
        <div className="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6 flex flex-col items-center max-w-xl mx-auto"></div>
        <div className="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto">
        <h1 classNameName="text-2xl font-bold mb-8 text-gray-600">Course Details</h1>
        <div classNameName=" text-sm font-semibold text-gray-600 dark:text-white ">Do you want to work as a Group or indiviual?</div>
         <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
            <div className="w-full">
                <label className="text-sm font-semibold text-gray-600 dark:text-white">Group</label>
                <input className="flex flex-col mt-4" 
                value="group"
                name="group" 
                checked={formData.cat==="group"}
                onChange={e => setFormData({...formData, cat:e.target.value})}  
                type="radio">
                </input>
            </div>
            <div className="flex flex-col w-full mx-8 my-2">
                <label className="text-sm font-semibold text-gray-600 dark:text-white">Indiviual</label>
                <input type="radio" 
                placeholder="+11 9876543321"
                checked={formData.cat==="indi"} 
                value="indiviual" 
                name="indi" 
                onChange={e => setFormData({...formData, cat:e.target.value})}  
                className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
                </div>
            </div>
                <div className="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
                    <div className="flex flex-col w-full my-2">
                    <label className="text-sm font-semibold text-gray-600 dark:text-white">Time of convenience for doing Internship</label>
                    <input type="time" 
                    placeholder="Time of convenience" 
                    value={formData.con} 
                    name="con" 
                    onChange={e => setFormData({...formData, con:e.target.value})}  
                    className="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
                    </div>
                </div>
                
           {/* <div className="fex flex-row w-full">
            <button className="bg-red-500 to-grey-500 px-4 py-2 my-8 text-white rounded-md">Next</button>
            </div>
            </div> */}
            
            </div>
  </>
    )
}

export default Pay
