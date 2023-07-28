import { Response } from "miragejs";

export const getallvideoshandler = function () {
    try{
         return new Response(200, {} ,{ videos : this.db.videos });
    }catch(error){
        console.log('Error in vidoes -',error);
        return new Response(500, {} , 
            {
                error,
            });
    }   
}

export const getSingleVideoHandler = () => {
    try{

    }catch(error){
        return new Response(500, {} ,{error});
    }
}