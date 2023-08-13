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

export const removeplaylistHandler = function(schema,request){
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

export const getvideosfromPlaylistHandler = function(schema,request){
    const user = requiresAuth.call(this,request);
    try{
         if(user){
             const playlistId = request.params.playlistId;
             const playlist = user.playlists.find((item) =>  item._id === playlistId);
             return new Response(200 , {} , { playlist });
         }
        return new Response(404, {} , {errors : [" The Email is not Registered "]})
    }catch(error){
         return new Response(500, {} , {error});
    }
}

export const addvideotoPlaylistHandler = function(schema,request){
    const user = requiresAuth.call(this,request);
    try{
         if(user){
             const playlistId = request.params.playlistId;
             const { video } = JSON.parse(request.requestBody);
             const playlist = user.playlists.find((item) =>  item._id === playlistId);
              if(playlist.videos.some((item) => item.id === video.id)){
                    return new Response(409, {} , 
                        {
                            errors :[" Video already  in  Playlist "],
                        })
              }
              playlist.videos.push(video);
              return new Response(201, {} , {playlist});
         }
        return new Response(404, {} , {errors : [" The Email is not Registered "]})
    }catch(error){
         return new Response(500, {} , {error});
    }
}

export const deletevideosfromPlaylistHandler = function (schema,request){
    const user = requiresAuth.call(this,request);
    try{
         if(user){
             const playlistId = request.params.playlistId;
             const videoId = request.params.videoId;
             const playlist = user.playlists.find((item) =>  item._id === playlistId); // playlist  founded 
             const filteredVideos  =   playlist.videos.filter(
                (item) => item._id !== videoId);
                   
              console.log('backend - filtered videos -',filteredVideos);  
              playlist.videos = filteredVideos;
              return new Response(200, {} , {playlist});
         }
        return new Response(404, {} , {errors : [" The Email is not Registered "]})
    }catch(error){
         return new Response(500, {} , {error});
    }
}