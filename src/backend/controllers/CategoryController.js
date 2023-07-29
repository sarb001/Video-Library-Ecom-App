import { Response } from "miragejs";


export const getallcategorieshandler =  function() {
    try{

        return new Response(200, {} , { categories : this.db.categories })
    }catch(error){
        return new Response(500, {} , {error});
    }
}

export const  getSinglecategoryhandler = function() {
    try{
        
    }catch(error){
        return new Response(500, {} , {error});
    }
}