import { Candidate } from "./candidate";

export class Project {
    id: number;
    url: String;
    about: String;
    photoURL: String;
    candidate: Candidate;

    constructor(
        id: number = 0,
        url: String = '',
        about: String = '',
        photoURL: String = '',
        candidate: Candidate = new Candidate()
    )

    {
        this.id = id;
        this.url = url;
        this.about = about;
        this.photoURL = photoURL;
        this.candidate = candidate;
    }
}
