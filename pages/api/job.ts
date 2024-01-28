import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id as string;
  
    const jobs = allJobs;
  
    const job = jobs.find((job) => job.id === id);
  
    if (!job) {
      return res.status(404).json({ error: 'Job não encontrado' });
    }
  
    res.status(200).json(job);
  }