"use server";

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export type State = {
  message?: string | null;
  imageUrl?: string | null;
  revised_prompt?: string | null;
};

export const imageCreation = async (prevState: State, formData: FormData) => {
  console.log("What is the query:", formData.get("imageQuery"));
  try {
    const bodyContent = formData.get("imageQuery");
    console.log("generating image");
    const completion = await openai.images.generate({
      prompt: `${bodyContent}`,
      model: "dall-e-3",
      n: 1,
      response_format: "url",
      size: "1024x1024",
    });

    // Extract the URL and return it as a plain object
    const imageUrl = completion.data[0].url;
    const updatedPrompt = completion.data[0].revised_prompt;
    return { imageUrl, updatedPrompt }; // Returning a plain object with just the URL
  } catch (error) {
    console.error("Error generating image:", error);
    return { message: "Error generating image" }; // Plain object for errors
  }
};
