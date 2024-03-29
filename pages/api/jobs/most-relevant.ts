import { NextApiRequest, NextApiResponse } from "next";
import allJobs from "../jobs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const jobs = allJobs;
    const job = jobs.filter((job) => job.category === "most-relevant");
    if (!job) {
      return res.status(404).json({ error: 'Não há nenhum vaga relevante' });
    }
  
    res.status(200).json(job);
  }