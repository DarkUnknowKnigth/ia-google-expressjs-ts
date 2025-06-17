export class Agent {
    ai;
    constructor(req) {
        this.ai = req.app.get('ai');
    }
    async helloworld() {
        const response = await this.ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: "Explain how AI works in a few words",
        });
        return response.text;
    }
    async sayHelloLikeNaruto(name) {
        const response = await this.ai.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: `Say hellow to ${name} like naruto in konoha city`
        });
        return response.text;
    }
    async codeExpert(problem) {
        const response = await this.ai.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: `Tell me a solution in Javascript to my problem ${problem}`
        });
        return response.text;
    }
}
