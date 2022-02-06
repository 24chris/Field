import { Fragment,useRef,useState } from "react";
import { Dialog,Transition } from "@headlessui/react";
import {ExclamationIcon} from '@heroicons/react/outline';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import InAppBottom from "../components/InAppBottom";
import SideBar from "../components/SideBar";
import Link from 'next/link'

export default function Modal(){
    const[open,setopen]=useState(true)

    const cancelButtonRef = useRef(null)

    return(
        <>
        <Navbar/>
        <div className="">
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setopen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm: p-0">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <Dialog.Overlay className="fixed inset-x-0 inset-y-9 mt-10 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>
                    <div className="inline-block absolute top-12 right-3 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm::align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true"/>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                    <Link href="/completeRegistration">Click here to complete registration</Link> 
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={()=>setOpen(false)}
                        ref={cancelButtonRef}
                        >
                            Deactivate
                        </button>
                        <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={()=>setOpen(false)}
                        ref={cancelButtonRef}
                        >
                            Cancel
                        </button>
                    </div> */}
                    </div>
            </Dialog>
        </Transition.Root>
        </div>
        {/* <div className="inset-y-0 bottom-0"> */}
        <SideBar/>
        <InAppBottom/>
        <Footer/>
        {/* </div> */}
        </>
    )
}

// export default Modal;