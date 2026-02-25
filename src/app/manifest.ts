import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Modern Charm Uganda",
    short_name: "Modern Charm",
    description: "Premium event styling and decor in Kampala, Uganda",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFAF6",
    theme_color: "#3D7A6E",
    icons: [
      {
        src: "/images/logo-reference.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo-reference.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
