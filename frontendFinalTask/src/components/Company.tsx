// JobForm.tsx

import React, { useState } from "react";

import { JobFormData, Skill } from "../types/Types";

const skillsMaster: Skill[] = [
  { id: 1, name: "Java" },
  { id: 2, name: "C#" },
  { id: 3, name: "NodeJs" },
  { id: 4, name: "React" },
];

const JobForm = ({
  companydetails,
}: {
  companydetails: (formData: JobFormData) => void;
}) => {
  const [formData, setFormData] = useState<JobFormData>({
    companyId: "",
    description: "",
    selectedSkills: [],
    selectedSkill: null,
    selectedExperience: 0.1,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSkillId = parseInt(event.target.value, 10);
    const selectedSkill = skillsMaster.find(
      (skill) => skill.id === selectedSkillId
    );
    setFormData({
      ...formData,
      selectedSkill,
    });
  };

  const handleExperienceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedExperience = parseFloat(event.target.value);
    setFormData({
      ...formData,
      selectedExperience,
    });
  };

  const handleSkillAdd = () => {
    if (formData.selectedSkill) {
      setFormData({
        ...formData,
        selectedSkills: [
          ...formData.selectedSkills,
          {
            skill: formData.selectedSkill,
            experience: formData.selectedExperience,
          },
        ],
        selectedSkill: null,
        selectedExperience: 0.1,
      });
    }
  };

  const handleSubmit = async () => {
    try {
      console.log("Job data submitted:", formData);
      companydetails(formData);
      setFormData({
        companyId: "",
        description: "",
        selectedSkills: [],
        selectedSkill: null,
        selectedExperience: 0.1,
      });
    } catch (error) {
      console.error("Error submitting job data:", error);
    }
  };

  return (
    <div>
      <label>
        Company ID:
        <input
          type="text"
          name="companyId"
          value={formData.companyId}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Job Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Select Skill:
        <select
          value={formData.selectedSkill?.id || ""}
          onChange={handleSkillChange}
        >
          <option value="">Select a Skill</option>
          {skillsMaster.map((skill) => (
            <option key={skill.id} value={skill.id}>
              {skill.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Select Experience:
        <select
          value={formData.selectedExperience}
          onChange={handleExperienceChange}
        >
          {Array.from({ length: 100 }, (_, i) => i / 10 + 0.1).map((value) => (
            <option key={value} value={value.toFixed(1)}>
              {value.toFixed(1)} years
            </option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={handleSkillAdd}>Add Skill</button>
      <ul>
        {formData.selectedSkills.map((skillData, index) => (
          <li key={index}>
            {skillData.skill.name} ({skillData.experience} months)
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default JobForm;
