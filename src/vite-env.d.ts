/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_FB_AUTH_URL: string;
  readonly VITE_APP_FB_DATABASE_URL: string;
  readonly VITE_APP_FB_KEY: string;

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
