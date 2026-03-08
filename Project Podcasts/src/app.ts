import * as http from 'http';

import {getFilterEpisodes, getlistEpisodes} from './controllers/podcastsController.ts';
import { Routes } from './routers/routers.ts';
import { HttpMethod } from './utils/http-methods.ts';

export const app = async (req: http.IncomingMessage, res: http.ServerResponse)=>{

    //queryString

    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    //listar podcasts
    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getlistEpisodes(req, res);
    }

    if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODES){
        await getFilterEpisodes(req, res);
    }

}