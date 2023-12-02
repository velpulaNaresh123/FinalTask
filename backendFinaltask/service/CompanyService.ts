
import { Job,Skill } from "../model/CompanySchema";
import { Document } from 'mongoose';

interface IJobData {
  companyId: string;
  description: string;
  selectedSkills: Array<{ name: string; experience: number }>;
  selectedExperience: number;
}

class JobService {
    async saveJobData(jobData: IJobData): Promise<Document> {
      
    try {
     
      const skillIds = await Promise.all(
        jobData.selectedSkills.map(async (skill) => {
          const existingSkill = await Skill.findOne({ name: skill.name });

          if (existingSkill) {
            return existingSkill._id;
          }

          const newSkill = await Skill.create({ name: skill.name });
          return newSkill._id;
        })
      );

     
      const job = await Job.create({
        companyId: jobData.companyId,
        description: jobData.description,
        selectedSkills: skillIds.map((id, index) => ({
          skill: id,
          experience: jobData.selectedSkills[index].experience,
        })),
        selectedExperience: jobData.selectedExperience,
      });

      console.log('Job data saved:', job);
      return job;
    } catch (error) {
      console.error('Error saving job data:', error);
      throw error;
    }
  }
}

export default JobService;




