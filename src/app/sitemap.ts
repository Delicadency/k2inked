import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://k2.inked.vercel.app/", lastModified: new Date() },
    { url: "https://k2.inked.vercel.app/galeria", lastModified: new Date() },
    { url: "https://k2.inked.vercel.app/kontakt", lastModified: new Date() },
    { url: "https://k2.inked.vercel.app/regulamin", lastModified: new Date() },
    {
      url: "https://k2.inked.vercel.app/polityka-prywatnosci",
      lastModified: new Date(),
    },
    { url: "https://k2.inked.vercel.app/klaudia", lastModified: new Date() },
    { url: "https://k2.inked.vercel.app/kari", lastModified: new Date() },
    { url: "https://k2.inked.vercel.app/sonia", lastModified: new Date() },
    { url: "https://k2.inked.vercel.app/ewelina", lastModified: new Date() },
    { url: "https://k2.inked.vercel.app/mirella", lastModified: new Date() },
    { url: "https://k2.inked.vercel.app/emi", lastModified: new Date() },
  ];
}
