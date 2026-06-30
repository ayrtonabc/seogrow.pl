import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const shouldOpenVisualizer = process.env.ANALYZE === "true"

// https://vite.dev/config/
export default defineConfig(async () => {
  const plugins = [react()]

  try {
    const { visualizer } = await import("rollup-plugin-visualizer")
    plugins.push(visualizer({ open: shouldOpenVisualizer, filename: "dist/stats.html" }))
  } catch {
    console.warn('rollup-plugin-visualizer no está disponible; se omite stats.html')
  }

  return {
    plugins,
    resolve: {
      tsconfigPaths: true,
    },
    build: {
      target: "esnext",
      minify: "esbuild",
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes("node_modules")) {
              if (id.includes("react-icons")) {
                return "vendor-icons"
              }
              if (
                id.includes("@chakra-ui") ||
                id.includes("@emotion") ||
                id.includes("framer-motion") ||
                id.includes("next-themes")
              ) {
                return "vendor-ui"
              }
              if (id.includes("react-router-dom") || id.includes("react-dom") || /[\\/]react[\\/]/.test(id)) {
                return "vendor-react"
              }
              return "vendor"
            }
          },
        },
      },
    },
  }
})
