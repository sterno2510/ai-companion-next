"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import FormGroup from "./FormGroup";
import SubmitButton from "./SubmitButton";

interface WorkExperience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: number;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}

interface FormData {
  fullName: string;
  email: string;
  location: string;
  linkedin: string;
  summary: string;
  workExperience: WorkExperience[];
  education: Education[];
  skills: string;
}

const Resume: React.FC = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    location: "",
    linkedin: "",
    summary: "",
    workExperience: [
      {
        id: Date.now(),
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    education: [
      {
        id: Date.now(),
        school: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
      },
    ],
    skills: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWorkExperienceChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const newWorkExperience = [...formData.workExperience];
    const fieldName = name.split("-")[0] as keyof WorkExperience;

    const updatedExperience: WorkExperience = {
      ...newWorkExperience[index],
      [fieldName]: value,
    };

    newWorkExperience[index] = updatedExperience;
    setFormData({ ...formData, workExperience: newWorkExperience });
  };

  const handleEducationChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    const fieldName = name.split("-")[0] as keyof Education;

    const updatedEducation: Education = {
      ...newEducation[index],
      [fieldName]: value,
    };

    newEducation[index] = updatedEducation;
    setFormData({ ...formData, education: newEducation });
  };

  const addWorkExperience = () => {
    setFormData({
      ...formData,
      workExperience: [
        ...formData.workExperience,
        {
          id: Date.now(),
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          id: Date.now(),
          school: "",
          degree: "",
          fieldOfStudy: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Implement your submission logic here
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-5">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <FormGroup
            nameLabel="Full Name"
            inputType="text"
            field="fullName"
            formValue={formData.fullName}
            changeFunction={handleChange}
            placeHolder="John Doe"
          />
          <FormGroup
            nameLabel="Email"
            inputType="email"
            field="email"
            formValue={formData.email}
            changeFunction={handleChange}
            placeHolder="John.Doe@email.com"
          />
          <FormGroup
            nameLabel="Location"
            inputType="text"
            field="location"
            formValue={formData.location}
            changeFunction={handleChange}
            placeHolder="City, State"
          />
          <FormGroup
            nameLabel="LinkedIn URL"
            inputType="url"
            field="linkedin"
            formValue={formData.linkedin}
            changeFunction={handleChange}
            placeHolder="https://www.linkedin.com/in/johndoe"
          />
          <FormGroup
            nameLabel="Summary"
            inputType="text"
            field="summary"
            formValue={formData.summary}
            changeFunction={handleChange}
            placeHolder="Enter a Summary..."
          />
          <FormGroup
            nameLabel="Skills"
            inputType="text"
            field="skills"
            formValue={formData.skills}
            changeFunction={handleChange}
            placeHolder="Enter Skills..."
          />

          {formData.workExperience.map((experience, index) => (
            <div
              key={experience.id}
              className="border border-gray-300 p-5 rounded mb-5"
            >
              <div className="text-lg font-semibold">Work Experience</div>
              <FormGroup
                nameLabel="Company"
                inputType="text"
                field={`company-${index}`}
                formValue={experience.company}
                changeFunction={(e) => handleWorkExperienceChange(index, e)}
                placeHolder="Enter Company Name..."
              />
              <FormGroup
                nameLabel="Role"
                inputType="text"
                field={`role-${index}`}
                formValue={experience.role}
                changeFunction={(e) => handleWorkExperienceChange(index, e)}
                placeHolder="Enter Role..."
              />
              <FormGroup
                nameLabel="Start Date"
                inputType="text"
                field={`startDate-${index}`}
                formValue={experience.startDate}
                changeFunction={(e) => handleWorkExperienceChange(index, e)}
                placeHolder="Enter Start Date (01/2020)"
              />
              <FormGroup
                nameLabel="End Date"
                inputType="text"
                field={`endDate-${index}`}
                formValue={experience.endDate}
                changeFunction={(e) => handleWorkExperienceChange(index, e)}
                placeHolder="Enter End Date (01/2021)"
              />
              <FormGroup
                nameLabel="Description"
                inputType="text"
                field={`description-${index}`}
                formValue={experience.description}
                changeFunction={(e) => handleWorkExperienceChange(index, e)}
                placeHolder="Enter a Job Description..."
              />
            </div>
          ))}
          <button
            type="button"
            className="w-fit p-2 mx-auto my-2 border-none rounded bg-black text-white hover:bg-white hover:text-black"
            onClick={addWorkExperience}
          >
            Add Another Job
          </button>

          {formData.education.map((edu, index) => (
            <div
              key={edu.id}
              className="border border-gray-300 p-5 rounded mb-5"
            >
              <div className="text-lg font-semibold">Education</div>
              <FormGroup
                nameLabel="School"
                inputType="text"
                field={`school-${index}`}
                formValue={edu.school}
                changeFunction={(e) => handleEducationChange(index, e)}
                placeHolder="Enter School Name..."
              />
              <FormGroup
                nameLabel="Degree"
                inputType="text"
                field={`degree-${index}`}
                formValue={edu.degree}
                changeFunction={(e) => handleEducationChange(index, e)}
                placeHolder="Enter Degree..."
              />
              <FormGroup
                nameLabel="Field of Study"
                inputType="text"
                field={`fieldOfStudy-${index}`}
                formValue={edu.fieldOfStudy}
                changeFunction={(e) => handleEducationChange(index, e)}
                placeHolder="Enter Field of Study..."
              />
              <FormGroup
                nameLabel="Start Date"
                inputType="text"
                field={`startDate-${index}`}
                formValue={edu.startDate}
                changeFunction={(e) => handleEducationChange(index, e)}
                placeHolder="Enter Start Date (01/2020)"
              />
              <FormGroup
                nameLabel="End Date"
                inputType="text"
                field={`endDate-${index}`}
                formValue={edu.endDate}
                changeFunction={(e) => handleEducationChange(index, e)}
                placeHolder="Enter End Date (01/2021)"
              />
            </div>
          ))}
          <button
            type="button"
            className="w-fit p-2 mx-auto my-2 border-none rounded bg-black text-white hover:bg-white hover:text-black"
            onClick={addEducation}
          >
            Add Another Education
          </button>

          <SubmitButton type="submit" loading={submitting}>
            Submit
          </SubmitButton>
        </form>
      </div>
      <button
        type="button"
        className="w-fit p-2 mx-auto my-2 border-none rounded bg-black text-white hover:bg-white hover:text-black"
        onClick={() => {
          console.log("download");
        }}
      >
        Download your Resume as a PDF
      </button>
    </>
  );
};

export default Resume;
