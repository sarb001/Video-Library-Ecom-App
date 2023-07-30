
import { Response } from "miragejs";


export const getallhistoryHandler = function(schema,request){
    // const user = requiresAuth.call(this,request);
    // try{
    //     if(!user){
    //         return new Response ( 404, {}  ,
    //             {
    //              errors : [" The email  is not Registered "] 
    //             })
    //     }
    //     return new Response(200 , {} , {history : user.history});
    // }catch(error){
    //     return new Response(500 , {} , {error});
    // }
}

export const addtohistoryHandler = function(schema,request){
    // const user = requiresAuth.call(this,request);
    
    // if(user){
    //     const { video } = JSON.parse(request.requestBody);
    //      if(user.history.some((item) => item.id ===  video.id ))
    //      {
    //         return new Response(409 , {} , 
    //             {
    //                 errors : [" The Video is Already in your History "]
    //             })
    //      }
    //      user.history.push(video);
    //      return new Response(201,{}, {history : user.history});
    // }
    // return new Response(500, {} , 
    //     {
    //     errors : [" This user is not Registered   for Emails  "]
    //     }
    //  )
}

export const removevideofromhistoryHandler = function(schema,request){
        // const user = requiresAuth.call(this,request);
        // if(user){
        //     const videoId = request.params.videoId;
        //     const filteredvideos = user.history.filter((item) => 
        //         item._id !== videoId)
        //     this.db.users.update({ history : filteredvideos });
        //     return new Response(200 , {} ,{ history :  filteredvideos });
        // }
        // return new Response(404 , {} , {
        //     errors : [" This user doesn't exist here "]
        // });
}

export const clearhistoryHandler = function(schema,request){
    // const user = requiresAuth.call(this,request);
    // try{
    //     if(!user){
    //         return new Response (404, {},
    //             {
    //              errors : [" The email  is not Registered "] 
    //             })
    //     }
    //     this.db.users.update({ history : [] });
    //     return new Response(200, {} , {history : []});
    // }catch(error){
    //     return new Response(500, {} , 
    //         { 
    //         error,
    //         })
    // }
}