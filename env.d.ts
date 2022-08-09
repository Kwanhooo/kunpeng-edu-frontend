/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_KEY: string
  readonly DZ_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
