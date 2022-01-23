import prisma from '../../lib/prisma'

// POST /api/user
// Required fields in body: name, email
export default async function handle(req, res) {

  const { username, email, password } = req.body;

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
        // choice:choice,
      },
    })
    res.json(user)
  }