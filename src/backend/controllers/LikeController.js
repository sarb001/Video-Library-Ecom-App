
import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";


export const getallLikesHandler = function(schema,request){
    const user = requiresAuth.call(this,request);
    try{
        if(!user){
            return new Response(404, {}  ,{ errors : [" The email  is not Registered "] })
        }
        return new Response(200 , {} , {likes : user.likes});
    }catch(error){
        return new Response(500 , {} , {error});
    }
}

export const addtoLikesHandler =    function(schema,request){
    const user = requiresAuth.call(this,request);
    if(user){
        const { video } = JSON.parse(request.requestBody);
         if(user.likes.some((item) => item.id ===  video.id ))
         {
            return new Response(409 , {} , 
                {
                    errors : [" The Video is Already in your liked Videos "]
                })
         }
         user.likes.push(video);
         return new Response(201,{}, {likes : user.likes});
    }
    return new Response(404, {} , {
        errors : [" This user is not Registered   for Emails  "]
    })
}

export const removefromLikesHandler = function(schema,request){
    const user = requiresAuth.call(this,request);
    if(user){
        const videoId = request.params.videoId;
        const filteredlikes = user.likes.filter((item) => 
            item._id !== videoId)
        this.db.users.update({ likes : filteredlikes });
        return new Response(200 , {} ,{ likes :  filteredlikes });
    }
    return new Response(404 , {} , {
        errors : [" This user doesn't exist here "]
    });
}