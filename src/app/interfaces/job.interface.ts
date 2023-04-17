export interface JobExperience {
    name: string;
    functions: Array<JobExperienceFunction>;
    duration: string;
}

export interface JobExperienceFunction{
    functionName: string;
}