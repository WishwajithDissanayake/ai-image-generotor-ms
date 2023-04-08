const { app } = require('@azure/functions');
const openai = require("../../lib/openai");

console.log('1144 fc');

app.http("getChatGPTSuggestion", {

    methods: ["GET"],
    authLevel: "anonymous",
    handler: async (request, context) => {
        console.log('1565');
        // const headers = { 'Authorization': `Bearer ${API_KEY}` };
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt:
                "write a random text prompt for DALL.E to genarate an image, this prompt will be shown to the user, include details such as the genre and what type of painting it should be, options can include: oil painting, watercolor, photo-realstic, 4k, abstract, modern, black and white etc. Do not wrap the answer in quotes.",
            max_tokens: 100,
            temperature: 0.8,

        });
        context.log(`Http function processed request for url "${request.url}"`);
        const responseText = response.data.choices[0].text;
        return { body: responseText };
    }
});
