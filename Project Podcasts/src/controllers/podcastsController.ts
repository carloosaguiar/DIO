import { IncomingMessage, ServerResponse } from 'http';

import { serviceListEpisodes } from '../services/listEpisodesServices.ts'
import { serviceFilterEpisodes } from '../services/filterEpisodesService.ts';
import { StatusCode } from '../utils/status-code.ts';
import { ContentType } from '../utils/content-type.ts';
import { FilterPodcastModel } from '../models/filter-podcast-model.ts';
import { podcastModel } from '../models/podcastModel.ts';

export const getlistEpisodes = async (req: IncomingMessage, res: ServerResponse)=>{

    const content = await serviceListEpisodes()

    res.writeHead(StatusCode.OK, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse)=>{

    const content: FilterPodcastModel = await serviceFilterEpisodes(req);

    res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content.body));
}