import { Response } from "miragejs"
import { requiresAuth } from "../utils/authUtils";


export const  getallwatchlaterHandler = function (schema,request){
    const user = requiresAuth.call(this,request);
    try{
        if(!user){
            return new Response(404, {}, {errors :[" The Email is not Registered  "]})
        }
        return new Response(200, {} , {watchlater : user.watchlater});
    }catch(error){
        return new Response(500, {} , error);
    }
}

export const addtowatchlaterHandler = function(schema,request){
    const user = requiresAuth.call(this,request);

    if(user){
            const {video} = JSON.parse(request.requestBody)
            if(user.watchlater.some((item) => item.id === video.id)){
                return  new Response(
                    409, 
                    {} , 
                    {
                        errors : [" The Video is already  in watch Later Videos "]
                     }
                )
            }
            user.watchlater.push(video);
            return new Response(201, {} , {watchlater : user.watchlater});
        }
    return new Response(404,{} , {
        errors : [" The email you entered is not Registered "]
    })
}

export const removefromwatchlaterHandler = function(schema,request){
    const user = requiresAuth.call(this,request);
    if(user){
        const videoId = request.params.videoId;
        const filtervideo = user.watchlater.filter((item) => (
            item._id !== videoId ));
        this.db.users.update({watchlater : filtervideo});
        return new Response(200 , {} , {watchlater: filtervideo})
    }
    return new Response(404 , {} , {
        errors : [" The user videos doesnot Exist here "]
    })
}