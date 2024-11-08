"use client";
// CONVERT THIS BAD TO TYPESCRIPT, NEED TO DEAL WITH COVERLETTERGENERATION
import SubmitButton from "./SubmitButton";
import { useActionState } from "react";
import { coverLetterGeneration } from "../lib/actions";
import { useFormStatus } from "react-dom";
import createPDF from "./helpers/convertToPDF";

function SubmitButtonWrapper() {
  const { pending } = useFormStatus();
  return (
    <SubmitButton type="submit" loading={pending}>
      Generate Cover Letter
    </SubmitButton>
  );
}

const CoverLetterUI = () => {
  const initialState = {
    jobDescription: "",
    resume: "",
    coverLetter: "",
  };
  const [state, formAction] =
    useActionState < CoverLetterState > (coverLetterGeneration, initialState);

  console.log(state.coverLetter);
  return (
    <div className="flex flex-col items-center p-5 min-h-screen">
      <form
        action={formAction}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
      >
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
            placeholder="Paste the job description here"
            style={{ color: "black" }}
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
            placeholder="Paste your resume here"
            name="resume"
            style={{ color: "black" }}
            required
          />
        </div>
        <SubmitButtonWrapper />
      </form>
      {state.coverLetter && (
        <>
          <div
            className="mt-20 p-5 border border-gray-300 rounded-md"
            dangerouslySetInnerHTML={{ __html: state.coverLetter }}
          />
          <button
            className="w-fit px-5 py-2.5 my-2 border-none rounded-md bg-gray-700 text-white cursor-pointer hover:bg-gray-500"
            type="button"
            onClick={() => {
              createPDF(coverLetter);
            }}
          >
            Download your Cover Letter as a PDF
          </button>
        </>
      )}
    </div>
  );
};

export default CoverLetterUI;
