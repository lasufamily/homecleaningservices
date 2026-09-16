export type ServiceGroup = "residential" | "commercial";

type ServicePageContent = {
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

export type ServicePage = ServicePageContent & {
  group: ServiceGroup;
};

const residentialServiceContent: ServicePageContent[] = [
  {
    slug: "spring-cleaning",
    name: "Spring Cleaning",
    shortName: "Spring Cleaning",
    title: "Spring Cleaning Singapore",
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
    title: "End of Tenancy Cleaning Singapore",
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
    title: "Post Renovation Cleaning Singapore",
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
    title: "Move In Move Out Cleaning Singapore",
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
    title: "Curtain Cleaning Singapore",
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
    title: "Floor Cleaning Singapore",
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
    title: "Marble Floor Polishing Singapore",
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
    title: "Vinyl Floor Cleaning Singapore",
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
    title: "Carpet Cleaning Singapore",
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
    title: "Upholstery Cleaning Singapore",
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
    title: "Sofa Cleaning Singapore",
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
    title: "Mattress Cleaning Singapore",
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
    title: "Home Disinfection Singapore",
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

const commercialServiceContent: ServicePageContent[] = [
  {
    slug: "hotel-housekeeping",
    name: "Hotel Housekeeping",
    shortName: "Hotel Housekeeping",
    title: "Hotel Housekeeping Singapore",
    description:
      "Request hotel housekeeping in Singapore for rooms, serviced apartments, common areas, turnover cleaning, and hospitality cleaning support.",
    summary:
      "Housekeeping support for hotels, serviced apartments, and hospitality properties that need consistent room and common-area presentation.",
    audience: ["Hotels and serviced apartments", "Room turnover support", "Hospitality teams with peak-period demand"],
    scope: [
      "Guest room cleaning and reset based on agreed checklist",
      "Bathroom cleaning and surface wiping",
      "Common-area touchpoint cleaning",
      "Linen, amenity, and waste handling where included in scope",
      "Shift planning based on occupancy and operational needs"
    ],
    exclusions: [
      "Laundry processing unless separately arranged",
      "Guest-facing concierge or front-desk duties",
      "Pest control, repairs, or maintenance works"
    ],
    faqs: [
      {
        question: "Can hotel housekeeping be arranged for peak periods?",
        answer:
          "Yes. Share expected occupancy, room counts, shift timing, and checklist requirements so the quote can match the operational load."
      },
      {
        question: "Do you support serviced apartments?",
        answer:
          "Yes. Serviced apartment housekeeping can be scoped around room turnover, long-stay units, and shared facilities."
      }
    ],
    relatedSlugs: ["commercial-building-cleaning", "office-cleaning", "end-of-tenancy-cleaning"]
  },
  {
    slug: "mcst-cleaning",
    name: "MCST Cleaning",
    shortName: "MCST Cleaning",
    title: "MCST Cleaning Singapore",
    description:
      "Request MCST cleaning in Singapore for condominium common areas, lobbies, lift landings, amenities, toilets, and estate cleaning support.",
    summary:
      "Common-area cleaning for condos and strata-managed properties where residents expect steady presentation and hygiene.",
    audience: ["Condominium MCSTs", "Managing agents", "Residential estates with shared amenities"],
    scope: [
      "Lobby, corridor, and lift landing cleaning",
      "Shared toilet and amenity area cleaning",
      "High-touch surface wiping",
      "Bin centre or refuse area cleaning where scoped",
      "Routine schedule planning for common areas"
    ],
    exclusions: [
      "Landscape, pool, security, or facility management duties",
      "Specialist high-access work unless separately quoted",
      "Repairs, pest control, or waste hauling"
    ],
    faqs: [
      {
        question: "Can MCST cleaning follow an estate schedule?",
        answer:
          "Yes. Share the site schedule, area list, and frequency requirements so recurring cleaning can be quoted properly."
      },
      {
        question: "Can amenities be included?",
        answer:
          "Yes. Gyms, function rooms, toilets, and other shared spaces can be included when listed in the scope."
      }
    ],
    relatedSlugs: ["commercial-building-cleaning", "gym-cleaning", "external-facade-cleaning"]
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    shortName: "Office Cleaning",
    title: "Office Cleaning Singapore",
    description:
      "Request office cleaning in Singapore for workstations, meeting rooms, pantries, toilets, floors, bins, and recurring workplace cleaning.",
    summary:
      "Routine or one-time office cleaning for teams that need tidy, usable workspaces without disrupting the workday.",
    audience: ["Corporate offices", "SME workplaces", "Co-working and admin spaces"],
    scope: [
      "Desk, meeting room, and common surface wiping",
      "Pantry and toilet cleaning where included",
      "Floor vacuuming, sweeping, and mopping",
      "Bin clearing and liner replacement where scoped",
      "After-hours or scheduled cleaning planning"
    ],
    exclusions: [
      "IT equipment servicing or cable management",
      "Confidential document disposal unless separately arranged",
      "Specialist carpet, facade, or post-renovation works unless added"
    ],
    faqs: [
      {
        question: "Can office cleaning happen after business hours?",
        answer:
          "Yes. Include preferred access timing, building rules, and frequency when requesting a quote."
      },
      {
        question: "Can pantry and toilets be included?",
        answer:
          "Yes. List these areas in your enquiry so supplies, frequency, and cleaning scope can be planned."
      }
    ],
    relatedSlugs: ["commercial-building-cleaning", "end-of-tenancy-cleaning", "post-renovation-cleaning"]
  },
  {
    slug: "external-facade-cleaning",
    name: "External Facade Cleaning",
    shortName: "Facade Cleaning",
    title: "External Facade Cleaning Singapore",
    description:
      "Request external facade cleaning in Singapore for shopfronts, building exteriors, glass, cladding, and accessible facade cleaning needs.",
    summary:
      "Exterior-facing cleaning for commercial properties where frontage, glass, and facade condition affect first impressions.",
    audience: ["Retail frontages", "Commercial buildings", "Managed properties with exterior cleaning needs"],
    scope: [
      "Facade condition and access review before quoting",
      "External glass or frontage cleaning where safely accessible",
      "Cladding and exterior surface washing where suitable",
      "Water-fed pole or access-method planning when required",
      "Scheduling around building and public-area constraints"
    ],
    exclusions: [
      "Unsafe high-access work without approved access method",
      "Structural repairs, repainting, or waterproofing",
      "Removal of permanent staining, corrosion, or facade defects"
    ],
    faqs: [
      {
        question: "Is a site assessment needed?",
        answer:
          "Usually yes. Facade cleaning depends on height, access, surface material, water points, and safety requirements."
      },
      {
        question: "Can shopfront glass be cleaned?",
        answer:
          "Yes. Shopfront and frontage cleaning can be quoted when access, timing, and surface condition are clear."
      }
    ],
    relatedSlugs: ["commercial-building-cleaning", "retail-store-cleaning", "mcst-cleaning"]
  },
  {
    slug: "commercial-building-cleaning",
    name: "Commercial Building Cleaning",
    shortName: "Building Cleaning",
    title: "Commercial Building Cleaning Singapore",
    description:
      "Request commercial building cleaning in Singapore for shared areas, lobbies, toilets, corridors, floors, touchpoints, and scheduled cleaning.",
    summary:
      "Cleaning support for commercial properties that need shared spaces kept presentable, hygienic, and easy to use.",
    audience: ["Commercial buildings", "Property managers", "Mixed-use premises"],
    scope: [
      "Lobby, corridor, and common-area cleaning",
      "Toilet and pantry cleaning where scoped",
      "High-touch surface wiping",
      "Floor care for shared circulation areas",
      "Recurring cleaning schedule planning"
    ],
    exclusions: [
      "Security, reception, or facility management duties",
      "Specialist facade, pest control, or repair works unless separately quoted",
      "Waste hauling beyond agreed cleaning waste"
    ],
    faqs: [
      {
        question: "Can building cleaning be recurring?",
        answer:
          "Yes. Share the areas, traffic levels, and preferred cleaning frequency so recurring cleaning can be quoted."
      },
      {
        question: "Can toilets and pantries be included?",
        answer:
          "Yes. These are common inclusions when the scope lists fixtures, supplies, and expected cleaning frequency."
      }
    ],
    relatedSlugs: ["office-cleaning", "mcst-cleaning", "external-facade-cleaning"]
  },
  {
    slug: "end-of-tenancy-cleaning",
    name: "Commercial End of Lease Cleaning",
    shortName: "End of Lease",
    title: "Commercial End of Lease Cleaning Singapore",
    description:
      "Request commercial end of lease cleaning in Singapore for office, retail, F&B, and commercial unit handovers.",
    summary:
      "Handover cleaning for commercial tenants and landlords preparing a unit for inspection, reinstatement closeout, or the next occupant.",
    audience: ["Commercial lease handovers", "Office and retail tenants", "Landlords preparing vacant units"],
    scope: [
      "Empty-unit surface cleaning after move-out",
      "Pantry, toilet, room, and common area cleaning where included",
      "Floor vacuuming, sweeping, and mopping",
      "Interior glass, door, switch, and ledge wiping where reachable",
      "Handover checklist review before quoting"
    ],
    exclusions: [
      "Reinstatement, repairs, painting, or fixture replacement",
      "Removal of renovation debris or bulky disposal unless separately arranged",
      "High-access facade or external window cleaning"
    ],
    faqs: [
      {
        question: "Can you follow a landlord handover checklist?",
        answer:
          "Yes. Send the checklist when requesting a quote so the scope can be checked before cleaning."
      },
      {
        question: "Is this suitable after reinstatement?",
        answer:
          "Yes, if reinstatement works are complete and the remaining task is cleaning rather than repair or construction debris removal."
      }
    ],
    relatedSlugs: ["post-renovation-cleaning", "office-cleaning", "retail-store-cleaning"]
  },
  {
    slug: "post-renovation-cleaning",
    name: "Commercial Post Renovation Cleaning",
    shortName: "Post-Reno Cleaning",
    title: "Commercial Post Renovation Cleaning Singapore",
    description:
      "Request commercial post renovation cleaning in Singapore for offices, retail units, gyms, F&B premises, dust removal, and fit-out cleanup.",
    summary:
      "A detailed clean after commercial renovation or fit-out work, focused on dust, surfaces, floors, and readiness for operations.",
    audience: ["Newly renovated commercial units", "Office and retail fit-outs", "Businesses preparing to reopen"],
    scope: [
      "Renovation dust removal from reachable surfaces",
      "Interior glass, ledge, switch, and fixture wiping where accessible",
      "Pantry, toilet, and room cleaning where scoped",
      "Floor vacuuming, sweeping, and mopping",
      "Final clean planning after contractors complete works"
    ],
    exclusions: [
      "Defect rectification, reinstatement, or contractor works",
      "Cement, paint, adhesive, grout haze, or silicone removal unless assessed",
      "Unsafe high-access work or external facade cleaning unless separately quoted"
    ],
    faqs: [
      {
        question: "When should commercial post renovation cleaning happen?",
        answer:
          "Book after contractors finish and defects are settled. Cleaning too early often means dust and debris return."
      },
      {
        question: "Can this prepare a space for opening day?",
        answer:
          "Yes. Share the opening date, floor plan, and priority areas so the clean can be scoped around readiness."
      }
    ],
    relatedSlugs: ["post-construction-cleaning", "commercial-building-cleaning", "commercial-kitchen-cleaning"]
  },
  {
    slug: "post-construction-cleaning",
    name: "Post Construction Cleaning",
    shortName: "Post Construction",
    title: "Post Construction Cleaning Singapore",
    description:
      "Request post construction cleaning in Singapore for commercial spaces after building work, fit-out, dust, debris, and handover preparation.",
    summary:
      "Cleaning after heavier works where construction dust, leftover debris, and staged handover needs must be planned carefully.",
    audience: ["Commercial fit-out projects", "Contractors preparing handover", "Businesses after construction works"],
    scope: [
      "Construction dust removal from reachable surfaces",
      "Sweeping, vacuuming, and mopping accessible floors",
      "Fixture, ledge, door, and interior glass wiping where safe",
      "Debris clearing within agreed cleaning scope",
      "Phased or final clean planning based on site condition"
    ],
    exclusions: [
      "Builder's works, defect repair, or reinstatement",
      "Hazardous waste, heavy rubble, or disposal requiring licensed hauling",
      "Specialist stain, adhesive, paint, or cement removal unless assessed"
    ],
    faqs: [
      {
        question: "Is post construction cleaning different from post renovation cleaning?",
        answer:
          "Post construction cleaning usually deals with heavier site dust and debris. The quote depends on site condition and whether works are fully complete."
      },
      {
        question: "Can cleaning be done in phases?",
        answer:
          "Yes. Larger sites may need rough cleaning and final cleaning stages based on handover timing."
      }
    ],
    relatedSlugs: ["post-renovation-cleaning", "commercial-building-cleaning", "external-facade-cleaning"]
  },
  {
    slug: "gym-cleaning",
    name: "Gym Cleaning",
    shortName: "Gym Cleaning",
    title: "Gym Cleaning Singapore",
    description:
      "Request gym cleaning in Singapore for fitness studios, equipment touchpoints, changing rooms, toilets, floors, and hygiene-focused cleaning.",
    summary:
      "Cleaning for gyms and studios where sweat, shared equipment, flooring, and changing areas need consistent attention.",
    audience: ["Gyms and fitness studios", "Condo gyms", "Yoga, pilates, and training spaces"],
    scope: [
      "Equipment touchpoint wiping",
      "Studio and workout floor cleaning",
      "Changing room and toilet cleaning where scoped",
      "Mirrors, counters, and common surfaces",
      "Recurring schedule planning around class or operating hours"
    ],
    exclusions: [
      "Equipment maintenance or repairs",
      "Laundry service unless separately arranged",
      "Medical-grade sterilisation guarantees"
    ],
    faqs: [
      {
        question: "Can gym cleaning happen between classes?",
        answer:
          "Yes. Share your class schedule and access windows so cleaning can be planned around operations."
      },
      {
        question: "Can changing rooms be included?",
        answer:
          "Yes. Changing rooms, showers, toilets, mirrors, and lockers can be included when listed in the cleaning scope."
      }
    ],
    relatedSlugs: ["mcst-cleaning", "commercial-building-cleaning", "office-cleaning"]
  },
  {
    slug: "food-and-beverage-cleaning",
    name: "F&B Cleaning",
    shortName: "F&B Cleaning",
    title: "F&B Cleaning Singapore",
    description:
      "Request F&B cleaning in Singapore for cafes, restaurants, dining areas, service counters, floors, toilets, and food business cleaning support.",
    summary:
      "Cleaning support for food and beverage premises where customer areas and operational surfaces need careful routine attention.",
    audience: ["Cafes and restaurants", "Food kiosks and counters", "Dining spaces with high daily traffic"],
    scope: [
      "Dining area and service counter cleaning",
      "Floor sweeping, vacuuming, and mopping",
      "Toilet cleaning where included",
      "High-touch surface wiping",
      "Cleaning schedule planning around operating hours"
    ],
    exclusions: [
      "Pest control or grease trap servicing",
      "Deep kitchen degreasing unless quoted as commercial kitchen cleaning",
      "Regulatory compliance guarantees or food safety certification"
    ],
    faqs: [
      {
        question: "Can F&B cleaning happen after closing?",
        answer:
          "Yes. Share operating hours and access rules so cleaning can be scheduled without disrupting service."
      },
      {
        question: "Is kitchen cleaning included?",
        answer:
          "Light surface cleaning can be scoped, but heavier kitchen degreasing should be requested as commercial kitchen cleaning."
      }
    ],
    relatedSlugs: ["commercial-kitchen-cleaning", "retail-store-cleaning", "commercial-building-cleaning"]
  },
  {
    slug: "retail-store-cleaning",
    name: "Retail Store Cleaning",
    shortName: "Retail Cleaning",
    title: "Retail Store Cleaning Singapore",
    description:
      "Request retail store cleaning in Singapore for shop floors, display areas, counters, mirrors, fitting rooms, stock areas, and storefront cleaning.",
    summary:
      "Cleaning for shops and showrooms where presentation, foot traffic, and opening-hour constraints shape the cleaning plan.",
    audience: ["Retail stores", "Showrooms", "Shopfront businesses"],
    scope: [
      "Sales floor and display surface cleaning",
      "Counter, mirror, and fitting room wiping where included",
      "Floor vacuuming, sweeping, and mopping",
      "Stockroom surface cleaning where scoped",
      "Before-opening or after-closing schedule planning"
    ],
    exclusions: [
      "Merchandising, stock handling, or inventory work",
      "Specialist facade or high-access glass cleaning unless separately quoted",
      "Security or keyholding beyond agreed access arrangements"
    ],
    faqs: [
      {
        question: "Can retail cleaning happen before opening?",
        answer:
          "Yes. Share opening hours, access requirements, and priority areas so the schedule can be planned."
      },
      {
        question: "Can display shelves be cleaned?",
        answer:
          "Yes, if access and stock handling expectations are clear before the cleaning visit."
      }
    ],
    relatedSlugs: ["external-facade-cleaning", "end-of-tenancy-cleaning", "food-and-beverage-cleaning"]
  },
  {
    slug: "commercial-kitchen-cleaning",
    name: "Commercial Kitchen Cleaning",
    shortName: "Kitchen Cleaning",
    title: "Commercial Kitchen Cleaning Singapore",
    description:
      "Request commercial kitchen cleaning in Singapore for food prep areas, surfaces, floors, equipment exteriors, and deeper kitchen cleaning support.",
    summary:
      "Kitchen-focused cleaning for food businesses that need surfaces, floors, and equipment exteriors cleaned around operational realities.",
    audience: ["Restaurants and cafes", "Central kitchens", "Food preparation premises"],
    scope: [
      "Food prep surface cleaning where accessible",
      "Equipment exterior wiping where safe",
      "Kitchen floor cleaning",
      "Wall, splashback, and high-touch surface attention where scoped",
      "After-hours scheduling around service times"
    ],
    exclusions: [
      "Grease trap servicing, duct cleaning, or pest control",
      "Dismantling equipment unless separately assessed",
      "Regulatory certification or food safety audit guarantees"
    ],
    faqs: [
      {
        question: "Can kitchen cleaning be scheduled overnight?",
        answer:
          "Yes. Many commercial kitchen cleans are planned after service when equipment is cool and areas are accessible."
      },
      {
        question: "Do you clean exhaust ducts?",
        answer:
          "No. Exhaust and duct cleaning require specialist providers and should be arranged separately."
      }
    ],
    relatedSlugs: ["food-and-beverage-cleaning", "post-renovation-cleaning", "commercial-building-cleaning"]
  },
  {
    slug: "childcare-cleaning",
    name: "Childcare Cleaning",
    shortName: "Childcare Cleaning",
    title: "Childcare Cleaning Singapore",
    description:
      "Request childcare cleaning in Singapore for classrooms, play areas, toilets, high-touch surfaces, floors, and hygiene-focused cleaning routines.",
    summary:
      "Cleaning for childcare and learning spaces where floors, shared surfaces, toilets, and daily routines need dependable care.",
    audience: ["Childcare centres", "Preschools", "Tuition and enrichment spaces for young children"],
    scope: [
      "Classroom and play area surface cleaning",
      "Floor vacuuming, sweeping, and mopping",
      "Toilet and sink cleaning where scoped",
      "High-touch surface wiping",
      "Schedule planning around centre operating hours"
    ],
    exclusions: [
      "Medical-grade sterilisation guarantees",
      "Toy laundering or specialised sanitisation unless separately arranged",
      "Pest control, mould remediation, or repair works"
    ],
    faqs: [
      {
        question: "Can childcare cleaning happen after dismissal?",
        answer:
          "Yes. Share operating hours, access rules, and priority rooms so cleaning can happen outside child activity periods."
      },
      {
        question: "Can high-touch surfaces be prioritised?",
        answer:
          "Yes. Door handles, tables, switches, railings, and shared surfaces can be prioritised in the cleaning scope."
      }
    ],
    relatedSlugs: ["commercial-building-cleaning", "gym-cleaning", "office-cleaning"]
  }
];

export const residentialServices: ServicePage[] = residentialServiceContent.map((service) => ({
  ...service,
  group: "residential"
}));

export const commercialServices: ServicePage[] = commercialServiceContent.map((service) => ({
  ...service,
  group: "commercial"
}));

export const services: ServicePage[] = [...residentialServices, ...commercialServices];

export function getServiceByGroupAndSlug(group: ServiceGroup, slug: string): ServicePage | undefined {
  return services.find((service) => service.group === group && service.slug === slug);
}

export function getRelatedServices(service: ServicePage): ServicePage[] {
  return service.relatedSlugs
    .map((slug) => getServiceByGroupAndSlug(service.group, slug))
    .filter((relatedService): relatedService is ServicePage => Boolean(relatedService));
}
