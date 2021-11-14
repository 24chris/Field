const login = () => {
    return ( 
        <section class="flex flex-col mt-8">
  <div class="login-box w-full md:mx-auto relative z-100">
    <h1 class="max-w-xl mx-auto pl-4 font-bold text-xl">Field Simplified</h1>
    <div class="box shadow-2xl max-w-xl mx-auto rounded-md p-14 z-100">
      <h2 class="text-2xl font-bold mb-8 text-gray-600">Sign in to your FieldSimplified account</h2>
      <div class="mb-8">
        <p class="text-md text-gray-500 mb-2">Email</p>
        <input type="email" class="border w-full rounded-md border-gray-300 py-2" />
      </div>
      <div class="mb-8">
        <div class="flex flex-col sm:flex-row sm:justify-between">
          <p class="text-md text-gray-500 mb-2">Password</p>

          <a href="#" class="text-md mb-2 text-red-600">Forgot your password?</a>
        </div>
        <input type="password" class="border w-full rounded-md border-gray-300 py-2" />
      </div>
    
      <button class="w-full bg-red-500 py-2 rounded-md text-gray-50">Login</button>
    </div>

    <div class="max-w-xl mx-auto">
      <p class="text-sm mt-8 ml-8">Don't have an account? <a href="#" class="text-red-500">Register</a></p>
    </div>
  </div>
</section>
     );
}
 
export default login;