import prisma from '../../lib/prisma'

// POST /api/user
// Required fields in body: name, email
export default async function handle(req, res) {

  const { formData } = req.body;

    const student = await prisma.student.create({
      data: {
        university,
        title,
        college,
        department,
        phoneNumber,
        cField,
        specCource,
        depchoice,
        yearOfStudy,
        regNo,
        residence,
        Guardian,
        gnumber,
        letterUrl,
        uniID,  
      },
    })
    res.json(student)
  }