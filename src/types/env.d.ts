interface ImportMetaEnv {
    VITE_HOST: string;
    VITE_PORT: number;
    VITE_APP_BASE: string;
    VITE_APP_ORIGINS: string;
    VITE_APP_DIST: string;
}

declare global {
    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
}
