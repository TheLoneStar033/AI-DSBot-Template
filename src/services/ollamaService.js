// Native fetch is used (Node 18+)

/**
 * Service to interact with the Ollama API.
 */
class OllamaService {
    constructor() {
        this.baseUrl = process.env.OLLAMA_BASE_URL || 'http://127.0.0.1:11434';
        this.model = process.env.OLLAMA_MODEL || 'gemma:2b';
        this.systemPrompt = process.env.OLLAMA_SYSTEM_PROMPT;
        this.isBusy = false;
    }

    /**
     * Generates a response from the Ollama model.
     * @param {string} prompt - The user's prompt.
     * @returns {Promise<string>} - The model's response.
     */
    async generateResponse(prompt) {
        if (this.isBusy) {
            throw new Error('BUSY');
        }

        this.isBusy = true;

        try {
            const response = await fetch(`${this.baseUrl}/api/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: this.model,
                    prompt: prompt,
                    system: this.systemPrompt,
                    stream: false, // Disable streaming for simpler handling in Discord
                }),
            });

            if (!response.ok) {
                throw new Error(`Ollama API error: ${response.statusText}`);
            }

            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error('Error communicating with Ollama:', error);
            throw error;
        } finally {
            this.isBusy = false;
        }
    }
}

module.exports = new OllamaService();
