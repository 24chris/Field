import { Fragment } from "react";
import { Dialog,Transition } from "@headlessui/react"
import {  useState } from 'react'


const Bottom = () =>{

    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


    return(
    //    <div className="">
    //     <Popover className="relative bg-white">
    //         <div className="max-w-7xl mx-auto pt-3 px-2 sm:px-6 ">
    //             <div className="flex justify-between items-center border-b-2 border-gray-100 py-0 md:justify-start md:space-x-10">
    //                 <Popover.Group as="nav" className="hidden md:flex space-x-20 sm:mx-auto">
    //                     <Popover className="relative">
    //                         {({open}) => (
    //                             <>
    //                             <Popover.Button className={classNames(
    //                                 open? 'text-gray-500':'text-gray-900',
    //                                 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
    //                             )}
    //                             >
    //                             <span>Why field simplified</span>
    //                             </Popover.Button>

    //                             <Transition
    //                                 as={Fragment}
    //                                 enter="transition ease-out duration-200"
    //                                 enterFrom="opacity-0 translate-y-l"
    //                                 enterTo="opacity-100 translate-y-0"
    //                                 leave="transition ease-in duration-150"
    //                                 leaveFrom="opacity-100 translate-y-0"
    //                                 leaveTo="opacity-0 translate-y-1"
    //                             >

    //                             <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
    //                                 <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
    //                                     <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
    //                                         <div className="ml-4">
    //                                             <p className="text-base font-medium text-gray-900">Hello World</p>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </Popover.Panel>
    //                             </Transition>
    //                             </>
    //                        )}
    //                     </Popover>
    //                     <Popover className="relative">
    //                         {({open}) => (
    //                             <>
    //                             <Popover.Button className={classNames(
    //                                 open? 'text-gray-500':'text-gray-900',
    //                                 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
    //                             )}
    //                             >
    //                             <span>About Internship</span>
    //                             <ChevronDownIcon className={classNames(
    //                                 open?'text-red-600':'text-red-900',
    //                                 'ml-2 h-5 w-5 group-hover:text-gray-500'
    //                             )}
    //                             aria-hidden="true"
    //                             />
    //                             </Popover.Button>

    //                             <Transition
    //                                 as={Fragment}
    //                                 enter="transition ease-out duration-200"
    //                                 enterFrom="opacity-0 translate-y-l"
    //                                 enterTo="opacity-100 translate-y-0"
    //                                 leave="transition ease-in duration-150"
    //                                 leaveFrom="opacity-100 translate-y-0"
    //                                 leaveTo="opacity-0 translate-y-1"
    //                             >

    //                             <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
    //                                 <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
    //                                     <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
    //                                         <div className="ml-4">
    //                                             <p className="text-base font-medium text-gray-900">Hello World*23445</p>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </Popover.Panel>
    //                             </Transition>
    //                             </>
    //                        )}
    //                     </Popover>
    //                     <Popover className="relative">
    //                         {({open}) => (
    //                             <>
    //                             <Popover.Button className={classNames(
    //                                 open? 'text-gray-500':'text-gray-900',
    //                                 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
    //                             )}
    //                             >
    //                             <span>About Skills Training</span>
    //                             <ChevronDownIcon className={classNames(
    //                                 open?'text-red-600':'text-red-900',
    //                                 'ml-2 h-5 w-5 group-hover:text-gray-500'
    //                             )}
    //                             aria-hidden="true"
    //                             />
    //                             </Popover.Button>

    //                             <Transition
    //                                 as={Fragment}
    //                                 enter="transition ease-out duration-200"
    //                                 enterFrom="opacity-0 translate-y-l"
    //                                 enterTo="opacity-100 translate-y-0"
    //                                 leave="transition ease-in duration-150"
    //                                 leaveFrom="opacity-100 translate-y-0"
    //                                 leaveTo="opacity-0 translate-y-1"
    //                             >

    //                             <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
    //                                 <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
    //                                     <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
    //                                         <div className="ml-4">
    //                                             <p className="text-base font-medium text-gray-900">Hello World</p>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </Popover.Panel>
    //                             </Transition>
    //                             </>
    //                        )}
    //                     </Popover>
    //                     <Popover className="relative">
    //                         {({open}) => (
    //                             <>
    //                             <Popover.Button className={classNames(
    //                                 open? 'text-gray-500':'text-gray-900',
    //                                 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
    //                             )}
    //                             >
    //                             <span>Partners</span>
    //                             <ChevronDownIcon className={classNames(
    //                                 open?'text-red-600':'text-red-900',
    //                                 'ml-2 h-5 w-5 group-hover:text-gray-500'
    //                             )}
    //                             aria-hidden="true"
    //                             />
    //                             </Popover.Button>

    //                             <Transition
    //                                 as={Fragment}
    //                                 enter="transition ease-out duration-200"
    //                                 enterFrom="opacity-0 translate-y-l"
    //                                 enterTo="opacity-100 translate-y-0"
    //                                 leave="transition ease-in duration-150"
    //                                 leaveFrom="opacity-100 translate-y-0"
    //                                 leaveTo="opacity-0 translate-y-1"
    //                             >

    //                             <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
    //                                 <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
    //                                     <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
    //                                         <div className="ml-4">
    //                                             <p className="text-base font-medium text-gray-900">Hello World</p>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </Popover.Panel>
    //                             </Transition>
    //                             </>
    //                        )}
    //                     </Popover>
    //                 </Popover.Group>
    //             </div>
    //         </div>
    //     </Popover>

    //     <div className="">
    //     <Popover className="relative bg-white">
    //         <div className="max-w-7xl mx-20 px-14 sm:px-5">
    //             <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
    //                 <Popover.Group as="nav" className="hidden md:flex space-x-20 ml-20 mr-12">
    //                     <Popover className="relative">
    //                         {({open}) => (
    //                             <>
    //                             <Popover.Button className={classNames(
    //                                 open? 'text-gray-500':'text-gray-900',
    //                                 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
    //                             )}
    //                             >
    //                             <span>About US</span>
    //                             <ChevronDownIcon className={classNames(
    //                                 open?'text-red-600':'text-red-900',
    //                                 'ml-2 h-5 w-5 group-hover:text-gray-500'
    //                             )}
    //                             aria-hidden="true"
    //                             />
    //                             </Popover.Button>

    //                             <Transition
    //                                 as={Fragment}
    //                                 enter="transition ease-out duration-200"
    //                                 enterFrom="opacity-0 translate-y-l"
    //                                 enterTo="opacity-100 translate-y-0"
    //                                 leave="transition ease-in duration-150"
    //                                 leaveFrom="opacity-100 translate-y-0"
    //                                 leaveTo="opacity-0 translate-y-1"
    //                             >

    //                             <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
    //                                 <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
    //                                     <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
    //                                         <div className="ml-4">
    //                                             <p className="text-base font-medium text-gray-900">Hello World</p>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </Popover.Panel>
    //                             </Transition>
    //                             </>
    //                        )}
    //                     </Popover>
    //                     <Popover className="relative">
    //                         {({open}) => (
    //                             <>
    //                             <Popover.Button className={classNames(
    //                                 open? 'text-gray-500':'text-gray-900',
    //                                 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 '
    //                             )}
    //                             >
    //                             <span>Views</span>
    //                             <ChevronDownIcon className={classNames(
    //                                 open?'text-red-600':'text-red-900',
    //                                 'ml-2 h-5 w-5 group-hover:text-gray-500'
    //                             )}
    //                             aria-hidden="true"
    //                             />
    //                             </Popover.Button>

    //                             <Transition
    //                                 as={Fragment}
    //                                 enter="transition ease-out duration-200"
    //                                 enterFrom="opacity-0 translate-y-l"
    //                                 enterTo="opacity-100 translate-y-0"
    //                                 leave="transition ease-in duration-150"
    //                                 leaveFrom="opacity-100 translate-y-0"
    //                                 leaveTo="opacity-0 translate-y-1"
    //                             >

    //                             <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
    //                                 <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
    //                                     <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
    //                                         <div className="ml-4">
    //                                             <p className="text-base font-medium text-gray-900">Hello World*23445</p>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </Popover.Panel>
    //                             </Transition>
    //                             </>
    //                        )}
    //                     </Popover>
    //                     <Popover className="relative">
    //                         {({open}) => (
    //                             <>
    //                             <Popover.Button className={classNames(
    //                                 open? 'text-gray-500':'text-gray-900',
    //                                 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
    //                             )}
    //                             >
    //                             <span>Contact Us</span>
    //                             <ChevronDownIcon className={classNames(
    //                                 open?'text-red-600':'text-red-900',
    //                                 'ml-2 h-5 w-5 group-hover:text-gray-500'
    //                             )}
    //                             aria-hidden="true"
    //                             />
    //                             </Popover.Button>

    //                             <Transition
    //                                 as={Fragment}
    //                                 enter="transition ease-out duration-200"
    //                                 enterFrom="opacity-0 translate-y-l"
    //                                 enterTo="opacity-100 translate-y-0"
    //                                 leave="transition ease-in duration-150"
    //                                 leaveFrom="opacity-100 translate-y-0"
    //                                 leaveTo="opacity-0 translate-y-1"
    //                             >

    //                             <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
    //                                 <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
    //                                     <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
    //                                         <div className="ml-4">
    //                                             <p className="text-base font-medium text-gray-900">Hello World</p>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </Popover.Panel>
    //                             </Transition>
    //                             </>
    //                        )}
    //                     </Popover>
    //                     <Popover className="relative">
    //                         {({open}) => (
    //                             <>
    //                             <Popover.Button className={classNames(
    //                                 open? 'text-gray-500':'text-gray-900',
    //                                 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
    //                             )}
    //                             >
    //                             <span>Pricing</span>
    //                             <ChevronDownIcon className={classNames(
    //                                 open?'text-red-600':'text-red-900',
    //                                 'ml-2 h-5 w-5 group-hover:text-gray-500'
    //                             )}
    //                             aria-hidden="true"
    //                             />
    //                             </Popover.Button>

    //                             <Transition
    //                                 as={Fragment}
    //                                 enter="transition ease-out duration-200"
    //                                 enterFrom="opacity-0 translate-y-l"
    //                                 enterTo="opacity-100 translate-y-0"
    //                                 leave="transition ease-in duration-150"
    //                                 leaveFrom="opacity-100 translate-y-0"
    //                                 leaveTo="opacity-0 translate-y-1"
    //                             >

    //                             <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
    //                                 <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
    //                                     <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
    //                                         <div className="ml-4">
    //                                             <p className="text-base font-medium text-gray-900">Hello World</p>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </Popover.Panel>
    //                             </Transition>
    //                             </>
    //                        )}
    //                     </Popover>
    //                     <Popover className="relative">
    //                         {({open}) => (
    //                             <>
    //                             <Popover.Button className={classNames(
    //                                 open? 'text-gray-500':'text-gray-900',
    //                                 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
    //                             )}
    //                             >
    //                             <span>Demo</span>
    //                             <ChevronDownIcon className={classNames(
    //                                 open?'text-red-600':'text-red-900',
    //                                 'ml-2 h-5 w-5 group-hover:text-gray-500'
    //                             )}
    //                             aria-hidden="true"
    //                             />
    //                             </Popover.Button>

    //                             <Transition
    //                                 as={Fragment}
    //                                 enter="transition ease-out duration-200"
    //                                 enterFrom="opacity-0 translate-y-l"
    //                                 enterTo="opacity-100 translate-y-0"
    //                                 leave="transition ease-in duration-150"
    //                                 leaveFrom="opacity-100 translate-y-0"
    //                                 leaveTo="opacity-0 translate-y-1"
    //                             >

    //                             <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
    //                                 <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
    //                                     <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
    //                                         <div className="ml-4">
    //                                             <p className="text-base font-medium text-gray-900">Hello World</p>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </Popover.Panel>
    //                             </Transition>
    //                             </>
    //                        )}
    //                     </Popover>
                        
    //                 </Popover.Group>
    //             </div>
    //         </div>
    //     </Popover>
    //     </div>
    //     </div>

         <>
         {/* <div className="shadow-md font-sans">
            <div className="">
                <button className="mx-12 px-20">Why Simplified</button>
                <button className="mx-12 px-20">About Internship</button>
                <button className="mx-12 px-20">About Skills Training</button>
                <button className="mx-12 px-15">Partners</button>
            </div>
            <div className="">
                <button className="mx-12 px-5">About Us</button>
                <button className="mx-12 px-20">Views</button>
                <button className="mx-12 px-20">Contact Us</button>
                <button className="mx-12 px-20">Pricing</button>
                <button className="mx-12 px-18">Demo</button>
            </div>
        </div> */}
        
        <div className="flex">
        <div className="">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 ml-8 text-sm font-medium text-black rounded-md bg-opacity-20 hover:bg-opacity-30 font-sans focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Why Simplified
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Description
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black-900  border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close 
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
     
      </div>
        </>
        
    )

};

export default Bottom;