"use client";
import React, { useState } from "react";
import axios from "axios";
// import {
//   ContainerStyled,
//   TitleStyled,
//   CoverLetterFormStyled,
//   ButtonStyled,
//   DangerousHtmlStyled,
//   div,
//   TextAreaStyled,
//   LabelStyled,
// } from "./FormStyledComponents";
import SubmitButton from "./SubmitButton";
// import createPDF from "./helpers/createPdf";

const CoverLetterUI = () => {
  const [coverLetter, setCoverLetter] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({});

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setSubmitting(true);
  //     await axios
  //       .post("/api/openai/cover-letter", formData)
  //       .then((res) => {
  //         setCoverLetter(res.data.content);
  //       })
  //       .then(() => {
  //         setSubmitting(false);
  //       })
  //       .catch((err) => {
  //         console.log(`The call to the cover letter route errored ${err}`);
  //       });
  //   };

  return (
    <div className="flex flex-col items-center p-5 min-h-screen">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        {" "}
        <div className="flex flex-col mb-5 w-full">
          <label
            className="font-bold mb-1 flex justify-center"
            htmlFor="jobDescription"
          >
            Copy the job description into the text box below
          </label>
          <textarea
            className="p-2 mt-1 border border-gray-300 rounded-md min-h-[500px]"
            id="jobDescription"
            name="jobDescription"
            // value={formData.jobDescription}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col mb-5">
          <label
            className="font-bold mb-1 flex justify-center"
            htmlFor="resume"
          >
            Copy your resume into the text box below
          </label>
          <textarea
            className="p-2 mt-1 border border-gray-300 rounded-md min-h-[500px]"
            id="resume"
            name="resume"
            // value={formData.resume}
            // onChange={handleChange}
            required
          />
        </div>
        <SubmitButton type="submit" loading={submitting}>
          Generate Cover Letter
        </SubmitButton>
      </form>
      {coverLetter && (
        <>
          <div
            className="mt-20 p-5 border border-gray-300 rounded-md"
            dangerouslySetInnerHTML={{ __html: coverLetter }}
          />
          {/* <ButtonStyled
            type="button"
            onClick={() => {
              createPDF(coverLetter);
            }}
          >
            Download your Cover Letter as a PDF
          </ButtonStyled> */}
        </>
      )}
    </div>
  );
};

export default CoverLetterUI;
