export class Genre {
    public name: string;
    public color: string;
    public imageURL: string;

    constructor(name: string, color: string, imageURL:string) {
        this.name = name;
		this.color = color;
		this.imageURL = imageURL;
    }
}