import type { chatType, GeminiResponse} from "../types/type";
import axios from 'axios';

const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
async function generateContent(question : string) : Promise<string> {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`,
      {
        contents: [
          {
            parts: [
              {
                text: question
              }
            ]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    // console.log(response.data);
    const geminiResponse: GeminiResponse = response.data;
    console.log("Generated content:", geminiResponse.candidates[0].content.parts[0].text);
    return geminiResponse.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error generating content:', error);
    return "Error generating content";
  }
}


const answerBot = async (question : string) : Promise<chatType> => {
    return {
        id: Date.now(),
        content: await generateContent(question),
        isBot: true
    }
}

export default answerBot;