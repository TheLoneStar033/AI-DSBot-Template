# AI Discord Bot Template (Ollama)

A clean, specialized Discord bot template designed to interact with a local Ollama AI instance.

## Features
- **Integrated with Ollama**: Chat with models like Llama 2, Gemma, Mistral, etc.
- **Concurrency Limit**: Ensures only one request is processed at a time to save resources.
- **System Prompt**: Configurable persona for your AI.
- **Modern Stack**: Built with `discord.js` v14 and `commandkit`.

## Prerequisites
1.  **Node.js** (v18 or higher)
2.  **Ollama**: Installed and running locally. [Download Ollama](https://ollama.com/)
3.  **Discord Bot Token**: From the [Discord Developer Portal](https://discord.com/developers/applications).

## Setup

1.  **Clone the repository** (or just use this folder).
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Configure Environment**:
    - Rename `.env.example` to `.env`.
    - Fill in your `TOKEN` and `CLIENT_ID`.
    - Set your `OLLAMA_MODEL` (e.g., `gemma:2b`, `llama2`).
4.  **Run the Bot**:
    ```bash
    npm start
    ```

## Usage
- Use `/ask` to chat with the AI.
- Example: `/ask prompt: "Tell me a joke"`

## Manual Testing
You can test the AI connection without Discord using the included script:
```bash
node manual_request.js "Your test prompt"
```

## Customization
- **Change Model**: Update `OLLAMA_MODEL` in `.env`.
- **Change Persona**: Update `OLLAMA_SYSTEM_PROMPT` in `.env`.
