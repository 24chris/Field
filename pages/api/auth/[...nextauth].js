import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import EmailProvider from "next-auth/providers/email";


const prisma = new PrismaClient()

export default NextAuth({
    adapter:PrismaAdapter(prisma),
    providers:[
        EmailProvider({
            server: {
              host: process.env.EMAIL_SERVER_HOST,
              port: process.env.EMAIL_SERVER_PORT,
              auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD
              }
            },
            from: process.env.EMAIL_FROM
          }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
          return true
        },
        async redirect({ url, baseUrl }) {
          return '/step1'
        },
        async session({ session, user, token }) {
          return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
          return token
        },
    },
  pages: {
    // signIn: '/auth/signin',
    signOut: '/',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },    
    database: process.env.DATABASE_URL
})
