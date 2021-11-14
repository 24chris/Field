import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const register = () => {
    return ( 
        <>
         <Navbar/>
         <div class="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-8 flex flex-col items-center max-w-xl mx-auto"></div>
         <div class="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-8 flex flex-col items-center max-w-xl mx-auto">
  <div class="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
    <div class="flex flex-col w-full my-2">
      <label class="text-sm font-semibold text-gray-600 dark:text-white">First Name</label>
      <input type="text" placeholder="Peter" class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
    </div>
    <div class="flex flex-col w-full mx-8 my-2">
      <label class="text-sm font-semibold text-gray-600 dark:text-white">Last Name</label>
      <input type="text" placeholder="Asizu" class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
    </div>
  </div>
  <div class="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
    <div class="flex flex-col w-full my-2">
      <label class="text-sm font-semibold text-gray-600 dark:text-white">Email</label>
      <input type="email" placeholder="peterasizu@.com" class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
    </div>
  </div>
  <div class="flex flex-col sm:flex-row items-center justify-between my-4 w-full">
  <div class="w-full">
    <label class="text-sm font-semibold text-gray-600 dark:text-white">Student</label>
    <input class="flex flex-col mt-4" type="checkbox">
    </input>
  </div>
  <div class="flex flex-col w-full mx-8 my-2">
      <label class="text-sm font-semibold text-gray-600 dark:text-white">Non-student</label>
      <input type="checkbox" placeholder="+11 9876543321" class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
    </div>
    </div>
  <div class="fex flex-row w-full">
    <button class="bg-red-500 to-grey-500 px-4 py-2 my-8 text-white rounded-md">Next</button>
  </div>
  </div>
  <Footer/>
  </>
        
        
     );
}
 
export default register;