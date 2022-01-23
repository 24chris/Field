import React from 'react'

function SideBar() {
    return (
        <div className="min-h-full pl-1 flex flex-row bg-gray-100">
            <div className="flex flex-col w-56 bg-white overflow-hidden">
                <h1 className="text-2xl text-black-500 border border-black rounded">Internship Workflow</h1>
                <ul className="flex flex-col py-4">
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                        <span className="text-sm font-medium">Setup</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                        <span className="text-sm font-medium">Company</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                        <span className="text-sm font-medium">Customers</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                        <span className="text-sm font-medium">Vendors</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                        <span className="text-sm font-medium">Employees</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                        <span className="text-sm font-medium">Reports</span>
                    </a>
                </li>
            </ul>
            </div>
            
        </div>
    )
}

export default SideBar
