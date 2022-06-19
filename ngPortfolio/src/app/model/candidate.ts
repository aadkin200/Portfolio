import { Project } from "./project";

export class Candidate {
    id: number;
    firstName: String;
    lastName: String;
    jobTitle: String;
    description: String;
    aboutMe: String;
    projects: Project[];


    constructor(
        id: number = 0,
        firstName: String = '',
        lastName: String = '',
        jobTitle: String = '',
        description: String = '',
        aboutMe: String = '',
        projects: Project[] = []
    )
 {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.description = description;
    this.aboutMe = aboutMe;
    this.projects = projects;
 }
}
