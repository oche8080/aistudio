import { GoogleGenAI } from "@google/genai";
import { WorkoutPlanRequest } from "../types";

// Initialize Gemini Client
// IMPORTANT: process.env.API_KEY is guaranteed to be available in this environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWorkoutPlan = async (request: WorkoutPlanRequest): Promise<string> => {
  try {
    const prompt = `
      You are an elite fitness coach at GymJunkies. Create a specific, high-intensity workout plan for a user with the following details:
      - Goal: ${request.goal}
      - Experience Level: ${request.level}
      - Available Time: ${request.duration}

      Format the response in clean Markdown. Include a warm-up, the main workout (with sets/reps), and a cool-down. Keep the tone motivating and energetic.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are a motivating, tough-love gym trainer named 'JunkieBot'. Keep answers concise, actionable, and formatted with clear headers.",
      }
    });

    return response.text || "Sorry, I'm taking a water break. Try again in a moment.";
  } catch (error) {
    console.error("Error generating workout:", error);
    return "Failed to generate workout. Please ensure your API key is valid and try again.";
  }
};
