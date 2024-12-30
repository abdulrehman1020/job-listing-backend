import JobStatus from "../enums/jobStatus.enum";

export interface JobType {
  id: string;
  status: JobStatus;
  imageUrl?: string | null;
}
