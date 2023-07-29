import { Response } from "miragejs";

export const getallvideoshandler = function () {
    try{
         return new Response(200, {} ,{ videos : this.db.videos });
    }catch(error){
        return new Response(500, {} , {error});
    }   
}

export const getSingleVideoHandler = function (schema,request){
    const { videoId } = request.params;

    try{
        const video = schema.videos.findBy({  _id  : videoId }).attrs;
        return new Response(200, {} ,{video});
    }catch(error){
        return new Response(500, {} ,{error});
    }
}