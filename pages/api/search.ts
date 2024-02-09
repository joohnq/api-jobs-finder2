import { NextApiRequest, NextApiResponse } from "next";
import allJobs from "./jobs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const title = req.query.title as string;
  const category = req.query.category as string;
  const location = req.query.location as string;
  const company = req.query.location as string;

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

  if (filteredJobs.length === 0) {
    return res.status(404).json([]);
  }

  res.status(200).json(filteredJobs);
}
