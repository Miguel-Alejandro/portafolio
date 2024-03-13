export interface JobExperience {
    name: string;
    functions: Array<JobExperienceFunction>;
    duration: string;
    technologies: Array<string>;
}

export interface JobExperienceFunction{
    functionName: string;
}