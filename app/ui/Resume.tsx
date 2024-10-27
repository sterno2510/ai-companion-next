import React from "react";
import FormGroup from "./FormGroup";
import ResumeHistory from "./ResumeHistory";
import {
  ContainerStyled,
  TitleStyled,
  ResumeFormStyled,
  ButtonStyled,
  SectionStyled,
  SectionTitleStyled,
  DangerousHtmlStyled,
} from "./FormStyledComponents";
import SubmitButton from "./SubmitButton";
import createPDF from "./helpers/createPdf";

const Resume = () => {
  const { userObject } = useOutletContext();

  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
      <div className="font-bold text-2xl text-center pb-5">
        Update Your Resume
      </div>
      {/* <ResumeHistory userObject={userObject} /> */}
      <ResumeHistory />
      <form className="flex flex-col">
          <FormGroup
            nameLabel="Full Name"
            inputType="text"
            name="fullName"
            required
          />
          <FormGroup
            nameLabel="Email"
            inputType="email"
            name="email"
            required
          />
          <FormGroup
            nameLabel="Location"
            inputType="text"
            name="location"
            required
          />
          <FormGroup
            nameLabel="LinkedIn URL"
            inputType="url"
            name="linkedin"
            required
          />
          <FormGroup
            nameLabel="Summary"
            inputType="text"
            name="summary"
            required
          />
          <FormGroup
            nameLabel="Skills"
            inputType="text"
            name="skills"
            required
          />

          {/* Work Experience Section */}
          <SectionStyled>
            <SectionTitleStyled>Work Experience</SectionTitleStyled>
            {/* Template for Work Experience Entries */}
            <div className="work-experience-entries">
              <WorkExperienceEntry index={0} />
            </div>
            <ButtonStyled type="button" onClick={() => addWorkExperience()}>
              Add Another Job
            </ButtonStyled>
          </SectionStyled>

          {/* Education Section */}
          <SectionStyled>
            <SectionTitleStyled>Education</SectionTitleStyled>
            {/* Template for Education Entries */}
            <div className="education-entries">
              <EducationEntry index={0} />
            </div>
            <ButtonStyled type="button" onClick={() => addEducation()}>
              Add Another Education
            </ButtonStyled>
          </SectionStyled>

          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </div>
        {/* Display generated resume (replace with actual state handling if needed) */}
        <DangerousHtmlStyled
          dangerouslySetInnerHTML={{
            __html: "<p>Your generated resume will appear here.</p>",
          }}
        />
      </ContainerStyled>
      <ButtonStyled
        type="button"
        onClick={() => createPDF("Your generated resume will appear here.")}
      >
        Download your Resume as a PDF
      </ButtonStyled>
    </>
  );

  // Helper function to dynamically add work experience
  function addWorkExperience() {
    const workExperienceEntries = document.querySelector(
      ".work-experience-entries"
    );
    const index = workExperienceEntries.children.length; // Get current number of entries

    const newEntry = document.createElement("div");
    newEntry.innerHTML = `
      <FormGroup nameLabel="Company" inputType="text" name="workExperience[${index}].company" required />
      <FormGroup nameLabel="Role" inputType="text" name="workExperience[${index}].role" required />
      <FormGroup nameLabel="Start Date" inputType="text" name="workExperience[${index}].startDate" required />
      <FormGroup nameLabel="End Date" inputType="text" name="workExperience[${index}].endDate" required />
      <FormGroup nameLabel="Description" inputType="text" name="workExperience[${index}].description" required />
    `;
    workExperienceEntries.appendChild(newEntry);
  }

  // Helper function to dynamically add education
  function addEducation() {
    const educationEntries = document.querySelector(".education-entries");
    const index = educationEntries.children.length; // Get current number of entries

    const newEntry = document.createElement("div");
    newEntry.innerHTML = `
      <FormGroup nameLabel="School" inputType="text" name="education[${index}].school" required />
      <FormGroup nameLabel="Degree" inputType="text" name="education[${index}].degree" required />
      <FormGroup nameLabel="Field of Study" inputType="text" name="education[${index}].fieldOfStudy" required />
      <FormGroup nameLabel="Start Date" inputType="text" name="education[${index}].startDate" required />
      <FormGroup nameLabel="End Date" inputType="text" name="education[${index}].endDate" required />
    `;
    educationEntries.appendChild(newEntry);
  }
};

const WorkExperienceEntry = ({ index }) => (
  <div>
    <FormGroup
      nameLabel="Company"
      inputType="text"
      nameLabel={`workExperience[${index}].company`}
      required
    />
    <FormGroup
      nameLabel="Role"
      inputType="text"
      nameLabel={`workExperience[${index}].role`}
      required
    />
    <FormGroup
      nameLabel="Start Date"
      inputType="text"
      nameLabel={`workExperience[${index}].startDate`}
      required
    />
    <FormGroup
      nameLabel="End Date"
      inputType="text"
      nameLabel={`workExperience[${index}].endDate`}
      required
    />
    <FormGroup
      nameLabel="Description"
      inputType="text"
      nameLabel={`workExperience[${index}].description`}
      required
    />
  </div>
);

const EducationEntry = ({ index }) => (
  <div>
    <FormGroup
      nameLabel="School"
      inputType="text"
      nameLabel={`education[${index}].school`}
      required
    />
    <FormGroup
      nameLabel="Degree"
      inputType="text"
      nameLabel={`education[${index}].degree`}
      required
    />
    <FormGroup
      nameLabel="Field of Study"
      inputType="text"
      nameLabel={`education[${index}].fieldOfStudy`}
      required
    />
    <FormGroup
      nameLabel="Start Date"
      inputType="text"
      nameLabel={`education[${index}].startDate`}
      required
    />
    <FormGroup
      nameLabel="End Date"
      inputType="text"
      nameLabel={`education[${index}].endDate`}
      required
    />
  </div>
);

export default Resume;
