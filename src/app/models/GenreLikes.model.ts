import { Like } from './Like.model';

export class GenreLikes {
    public name: string;
    public likes: Like[];

    constructor(name: string, likes: Like[]) {
        this.name = name;
		this.likes = likes;
    }
}