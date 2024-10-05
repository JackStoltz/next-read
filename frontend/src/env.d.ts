// src/env.d.ts

namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_GOOGLE_BOOKS_API_KEY: string;
    // Add more environment variables here if needed
  }
}
