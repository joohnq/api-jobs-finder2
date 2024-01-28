export default function handler(req, res) {
    const { id } = req.query;
  
    const jobs = allJobs;
  
    const job = jobs.find((job) => job.id === id);
  
    if (!job) {
      return res.status(404).json({ error: 'Job não encontrado' });
    }
  
    res.status(200).json(job);
  }