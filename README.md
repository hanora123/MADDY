# Gran Loco Studio

A prompt command library and Groq-powered creative assistant. Built with a small Node.js server and browser-native HTML, CSS, and JavaScript.

## Run locally

Requires Node.js 18 or newer.

```sh
npm start
```

Open http://localhost:3000. The prompt library and composer work without an API key. To enable chat, create a free Groq API key at https://console.groq.com/keys and set `GROQ_API_KEY` before starting the server:

```sh
GROQ_API_KEY=your_groq_api_key npm start
```

`.env.example` lists the available environment variables; copy it to `.env` and add your key. The server loads `.env` on startup. `GROQ_MODEL` defaults to `openai/gpt-oss-20b`, and `PORT` defaults to `3000`.

## Deploy outside Codespaces

The included `render.yaml` configures a free Render web service. Push the project to GitHub, then create a Blueprint at https://dashboard.render.com/blueprints and select this repository. When prompted, provide a newly rotated `GROQ_API_KEY`; Render stores it as a secret environment variable.

Render provides a stable public URL without keeping the Codespace open. Free web services may sleep after inactivity, so the first visit after a quiet period can take a little longer to load.