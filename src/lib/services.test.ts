import { describe, expect, it } from "vitest";
import { getServiceBySlug, services } from "./services";

const plannedSlugs = [
  "home-cleaning",
  "part-time-maid",
  "deep-cleaning",
  "spring-cleaning",
  "move-in-move-out-cleaning",
  "end-of-tenancy-cleaning",
  "post-renovation-cleaning",
  "sofa-cleaning",
  "upholstery-cleaning",
  "mattress-cleaning",
  "carpet-cleaning",
  "curtain-cleaning",
  "floor-cleaning",
  "disinfection-service",
  "kitchen-cleaning",
  "bathroom-cleaning"
];

describe("service catalogue", () => {
  it("contains every planned SEO service slug", () => {
    expect(services.map((service) => service.slug)).toEqual(plannedSlugs);
  });

  it("returns services by slug", () => {
    expect(getServiceBySlug("deep-cleaning")?.name).toBe("Deep Cleaning");
    expect(getServiceBySlug("missing-service")).toBeUndefined();
  });

  it("only links related services that exist", () => {
    const slugs = new Set(services.map((service) => service.slug));

    for (const service of services) {
      expect(service.relatedSlugs.every((slug) => slugs.has(slug))).toBe(true);
    }
  });
});
