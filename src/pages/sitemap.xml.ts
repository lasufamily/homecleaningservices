import type { APIRoute } from "astro";
import { getBusinesses } from "../lib/airtable";
import { getGuideSitemapPaths } from "../lib/guides";
import { getLocationPath, getLocationTowns } from "../lib/locations";
import { commercialServices, residentialServices } from "../lib/services";

function urlEntry(origin: string, path: string): string {
  const normalizedPath = path === "/" || path.endsWith("/") ? path : `${path}/`;
  return `<url><loc>${origin}${normalizedPath}</loc></url>`;
}

export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? "https://homecleaningservices.sg";
  const businesses = await getBusinesses();
  const towns = getLocationTowns(businesses);
  const staticPaths = ["/", "/residential", "/commercial", "/about", "/contact", "/companies", "/nearme", "/search", "/privacy", "/terms"];
  const guidePaths = getGuideSitemapPaths();
  const servicePaths = [
    ...residentialServices.map((service) => `/residential/${service.slug}`),
    ...commercialServices.map((service) => `/commercial/${service.slug}`)
  ];
  const companyPaths = businesses.map((business) => `/companies/${business.slug}`);
  const locationPaths = towns.map((town) => getLocationPath(town));
  const entries = [...staticPaths, ...guidePaths, ...servicePaths, ...companyPaths, ...locationPaths].map((path) => urlEntry(origin, path)).join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
