// import React, { useState } from "react";
// import axios from "axios";
"use client";
import SubmitButton from "./SubmitButton";
import { useActionState } from "react";
import { imageCreation } from "../lib/actions";

const ImageCreation = () => {
  const [state, formAction] = useActionState(imageCreation, "");
  //   const [query, setQuery] = useState("");
  //   const [imageData, setImageData] = useState(null);
  //   const [submitting, setSubmitting] = useState(false);

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     setSubmitting(true);
  //     console.info("Image is being generated, please wait.");
  //     axios
  //       .post("/api/openai/image-creation", { data: query })
  //       .then((response) => {
  //         console.info("response", response);
  //         setImageData(response.data.data[0]);
  //         setSubmitting(false);
  //       })
  //       .catch((err) => {
  //         console.info(err);
  //       });
  //   };

  return (
    <div className="flex flex-col items-center p-5 min-h-screen">
      <div className="pb-5">
        Please note that with the release of DALL·E 3, the model now takes in
        the default prompt provided and automatically re-write it for safety
        reasons, and to add more detail (more detailed prompts generally result
        in higher quality images).
      </div>
      <form className="flex flex-col items-center" action={formAction}>
        <textarea
          id="imageQuery"
          name="imageQuery"
          //   value={query}
          //   onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a description for your image"
        />
        {/* <SubmitButton onClick={handleSubmit} type="button" loading={submitting}>
          Submit
        </SubmitButton> */}
      </form>
      {/* {imageData && (
        <div className="w-3/4 flex flex-col items-center">
          <div>
            Updated prompt created by OpenAI:
            {imageData.revised_prompt}
          </div>
          <ImageStyled src={imageData.url} alt="Generated AI Image" />
        </div>
      )} */}
    </div>
  );
};

export default ImageCreation;
