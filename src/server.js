import {Model ,Server , RestSerializer } from 'miragejs';
import { categories } from './backend/db/categories';
import { videos } from './backend/db/videos';
import { users } from './backend/db/users';
import { getSingleVideoHandler, getallvideoshandler } from './backend/controllers/VideosController';
import { getSinglecategoryhandler, getallcategorieshandler } from './backend/controllers/CategoryController';
import { addtoLikesHandler, getallLikesHandler, removefromLikesHandler } from './backend/controllers/LikeController';
import { addtohistoryHandler, clearhistoryHandler, getallhistoryHandler, removevideofromhistoryHandler } from './backend/controllers/HistoryController';
import { getallplaylistHandler } from './backend/controllers/PlayListController';
import { addtowatchlaterHandler, getallwatchlaterHandler, removefromwatchlaterHandler } from './backend/controllers/WatchLaterController';

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

            // all  videos 
            this.get('/videos',getallvideoshandler.bind(this));
            this.get('/video/:videoId',getSingleVideoHandler.bind(this));

            // categories Route 
            this.get('/categories',getallcategorieshandler.bind(this));
            this.get('/categories/:categoryId',getSinglecategoryhandler.bind(this));

            // likes Handler  ( Doneee )
            this.get('/user/likes',getallLikesHandler.bind(this));
            this.post('/user/likes',addtoLikesHandler.bind(this));
            this.delete('/user/likes/:videoId',removefromLikesHandler.bind(this));

             // watch later ( DDDDDDD )
             this.get('/user/watchlater',getallwatchlaterHandler.bind(this));
             this.post('/user/watchlater',addtowatchlaterHandler.bind(this));
             this.delete('/user/watchlater/:videoId',removefromwatchlaterHandler.bind(this));
             
             // history  Done 
             this.get('/user/history' ,   getallhistoryHandler.bind(this));
             this.post('/user/history',  addtohistoryHandler.bind(this));
             this.delete('/user/history/:videoId',removevideofromhistoryHandler.bind(this));
             this.delete('/user/history/all',  clearhistoryHandler.bind(this));
             
             // playlist 
             this.get('/user/playlist' ,   getallplaylistHandler.bind(this));
        }
    })
}