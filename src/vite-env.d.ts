/// <reference types="vite/client" />

declare namespace NodeJS {
    interface ProcessEnv {
        VITE_BASE_API_URL: string;
    }
}
