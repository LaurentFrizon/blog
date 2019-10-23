export interface PostInterface {
    title: string;
    content: string;
    loveIts: number;
    create_at: Date;
}

export class PostEntite {
    title: string;
    content: string;
    loveIts: number;
    create_at: Date;

    constructor(title: string, content: string, lovits: number) {
        this.title = title;
        this.content = content;
        this.loveIts = lovits;
        this.create_at = new Date();
    }

    static postEntiteFactory(json: PostInterface): PostEntite {
        return new PostEntite(json.title, json.content, json.loveIts);
    }

    getTitle() {
        return this.title;
    }

}
