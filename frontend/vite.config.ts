import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        tanstackRouter({
            target: "react",
            routesDirectory: "./src/routes",
            generatedRouteTree: "./src/routeTree.gen.ts",
            routeFileIgnorePrefix: "-",
            quoteStyle: "single",
            autoCodeSplitting: true,
        }),
        react(),
    ],

    server: {
        open: true,
        port: 3000,
    },
});
