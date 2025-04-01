import { z, genkit } from 'genkit';
import { vertexAI } from '@genkit-ai/vertexai';
import { gemini20Flash } from '@genkit-ai/vertexai';
import { logger } from 'genkit/logging';
import { enableGoogleCloudTelemetry } from '@genkit-ai/google-cloud';
import { startFlowServer } from '@genkit-ai/express';

const ai = genkit({
    plugins: [
        vertexAI({ location: 'us-central1'}),
    ]
});

logger.setLogLevel('debug');
enableGoogleCloudTelemetry();

export const restaurantSuggestionFlow = ai.defineFlow(
{
    name: 'restaurantSuggestionFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
},
async (country) => {
    // Construct a request and send it to the model API.
    const llmResponse = await ai.generate({
        prompt: `Suggest a restaurant based on the ${country} provided.`,
        model: gemini20Flash,
        config: {
            temperature: 1,
        },
    });

    return llmResponse.text;
});

startFlowServer({
    flows: [restaurantSuggestionFlow],
});