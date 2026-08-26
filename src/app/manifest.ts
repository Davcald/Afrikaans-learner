import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vlot — Learn Afrikaans",
    short_name: "Vlot",
    description:
      "Science-based Afrikaans: spaced repetition, active recall, comprehensible input and shadowing in one daily session.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0b1512",
    theme_color: "#0b1512",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
