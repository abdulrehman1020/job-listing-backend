import JobStatus from "../enums/jobStatus.enum";
import { JobType } from "../types/job.type";
import { generateRandomId, getJobsFromFile, scheduleJobWithDelay, writeJobsToFile } from "../utils/jobHelper";

export const createJob = async () => {
    const jobs = getJobsFromFile();
    const jobId = generateRandomId();
    const newJob: JobType = { id: jobId, status: JobStatus.PENDING };
    jobs.push(newJob);

    scheduleJobWithDelay(jobId)

    await writeJobsToFile(jobs);

    return { jobId };
};

export const getAllJobs = async () => {
    return getJobsFromFile();
};

export const getJobById = async (jobId: string) => {
    const jobs = getJobsFromFile();
    const job = jobs.find((j: JobType) => j.id === jobId);

    if (!job) {
        throw new Error("Job not found");
    }

    return job;
};


