"use server";

import OpenAI from "openai";
import axios from "axios";
import { getSession } from "@auth0/nextjs-auth0";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getUser = async (user_id: string) => {
  // use get session to get user_id, remove from front end
  try {
    const options = {
      method: "GET",
      url: `https://dev-qz6qtpf8evrwt4w5.us.auth0.com/api/v2/users/${user_id}`,
      headers: {
        authorization: `Bearer ${process.env.MGMT_API_ACCESS_TOKEN}`,
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw error;
    } else {
      console.error("An unknown error occurred");
      throw new Error("An unknown error occurred");
    }
  }
};

export interface State {
  imageUrl?: string;
  updatedPrompt?: string;
  message?: string;
}

export const imageCreation = async (prevState: State, formData: FormData) => {
  const session = await getSession();
  const user_id = session?.user.sub;
  const user = await getUser(user_id);
  const openAIKey = user.user_metadata?.openAiApiKey;

  const openai = new OpenAI({
    apiKey: openAIKey,
  });
  console.log("HOLIDAY", openAIKey);
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

export interface ApiState {
  apiKey?: string;
}

export const updateUser = async (prevState: ApiState, formData: FormData) => {
  const session = await getSession();
  const user_id = session?.user.sub;

  const options = {
    method: "PATCH",
    url: `https://dev-qz6qtpf8evrwt4w5.us.auth0.com/api/v2/users/${user_id}`,
    headers: {
      authorization: `Bearer ${process.env.MGMT_API_ACCESS_TOKEN}`,
      "content-type": "application/json",
    },
    data: {
      user_metadata: {
        openAiApiKey: formData.get("apiKey"),
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

  revalidatePath("/dashboard/");
  redirect("/dashboard/");
};
