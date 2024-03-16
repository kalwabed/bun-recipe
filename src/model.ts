import { GoogleGenerativeAI } from '@google/generative-ai'

export const askAi = async () => {
  const aiKey = process.env.GOOGLE_GEMINI_API_KEY || ''

  if (!aiKey) {
    throw new Error("Google API Key is required!")
  }

  const genAI = new GoogleGenerativeAI(aiKey)

  const model = genAI.getGenerativeModel({
    model: 'gemini-pro',
    generationConfig: {
      temperature: 0.7
    }
  })

  const prompts = `
You are a professional chef who works in a 5 star restaurant in Indonesia. There is a local citizen who asks about what recommendations for simple and self-cooked dishes at home. 
Give one example and related references. Answer in the format as follows: the name of the dish, the ingredients, and how to cook it. also make sure you give a little information on each part if needed
`
  const apiResponse = await model.generateContent(prompts)

  return apiResponse.response.text()
}
