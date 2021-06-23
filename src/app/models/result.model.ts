import { Thumbnail } from "./thumbnail.model";

export interface Result {
    id: number;
    name: string;
    description: string;
    modified: Date;
    thumbnail: Thumbnail;
    resourceURI: string;
    // comics: Comics;
    // series: Series;
    // stories: Stories;
    // events: Events;
    // urls: Url[];
}