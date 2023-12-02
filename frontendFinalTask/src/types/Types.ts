export interface Skill {
    id: number;
    name: string;
}
  
export interface JobFormData {
    companyId: string;
    description: string;
    selectedSkills: {
      skill: Skill;
      experience: number;
    }[];
    selectedSkill: Skill | undefined; 
    selectedExperience: number;
  }
  

 
  