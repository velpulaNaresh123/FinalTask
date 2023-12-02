// models/Job.ts
import mongoose, { Document, Schema, Types } from 'mongoose';

interface ISkill {
  _id: Types.ObjectId;
  name: string;
}

interface IJob extends Document {
  companyId: string;
  description: string;
  selectedSkills: Array<{ skill: ISkill; experience: number }>;
  selectedExperience: number;
}

const skillSchema = new Schema<ISkill>({
  name: {
    type: String,
    required: true,
  },
});

const jobSchema = new Schema<IJob>({
  companyId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  selectedSkills: [
    {
      skill: {
        type: {
          _id: Types.ObjectId,
          name: String,
        },
        required: true,
      },
      experience: {
        type: Number,
        required: true,
      },
    },
  ],
  selectedExperience: {
    type: Number,
    required: true,
  },
});

const Skill = mongoose.model<ISkill>('Skill', skillSchema);
const Job = mongoose.model<IJob>('Job', jobSchema);

export { Skill, Job };
