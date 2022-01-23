import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from 'next/link'
import { useContext, useState } from "react";
// import valid from '../utils/valid'
// import { DataContext } from "../store/GlobalState";
// import {postData} from '../utils/fetchData'
import emailjs from 'emailjs-com'
// import Users from '../models/Users'






const register = () => {
  const initialState = {name:'',email:'',password:'',checkbox:''}
  const [userData,setUserData] = useState(initialState)
  const { name, email,password,choice} = userData

  // const [state,dispatch] = useContext(DataContext)


  const handleChangeInput = e =>{
    const {name,value} = e.target
    setUserData({...userData,[name]:value})
    // setIsChecked(!isChecked)
  }
      // const handleSubmit = e =>{
      //   e.preventDefault()
      //   // console.log(userData)
      //   const errMsg = valid(name, email,password,)
      //   if(errMsg)console.log(errMsg)
        
      // }

                // function sendEmail(e){
                //   e.preventDefault();

                //   emailjs.sendForm('gmail', '', form.current, 'YOUR_USER_ID')
                //     .then((result) => {
                //         console.log(result.text);
                //     }, (error) => {
                //         console.log(error.text);
                //     });
                // }

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query

    try {
      const res = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      const { data } = await res.json()

      mutate(`/api/users/${id}`, data, false) // Update the local data without a revalidation
      router.push('/')
    } catch (error) {
      setMessage('Failed to update user')
    }
  }

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      router.push('/')
    } catch (error) {
      setMessage('Failed to add user')
    }
  }

  // const handleChange = (e) => {
  //   const target = e.target
  //   const value =
  //     target.name === 'poddy_trained' ? target.checked : target.value
  //   const name = target.name

  //   setForm({
  //     ...form,
  //     [name]: value,
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      forNewUser ? postData(form) : putData(form)
    } else {
      setErrors({ errs })
    }
  }

  /* Makes sure user info is filled for  name, email*/
      // const formValidate = () => {
      //   let err = {}
      //   if (!form.name) err.name = 'Name is required'
      //   if (!form.owner_name) err.owner_name = 'Owner is required'
      //   if (!form.species) err.species = 'Species is required'
      //   if (!form.image_url) err.image_url = 'Image URL is required'
      //   return err
      // }
    return ( 
        <>
         <Navbar/>
         <div className="w-64 bg-gray-300 shadow-md animate-pulse">
            Use names in your ID
          </div>
          <form onSubmit={handleSubmit}>
         <div class="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6 flex flex-col items-center max-w-xl mx-auto"></div>
         <div class="form-container bg-white dark:bg-gray-700 rounded-md shadow-lg p-6  flex flex-col items-center max-w-xl mx-auto">
            <div class="flex flex-col sm:flex-row items-center justify-between my-2 w-full">
              {/* <div class="flex flex-col w-full my-2">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">First Name</label>
                <input type="text" placeholder="Peter" class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
              <div class="flex flex-col w-full mx-8 my-2">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Last Name</label>
                <input type="text" value={} name="email" class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div> */}
              <div class="flex flex-col w-full my-2">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Name</label>
                <input type="text" value={name} name="name" onChange={handleChangeInput}  class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-between my-2 w-full">
              <div class="flex flex-col w-full my-2">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Email</label>
                <input type="email" value={email} name="email" onChange={handleChangeInput} placeholder="peterasizu@gmail.com" class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-between my-0 w-full">
              <div class="flex flex-col w-full my-0">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Password</label>
                <input type="password" value={password} onChange={handleChangeInput}name="password" placeholder="" class="border-b py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-between my-2 w-full">
            <div class="w-full">
              <label class="text-sm font-semibold text-gray-600 dark:text-white">Student</label>
              <input class="flex flex-col mt-4"  onChange={handleChangeInput} name="choice" type="checkbox">
              </input>
            </div>
            <div class="flex flex-col w-full mx-8 my-0">
                <label class="text-sm font-semibold text-gray-600 dark:text-white">Non-student</label>
                <input type="checkbox"  name="choice"  class="border-b py-2 mt-4 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 rounded-sm dark:placeholder-gray-500 text-gray-700 dark:text-gray-50" />
              </div>
            </div>
            <div class="fex flex-row w-full">
              <button class="bg-red-500 to-grey-500 px-4 py-2 my-5 text-white rounded-md">Next</button>
            </div>
          </div>
          </form>
  <Footer/>
  </>
        
        
     );
}
 
export default register;