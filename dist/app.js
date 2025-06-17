import { GoogleGenAI } from '@google/genai';
import express from 'express';
import dotenv from 'dotenv';
import { Agent } from './Agent.js';
dotenv.config();
const app = express();
const port = 3000;
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_IA_TOKEN });
app.set('ai', ai);
app
    .get('/helloworld', async (req, res) => {
    const agent = new Agent(req);
    const message = await agent.helloworld();
    res.json({ message });
})
    .get('/hello/:name', async (req, res) => {
    const agent = new Agent(req);
    const message = await agent.sayHelloLikeNaruto(req.params.name);
    res.json({ message });
})
    .get('/code/:problem', async (req, res) => {
    const agent = new Agent(req);
    const message = await agent.codeExpert(req.params.problem);
    res.json({ message });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
