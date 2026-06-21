# Excel AI Assistant (Fixcel)

An AI-powered web app that cleans messy Excel files for you. Upload a `.xlsx` file, let **Google Gemini** analyze the data and propose cleaning actions, review and accept or skip each suggestion, then download the cleaned file plus a summary report.

Built with Next.js and originally scaffolded/synced via [v0.dev](https://v0.dev).

## How It Works

1. **Upload Excel** — upload an `.xlsx` file (up to 5MB)
2. **AI Analysis** — Gemini reviews the data and suggests cleaning actions (missing values, formatting issues, duplicates, etc.)
3. **Review & Accept** — go through each suggestion and accept or skip it
4. **Download Results** — get the cleaned spreadsheet and a summary report

Large files are handled via a **chunked processing** pipeline so big spreadsheets don't time out or blow past API limits.

## Features

- 🔐 User accounts via Supabase Auth (login/register)
- 📥 Excel upload & parsing (`xlsx`)
- 🤖 AI-driven cleaning recommendations powered by Google Gemini
- ✅ Per-suggestion accept/skip workflow
- 🧩 Chunked analysis pipeline for large files
- 📜 File history per user
- 📤 Download cleaned file + summary report
- 🌓 Light/dark theme toggle
- 🎨 Full shadcn/ui component library (accordion, dialog, table, charts, sidebar, etc.)

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19, TypeScript
- **Styling/UI:** Tailwind CSS, shadcn/ui (Radix UI primitives), lucide-react icons
- **AI:** Google Generative AI (`@google/generative-ai` — Gemini)
- **Auth & Storage:** Supabase
- **Excel processing:** `xlsx`
- **Forms/validation:** react-hook-form + zod
- **Charts:** Recharts

## Project Structure

```
.
├── app/
│   ├── page.tsx                          # Landing page
│   ├── app/page.tsx                      # Main authenticated app (upload → clean → download)
│   ├── auth/                             # Login, register, OAuth callback
│   └── api/
│       ├── upload/                       # File upload endpoint
│       ├── analyze/                      # AI analysis (standard)
│       ├── analyze-chunked/              # AI analysis (large files, chunked)
│       ├── apply-recommendation/         # Apply a single accepted suggestion
│       ├── apply-chunked-recommendation/ # Apply a suggestion (chunked mode)
│       ├── apply-user-recommendation/    # Apply a custom user-requested change
│       ├── user-request/                 # Free-form user cleaning requests
│       └── download/ & download-chunked/ # Download cleaned file/report
├── components/
│   ├── file-upload.tsx
│   ├── cleaning-step.tsx
│   ├── enhanced-user-input-step.tsx
│   ├── chunked-progress-display.tsx
│   ├── results-download.tsx
│   ├── file-history.tsx
│   └── ui/                               # shadcn/ui component library
├── contexts/
│   ├── auth-context.tsx
│   └── enhanced-auth-context.tsx
├── lib/
│   ├── gemini-client.ts / advanced-gemini-client.ts / chunked-gemini-client.ts
│   ├── excel-processor.ts / enhanced-excel-processor.ts / chunked-excel-processor.ts
│   ├── smart-recommendations.ts
│   ├── user-request-processor.ts
│   ├── file-storage.ts
│   └── supabase.ts
└── middleware.ts
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- A [Supabase](https://supabase.com/) project (for auth + storage)
- A [Google Gemini API key](https://ai.google.dev/)

### 1. Clone the repo
```bash
git clone https://github.com/gamalyahia/Fixcel_Data_Analisyss.git
cd Fixcel_Data_Analisyss
```

### 2. Install dependencies
```bash
npm install --legacy-peer-deps
# or, since this project ships a pnpm lockfile:
pnpm install
```

### 3. Configure environment variables
Create a `.env.local` file in the project root:
```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-project-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-supabase-service-role-key>
GOOGLE_GEMINI_API_KEY=<your-gemini-api-key>
```

### 4. Run the dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run linting |

## Deployment

This project is set up to deploy on [Vercel](https://vercel.com/) and stays in sync with its [v0.dev](https://v0.dev) project. Make sure to set the environment variables above in your Vercel project settings.

## License

No license specified yet — consider adding one (e.g. MIT) if you intend for others to reuse this code.
