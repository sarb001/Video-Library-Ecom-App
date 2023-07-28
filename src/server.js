import {Model ,Server , RestSerializer } from 'miragejs';
import { categories } from './backend/db/categories';
import { videos } from './backend/db/videos';
import { users } from './backend/db/users';
import { getSingleVideoHandler, getallvideoshandler } from './backend/controllers/VideosController';

export function makeServer({ environment = "development" } = {}){
    return new Server({
        serializers : {
            application : RestSerializer ,
        },
        environment,
        models : {
            video : Model,
            category : Model,
            user : Model,
            like : Model,
            history : Model,
            playlist : Model,
            watchlater : Model,
        },

        seeds(server){
            videos.forEach((item) => {
                server.create("video" , { ...item });
            });
            categories.forEach((item) =>  server.create("category" , { ...item }));
            users.forEach((item) =>  server.create("user" , {
                 ...item,
                 likes : [],
                 watchlater : [],
                 history : [],
                 playlists : [],
            })
            )
        },

        routes(){
            
            this.namespace = "api" ;
            //  Video handler 

            this.get('/videos',getallvideoshandler.bind(this));
            this.get('/video/:videoId',getSingleVideoHandler.bind(this));
        }
    })
}