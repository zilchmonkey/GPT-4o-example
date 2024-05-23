import OpenAI from "openai"
import "dotenv/config"

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
})

async function getText() {
  const completions = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: "What is the oldest of al South American capitals?",
      },
      {
        role: "assistant",
        content:
          "The oldest capital city in South America is Quito, the capital of Ecuador. It was founded on December 6, 1534, by Spanish settlers, but the area had been inhabited long before by indigenous peoples including the Quitu tribe, after whom the city is named. Quito is notable for its well-preserved historical center, which is a UNESCO World Heritage Site.",
      },
      {
        role: "user",
        content: "Where is that?",
      },
    ],
    model: process.env.MODEL,
  })
  console.log(completions.choices[0].message)
}

async function getTextToDescribeImage() {
  const completions = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "what is the creature wearing on the top of its head?",
          },
          {
            type: "image_url",
            image_url: {
              url: process.env.DESCRIBE_IMAGE,
            },
          },
        ],
      },
    ],
    model: process.env.MODEL,
  })
  console.log(completions.choices[0].message)
}

async function getTextToCompareImages() {
  const completions = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What is the difference between the two images?",
          },
          {
            type: "image_url",
            image_url: {
              url: process.env.COMPARE_IMAGE_1,
            },
          },
          {
            type: "image_url",
            image_url: {
              url: process.env.COMPARE_IMAGE_2,
            },
          },
        ],
      },
    ],
    model: process.env.MODEL,
  })
  console.log(completions.choices[0].message)
}

getText()
// getTextToDescribeImage()
// getTextToCompareImages()
