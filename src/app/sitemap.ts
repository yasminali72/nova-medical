import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nova-medical-center.local";
  const locales = ["en", "ar"];

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/specialties",
    "/doctors",
    "/facilities",
    "/contact",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // Static pages
    for (const route of staticRoutes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }

    // Dynamic services
    for (const service of services) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    // Dynamic doctors
    for (const doctor of doctors) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/doctors/${doctor.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return sitemapEntries;
}
