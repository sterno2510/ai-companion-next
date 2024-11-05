"use server";

import OpenAI from "openai";
import axios from "axios";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface State {
  imageUrl?: string;
  updatedPrompt?: string;
  message?: string;
}

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

    const imageUrl = completion.data[0].url;
    const updatedPrompt = completion.data[0].revised_prompt;
    return { imageUrl, updatedPrompt };
  } catch (error) {
    console.error("Error generating image:", error);
    return { message: "Error generating image" };
  }
};

export const updateUser = async (user_id: string, apiKey: string) => {
  console.log("what is the user id:", user_id);
  const options = {
    method: "PATCH",
    url: `https://dev-qz6qtpf8evrwt4w5.us.auth0.com/api/v2/users/${user_id}`,
    headers: {
      authorization: `Bearer ${process.env.MGMT_API_ACCESS_TOKEN}`,
      "content-type": "application/json",
    },
    data: {
      user_metadata: {
        openAiApiKey: "test api key",
      },
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error.response.data);
    });
};

export const getUser = async (user_id: string) => {
  try {
    const options = {
      method: "GET",
      url: `https://dev-qz6qtpf8evrwt4w5.us.auth0.com/api/v2/users/${user_id}`,
      headers: {
        authorization: `Bearer ${process.env.MGMT_API_ACCESS_TOKEN}`,
      },
    };

    const response = await axios.request(options);
    return response.data; // or response.data.user_metadata if you only want that
  } catch (error) {
    console.error(error.response.data);
    throw error;
  }
};
