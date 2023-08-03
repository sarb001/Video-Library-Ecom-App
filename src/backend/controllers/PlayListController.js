import { requiresAuth } from "../utils/authUtils"
import { Response } from "miragejs";
import { v4 as uuid } from "uuid";

// playlist 
export const getallplaylistHandler = function(schema,request){
    const user = requiresAuth.call(this,request);
    try{
         if(!user){
            return new Response(404, {} , {
                errors : [" The Email is not Registered "]
            })
         }
         return new Response(200 , {} , { playlists : user.playlists });
    }catch(error){
         return new Response(500, {} , {error});
    }
}

export const addnewplaylistHandler = function (schema,request){
    const user = requiresAuth.call(this,request);
    try{
        if(user){
            const { playlist } = JSON.parse(request.requestBody);
            user.playlists.push({...playlist ,videos : [], _id : uuid() });
            return new Response(201,{} , {playlists : user.playlists});
        }
    }catch(error){
         return new Response(404, {} , {error : [" The email is not Registered "]});
    }
}

export const removeplaylistHandler = function(request,schema){
    try{
        const user = requiresAuth.call(this,request);
        if(user){
            const playlistId = request.params.playlistId;
            const removeplaylist = user.playlists.filter((item) => 
                item._id !== playlistId
            );
            this.db.users.update({ playlists : removeplaylist });
            return new Response(200 , {} , {playlists : removeplaylist});
        }
        return new Response(404, {} , 
            {error : [" user not Existed!!!  "]}
            );
    }catch(error){  
        return new Response(404, {} , {error : [" The email is not Registered "]});
    }
}

// videos 

export const getvideosfromPlaylistHandler = () => {

}

export const addvideotoPlaylistHandler = () => {

}

export const deletevideosfromPlaylistHandler = () => {

}