import prisma from '../../lib/prisma'

// POST /api/nonstudent
export default async function handle(req, res) {

  const { formData } = req.body;
const nonstudent = await prisma.nonstudent.create({
    data:{
        phonenumber,
        course,
        skilllevel,
        certificate
    },
    
})
res.json(nonstudent)
}