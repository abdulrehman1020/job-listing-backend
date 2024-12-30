import fs from "fs";
import path from "path";
import { JobType } from "../types/job.type";
import { getRandomPhoto } from "./unSplash";
import JobStatus from "../enums/jobStatus.enum";
import { io } from "../server";

const jobsFilePath = path.resolve(__dirname, "../data/jobs.json");

export const getJobsFromFile = (): JobType[] => {
  try {
    console.log("Reading file from:", jobsFilePath);
    const fileContent = fs.readFileSync(jobsFilePath, "utf8");

    if (!fileContent.trim()) {
      console.warn("Warning: jobs.json file is empty");
      return [];
    }
    return JSON.parse(fileContent) || [];
  } catch (error: unknown) {
    console.error("Error reading jobs file:", error);
    throw new Error(`Failed to get jobs: ${(error as Error).message}`);
  }
};

export const writeJobsToFile = (data: JobType[]) => {
  fs.writeFileSync(jobsFilePath, JSON.stringify(data, null, 2));
};

export const generateRandomId = () => {
  const currentTimestamp = Date.now();
  return (currentTimestamp % 100000).toString();
};

export const scheduleJobWithDelay = async (jobId: string) => {
  setTimeout(async () => {
    try {
      const unSplashImageUrl = await getRandomPhoto();
      const jobs = await getJobsFromFile();
      const jobIndex = jobs.findIndex((job: JobType) => job.id === jobId);
      if (jobIndex > -1) {
        jobs[jobIndex].status = JobStatus.RESOLVED;
        jobs[jobIndex].imageUrl = unSplashImageUrl;

        io.emit("jobResolved", {
          jobId,
          status: JobStatus.RESOLVED,
          imageUrl: unSplashImageUrl,
        });
      }

      await writeJobsToFile(jobs);
    } catch (error: any) {
      throw error;
    }
  }, 10000)
}
