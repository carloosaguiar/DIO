import { podcastModel } from "./podcastModel";

export interface FilterPodcastModel{
    statusCode: number,
    body: podcastModel[]
}