export type ServicePage = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  summary: string;
  audience: string[];
  scope: string[];
  exclusions: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
};

export const services: ServicePage[] = [
  {
    slug: "spring-cleaning",
    name: "Spring Cleaning",
    shortName: "Spring Cleaning",
    title: "Spring Cleaning Singapore | Home Cleaning Services",
    description:
      "Plan spring cleaning in Singapore for festive periods, yearly cleaning, detailed room cleaning, kitchen cleaning, bathroom cleaning, and floor care.",
    summary:
      "A planned whole-home clean for festive seasons, family visits, or the point when regular upkeep is no longer enough.",
    audience: ["Chinese New Year or festive preparation", "Annual or semi-annual cleaning", "Families preparing for guests"],
    scope: [
      "Whole-home dusting and surface wiping",
      "Detailed kitchen and bathroom cleaning",
      "Interior cabinet exterior wiping and reachable ledge cleaning",
      "Floor vacuuming, sweeping, and mopping",
      "Prioritised room-by-room checklist based on your request"
    ],
    exclusions: [
      "Packing, organising, or disposal unless quoted separately",
      "Pest control or mould remediation",
      "Specialist upholstery, curtain, carpet, or mattress treatment unless added"
    ],
    faqs: [
      {
        question: "When should I book spring cleaning?",
        answer:
          "Book early for peak festive periods. Spring cleaning slots usually tighten up when many households are preparing at the same time."
      },
      {
        question: "Can I combine spring cleaning with upholstery cleaning?",
        answer:
          "Yes. Mention sofa, mattress, curtain, or carpet needs in your enquiry so the quote can include the right specialist scope."
      }
    ],
    relatedSlugs: ["end-of-tenancy-cleaning", "curtain-cleaning", "sofa-cleaning"]
  },
  {
    slug: "end-of-tenancy-cleaning",
    name: "End of Tenancy Cleaning",
    shortName: "End of Tenancy",
    title: "End of Tenancy Cleaning Singapore | Home Cleaning Services",
    description:
      "End of tenancy cleaning in Singapore for rental handover, kitchens, bathrooms, windows, cabinets, floors, and move-out cleaning needs.",
    summary:
      "A practical clean for tenants and landlords who need the home ready for inspection or the next occupant.",
    audience: ["Rental handovers", "Landlord inspections", "Final clean after belongings are removed"],
    scope: [
      "Kitchen, bathroom, bedroom, and living area cleaning",
      "Interior cabinet and wardrobe wiping where empty",
      "Interior window, door, ledge, and switch wiping where reachable",
      "Appliance exterior cleaning and selected interior appliance cleaning if requested",
      "Floor vacuuming, sweeping, and mopping"
    ],
    exclusions: [
      "Repairing damage, repainting, or restoring fixtures",
      "Removing bulky rubbish or abandoned furniture",
      "Cleaning areas blocked by packed items or furniture"
    ],
    faqs: [
      {
        question: "Can you follow my agent's checklist?",
        answer:
          "Yes. Include the checklist when requesting a quote so the scope can be reviewed before the clean."
      },
      {
        question: "Is end of tenancy cleaning the same as move out cleaning?",
        answer:
          "They are closely related. End of tenancy cleaning focuses specifically on rental handover expectations and inspection readiness."
      }
    ],
    relatedSlugs: ["move-in-move-out-cleaning", "post-renovation-cleaning", "carpet-cleaning"]
  },
  {
    slug: "post-renovation-cleaning",
    name: "Post Renovation Cleaning",
    shortName: "Post-Reno Cleaning",
    title: "Post Renovation Cleaning Singapore | Home Cleaning Services",
    description:
      "Request post renovation cleaning in Singapore to remove renovation dust from accessible surfaces, cabinets, windows, bathrooms, kitchens, and floors.",
    summary:
      "A detailed clean after contractors leave, focused on renovation dust so the home is easier to settle into.",
    audience: ["Newly renovated HDB flats and condos", "Homes after carpentry, painting, or installation works", "Owners preparing for move-in"],
    scope: [
      "Renovation dust removal from reachable surfaces, ledges, doors, and fixtures",
      "Interior cabinet, wardrobe, and drawer wiping where empty",
      "Bathroom, kitchen, and appliance exterior cleaning",
      "Interior window, frame, and glass cleaning where accessible",
      "Floor vacuuming, sweeping, and mopping"
    ],
    exclusions: [
      "Cement, paint, adhesive, grout haze, or silicone removal unless separately assessed",
      "Defect rectification, polishing, restoration, or contractor cleanup",
      "External windows, high-access areas, and unsafe work at height"
    ],
    faqs: [
      {
        question: "When should post renovation cleaning happen?",
        answer:
          "Book after renovation work and defect fixes are complete. Cleaning between trades often means the dust comes back."
      },
      {
        question: "Can renovation stains be removed?",
        answer:
          "Some marks need specialist restoration or contractor rectification. Share photos when requesting a quote so expectations can be set clearly."
      }
    ],
    relatedSlugs: ["move-in-move-out-cleaning", "floor-cleaning", "marble-floor-polishing"]
  },
  {
    slug: "move-in-move-out-cleaning",
    name: "Move In Move Out Cleaning",
    shortName: "Move In/Out Cleaning",
    title: "Move In Move Out Cleaning Singapore | Home Cleaning Services",
    description:
      "Request move in and move out cleaning in Singapore for handovers, new homes, rental transitions, kitchens, bathrooms, cabinets, floors, and windows.",
    summary:
      "Cleaning support for tenants, homeowners, and landlords preparing a home before moving in or handing it over.",
    audience: ["New homeowners before moving in", "Tenants preparing for handover", "Landlords cleaning a unit between occupants"],
    scope: [
      "Interior cabinet, wardrobe, and drawer wiping where empty and accessible",
      "Kitchen cleaning for counters, sink, stove, backsplash, and appliance exteriors",
      "Bathroom cleaning for toilets, showers, sinks, mirrors, and fixtures",
      "Interior window, frame, ledge, door, and switch wiping where reachable",
      "Floor vacuuming, sweeping, mopping, and trash clearing from the cleaning process"
    ],
    exclusions: [
      "Renovation debris, cement, paint, adhesive, or defect removal",
      "Furniture moving, packing, disposal, or handyman work",
      "External window cleaning or high-access cleaning"
    ],
    faqs: [
      {
        question: "Should I book before or after movers?",
        answer:
          "For the best result, arrange cleaning when the unit is empty or mostly empty and after major moving or renovation work is complete."
      },
      {
        question: "Is this suitable for tenancy handover?",
        answer:
          "Yes. Share any landlord or agent checklist during enquiry so the quote can match the handover expectations."
      }
    ],
    relatedSlugs: ["end-of-tenancy-cleaning", "post-renovation-cleaning", "floor-cleaning"]
  },
  {
    slug: "curtain-cleaning",
    name: "Curtain Cleaning",
    shortName: "Curtain Cleaning",
    title: "Curtain Cleaning Singapore | Home Cleaning Services",
    description:
      "Request curtain cleaning in Singapore for day curtains, night curtains, dust removal, steaming, and cleaning advice.",
    summary:
      "A fabric-care service for curtains that collect dust, odours, and humidity in Singapore homes.",
    audience: ["Day and night curtains", "Homes preparing for festive cleaning", "Curtains with dust or odour concerns"],
    scope: [
      "Curtain type and fabric review",
      "Dust removal or steaming where suitable",
      "On-site or off-site cleaning recommendations based on fabric",
      "Careful handling of accessible curtain panels",
      "After-care guidance for drying and ventilation"
    ],
    exclusions: [
      "Guaranteed stain removal or fabric shrinkage prevention for unsuitable materials",
      "Repairing curtain tracks, hooks, or torn fabric",
      "High-access removal without safe access"
    ],
    faqs: [
      {
        question: "Can curtains be cleaned on-site?",
        answer:
          "Some curtains can be cleaned on-site, while others may need off-site dry cleaning. Share photos and fabric details when requesting a quote."
      },
      {
        question: "Is curtain cleaning included in spring cleaning?",
        answer:
          "Curtain cleaning is usually a separate specialist scope. It can be quoted together with spring cleaning if requested."
      }
    ],
    relatedSlugs: ["spring-cleaning", "upholstery-cleaning", "mattress-cleaning"]
  },
  {
    slug: "floor-cleaning",
    name: "Floor Cleaning",
    shortName: "Floor Cleaning",
    title: "Floor Cleaning Singapore | Home Cleaning Services",
    description:
      "Request floor cleaning in Singapore for HDB flats, condos, kitchens, bathrooms, living areas, post-renovation dust, and deeper floor care.",
    summary:
      "Focused floor care for homes where everyday sweeping and mopping are no longer enough.",
    audience: ["Homes with heavy foot traffic", "Post-renovation dust on floors", "Move-in and move-out floor cleaning"],
    scope: [
      "Sweeping, vacuuming, and mopping accessible floors",
      "Attention to corners, skirting, and common dust collection points",
      "Kitchen and bathroom floor cleaning",
      "Post-renovation dust removal where suitable",
      "Advice on specialist treatment when floors need restoration"
    ],
    exclusions: [
      "Marble polishing, parquet sanding, vinyl repair, or floor restoration",
      "Removal of cement, paint, adhesive, or chemical stains unless assessed",
      "Moving heavy furniture or appliances"
    ],
    faqs: [
      {
        question: "Is this floor polishing?",
        answer:
          "No. Floor cleaning is for cleaning and dust removal. Polishing, sanding, and restoration require specialist floor contractors."
      },
      {
        question: "Can floor cleaning be added to other services?",
        answer:
          "Yes. It is commonly quoted with post-renovation, move-in, move-out, and deep cleaning."
      }
    ],
    relatedSlugs: ["post-renovation-cleaning", "move-in-move-out-cleaning", "carpet-cleaning"]
  },
  {
    slug: "marble-floor-polishing",
    name: "Marble Floor Polishing",
    shortName: "Marble Polishing",
    title: "Marble Floor Polishing Singapore | Home Cleaning Services",
    description:
      "Book marble floor polishing in Singapore for dull marble floors, light surface marks, shine restoration, and specialist floor care.",
    summary:
      "Specialist care for marble floors that need more than normal mopping to restore a cleaner, brighter finish.",
    audience: ["Dull marble floors", "Homes preparing for handover or guests", "Owners comparing polishing and cleaning options"],
    scope: [
      "Floor condition review before quoting",
      "Machine polishing where suitable for the marble condition",
      "Attention to common dull patches and traffic areas",
      "Surface cleaning before polishing begins",
      "After-care guidance for daily marble maintenance"
    ],
    exclusions: [
      "Repairing cracked, chipped, hollow, or loose marble",
      "Guaranteed removal of deep etching, burns, or chemical damage",
      "Major restoration work that requires separate assessment"
    ],
    faqs: [
      {
        question: "Is marble floor polishing the same as floor cleaning?",
        answer:
          "No. Floor cleaning removes everyday dirt and dust. Marble floor polishing is a specialist treatment for improving the surface finish."
      },
      {
        question: "Can every marble stain be polished out?",
        answer:
          "Not always. Results depend on the marble, the type of mark, and whether the surface has deep etching or damage."
      }
    ],
    relatedSlugs: ["floor-cleaning", "vinyl-floor-cleaning", "post-renovation-cleaning"]
  },
  {
    slug: "vinyl-floor-cleaning",
    name: "Vinyl Floor Cleaning",
    shortName: "Vinyl Floor Cleaning",
    title: "Vinyl Floor Cleaning Singapore | Home Cleaning Services",
    description:
      "Request vinyl floor cleaning in Singapore for HDB flats, condos, vinyl plank floors, routine dirt removal, and safer floor care.",
    summary:
      "Focused cleaning for vinyl floors that need careful products and methods rather than abrasive restoration.",
    audience: ["Vinyl plank floors", "Homes with visible traffic marks", "Move-in, move-out, and post-renovation floor care"],
    scope: [
      "Sweeping or vacuuming loose dust and grit",
      "Mopping with vinyl-appropriate cleaning methods",
      "Attention to corners, skirting, and high-traffic paths",
      "Post-renovation dust removal where suitable",
      "Care advice to reduce dulling or water damage"
    ],
    exclusions: [
      "Repairing scratched, lifted, warped, or water-damaged vinyl",
      "Sanding, polishing, coating, or restoration work",
      "Removal of cement, paint, adhesive, or chemical stains unless assessed"
    ],
    faqs: [
      {
        question: "Can vinyl floors be polished like marble?",
        answer:
          "No. Vinyl flooring needs different care from stone floors. Cleaning should avoid harsh abrasives and unsuitable polishing methods."
      },
      {
        question: "Can vinyl floor cleaning remove renovation dust?",
        answer:
          "Yes, where the dust is loose or surface-level. Paint, cement, adhesive, and chemical marks may need separate assessment."
      }
    ],
    relatedSlugs: ["floor-cleaning", "marble-floor-polishing", "post-renovation-cleaning"]
  },
  {
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    shortName: "Carpet Cleaning",
    title: "Carpet Cleaning Singapore | Home Cleaning Services",
    description:
      "Book carpet cleaning in Singapore for area rugs and carpets, with steam or extraction cleaning, stain advice, dust removal, and odour treatment.",
    summary:
      "A specialist clean for rugs and carpets that hold dust, stains, allergens, and odours from daily use.",
    audience: ["Area rugs and carpets", "Homes with pets, children, or high foot traffic", "Rental units before handover"],
    scope: [
      "Carpet or rug condition check",
      "Vacuuming to remove dry soil and dust",
      "Steam, extraction, or suitable cleaning method where appropriate",
      "Spot attention for visible marks where safe",
      "Drying guidance after cleaning"
    ],
    exclusions: [
      "Guaranteed removal of all stains or dye transfer",
      "Repair of frayed, torn, or water-damaged carpets",
      "Cleaning antique or delicate rugs without separate assessment"
    ],
    faqs: [
      {
        question: "Can carpet cleaning remove odours?",
        answer:
          "It can reduce many odours, but results depend on the source and whether odour has penetrated the backing or floor below."
      },
      {
        question: "Do carpets need time to dry?",
        answer:
          "Yes. Keep airflow moving and avoid heavy use until the carpet is dry."
      }
    ],
    relatedSlugs: ["upholstery-cleaning", "floor-cleaning", "end-of-tenancy-cleaning"]
  },
  {
    slug: "upholstery-cleaning",
    name: "Upholstery Cleaning",
    shortName: "Upholstery Cleaning",
    title: "Upholstery Cleaning Singapore | Home Cleaning Services",
    description:
      "Book upholstery cleaning in Singapore for chairs, cushions, soft furnishings, fabric furniture, odour reduction, and dust removal.",
    summary:
      "Specialist cleaning for soft furnishings and fabric furniture that need more care than normal surface wiping.",
    audience: ["Dining chairs and upholstered seats", "Fabric furniture and cushions", "Homes with dust, odour, or spill concerns"],
    scope: [
      "Material and condition review before cleaning",
      "Vacuuming and dust removal",
      "Steam, extraction, or suitable fabric treatment where appropriate",
      "Spot attention for visible marks where safe",
      "After-care guidance for drying and ventilation"
    ],
    exclusions: [
      "Restoration of torn, faded, or sun-damaged fabric",
      "Guaranteed removal of all stains or odours",
      "Items that cannot safely receive moisture-based cleaning"
    ],
    faqs: [
      {
        question: "Is upholstery cleaning only for sofas?",
        answer:
          "No. Upholstery cleaning can cover fabric chairs, cushions, benches, and other soft furnishings depending on material and condition."
      },
      {
        question: "Should I send photos before booking?",
        answer:
          "Yes. Photos help us understand the material, size, stains, and access before preparing a quote."
      }
    ],
    relatedSlugs: ["sofa-cleaning", "curtain-cleaning", "mattress-cleaning"]
  },
  {
    slug: "sofa-cleaning",
    name: "Sofa Cleaning",
    shortName: "Sofa Cleaning",
    title: "Sofa Cleaning Singapore | Home Cleaning Services",
    description:
      "Request sofa cleaning in Singapore for fabric sofas, odour reduction, dust removal, and stain treatment advice.",
    summary:
      "Specialist cleaning for sofas that collect dust, odours, spills, and all the marks of daily life.",
    audience: ["Fabric sofas and seating", "Homes with pets, children, or frequent guests", "Sofas that need more than a surface wipe"],
    scope: [
      "Surface inspection before cleaning begins",
      "Vacuuming to remove loose dust and debris",
      "Steam or extraction cleaning where suitable for the material",
      "Spot attention for visible marks where safe",
      "Drying guidance after the session"
    ],
    exclusions: [
      "Guaranteed removal of old, set-in, dye, ink, or bleach stains",
      "Leather restoration or re-colouring",
      "Cleaning materials that are not suitable for wet treatment"
    ],
    faqs: [
      {
        question: "Can every sofa stain be removed?",
        answer:
          "No. Stain results depend on fabric type, age, previous cleaning attempts, and what caused the stain. Photos help with quoting and expectations."
      },
      {
        question: "How long does a sofa take to dry?",
        answer:
          "Drying time varies by fabric, airflow, and treatment method. Keep the area ventilated and avoid using the sofa until it is fully dry."
      }
    ],
    relatedSlugs: ["upholstery-cleaning", "carpet-cleaning", "mattress-cleaning"]
  },
  {
    slug: "mattress-cleaning",
    name: "Mattress Cleaning",
    shortName: "Mattress Cleaning",
    title: "Mattress Cleaning Singapore | Home Cleaning Services",
    description:
      "Request mattress cleaning in Singapore for dust, allergens, odour concerns, and mattress treatment options.",
    summary:
      "A deeper clean for mattresses that collect dust, sweat, skin particles, and allergens over time.",
    audience: ["Families with allergy or dust concerns", "Mattresses due for a deeper clean", "Guest rooms and rental units"],
    scope: [
      "Mattress condition check before cleaning",
      "Vacuuming to remove surface dust and debris",
      "Suitable steam, extraction, or hygiene treatment where appropriate",
      "Spot attention where safe for the mattress material",
      "Drying and ventilation guidance"
    ],
    exclusions: [
      "Guaranteed removal of deep urine, mould, blood, or old stains",
      "Mattress repair, deodorising guarantees, or fabric restoration",
      "Cleaning that would over-wet or damage unsuitable materials"
    ],
    faqs: [
      {
        question: "Can mattress cleaning remove dust mites?",
        answer:
          "Mattress cleaning can reduce dust and hygiene concerns, but no service can honestly promise permanent dust mite elimination without ongoing prevention."
      },
      {
        question: "Can I sleep on the mattress immediately after cleaning?",
        answer:
          "Only use the mattress once it is fully dry. Drying time depends on treatment method, ventilation, and mattress material."
      }
    ],
    relatedSlugs: ["upholstery-cleaning", "sofa-cleaning", "curtain-cleaning"]
  },
  {
    slug: "home-disinfection",
    name: "Home Disinfection",
    shortName: "Home Disinfection",
    title: "Home Disinfection Singapore | Home Cleaning Services",
    description:
      "Request home disinfection in Singapore for high-touch surfaces, post-illness cleaning, rental units, and extra hygiene attention.",
    summary:
      "An add-on for homes that need extra attention on high-touch surfaces after cleaning.",
    audience: ["Post-illness home cleaning", "Rental or guest units", "Families wanting extra hygiene attention"],
    scope: [
      "High-touch surface focus after general cleaning",
      "Door handles, switches, tables, counters, and common contact points",
      "Bathroom and kitchen surface attention",
      "Room-by-room application based on quoted scope",
      "Ventilation and re-entry guidance where needed"
    ],
    exclusions: [
      "Medical-grade sterilisation guarantees",
      "Pest control, mould remediation, or biohazard cleanup",
      "Claims of disease prevention or permanent protection"
    ],
    faqs: [
      {
        question: "Is disinfection a replacement for cleaning?",
        answer:
          "No. Surfaces should be cleaned first. Disinfection is most useful as an extra hygiene step after dirt and dust are removed."
      },
      {
        question: "Can you guarantee a home is germ-free?",
        answer:
          "No responsible provider can guarantee a home remains germ-free after people re-enter and normal use resumes."
      }
    ],
    relatedSlugs: ["spring-cleaning", "move-in-move-out-cleaning", "mattress-cleaning"]
  }
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: ServicePage): ServicePage[] {
  return service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((relatedService): relatedService is ServicePage => Boolean(relatedService));
}
