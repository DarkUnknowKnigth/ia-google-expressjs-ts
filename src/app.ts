import { GoogleGenAI } from '@google/genai';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { Agent } from './Agent';
dotenv.config();

const app = express();
const port = 3000;
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_IA_TOKEN });
app.set('ai', ai);
app.get('/helloworld', (req: Request, res: Response) => {
  const agent = new Agent(req);
  return agent.helloworld();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});