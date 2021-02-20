import { Like } from './Like.model';

export class Album {
    public attr: {};
    public artist: {};
    public image: [];
    public mbid: string;
    public name: string;
    public url: string;
    public like: Like;

    constructor(attr: string, artist: string, image: [], mbid: string, name: string, url: string, like: Like ) {
        this.attr = attr;
		this.artist = artist;
        this.image = image;
        this.mbid = mbid;
        this.name = name;
        this.url = url;
        this.like = like;
    }
}