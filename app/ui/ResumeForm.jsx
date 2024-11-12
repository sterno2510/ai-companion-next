"use client";
import React, { useState } from "react";
import { createResume } from "../lib/actions";
import FormGroup from "./FormGroup";
import SubmitButton from "./SubmitButton";
import { createPDF } from "../lib/helpers";
import { useFormStatus } from "react-dom";

function SubmitButtonWrapper() {
  const { pending } = useFormStatus();
  return (
    <SubmitButton type="submit" loading={pending}>
      Generate Resume
    </SubmitButton>
  );
}

const Resume = () => {
  const [resume, setResume] = useState("");
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWorkExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newWorkExperience = [...formData.workExperience];
    const fieldName = name.split("-")[0];
    newWorkExperience[index][fieldName] = value;
    setFormData({ ...formData, workExperience: newWorkExperience });
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    const fieldName = name.split("-")[0];
    newEducation[index][fieldName] = value;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resume = await createResume(formData);
    console.log("what is resume", resume);
    setResume(resume);
  };

  return (
    <div className="max-w-2xl mx-auto p-5">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <FormGroup
          nameLabel="Full Name"
          inputType="text"
          field="fullName"
          placeHolder="John Doe"
          formValue={formData.fullName}
          changeFunction={handleChange}
        />
        <FormGroup
          nameLabel="Email"
          inputType="email"
          field="email"
          placeHolder="John.doe@email.com"
          formValue={formData.email}
          changeFunction={handleChange}
        />
        <FormGroup
          nameLabel="Location"
          inputType="text"
          field="location"
          placeHolder="New York, NY"
          formValue={formData.location}
          changeFunction={handleChange}
        />
        <FormGroup
          nameLabel="LinkedIn URL"
          inputType="url"
          field="linkedin"
          placeHolder="https://www.linkedin.com/in/johndoe/"
          formValue={formData.linkedin}
          changeFunction={handleChange}
        />
        <FormGroup
          nameLabel="Summary"
          inputType="text"
          field="summary"
          placeHolder="I am ..."
          formValue={formData.summary}
          changeFunction={handleChange}
        />
        <FormGroup
          nameLabel="Skills"
          inputType="text"
          field="skills"
          placeHolder="Microsoft Office, ChatGpt, etc.."
          formValue={formData.skills}
          changeFunction={handleChange}
        />
        {formData.workExperience.map((experience, index) => (
          <div
            className="border border-gray-300 p-5 rounded mb-5"
            key={experience.id}
          >
            <div className="text-lg font-semibold">Work Experience</div>
            <FormGroup
              nameLabel="Company"
              inputType="text"
              field={`company-${index}`}
              placeHolder="Microsoft"
              formValue={experience.company}
              changeFunction={(e) => handleWorkExperienceChange(index, e)}
            />
            <FormGroup
              nameLabel="Role"
              inputType="text"
              placeHolder="Software Engineer"
              field={`role-${index}`}
              formValue={experience.role}
              changeFunction={(e) => handleWorkExperienceChange(index, e)}
            />
            <FormGroup
              nameLabel="Start Date"
              inputType="text"
              field={`startDate-${index}`}
              formValue={experience.startDate}
              changeFunction={(e) => handleWorkExperienceChange(index, e)}
              placeHolder="MM/YYYY"
            />
            <FormGroup
              nameLabel="End Date"
              inputType="text"
              field={`endDate-${index}`}
              formValue={experience.endDate}
              changeFunction={(e) => handleWorkExperienceChange(index, e)}
              placeHolder="MM/YYYY"
            />
            <FormGroup
              nameLabel="Description"
              inputType="text"
              field={`description-${index}`}
              formValue={experience.description}
              changeFunction={(e) => handleWorkExperienceChange(index, e)}
              placeHolder="I worked on ..."
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
          <div className="border border-gray-300 p-5 rounded mb-5" key={edu.id}>
            <div className="text-lg font-semibold">Education</div>
            <FormGroup
              nameLabel="School"
              inputType="text"
              field={`school-${index}`}
              formValue={edu.school}
              changeFunction={(e) => handleEducationChange(index, e)}
              placeHolder="University of Washington"
            />
            <FormGroup
              nameLabel="Degree"
              inputType="text"
              field={`degree-${index}`}
              formValue={edu.degree}
              changeFunction={(e) => handleEducationChange(index, e)}
              placeHolder="Bachelor of Arts"
            />
            <FormGroup
              nameLabel="Field of Study"
              inputType="text"
              field={`fieldOfStudy-${index}`}
              formValue={edu.fieldOfStudy}
              changeFunction={(e) => handleEducationChange(index, e)}
              placeHolder="Computer Science"
            />
            <FormGroup
              nameLabel="Start Date"
              inputType="text"
              field={`startDate-${index}`}
              formValue={edu.startDate}
              changeFunction={(e) => handleEducationChange(index, e)}
              placeHolder="MM/YYYY"
            />
            <FormGroup
              nameLabel="End Date"
              inputType="text"
              field={`endDate-${index}`}
              formValue={edu.endDate}
              changeFunction={(e) => handleEducationChange(index, e)}
              placeHolder="MM/YYYY"
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
        <SubmitButtonWrapper />
      </form>

      {resume && (
        <>
          <div
            className="mt-20 p-5 border border-gray-300 rounded-md"
            dangerouslySetInnerHTML={{ __html: resume }}
          />
          <SubmitButton
            type="button"
            onClick={() => {
              createPDF("resume", resume);
            }}
          >
            Download your Resume as a PDF
          </SubmitButton>
        </>
      )}
    </div>
  );
};

export default Resume;
