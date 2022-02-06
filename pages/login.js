import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Bottom from '../components/Bottom'
import Link from 'next/link'


const login = () => {
    return ( 
      <>
      <Navbar/>
        <section className="flex flex-col mt-6">
  <div className="login-box w-full md:mx-auto relative z-100">
    {/* <h1 className="max-w-xl mx-auto pl-4 font-bold text-xl">Field Simplified</h1> */}
    <div className="box shadow-2xl max-w-xl mx-auto rounded-md p-14 z-100">
      <h2 className="text-2xl font-bold mb-8 text-gray-600">User Login</h2>
      <div className="mb-8">
        <p className="text-md text-gray-500 mb-2">Email</p>
        <input type="email" className="border w-full rounded-md border-gray-300 py-2" />
      </div>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <p className="text-md text-gray-500 mb-2">Password</p>

          <a href="#" className="text-md mb-2 text-red-600">Forgot your password?</a>
        </div>
        <input type="password" className="border w-full rounded-md border-gray-300 py-2" />
      </div>
    
      <button className="w-full bg-red-500 py-2 rounded-md text-gray-50">Login</button>
      <div className="max-w-xl mx-auto">
      <p className="text-sm mt-8 ml-8">Don't have an account? <a href="#" className="text-red-500">Register</a></p>
    </div>
    </div>
  </div>
</section>
<Footer/>
</>
     );
}
 
export default login;