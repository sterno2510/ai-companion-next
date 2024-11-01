"use server";

const OpenAI = require("openai");
// const dotenv = require("dotenv");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const imageCreation = async (req, res) => {
  console.log("Image Creation is called");
  //   try {
  //     const bodyContent = req.body.data;
  //     console.log("generating image");
  //     const completion = await openai.images.generate({
  //       prompt: `${bodyContent}`,
  //       model: "dall-e-3",
  //       n: 1,
  //       response_format: "url",
  //       size: "1024x1024",
  //     });
  //     res.send(completion);
  //   } catch (error) {
  //     console.error("Error generating image:", error);
  //     res.status(500).send("Error generating image");
  //   }
};
