const valid =(name,email,password)=>{
    if(!name||!email||!password)
    return 'Please fill in all fields'

    if(password.length<8){
        return 'Password must be at least 8 characters'
    }
}

function validateEmail(email){

}
export default valid