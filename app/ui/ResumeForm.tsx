/* eslint-disable react/function-component-definition */
"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
// import axios from "axios";
// import { useOutletContext } from "react-router-dom";
import FormGroup from "./FormGroup";
// import ResumeHistory from "./ResumeHistory";
import SubmitButton from "./SubmitButton";
// import createPDF from "./helpers/createPdf";

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
  // const [resume, setResume] = useState<string>("");
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
  console.log("form data", formData);

  // const { userObject } = useOutletContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWorkExperienceChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newWorkExperience = [...formData.workExperience];
    const fieldName = name.split("-")[0] as keyof WorkExperience;

    // Create a new updated experience object with the correct types
    const updatedExperience: WorkExperience = {
      ...newWorkExperience[index],
      [fieldName]: value,
    };

    newWorkExperience[index] = updatedExperience;
    setFormData({ ...formData, workExperience: newWorkExperience });
  };

  const handleEducationChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
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
    console.log("submitting");
    e.preventDefault();
    setSubmitting(true);
    // Implement your submission logic here
  };

  // Uncomment and adjust this section as necessary for your implementation
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setSubmitting(true);

  //   try {
  //     const res = await axios.post("/api/openai/resume", formData);
  //     const generatedResume = res.data.content;
  //     setResume(generatedResume);

  //     const newResume = generatedResume;
  //     // eslint-disable-next-line no-underscore-dangle
  //     const userId = userObject._id;

  //     await axios.post("/save-resume", { userId, newResume });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };
  // console.log("usr obj in resume", userObject);

  return (
    <>
      <div className="max-w-2xl mx-auto p-5">
        {/* <ResumeHistory userObject={userObject} /> */}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <FormGroup
            nameLabel="Full Name"
            inputType="text"
            field="fullName"
            formValue={formData.fullName}
            changeFunction={handleChange}
          />
          <FormGroup
            nameLabel="Email"
            inputType="email"
            field="email"
            formValue={formData.email}
            changeFunction={handleChange}
          />
          <FormGroup
            nameLabel="Location"
            inputType="text"
            field="location"
            formValue={formData.location}
            changeFunction={handleChange}
          />
          <FormGroup
            nameLabel="LinkedIn URL"
            inputType="url"
            field="linkedin"
            formValue={formData.linkedin}
            changeFunction={handleChange}
          />
          <FormGroup
            nameLabel="Summary"
            inputType="text"
            field="summary"
            formValue={formData.summary}
            changeFunction={handleChange}
          />
          <FormGroup
            nameLabel="Skills"
            inputType="text"
            field="skills"
            formValue={formData.skills}
            changeFunction={handleChange}
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
                changeFunction={(e: ChangeEvent<HTMLInputElement>) =>
                  handleWorkExperienceChange(index, e)
                }
              />

              <FormGroup
                nameLabel="Role"
                inputType="text"
                field={`role-${index}`}
                formValue={experience.role}
                changeFunction={(e: ChangeEvent<HTMLInputElement>) =>
                  handleWorkExperienceChange(index, e)
                }
              />
              <FormGroup
                nameLabel="Start Date"
                inputType="text"
                field={`startDate-${index}`}
                formValue={experience.startDate}
                changeFunction={(e: ChangeEvent<HTMLInputElement>) =>
                  handleWorkExperienceChange(index, e)
                }
              />
              <FormGroup
                nameLabel="End Date"
                inputType="text"
                field={`endDate-${index}`}
                formValue={experience.endDate}
                changeFunction={(e: ChangeEvent<HTMLInputElement>) =>
                  handleWorkExperienceChange(index, e)
                }
              />
              <FormGroup
                nameLabel="Description"
                inputType="text"
                field={`description-${index}`}
                formValue={experience.description}
                changeFunction={(e: ChangeEvent<HTMLInputElement>) =>
                  handleWorkExperienceChange(index, e)
                }
              />
            </div>
          ))}
          <button
            type="button"
            className="w-fit p-2 mx-auto my-2 border-none rounded bg-black text-white text-white hover:bg-white hover:text-black"
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
                changeFunction={(e: ChangeEvent<HTMLInputElement>) =>
                  handleEducationChange(index, e)
                }
              />
              <FormGroup
                nameLabel="Degree"
                inputType="text"
                field={`degree-${index}`}
                formValue={edu.degree}
                changeFunction={(e: ChangeEvent<HTMLInputElement>) =>
                  handleEducationChange(index, e)
                }
              />
              <FormGroup
                nameLabel="Field of Study"
                inputType="text"
                field={`fieldOfStudy-${index}`}
                formValue={edu.fieldOfStudy}
                changeFunction={(e: ChangeEvent<HTMLInputElement>) =>
                  handleEducationChange(index, e)
                }
              />
              <FormGroup
                nameLabel="Start Date"
                inputType="text"
                field={`startDate-${index}`}
                formValue={edu.startDate}
                changeFunction={(e: ChangeEvent<HTMLInputElement>) =>
                  handleEducationChange(index, e)
                }
              />
              <FormGroup
                nameLabel="End Date"
                inputType="text"
                field={`endDate-${index}`}
                formValue={edu.endDate}
                changeFunction={(e: ChangeEvent<HTMLInputElement>) =>
                  handleEducationChange(index, e)
                }
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
        {/* 
        <div
          className="mt-20 p-5 border border-gray-300 rounded"
          dangerouslySetInnerHTML={{ __html: resume }}
        /> */}
      </div>
      <button
        type="button"
        className="w-fit p-2 mx-auto my-2 border-none rounded bg-black text-white text-white hover:bg-white hover:text-black"
        onClick={() => {
          console.log("download");
          // createPDF(resume);
        }}
      >
        Download your Resume as a PDF
      </button>
    </>
  );
};

export default Resume;
