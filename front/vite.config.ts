import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true, // Permet d'exposer le serveur en réseau
    port: 5173,// Assure que Vite ne choisit pas un autre port
    hmr: {
      protocol: "ws",
      host: "localhost", // Peut être remplacé par "0.0.0.0" si problème
      clientPort: 5173, // Important pour Docker
    },
    watch: {
      usePolling: true, // Permet de mieux détecter les fichiers modifiés
      interval: 1000,
    },
  },
});