export class Like {
    public albumName: string;
    public state: boolean;

    constructor(albumName: string, state: boolean) {
        this.albumName = albumName;
		this.state = state;
    }
}