import { Request, Response } from "express";
import * as jobService from "../services/job.service";

export const createJob = async (req: Request, res: Response) => {
    try {
        const result = await jobService.createJob();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Failed to create job" });
    }
};

export const getAllJobs = async (req: Request, res: Response) => {
    try {
        const jobs = await jobService.getAllJobs();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch jobs" });
    }
};

export const getJobById = async (req: Request, res: Response) => {
    try {
        const jobId = req.params.id;
        const job = await jobService.getJobById(jobId);
        if (!job) {
            res.status(404).json({ message: "Job not found" });
            return;
        }
        res.json(job);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch job" });
    }
};

