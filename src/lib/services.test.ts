import { describe, expect, it } from "vitest";
import { getServiceBySlug, services } from "./services";

const plannedSlugs = [
  "spring-cleaning",
  "end-of-tenancy-cleaning",
  "post-renovation-cleaning",
  "move-in-move-out-cleaning",
  "curtain-cleaning",
  "floor-cleaning",
  "marble-floor-polishing",
  "vinyl-floor-cleaning",
  "carpet-cleaning",
  "upholstery-cleaning",
  "sofa-cleaning",
  "mattress-cleaning",
  "home-disinfection"
];

describe("service catalogue", () => {
  it("contains every planned SEO service slug", () => {
    expect(services.map((service) => service.slug)).toEqual(plannedSlugs);
  });

  it("returns services by slug", () => {
    expect(getServiceBySlug("home-disinfection")?.name).toBe("Home Disinfection");
    expect(getServiceBySlug("missing-service")).toBeUndefined();
  });

  it("only links related services that exist", () => {
    const slugs = new Set(services.map((service) => service.slug));

    for (const service of services) {
      expect(service.relatedSlugs.every((slug) => slugs.has(slug))).toBe(true);
    }
  });
});
