import { describe, expect, it } from "vitest";
import {
  commercialServices,
  getRelatedServices,
  getServiceByGroupAndSlug,
  getServiceByName,
  residentialServices,
  services
} from "./services";

const residentialSlugs = [
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

const commercialSlugs = [
  "hotel-housekeeping",
  "mcst-cleaning",
  "office-cleaning",
  "external-facade-cleaning",
  "commercial-building-cleaning",
  "end-of-tenancy-cleaning",
  "post-renovation-cleaning",
  "post-construction-cleaning",
  "gym-cleaning",
  "food-and-beverage-cleaning",
  "retail-store-cleaning",
  "commercial-kitchen-cleaning",
  "childcare-cleaning"
];

describe("service catalogue", () => {
  it("contains every planned residential service slug", () => {
    expect(residentialServices.map((service) => service.slug)).toEqual(residentialSlugs);
    expect(residentialServices.every((service) => service.group === "residential")).toBe(true);
  });

  it("contains every planned commercial service slug", () => {
    expect(commercialServices.map((service) => service.slug)).toEqual(commercialSlugs);
    expect(commercialServices.every((service) => service.group === "commercial")).toBe(true);
  });

  it("allows matching slugs in different service groups", () => {
    expect(getServiceByGroupAndSlug("residential", "end-of-tenancy-cleaning")?.name).toBe("End of Tenancy Cleaning");
    expect(getServiceByGroupAndSlug("commercial", "end-of-tenancy-cleaning")?.name).toBe("Commercial End of Lease Cleaning");
    expect(getServiceByGroupAndSlug("commercial", "post-renovation-cleaning")?.name).toBe("Commercial Post Renovation Cleaning");
  });

  it("uses unique route paths across both service groups", () => {
    const paths = services.map((service) => `/${service.group}/${service.slug}`);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("returns services by group and slug", () => {
    expect(getServiceByGroupAndSlug("residential", "home-disinfection")?.name).toBe("Home Disinfection");
    expect(getServiceByGroupAndSlug("commercial", "food-and-beverage-cleaning")?.name).toBe("F&B Cleaning");
    expect(getServiceByGroupAndSlug("residential", "missing-service")).toBeUndefined();
  });

  it("returns service pages by display name or short name", () => {
    expect(getServiceByName("Spring Cleaning")?.slug).toBe("spring-cleaning");
    expect(getServiceByName("Facade Cleaning")?.slug).toBe("external-facade-cleaning");
    expect(getServiceByName("Unknown Cleaning")).toBeUndefined();
  });

  it("only links related services that exist in the same service group", () => {
    for (const service of services) {
      const related = getRelatedServices(service);
      expect(related).toHaveLength(service.relatedSlugs.length);
      expect(related.every((relatedService) => relatedService.group === service.group)).toBe(true);
    }
  });
});
