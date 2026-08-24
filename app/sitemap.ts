import type { MetadataRoute } from "next";
import { classes } from "@/data/classes";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/consulting", "/classes", "/reviews", "/contact", "/privacy", "/terms"];
  return [...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : .8 })), ...classes.map((item) => ({ url: `${siteConfig.url}/classes/${item.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8 }))];
}
