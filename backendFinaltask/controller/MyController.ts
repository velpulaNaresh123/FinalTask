import express,{Request,Response} from 'express'

const router=express.Router();


import JobService from '../service/CompanyService';

class JobController {
  private jobService: JobService;

  constructor() {
    this.jobService = new JobService();
  }

  async submitJob(req: Request, res: Response): Promise<void> {
    try {
      const jobData = req.body;

     
       console.log(jobData)
      const savedJob = await this.jobService.saveJobData(jobData);

      res.status(201).json({
        message: 'Job data saved successfully',
        data: savedJob,
      });
    } catch (error) {
      console.error('Error submitting job data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default JobController;




