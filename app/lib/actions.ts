"use server";

import OpenAI from "openai";
import axios from "axios";
import { getSession } from "@auth0/nextjs-auth0";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getAccessToken = async () => {
  const options = {
    method: "POST",
    url: "https://dev-qz6qtpf8evrwt4w5.us.auth0.com/oauth/token",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: "NJ76XtCzfUyBT1Q7leyw0ObAETSOlw0j",
      client_secret: process.env.AUTH0_CLIENT_SECRETID_FOR_MANAGEMENT_API || "",
      audience: "https://dev-qz6qtpf8evrwt4w5.us.auth0.com/api/v2/",
    }),
  };

  try {
    const response = await axios.request(options);
    return response.data.access_token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUser = async (user_id: string) => {
  // use get session to get user_id, remove from front end
  const MGMT_API_ACCESS_TOKEN = await getAccessToken();

  try {
    const options = {
      method: "GET",
      url: `https://dev-qz6qtpf8evrwt4w5.us.auth0.com/api/v2/users/${user_id}`,
      headers: {
        authorization: `Bearer ${MGMT_API_ACCESS_TOKEN}`,
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

export interface CoverLetterState {
  coverLetter?: string;
  jobDescription?: string;
  resume?: string;
}

export const coverLetterGeneration = async (
  prevState: CoverLetterState,
  formData: FormData
) => {
  const session = await getSession();
  const user_id = session?.user.sub;
  const user = await getUser(user_id);
  const openAIKey = user.user_metadata?.openAiApiKey;

  const openai = new OpenAI({
    apiKey: openAIKey,
  });

  try {
    const jobDescription = formData.get("jobDescription");
    const resume = formData.get("resume");
    console.log("generating Cover Letter");

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are an expert in creating professional cover letters in HTML format.",
        },
        {
          role: "user",
          content: `Using this resume ${resume} and this job description ${jobDescription}, generate and return only a traditional one-page cove letter, not a resume. Do not include a header in the letter, start with dear..., Do not include \`\`\`html or \`\`\` at the beginning or end of the response. Ensure the response is clean HTML. Do not set a max width for the body element. There should be a .5inch margin around the resume, put this css in a div containing the entire cover letter, not the body. Make sure to include a <br> tag at the end of each paragraph.`,
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 3000,
      top_p: 1,
    });

    const coverLetter = completion.choices[0].message.content;
    console.log("give me the cover letter", coverLetter);
    return { coverLetter };
  } catch (error) {
    console.error("Error generating Cover Letter:", error);
    return { message: "Error generating Cover Letter" };
  }
};
