import { GoogleGenAI } from "@google/genai";
import { Request, Response } from "express";


export class Agent {
  private ai;
  constructor(req: Request){
    this.ai = req.app.get('ai');
  }
  async helloworld() {
    const response = await this.ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: "Explain how AI works in a few words",
    });
    return response.text;
  }
}