// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export default NextAuth({
//     providers:[
//         CredentialsProvider({
//             name: "Custom Provider",
//             Credentials:{
//                 username:{label:"Email",type:"text",placeholder:"peterazisu@gmail.com"},
//                 password:{label:"Password", type:"password"}
//             },
//             async authorize(credentials){
//                 const user = {name:"Peter Asizu", email:"peterasizu@gmail.com"}
//                 // return user;
                
//                 if (user) {
//                     // Any object returned will be saved in `user` property of the JWT
//                     return user
//                   } else {
                    // If you return null or false then the credentials will be rejected
                    // return null
                    // You can also Reject this callback with an Error or with a URL:
                    // throw new Error('error message') // Redirect to error page
                    // throw '/path/to/redirect'        // Redirect to a URL
    //               }
    //         }
    //     })
    // ],
    // session:{
    //     jwt:true,
    //     pages:{
    //         signIn:'/logins'
    //     }
    // }
// })

// export default (req, res) =>NextAuth(req,res,options);

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers:[
        CredentialsProvider({
            name: "credentials",
            credentials:{
                username:{label:"Email",type:"text",placeholder:"peterazisu@gmail.com"},
                password:{label:"Password", type:"password"}
            },
            authorize: (credentials)=>{
                //database look up
                if(
                    credentials.email ==="peterasizu@gmail.com"&&
                    credentials.password =="test"
                ){
                    return{
                        id:2,
                        name:"Peter",
                        email:"peterasizu@gmail.com"
                    };
                }
                //login failed
                return null;
            }
        })
    ],
    callbacks:{
        jwt:({token,user})=>{
            if(user){
                token.id = user.id;
            }
            return token;
        },
        session:({session,token})=>{
            if(token){
                session.id = token.id;
            }
            return session
        },
    },
    secret:"test",
    jwt:{
        secret:"test",
        encryption:true,
    },
    pages:{
        signIn:"/login"
    }
    // session:{
    //     jwt:true,
    //     pages:{
    //         signIn:'/logins'
    //     }
    // }
})

// export default (req, res) =>NextAuth(req,res,options);
