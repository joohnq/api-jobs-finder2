import { NextApiRequest, NextApiResponse } from "next";
import allJobs from "../jobs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const jobs = allJobs;
    const job = jobs.filter((job) => job.category === "recent-posted");
    if (!job) {
      return res.status(404).json({ error: 'Não há nenhum vaga recentemente postada' });
    }
  
    res.status(200).json(job);
  }