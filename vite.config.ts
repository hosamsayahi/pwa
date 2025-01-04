import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        maximumFileSizeToCacheInBytes: 5 * 1024 ** 2, // 5 MB or set to something else
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "logo.png",
        "logos/sizes/72.svg",
        "logos/sizes/96.svg",
        "logos/sizes/128.svg",
        "logos/sizes/144.svg",
        "logos/sizes/152.svg",
        "logos/sizes/192.svg",
        "logos/sizes/284.svg",
        "logos/sizes/512.svg",
      ],
      manifest: {
        name: "هوپاد مدیا",
        short_name: "هوپاد مدیا",
        description: "مدیریت ارتباط با مشتری",
        theme_color: "#1D272F",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/logos/sizes/72.svg",
            sizes: "72x72",
            type: "image/svg",
            purpose: "any",
          },
          {
            src: "/logos/sizes/96.svg",
            sizes: "96x96",
            type: "image/svg",
            purpose: "any",
          },
          {
            src: "/logos/sizes/128.svg",
            sizes: "128x128",
            type: "image/svg",
            purpose: "any",
          },
          {
            src: "/logos/sizes/144.svg",
            sizes: "144x144",
            type: "image/svg",
            purpose: "any",
          },
          {
            src: "/logos/sizes/152.svg",
            sizes: "152x152",
            type: "image/svg",
            purpose: "any",
          },
          {
            src: "/logos/sizes/192.svg",
            sizes: "192x192",
            type: "image/svg",
            purpose: "any",
          },
          {
            src: "/logos/sizes/384.svg",
            sizes: "384x384",
            type: "image/svg",
            purpose: "any",
          },
          {
            src: "/logos/sizes/512.svg",
            sizes: "512x512",
            type: "image/svg",
            purpose: "any",
          },
        ],
      },
    }),
  ],
});
