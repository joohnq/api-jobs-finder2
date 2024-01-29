import { NextApiRequest, NextApiResponse } from "next";
import allJobs from "../jobs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const jobs = allJobs;
    const job = jobs.map((job) => job.category === "most-recent");
    if (!job) {
      return res.status(404).json({ error: 'Não há nenhum vaga recente' });
    }
  
    res.status(200).json(job);
  }