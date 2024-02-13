import { NextApiRequest, NextApiResponse } from "next";
import allJobs from "./jobs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const title = req.query.title as string;
  const category = req.query.category as string;
  const location = req.query.location as string;
  const company = req.query.company as string;
  const salaryEntry = req.query.salaryEntry as string;
  const salaryEnd = req.query.salaryEnd as string;
  const type = req.query.type as string;

  let filteredJobs = allJobs;

  if (title) {
    filteredJobs = filteredJobs.filter((job) =>
      job.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (category) {
    filteredJobs = filteredJobs.filter(
      (job) => job.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (location) {
    filteredJobs = filteredJobs.filter(
      (job) => job.location.toLowerCase() === location.toLowerCase()
    );
  }

  if (company) {
    filteredJobs = filteredJobs.filter(
      (job) => job.company.name.toLowerCase() === company.toLowerCase()
    );
  }

  if (salaryEntry) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        parseInt(job.salary.entry.replace(",", "")) >= parseInt(salaryEntry)
    );
  }

  if (salaryEnd) {
    filteredJobs = filteredJobs.filter(
      (job) => parseInt(job.salary.end.replace(",", "")) <= parseInt(salaryEnd)
    );
  }

  if (type) {
    filteredJobs = filteredJobs.filter((job) => job.type === type);
  }

  if (filteredJobs.length === 0) {
    return res.status(404).json(null);
  }

  res.status(200).json(filteredJobs);
}
