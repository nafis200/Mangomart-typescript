

interface ImportMetaEnv {
    readonly VITE_apiKey: string;
    readonly VITE_authDomain: string;
    readonly VITE_projectId: string;
    readonly VITE_storageBucket: string;
    readonly VITE_messagingSenderId: string;
    readonly VITE_appId: string;
    readonly VITE_measurementId:string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
