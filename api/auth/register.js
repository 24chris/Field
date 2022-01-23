import connectDB from '../../utils/connectDB'
import Users from '../../models/userNodel'
import valid from '../../utils/valid'
import bcrypt from 'bcrypt'

connectDB()

export default async(req,res)=>{
    switch (req.method) {
        case "POST":
            await register(req,res)
            break;
    
        default:
            break;
    }

    const register = async(req,res)=>{
        try{
            const {name,email,password}=req.body
            const errMsg = valid(name,email,password)
            if(errMsg) return res.status(400).json({err:errMsg})

            const passwordHash = await bcrypt.hash(password,12)
            const newUser = new Users({name,email,password:passwordHash})
            console.log(newUser)
        }catch(err){
            return res.status(500).json({err:err.message})
        }
    }
}