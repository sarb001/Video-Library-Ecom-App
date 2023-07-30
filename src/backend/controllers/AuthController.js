import { Response } from "miragejs";
import { v4 as uuid } from 'uuid';
import { formatDate } from "../utils/authUtils";
const sign = require('jwt-encode');


export const  signupHandler = function(schema,request){
    const { email , password , ...rest } = JSON.parse(request.requestBody);
    try{

         const foundUser = schema.users.findBy({ email });
     
         if(foundUser){
            return new Response(422 , {} ,
                {
                    errors: [" Email Already Exists "]
                })
         }
         const _id = uuid();
         const newUser = {
            _id , 
            email,
            password,
            createdAt : formatDate(),
            updatedAt : formatDate(),
            ...rest,
            likes : [],
            history : [],
            playlists :[],
            watchlater : [], 
         };
        const createdUser = schema.users.create(newUser);
        console.log('created user 0 -',createdUser);
        const encodedToken = sign({_id : email} , 'sarb@123');
        return new Response(201 , {} , {createdUser , encodedToken });
    }catch(error){
        return new Response(500 , {} , {error})
    }
}


export const loginHandler = function(schema,request){
    const { email ,password}  = JSON.parse(request.requestBody);
    try{
        const foundUser = schema.users.findBy({ email });
        if(!foundUser){
            return new Response(404, {} ,
            {
                errors : [" The email entered  is not Registered "]
            })
        }
        
        if(password === foundUser.password){
            const encodedToken = sign(
                {_id : foundUser._id , email},
                'sarb@123'
            );
            foundUser.password = undefined;
            return new Response(200, {} , { foundUser , encodedToken });
        }
        return new Response(401, {} ,
        {
            errors : [" The Credentials are Wrong , UnAuthorized Access Error "]
        })
    }catch(error){
        return new Response(500 , {} , {error})
    }
}