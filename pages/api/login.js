// import prisma from '../../lib/prisma'
// import { NextApiRequest,NextApiResponse } from 'next';

// // POST /api/user
// // Required fields in body: name, email
// export default async function handle(req, res) {

// //   const { formData } = req.body;

// //     const student = await prisma.student.create({
// //       data:formData
// //     })
// //     res.json(student)

//         const {credentials} = req.body

//         const userObj = await prisma.user.findUnique({
//             where:{
//                 email:credentials.email,
//             }
            
//         })
//         console.log(userObj)
//         //  res.json({name:'Robe Pelinka',email:'admin@gmail.com'})
//         res.json(userObj)
//   }

import { NextApiRequest,NextApiResponse } from "next";
import { prisma } from "@prisma/client";

export default async function handle(req,res){
    res.status(200).json({email:'admin@gmail.com',password:'qwerty1234'})
}