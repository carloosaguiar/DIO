import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcastRepository"
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (podcastName: IncomingMessage):Promise<FilterPodcastModel> =>{

    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName.url?.split("?p=")[1] || "";

    const data = await repositoryPodcast(queryString);

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT

    responseFormat.body = data;

    return responseFormat;
}