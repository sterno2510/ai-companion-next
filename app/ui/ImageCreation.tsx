"use client";
import SubmitButton from "./SubmitButton";
import { useActionState } from "react";
import { imageCreation } from "../lib/actions";
import { State } from "../lib/actions";
import Image from "next/image";
import { useFormStatus } from "react-dom";

// Create a new component for the submit button
function SubmitButtonWrapper() {
  const { pending } = useFormStatus();
  return (
    <SubmitButton type="submit" loading={pending}>
      Submit
    </SubmitButton>
  );
}

const ImageCreation = () => {
  const initialState: State = {
    imageUrl: undefined,
    updatedPrompt: undefined,
  };
  const [state, formAction] = useActionState(imageCreation, initialState);
  console.log("stat", state);

  return (
    <div className="flex flex-col items-center p-5 min-h-screen">
      <div className="w-full max-w-3xl">
        <div className="pb-5">
          Please note that with the release of DALL·E 3, the model now takes in
          the default prompt provided and automatically rewrites it for safety
          reasons, and to add more detail (more detailed prompts generally
          result in higher quality images).
        </div>
        <form action={formAction}>
          <textarea
            id="imageQuery"
            name="imageQuery"
            placeholder="Enter a description for your image"
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            style={{ minHeight: "100px", color: "black" }}
          />
          <div className="flex justify-center mt-5 pb-4">
            <SubmitButtonWrapper />
          </div>
        </form>
      </div>
      {state.imageUrl && (
        <div className="flex flex-col items-center">
          <div>
            <div className="pb-4 font-bold">
              Updated prompt created by OpenAI:
            </div>
            {state.updatedPrompt}
          </div>
          <Image
            className="mt-5 max-w-full max-h-full rounded-lg shadow-md"
            src={state.imageUrl}
            height={600}
            width={600}
            objectFit="contain"
            alt="Generated AI Image"
          />
        </div>
      )}
    </div>
  );
};

export default ImageCreation;
