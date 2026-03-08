import { FilterPodcastModel } from "../models/filter-podcast-model.ts";
import { repositoryPodcast } from "../repositories/podcastRepository.ts";
import { StatusCode } from "../utils/status-code.ts";


export const serviceListEpisodes = async ()=>{

    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: []
    }

    const data = await repositoryPodcast();

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT
    
    return data;
}