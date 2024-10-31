"use client";
import React from "react";
import { useFormState } from "react-dom";
import FormGroup from "./FormGroup";
import SubmitButton from "./SubmitButton";

// ... keep all the existing interfaces (WorkExperience, Education, FormData) ...

interface State {
  message: string | null;
  errors: Record<string, string[]>;
  formData: FormData;
}

const initialState: State = {
  message: null,
  errors: {},
  formData: {
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
  },
};

async function handleResumeSubmit(prevState: State, formData: FormData) {
  // Validation example
  const errors: Record<string, string[]> = {};

  const rawFormData = {
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    location: formData.get("location") as string,
    linkedin: formData.get("linkedin") as string,
    summary: formData.get("summary") as string,
    skills: formData.get("skills") as string,
    workExperience: [],
    education: [],
  };

  if (!rawFormData.email) {
    errors.email = ["Email is required"];
  }
  if (!rawFormData.fullName) {
    errors.fullName = ["Full name is required"];
  }

  if (Object.keys(errors).length > 0) {
    return {
      message: "Please fix the errors below",
      errors,
      formData: prevState.formData,
    };
  }

  // Process work experience
  const workExperienceCount = formData.getAll("company").length;
  const workExperience = [];

  for (let i = 0; i < workExperienceCount; i++) {
    workExperience.push({
      id: Date.now() + i,
      company: formData.get(`company-${i}`) as string,
      role: formData.get(`role-${i}`) as string,
      startDate: formData.get(`startDate-${i}`) as string,
      endDate: formData.get(`endDate-${i}`) as string,
      description: formData.get(`description-${i}`) as string,
    });
  }

  // Process education
  const educationCount = formData.getAll("school").length;
  const education = [];

  for (let i = 0; i < educationCount; i++) {
    education.push({
      id: Date.now() + i,
      school: formData.get(`school-${i}`) as string,
      degree: formData.get(`degree-${i}`) as string,
      fieldOfStudy: formData.get(`fieldOfStudy-${i}`) as string,
      startDate: formData.get(`startDate-${i}`) as string,
      endDate: formData.get(`endDate-${i}`) as string,
    });
  }
  console.log("workding");
  // Here you would typically send the data to your server
  // For now, we'll just return a success message
  return {
    message: "Resume submitted successfully!",
    errors: {},
    formData: {
      ...rawFormData,
      workExperience,
      education,
    },
  };
}

const Resume: React.FC = () => {
  const [state, formAction] = useFormState(handleResumeSubmit, initialState);

  const addWorkExperience = () => {
    const newFormData = {
      ...state.formData,
      workExperience: [
        ...state.formData.workExperience,
        {
          id: Date.now(),
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    };

    return {
      ...state,
      formData: newFormData,
    };
  };

  const addEducation = () => {
    const newFormData = {
      ...state.formData,
      education: [
        ...state.formData.education,
        {
          id: Date.now(),
          school: "",
          degree: "",
          fieldOfStudy: "",
          startDate: "",
          endDate: "",
        },
      ],
    };

    return {
      ...state,
      formData: newFormData,
    };
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-5">
        <form action={formAction} className="flex flex-col">
          {state.message && (
            <div
              className={`p-4 mb-4 ${
                state.errors && Object.keys(state.errors).length > 0
                  ? "bg-red-100"
                  : "bg-green-100"
              } rounded`}
            >
              {state.message}
            </div>
          )}

          <FormGroup
            nameLabel="Full Name"
            inputType="text"
            field="fullName"
            formValue={state.formData.fullName}
            placeHolder="John Doe"
          />
          {state.errors?.fullName && (
            <p className="text-red-500 text-sm">{state.errors.fullName[0]}</p>
          )}

          <FormGroup
            nameLabel="Email"
            inputType="email"
            field="email"
            formValue={state.formData.email}
            placeHolder="John.Doe@email.com"
          />
          {state.errors?.email && (
            <p className="text-red-500 text-sm">{state.errors.email[0]}</p>
          )}

          <FormGroup
            nameLabel="Location"
            inputType="text"
            field="location"
            formValue={state.formData.location}
            placeHolder="City, State"
          />

          <FormGroup
            nameLabel="LinkedIn URL"
            inputType="url"
            field="linkedin"
            formValue={state.formData.linkedin}
            placeHolder="https://www.linkedin.com/in/johndoe"
          />

          <FormGroup
            nameLabel="Summary"
            inputType="text"
            field="summary"
            formValue={state.formData.summary}
            placeHolder="Enter a Summary..."
          />

          <FormGroup
            nameLabel="Skills"
            inputType="text"
            field="skills"
            formValue={state.formData.skills}
            placeHolder="Enter Skills..."
          />

          {state.formData.workExperience.map((experience, index) => (
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
                placeHolder="Enter Company Name..."
              />
              <FormGroup
                nameLabel="Role"
                inputType="text"
                field={`role-${index}`}
                formValue={experience.role}
                placeHolder="Enter Role..."
              />
              <FormGroup
                nameLabel="Start Date"
                inputType="text"
                field={`startDate-${index}`}
                formValue={experience.startDate}
                placeHolder="Enter Start Date (01/2020)"
              />
              <FormGroup
                nameLabel="End Date"
                inputType="text"
                field={`endDate-${index}`}
                formValue={experience.endDate}
                placeHolder="Enter End Date (01/2021)"
              />
              <FormGroup
                nameLabel="Description"
                inputType="text"
                field={`description-${index}`}
                formValue={experience.description}
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

          {state.formData.education.map((edu, index) => (
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
                placeHolder="Enter School Name..."
              />
              <FormGroup
                nameLabel="Degree"
                inputType="text"
                field={`degree-${index}`}
                formValue={edu.degree}
                placeHolder="Enter Degree..."
              />
              <FormGroup
                nameLabel="Field of Study"
                inputType="text"
                field={`fieldOfStudy-${index}`}
                formValue={edu.fieldOfStudy}
                placeHolder="Enter Field of Study..."
              />
              <FormGroup
                nameLabel="Start Date"
                inputType="text"
                field={`startDate-${index}`}
                formValue={edu.startDate}
                placeHolder="Enter Start Date (01/2020)"
              />
              <FormGroup
                nameLabel="End Date"
                inputType="text"
                field={`endDate-${index}`}
                formValue={edu.endDate}
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

          <SubmitButton type="submit" loading={false}>
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
