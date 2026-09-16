export type GuideHubId = "problems" | "surfaces" | "areas" | "items" | "situations" | "methods" | "science";

export type GuideHub = {
  id: GuideHubId;
  name: string;
  shortName: string;
  path: string;
  title: string;
  description: string;
  summary: string;
  intentPrompt: string;
  keyConcepts: string[];
};

export type GuideSection = {
  heading: string;
  body?: string[];
  items?: string[];
};

export type GuideSource = {
  label: string;
  href: string;
};

export type GuidePage = {
  hub: GuideHubId;
  slug: string;
  path: string;
  mainKeyword: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  primaryEntity: string;
  primaryIntent: string;
  uniqueKnowledge: string;
  closestOverlap: string;
  reasonToExist: string;
  sections: GuideSection[];
  relatedGuidePaths: string[];
  servicePath?: string;
  sources?: GuideSource[];
};

export type GuideContentMapEntry = {
  hub: string;
  subcategory: string;
  topic: string;
  mainKeyword: string;
  proposedUrl: string;
  proposedSeoTitle: string;
  proposedH1: string;
  primaryEntity: string;
  primaryIntent: string;
  uniqueKnowledge: string;
  closestPotentialOverlap: string;
  reasonToExist: string;
  relevantInternalLinks: string[];
  relevantServiceRelationship: string;
  status: "Existing" | "Update" | "Consolidate" | "New" | "Reject" | "Future";
};

export const guideHubs: GuideHub[] = [
  {
    id: "problems",
    name: "Cleaning Problems",
    shortName: "Problems",
    path: "/guides/problems/",
    title: "Cleaning Problems: Stains, Mould, Odours and Buildup",
    description: "Diagnose cleaning problems such as stains, mould, odours, limescale, soap scum, residue, and dirt buildup in Singapore homes.",
    summary:
      "Start here when something is stained, smelly, mouldy, sticky, cloudy, or not responding to normal cleaning.",
    intentPrompt: "Something is dirty, stained, smelly or otherwise wrong.",
    keyConcepts: [
      "Identify whether the issue is dirt, staining, surface damage, moisture, or residue.",
      "Choose the mildest method that can reasonably solve the problem before trying harsher chemicals.",
      "Stop when cleaning risks damaging the material underneath."
    ]
  },
  {
    id: "surfaces",
    name: "Surfaces & Materials",
    shortName: "Surfaces",
    path: "/guides/surfaces/",
    title: "Surfaces & Materials: Safe Cleaning for Common Home Finishes",
    description: "Learn how to clean marble, vinyl, grout, glass, stainless steel, wood, fabric, and other common surfaces safely.",
    summary:
      "Use this hub when the main question is material safety: what can clean this surface without dulling, etching, swelling, scratching, or staining it?",
    intentPrompt: "You need to clean a specific material safely.",
    keyConcepts: [
      "Material compatibility matters more than cleaning strength.",
      "Acidic, alkaline, abrasive, and solvent-based products can behave very differently on different finishes.",
      "Some marks are not removable dirt; they may be etching, corrosion, water damage, or wear."
    ]
  },
  {
    id: "areas",
    name: "Areas of the Home",
    shortName: "Areas",
    path: "/guides/areas/",
    title: "Areas of the Home: Room-by-Room Cleaning Guides",
    description: "Plan practical cleaning workflows for kitchens, bathrooms, bedrooms, living rooms, balconies, service yards, and home offices.",
    summary:
      "Use these guides when you want a room cleaned in a sensible order, without missing the places that collect grime in Singapore homes.",
    intentPrompt: "You are cleaning a whole room or functional area.",
    keyConcepts: [
      "Clean top to bottom and dry to wet where practical.",
      "Room guides give the workflow; object and material guides own the detailed technique.",
      "Humidity, ventilation, cooking habits, and layout affect cleaning priorities."
    ]
  },
  {
    id: "items",
    name: "Household Items & Fixtures",
    shortName: "Items",
    path: "/guides/items/",
    title: "Household Items & Fixtures: How to Clean Specific Things",
    description: "Find practical cleaning guidance for sofas, toilets, ovens, mattresses, windows, fans, sinks, appliances, and fixtures.",
    summary:
      "Start here when the question is about one object, appliance, furnishing, or fixture.",
    intentPrompt: "You need to clean a specific thing.",
    keyConcepts: [
      "The item guide owns frequency, mistakes, safe products, and when professional treatment may help.",
      "Fabric, rubber seals, coatings, and hidden crevices often decide the safest method.",
      "A good result depends on access, drying, and whether the dirt is on the surface or inside the item."
    ]
  },
  {
    id: "situations",
    name: "Cleaning Situations",
    shortName: "Situations",
    path: "/guides/situations/",
    title: "Cleaning Situations: Move-In, Move-Out and Post-Renovation Guides",
    description: "Plan cleaning around moving house, rental handovers, renovation dust, BTO flats, resale flats, guests, and parties.",
    summary:
      "Use this hub when an event has changed what needs to be cleaned and in what order.",
    intentPrompt: "A specific event or circumstance has happened.",
    keyConcepts: [
      "Situation guides focus on sequencing, priorities, access, and handover expectations.",
      "They link to item and surface guides instead of repeating detailed techniques.",
      "Timing matters: cleaning too early can waste effort if renovation or moving work is still ongoing."
    ]
  },
  {
    id: "methods",
    name: "Cleaning Methods",
    shortName: "Methods",
    path: "/guides/methods/",
    title: "Cleaning Methods: Techniques, Tools and When to Use Them",
    description: "Understand cleaning methods such as steam cleaning, disinfecting, mopping, dusting, extraction, descaling, and degreasing.",
    summary:
      "Use this hub to understand what a cleaning method does before deciding whether it suits a surface, room, or item.",
    intentPrompt: "You want to understand a cleaning process or technique.",
    keyConcepts: [
      "A method is not automatically suitable just because it is powerful.",
      "Heat, moisture, pressure, agitation, and chemistry all create trade-offs.",
      "Method guides explain the process; material and item guides explain suitability."
    ]
  },
  {
    id: "science",
    name: "Cleaning Science & Safety",
    shortName: "Science",
    path: "/guides/science/",
    title: "Cleaning Science & Safety: Chemistry, Compatibility and Safe Use",
    description: "Learn the cleaning science behind pH, bleach, acids, alkalines, dwell time, ventilation, product labels, and chemical safety.",
    summary:
      "Use this hub when you need to know why a cleaner works, why a product may be risky, or how to read safety advice more carefully.",
    intentPrompt: "You want to understand cleaning chemistry or safety.",
    keyConcepts: [
      "Labels and manufacturer instructions take priority over general cleaning advice.",
      "Never mix cleaning products unless the product label specifically instructs it.",
      "Cleaning, sanitising, disinfecting, and sterilising are not interchangeable words."
    ]
  }
];

export const guidePages: GuidePage[] = [
  {
    hub: "problems",
    slug: "mould-removal",
    path: "/guides/problems/mould-removal/",
    mainKeyword: "mould removal",
    title: "Mould Removal: How to Clean Small Mould Patches Safely",
    description: "Learn when mould removal can be handled with careful cleaning, when to stop, and how moisture control prevents recurring mould in Singapore homes.",
    h1: "Mould Removal: How to Clean Small Mould Patches Safely",
    intro:
      "Mould removal starts with moisture control, not just scrubbing. This guide helps you decide whether a small visible patch can be cleaned safely, what to avoid, and when the problem needs professional assessment instead of another round of wiping.",
    primaryEntity: "Small household mould patches",
    primaryIntent: "Remove or manage visible mould without spreading spores or ignoring the moisture source.",
    uniqueKnowledge:
      "Separates cleanable surface mould from recurring moisture problems and porous material damage.",
    closestOverlap: "/guides/areas/bathroom-cleaning/",
    reasonToExist:
      "Mould has distinct safety, moisture, ventilation, and recurrence considerations that apply across bathrooms, ceilings, walls, silicone, and furniture.",
    relatedGuidePaths: ["/guides/areas/bathroom-cleaning/", "/guides/science/bleach-safety/", "/guides/surfaces/grout-cleaning/"],
    sections: [
      {
        heading: "First decide whether DIY cleaning is appropriate",
        body: [
          "Small mould spots on hard, non-porous surfaces are very different from mould inside swollen wood, plasterboard, mattresses, or fabric. If the material stays damp, smells musty, or the stain returns quickly, cleaning the surface will not solve the underlying condition.",
          "People with asthma, chronic lung conditions, immune suppression, or strong mould sensitivity should avoid doing mould cleanup themselves."
        ]
      },
      {
        heading: "Safe basic method for a small hard-surface patch",
        items: [
          "Ventilate the room before starting.",
          "Wear gloves and avoid touching mould with bare hands.",
          "Remove loose dust around the area with a damp disposable cloth rather than dry brushing.",
          "Clean with detergent and water first so the surface dirt is removed.",
          "Use a product suitable for the surface only if the label allows it, then follow the label contact time and rinsing instructions.",
          "Dry the area fully and improve airflow so moisture does not sit on the same surface again."
        ]
      },
      {
        heading: "Why mould keeps coming back",
        body: [
          "In Singapore flats and condos, recurring mould is often linked to trapped moisture: poor bathroom ventilation, condensation near air-conditioned rooms, damp silicone joints, leaking pipes, or wardrobes placed tight against external walls.",
          "If you only wipe the black marks but leave the damp condition unchanged, the same patch can reappear."
        ]
      },
      {
        heading: "When to stop and get help",
        items: [
          "The mould covers a large area or appears after a leak.",
          "The surface is soft, swollen, crumbly, or smells musty.",
          "The patch is on a mattress, sofa, ceiling board, wallpaper, or inside carpentry.",
          "Someone in the home is medically vulnerable to mould exposure."
        ]
      }
    ],
    sources: [
      { label: "CDC mould cleanup guidance", href: "https://www.cdc.gov/mold-health/about/clean-up.html" }
    ]
  },
  {
    hub: "problems",
    slug: "limescale-removal",
    path: "/guides/problems/limescale-removal/",
    mainKeyword: "limescale removal",
    title: "Limescale Removal: How to Clear Hard-Water Deposits",
    description: "Remove limescale from taps, shower screens, tiles, and kettles without damaging stone, chrome, grout, or coated surfaces.",
    h1: "Limescale Removal: How to Clear Hard-Water Deposits",
    intro:
      "Limescale removal works best when you match the acidic cleaner to the surface. The same descaler that clears a tap can damage marble, natural stone, or delicate coatings, so the first step is identifying what the deposit is sitting on.",
    primaryEntity: "Limescale and hard-water mineral deposits",
    primaryIntent: "Remove chalky mineral buildup without damaging the underlying surface.",
    uniqueKnowledge:
      "Explains why acidic descaling is useful on mineral deposits but risky for acid-sensitive materials.",
    closestOverlap: "/guides/surfaces/marble-cleaning/",
    reasonToExist:
      "Limescale appears on many fixtures and surfaces, but the diagnostic and compatibility decision is the same across bathrooms and kitchens.",
    relatedGuidePaths: ["/guides/surfaces/marble-cleaning/", "/guides/items/toilet-cleaning/", "/guides/areas/bathroom-cleaning/", "/guides/science/cleaning-ph/"],
    sections: [
      {
        heading: "Check the surface before choosing a descaler",
        body: [
          "Most limescale is alkaline mineral buildup, so mild acidic cleaners can dissolve it. That does not mean every surface should receive acid.",
          "Avoid acidic descalers on marble, limestone, terrazzo with calcium-based chips, and other acid-sensitive stone. A cloudy mark on those surfaces may be etching, not removable limescale."
        ]
      },
      {
        heading: "Practical removal method",
        items: [
          "Remove loose dirt with water and a soft cloth.",
          "Apply a surface-safe descaler or citric-acid product according to the label.",
          "Let it dwell briefly; do not leave acid sitting longer than instructed.",
          "Agitate with a non-scratch pad or soft brush.",
          "Rinse thoroughly and dry to prevent new water spots."
        ]
      },
      {
        heading: "Common mistakes",
        items: [
          "Using vinegar or descaler on marble because it worked on a tap.",
          "Scraping chrome or glass with a metal blade without checking the coating.",
          "Letting acidic cleaner run into grout lines and sit there.",
          "Repeating stronger acid treatments when the mark is actually permanent etching."
        ]
      }
    ]
  },
  {
    hub: "problems",
    slug: "coffee-stain-removal",
    path: "/guides/problems/coffee-stain-removal/",
    mainKeyword: "coffee stain removal",
    title: "Coffee Stain Removal: What to Do Before the Stain Sets",
    description: "Treat coffee stains on fabric, upholstery, carpet, mugs, and hard surfaces with a careful first-response method.",
    h1: "Coffee Stain Removal: What to Do Before the Stain Sets",
    intro:
      "Coffee stain removal is easiest before heat, rubbing, or time pushes the tannins deeper into the material. Blot first, identify the fabric or surface, and avoid strong chemicals until you know what the material can tolerate.",
    primaryEntity: "Coffee stains",
    primaryIntent: "Remove fresh or set coffee marks while avoiding spread, colour loss, and fabric damage.",
    uniqueKnowledge:
      "Distinguishes first response, washable fabric treatment, upholstery caution, and hard-surface staining.",
    closestOverlap: "/guides/items/sofa-cleaning/",
    reasonToExist:
      "Coffee stains are a common stain type across multiple materials and need stain-specific first-response guidance before item-specific care.",
    relatedGuidePaths: ["/guides/items/sofa-cleaning/", "/guides/surfaces/marble-cleaning/", "/guides/science/cleaning-ph/"],
    sections: [
      {
        heading: "Fresh spill first response",
        items: [
          "Blot with a clean white cloth; do not rub the stain wider.",
          "Work from the outside of the mark towards the centre.",
          "Use cool water first if the material can be wetted.",
          "Avoid heat until the stain is gone because heat can set some stains.",
          "Check care labels before using detergent, stain remover, or extraction."
        ]
      },
      {
        heading: "Fabric and upholstery cautions",
        body: [
          "On removable washable fabric, a small amount of mild detergent and cool water may be enough before laundering according to the care label.",
          "On sofas, carpets, mattresses, or dining chairs, do not soak the filling. Over-wetting can leave a larger water mark, slow drying, or cause odour later."
        ]
      },
      {
        heading: "When a coffee mark is not just a stain",
        body: [
          "On marble or natural stone, coffee may leave a brown stain, but acidic drinks and cleaning attempts can also etch the surface. If the mark is dull and rough rather than coloured, stain removal alone may not restore it."
        ]
      }
    ]
  },
  {
    hub: "surfaces",
    slug: "marble-cleaning",
    path: "/guides/surfaces/marble-cleaning/",
    mainKeyword: "marble cleaning",
    title: "Marble Cleaning: How to Clean Marble Safely",
    description: "Clean marble floors, counters, and vanity tops safely with pH-neutral products while avoiding acid etching and abrasive damage.",
    h1: "Marble Cleaning: How to Clean Marble Safely",
    intro:
      "Marble cleaning should be gentle, pH-neutral, and quick to dry. Marble is acid-sensitive, so vinegar, lemon juice, acidic descalers, and harsh scrubbing can leave dull etch marks that ordinary cleaning cannot remove.",
    primaryEntity: "Marble surfaces",
    primaryIntent: "Clean marble safely and recognise when a mark is staining, etching, or wear.",
    uniqueKnowledge:
      "Explains pH sensitivity, etching versus staining, and safe routine cleaning for Singapore marble floors and counters.",
    closestOverlap: "/residential/marble-floor-polishing/",
    reasonToExist:
      "Marble needs a material-specific owner page because common cleaning advice for tiles, bathrooms, and limescale can permanently damage it.",
    servicePath: "/residential/marble-floor-polishing/",
    relatedGuidePaths: ["/guides/science/cleaning-ph/", "/guides/problems/limescale-removal/", "/guides/problems/coffee-stain-removal/"],
    sections: [
      {
        heading: "Suitable products and tools",
        items: [
          "pH-neutral stone cleaner or a mild cleaner labelled safe for marble.",
          "Soft microfibre cloths or mop pads.",
          "Clean water for rinsing if the product label requires it.",
          "A dry cloth or mop to remove standing moisture."
        ]
      },
      {
        heading: "Products to avoid",
        items: [
          "Vinegar, lemon juice, citric-acid descalers, and acidic bathroom cleaners.",
          "Abrasive powders, rough scouring pads, and aggressive brushes.",
          "Bleach-heavy or highly alkaline products unless the stone-care label clearly permits them.",
          "Leaving any cleaner pooled on the marble."
        ]
      },
      {
        heading: "Etching versus staining",
        body: [
          "A stain usually changes the colour because something has entered the stone. An etch is physical surface damage caused by acid reacting with calcium carbonate in the marble.",
          "If the mark looks dull, pale, or rough at an angle, more cleaning may not help. Polishing or restoration may be needed."
        ]
      },
      {
        heading: "Routine cleaning method",
        items: [
          "Remove grit first so it does not scratch during mopping.",
          "Use a damp, not soaking, microfibre mop with a marble-safe cleaner.",
          "Rinse only if the product requires it.",
          "Dry high-traffic or wet areas instead of leaving water to evaporate.",
          "Wipe spills promptly, especially coffee, wine, citrus, sauces, and bathroom products."
        ]
      }
    ]
  },
  {
    hub: "surfaces",
    slug: "vinyl-floor-cleaning",
    path: "/guides/surfaces/vinyl-floor-cleaning/",
    mainKeyword: "vinyl floor cleaning",
    title: "Vinyl Floor Cleaning: Safe Care for HDB and Condo Floors",
    description: "Clean vinyl flooring without over-wetting seams, dulling the finish, or using products that leave sticky residue.",
    h1: "Vinyl Floor Cleaning: Safe Care for HDB and Condo Floors",
    intro:
      "Vinyl floor cleaning is usually straightforward, but too much water, harsh solvent, or waxy residue can cause problems. The safest routine is dry soil removal followed by a damp mop and a cleaner suitable for vinyl.",
    primaryEntity: "Vinyl flooring",
    primaryIntent: "Maintain vinyl floors safely without swelling, residue, dulling, or seam damage.",
    uniqueKnowledge:
      "Focuses on moisture control, residue, chair marks, and common Singapore vinyl plank use.",
    closestOverlap: "/residential/floor-cleaning/",
    reasonToExist:
      "Vinyl has different risks from marble, wood, tile, and generic floor cleaning, especially around seams and product residue.",
    servicePath: "/residential/floor-cleaning/",
    relatedGuidePaths: ["/guides/areas/kitchen-cleaning/", "/guides/situations/post-renovation-cleaning/", "/guides/methods/steam-cleaning/"],
    sections: [
      {
        heading: "Safe routine method",
        items: [
          "Vacuum or sweep grit before mopping.",
          "Use a well-wrung mop, not a soaking wet one.",
          "Choose a neutral floor cleaner suitable for vinyl.",
          "Rinse sticky residue if the cleaner requires it.",
          "Dry spills and wet shoe marks quickly."
        ]
      },
      {
        heading: "What to avoid",
        items: [
          "Flooding the floor or letting water sit at plank seams.",
          "Steam mopping unless the flooring manufacturer permits it.",
          "Abrasive pads that scratch the wear layer.",
          "Wax, polish, or oil products not designed for your floor type."
        ]
      },
      {
        heading: "Post-renovation dust on vinyl",
        body: [
          "Fine renovation dust can turn into a gritty film when mopped too early. Vacuum thoroughly first, then mop in small sections with clean water changes so the dust is lifted rather than spread."
        ]
      }
    ]
  },
  {
    hub: "surfaces",
    slug: "grout-cleaning",
    path: "/guides/surfaces/grout-cleaning/",
    mainKeyword: "grout cleaning",
    title: "Grout Cleaning: How to Clean Tile Grout Without Damage",
    description: "Clean grout lines in bathrooms and kitchens while managing mould stains, soap scum, limescale, and discolouration.",
    h1: "Grout Cleaning: How to Clean Tile Grout Without Damage",
    intro:
      "Grout cleaning depends on what has discoloured the grout: soap scum, mould, limescale, soil, or worn grout all need different expectations. Scrubbing harder is not always the answer, especially if the grout is already weak.",
    primaryEntity: "Tile grout",
    primaryIntent: "Clean and assess discoloured grout without eroding or damaging it.",
    uniqueKnowledge:
      "Differentiates surface dirt, mould staining, mineral scale, and deteriorated grout.",
    closestOverlap: "/guides/areas/bathroom-cleaning/",
    reasonToExist:
      "Grout appears in bathrooms, kitchens, and floors but has distinct porosity and durability concerns that need one canonical page.",
    relatedGuidePaths: ["/guides/problems/mould-removal/", "/guides/problems/limescale-removal/", "/guides/areas/bathroom-cleaning/"],
    sections: [
      {
        heading: "Identify the likely cause",
        items: [
          "Grey or brown soil in traffic areas usually needs detergent and agitation.",
          "Orange or chalky crust near wet areas may be mineral buildup or soap residue.",
          "Black spotting in damp corners may be mould staining.",
          "Crumbly or missing grout needs repair, not more scrubbing."
        ]
      },
      {
        heading: "Basic cleaning method",
        items: [
          "Pre-wet surrounding tile if using a cleaner that may be harsh on grout.",
          "Apply a grout-safe cleaner and let it dwell according to the label.",
          "Scrub with a nylon brush, not a metal brush.",
          "Rinse well so residue does not attract more soil.",
          "Dry the area and improve airflow in bathrooms."
        ]
      },
      {
        heading: "When cleaning will not restore the colour",
        body: [
          "Old grout can be permanently stained or physically worn. If the grout is uneven, powdery, cracked, or missing in lines, regrouting or repair may be the correct solution."
        ]
      }
    ]
  },
  {
    hub: "areas",
    slug: "bathroom-cleaning",
    path: "/guides/areas/bathroom-cleaning/",
    mainKeyword: "bathroom cleaning",
    title: "Bathroom Cleaning: A Practical Order for Singapore Homes",
    description: "Clean a bathroom in a sensible order, including toilet, shower screen, grout, limescale, mould-prone areas, mirrors, fixtures, and floors.",
    h1: "Bathroom Cleaning: A Practical Order for Singapore Homes",
    intro:
      "Bathroom cleaning is easier when you work from dry areas to wet areas and leave the floor for last. In Singapore bathrooms, moisture, limescale, soap scum, and ventilation often decide what needs the most attention.",
    primaryEntity: "Bathroom cleaning workflow",
    primaryIntent: "Clean an entire bathroom systematically without duplicating every fixture-specific method.",
    uniqueKnowledge:
      "Provides room sequence, priority zones, and links to item/problem owners for details.",
    closestOverlap: "/guides/items/toilet-cleaning/",
    reasonToExist:
      "A bathroom is a functional area with interacting fixtures, wet zones, hygiene needs, and order-of-work decisions.",
    relatedGuidePaths: ["/guides/items/toilet-cleaning/", "/guides/problems/mould-removal/", "/guides/problems/limescale-removal/", "/guides/surfaces/grout-cleaning/"],
    sections: [
      {
        heading: "Recommended cleaning order",
        items: [
          "Clear toiletries and loose items.",
          "Dust or wipe high ledges, vents, shelves, and cabinet tops.",
          "Apply cleaners that need dwell time to the toilet, shower area, and stained grout.",
          "Clean mirrors, counters, taps, basin, and shower screen.",
          "Scrub the toilet after the cleaner has had time to work.",
          "Rinse wet zones, wipe fixtures dry, then clean the floor last."
        ]
      },
      {
        heading: "Commonly missed areas",
        items: [
          "The underside of tap handles.",
          "Shower screen edges and tracks.",
          "Behind the toilet pedestal.",
          "Floor traps and drain covers.",
          "Silicone lines where water sits after showering."
        ]
      },
      {
        heading: "Moisture matters",
        body: [
          "A spotless bathroom can still develop mould if wet surfaces stay damp. Keep the door or window open where practical after showering, dry persistent wet ledges, and investigate leaks instead of repeatedly bleaching the same stain."
        ]
      }
    ]
  },
  {
    hub: "areas",
    slug: "kitchen-cleaning",
    path: "/guides/areas/kitchen-cleaning/",
    mainKeyword: "kitchen cleaning",
    title: "Kitchen Cleaning: Grease, Food Soil and Daily Workflow",
    description: "Clean a kitchen systematically, from counters and hob areas to sink, appliances, cabinets, backsplash, and floors.",
    h1: "Kitchen Cleaning: Grease, Food Soil and Daily Workflow",
    intro:
      "Kitchen cleaning should deal with food soil, grease, moisture, and high-touch surfaces in the right order. Start with clutter and dry debris, then move to degreasing, sink cleaning, appliance touchpoints, and the floor.",
    primaryEntity: "Kitchen cleaning workflow",
    primaryIntent: "Clean an entire kitchen efficiently while linking detailed appliance care elsewhere.",
    uniqueKnowledge:
      "Explains sequencing around grease, food-contact areas, sinks, appliances, and Singapore cooking conditions.",
    closestOverlap: "/guides/items/oven-cleaning/",
    reasonToExist:
      "Kitchen cleaning is a room-level workflow that coordinates counters, hob zones, appliances, sink, cabinets, and floors.",
    relatedGuidePaths: ["/guides/items/oven-cleaning/", "/guides/problems/limescale-removal/", "/guides/surfaces/vinyl-floor-cleaning/"],
    sections: [
      {
        heading: "Recommended cleaning order",
        items: [
          "Clear counters and throw away food waste.",
          "Dry wipe crumbs and loose debris before spraying cleaners.",
          "Degrease the hob, backsplash, and nearby cabinet fronts.",
          "Clean appliance handles, switches, and frequently touched surfaces.",
          "Clean the sink after greasy items have been washed.",
          "Vacuum or sweep, then mop the floor last."
        ]
      },
      {
        heading: "Grease needs dwell time",
        body: [
          "Grease around the hob and range hood often needs a suitable alkaline degreaser and short dwell time. Spraying and wiping immediately can leave a smeary film; leaving strong degreaser too long can damage some finishes."
        ]
      },
      {
        heading: "Food-contact caution",
        body: [
          "For chopping areas, counters, and dining surfaces, use products suitable for the surface and rinse or wipe as directed on the label. Do not assume a stronger chemical is safer for food areas."
        ]
      }
    ]
  },
  {
    hub: "items",
    slug: "sofa-cleaning",
    path: "/guides/items/sofa-cleaning/",
    mainKeyword: "sofa cleaning",
    title: "Sofa Cleaning: How to Clean a Sofa Safely",
    description: "Clean fabric and leather sofas safely by checking care labels, testing products, controlling moisture, and knowing when extraction helps.",
    h1: "Sofa Cleaning: How to Clean a Sofa Safely",
    intro:
      "Sofa cleaning starts with the upholstery material. Fabric, leather, faux leather, removable covers, and delicate trims all react differently, so check the care label and test any cleaner before treating visible areas.",
    primaryEntity: "Sofas and upholstery",
    primaryIntent: "Clean sofa surfaces, stains, dust, and odours without overwetting or damaging upholstery.",
    uniqueKnowledge:
      "Consolidates sofa cleaning, stain response, frequency, moisture control, and professional extraction thresholds.",
    closestOverlap: "/residential/sofa-cleaning/",
    reasonToExist:
      "Sofa cleaning has distinct material, filling, drying, and stain risks that should not be split into multiple keyword-variant pages.",
    servicePath: "/residential/sofa-cleaning/",
    relatedGuidePaths: ["/guides/problems/coffee-stain-removal/", "/guides/methods/steam-cleaning/", "/guides/science/cleaning-ph/"],
    sections: [
      {
        heading: "Before you apply any cleaner",
        items: [
          "Vacuum seams, gaps, and cushion edges first.",
          "Check the care label if available.",
          "Test the product on a hidden area and let it dry before judging colour change.",
          "Avoid soaking cushions or pushing water into the filling.",
          "Use white cloths so dye from the cloth does not transfer."
        ]
      },
      {
        heading: "Fabric sofa basics",
        body: [
          "For light soil, vacuuming and careful spot cleaning may be enough. For widespread grime, odour, or older stains, professional upholstery extraction may give a more even result because it controls solution, agitation, extraction, and drying."
        ]
      },
      {
        heading: "Leather and faux leather caution",
        body: [
          "Do not treat leather like fabric. Use a leather-suitable cleaner and avoid excess water, solvents, alcohol-heavy products, or abrasive pads. Cracking, peeling, and colour loss are not cleaning problems."
        ]
      },
      {
        heading: "How often to clean",
        body: [
          "Vacuum weekly or fortnightly if the sofa is used daily. Deep cleaning frequency depends on use, pets, children, eating on the sofa, humidity, and whether the fabric dries easily in your home."
        ]
      }
    ]
  },
  {
    hub: "items",
    slug: "toilet-cleaning",
    path: "/guides/items/toilet-cleaning/",
    mainKeyword: "toilet cleaning",
    title: "Toilet Cleaning: Bowl, Seat, Exterior and Hidden Areas",
    description: "Clean a toilet properly, including the bowl, rim, seat hinges, flush button, pedestal, floor edges, stains, and odours.",
    h1: "Toilet Cleaning: Bowl, Seat, Exterior and Hidden Areas",
    intro:
      "Toilet cleaning is not only about the inside of the bowl. The seat hinges, flush button, outer pedestal, nearby floor, and wall-facing edges often hold odour-causing residue if they are skipped.",
    primaryEntity: "Toilets",
    primaryIntent: "Clean the toilet fixture hygienically and thoroughly without unsafe product mixing.",
    uniqueKnowledge:
      "Separates bowl descaling, exterior wiping, high-touch cleaning, odour points, and chemical cautions.",
    closestOverlap: "/guides/areas/bathroom-cleaning/",
    reasonToExist:
      "The toilet needs fixture-specific steps, dwell time, brush use, high-touch cleaning, and product safety guidance.",
    relatedGuidePaths: ["/guides/areas/bathroom-cleaning/", "/guides/problems/limescale-removal/", "/guides/science/bleach-safety/"],
    sections: [
      {
        heading: "Clean in this order",
        items: [
          "Apply bowl cleaner under the rim and let it dwell as directed.",
          "Wipe the flush button, tank top, lid, seat, and hinges.",
          "Clean the outside of the bowl and pedestal.",
          "Scrub the bowl and flush with the lid closed where practical.",
          "Clean the nearby floor and wall-facing edges last."
        ]
      },
      {
        heading: "Stains and mineral rings",
        body: [
          "Brown or chalky rings may need a toilet-safe descaler, but do not mix acidic toilet cleaners with bleach. If switching product types, rinse thoroughly and follow label instructions."
        ]
      },
      {
        heading: "Odour troubleshooting",
        items: [
          "Check seat hinges and underside surfaces.",
          "Clean the floor around the pedestal.",
          "Check nearby grout lines and floor traps.",
          "If odour persists after cleaning, investigate plumbing or ventilation issues."
        ]
      }
    ]
  },
  {
    hub: "items",
    slug: "oven-cleaning",
    path: "/guides/items/oven-cleaning/",
    mainKeyword: "oven cleaning",
    title: "Oven Cleaning: Grease, Burnt Food and Safe Product Use",
    description: "Clean an oven safely by removing racks, softening burnt-on grease, protecting seals, and following oven-cleaner label instructions.",
    h1: "Oven Cleaning: Grease, Burnt Food and Safe Product Use",
    intro:
      "Oven cleaning needs patience because burnt grease responds better to dwell time than force. Remove loose debris first, protect sensitive parts, and follow the oven-cleaner label closely.",
    primaryEntity: "Ovens",
    primaryIntent: "Remove oven grease and burnt food while protecting seals, coatings, and ventilation.",
    uniqueKnowledge:
      "Covers dwell time, racks, seals, glass, self-cleaning caution, and kitchen workflow relationship.",
    closestOverlap: "/guides/areas/kitchen-cleaning/",
    reasonToExist:
      "Oven cleaning is an appliance-specific task with chemical strength, heat, coating, and seal risks.",
    relatedGuidePaths: ["/guides/areas/kitchen-cleaning/", "/guides/science/bleach-safety/", "/guides/science/cleaning-ph/"],
    sections: [
      {
        heading: "Basic oven cleaning sequence",
        items: [
          "Check the appliance manual if available.",
          "Remove racks and loose burnt debris.",
          "Apply an oven-safe cleaner only to permitted surfaces.",
          "Avoid heating elements, fans, seals, and control panels unless the manual says otherwise.",
          "Allow labelled dwell time, then wipe and rinse as directed.",
          "Ventilate before using the oven again."
        ]
      },
      {
        heading: "Racks and glass",
        body: [
          "Racks can often be cleaned separately so the oven cavity is easier to access. Glass doors may need repeated gentle passes instead of abrasive scraping, especially if the glass has coatings or printed markings."
        ]
      },
      {
        heading: "Avoid product mixing",
        body: [
          "Oven cleaners can be strongly alkaline. Do not combine them with bleach, acids, or other cleaning products. Rinse between products if you need to change approach."
        ]
      }
    ]
  },
  {
    hub: "situations",
    slug: "post-renovation-cleaning",
    path: "/guides/situations/post-renovation-cleaning/",
    mainKeyword: "post-renovation cleaning",
    title: "Post-Renovation Cleaning: Dust, Haze and Move-In Readiness",
    description: "Plan post-renovation cleaning after contractors leave, including fine dust, cabinets, floors, windows, bathrooms, kitchens, and realistic limits.",
    h1: "Post-Renovation Cleaning: Dust, Haze and Move-In Readiness",
    intro:
      "Post-renovation cleaning is mainly about removing fine construction dust safely and repeatedly. It should happen after major defects and contractor work are done, otherwise dust and debris can return almost immediately.",
    primaryEntity: "Post-renovation home cleaning",
    primaryIntent: "Plan cleaning after renovation and understand what cleaning can and cannot fix.",
    uniqueKnowledge:
      "Distinguishes dust removal from defect rectification, cement removal, paint correction, and restoration.",
    closestOverlap: "/residential/post-renovation-cleaning/",
    reasonToExist:
      "Post-renovation cleaning has a distinct sequencing problem, dust behaviour, and Singapore BTO/renovation context.",
    servicePath: "/residential/post-renovation-cleaning/",
    relatedGuidePaths: ["/guides/surfaces/vinyl-floor-cleaning/", "/guides/areas/kitchen-cleaning/", "/guides/areas/bathroom-cleaning/"],
    sections: [
      {
        heading: "Best time to clean",
        body: [
          "Clean after carpentry, painting, electrical work, plumbing work, and defect touch-ups are substantially complete. If contractors still need to drill, sand, or cut, treat any cleaning as temporary."
        ]
      },
      {
        heading: "Priority sequence",
        items: [
          "Remove large debris safely.",
          "Vacuum fine dust from high ledges, cabinet interiors, and tracks.",
          "Wipe cabinets, doors, switches, windows, and built-ins.",
          "Clean bathrooms and kitchen surfaces.",
          "Vacuum floors thoroughly before mopping.",
          "Repeat wiping where dust resettles."
        ]
      },
      {
        heading: "What cleaning may not solve",
        items: [
          "Cement stains, paint splatter, adhesive residue, grout haze, and silicone smears may need specialist removal or contractor rectification.",
          "Scratches, chips, uneven grout, and dull stone are defects or restoration issues, not normal cleaning tasks."
        ]
      }
    ]
  },
  {
    hub: "situations",
    slug: "moving-out-cleaning",
    path: "/guides/situations/moving-out-cleaning/",
    mainKeyword: "moving out cleaning",
    title: "Moving Out Cleaning: What to Clean Before Handover",
    description: "Prepare a home for moving out, tenancy handover, or sale with a practical cleaning sequence and realistic inspection expectations.",
    h1: "Moving Out Cleaning: What to Clean Before Handover",
    intro:
      "Moving out cleaning is about making an empty or nearly empty home ready for handover. Focus on the places inspectors and incoming occupants notice first: kitchen, bathrooms, cabinets, floors, windows, switches, and built-in storage.",
    primaryEntity: "Move-out and handover cleaning",
    primaryIntent: "Plan a full-home clean before returning keys or handing over a unit.",
    uniqueKnowledge:
      "Combines empty-home sequencing, landlord checklist alignment, and distinction between cleaning and repair.",
    closestOverlap: "/residential/end-of-tenancy-cleaning/",
    reasonToExist:
      "Move-out situations create whole-home priorities and access conditions that are different from routine area cleaning.",
    servicePath: "/residential/end-of-tenancy-cleaning/",
    relatedGuidePaths: ["/guides/areas/kitchen-cleaning/", "/guides/areas/bathroom-cleaning/", "/guides/situations/post-renovation-cleaning/"],
    sections: [
      {
        heading: "Clean after packing where possible",
        body: [
          "An empty home is easier to inspect and clean properly. If cleaning happens before movers finish, expect touch-ups near traffic paths, lift lobbies, entrances, and rooms where boxes were staged."
        ]
      },
      {
        heading: "Handover checklist",
        items: [
          "Kitchen counters, sink, hob area, backsplash, and cabinet fronts.",
          "Bathroom fixtures, mirrors, glass, floor traps, and toilet exteriors.",
          "Interior cabinets and wardrobes if empty.",
          "Windows, tracks, ledges, doors, switches, and skirting where reachable.",
          "Floors after all rooms have been cleared."
        ]
      },
      {
        heading: "Cleaning is not repair",
        body: [
          "Stained grout, damaged laminate, paint chips, broken fixtures, and heavy wall marks may remain visible after cleaning. Flag these separately instead of trying harsher cleaners that may worsen the damage."
        ]
      }
    ]
  },
  {
    hub: "methods",
    slug: "steam-cleaning",
    path: "/guides/methods/steam-cleaning/",
    mainKeyword: "steam cleaning",
    title: "Steam Cleaning: What It Does and When to Avoid It",
    description: "Understand steam cleaning, where heat and moisture can help, and why steam is unsuitable for some floors, fabrics, seals, and finishes.",
    h1: "Steam Cleaning: What It Does and When to Avoid It",
    intro:
      "Steam cleaning uses heat and moisture to loosen soil, but it is not safe for every material. Before using steam, check whether the surface can tolerate heat, moisture, pressure, and the drying time that follows.",
    primaryEntity: "Steam cleaning method",
    primaryIntent: "Understand steam cleaning as a method and decide when it may or may not be appropriate.",
    uniqueKnowledge:
      "Explains steam as heat and moisture rather than a universal safe cleaning shortcut.",
    closestOverlap: "/guides/items/sofa-cleaning/",
    reasonToExist:
      "Steam cleaning is a method used across surfaces and items, so suitability should be explained centrally and linked from material pages.",
    relatedGuidePaths: ["/guides/items/sofa-cleaning/", "/guides/surfaces/vinyl-floor-cleaning/", "/guides/methods/disinfecting-cleaning/"],
    sections: [
      {
        heading: "What steam can help with",
        items: [
          "Loosening greasy or sticky soil on suitable hard surfaces.",
          "Reaching textured areas where wiping alone is slow.",
          "Reducing reliance on strong detergents for some maintenance cleaning."
        ]
      },
      {
        heading: "Where steam can cause problems",
        items: [
          "Unsealed wood, swollen laminates, and some vinyl floors.",
          "Delicate upholstery, leather, and fabrics that water-mark easily.",
          "Painted surfaces, weak grout, silicone joints, and heat-sensitive coatings.",
          "Any electrical controls, appliance panels, or openings."
        ]
      },
      {
        heading: "Steam is not a magic disinfectant",
        body: [
          "Disinfection depends on temperature, contact time, surface condition, and the device instructions. Do not assume a quick pass with steam disinfects a surface."
        ]
      }
    ]
  },
  {
    hub: "methods",
    slug: "disinfecting-cleaning",
    path: "/guides/methods/disinfecting-cleaning/",
    mainKeyword: "disinfecting cleaning",
    title: "Disinfecting Cleaning: When Cleaning Alone Is Enough",
    description: "Understand the difference between cleaning and disinfecting, when disinfectants are useful, and why dirty surfaces should be cleaned first.",
    h1: "Disinfecting Cleaning: When Cleaning Alone Is Enough",
    intro:
      "Disinfecting cleaning should start with ordinary cleaning first. Soap, water, detergent, and scrubbing remove dirt and many germs; disinfectants are for situations where reducing remaining germs is necessary and the product is used correctly.",
    primaryEntity: "Cleaning and disinfecting methods",
    primaryIntent: "Understand when to clean, when to disinfect, and how to use disinfectants safely.",
    uniqueKnowledge:
      "Clarifies cleaning versus disinfecting without overstating health claims or inventing sanitising promises.",
    closestOverlap: "/guides/science/bleach-safety/",
    reasonToExist:
      "Disinfecting is a method-level concept that affects bathrooms, kitchens, high-touch surfaces, illness cleanup, and product use.",
    relatedGuidePaths: ["/guides/science/bleach-safety/", "/guides/areas/bathroom-cleaning/", "/guides/areas/kitchen-cleaning/"],
    sections: [
      {
        heading: "Cleaning comes first",
        body: [
          "Visible dirt, grease, and food residue can interfere with disinfectants. Clean the surface first unless the product label specifically says it cleans and disinfects in one step."
        ]
      },
      {
        heading: "When disinfecting may be useful",
        items: [
          "High-touch surfaces after someone at home has been ill.",
          "Bathroom fixtures and surfaces where label directions support the use.",
          "Food-contact surfaces only when the product is suitable and rinsing instructions are followed."
        ]
      },
      {
        heading: "Contact time matters",
        body: [
          "Many disinfectants need the surface to stay wet for a stated contact time. Wiping the product away immediately may not achieve the intended result."
        ]
      }
    ],
    sources: [
      { label: "CDC cleaning and disinfecting with bleach", href: "https://www.cdc.gov/hygiene/about/cleaning-and-disinfecting-with-bleach.html" }
    ]
  },
  {
    hub: "science",
    slug: "cleaning-ph",
    path: "/guides/science/cleaning-ph/",
    mainKeyword: "cleaning pH",
    title: "Cleaning pH: Acidic, Neutral and Alkaline Cleaners",
    description: "Understand cleaning pH, why acidic cleaners remove mineral deposits, why alkaline cleaners cut grease, and why pH matters for material safety.",
    h1: "Cleaning pH: Acidic, Neutral and Alkaline Cleaners",
    intro:
      "Cleaning pH explains why one cleaner removes limescale while another cuts grease. The pH scale runs from acidic to alkaline, and choosing the wrong side of the scale can damage sensitive materials such as marble.",
    primaryEntity: "pH in cleaning chemistry",
    primaryIntent: "Understand acidity, neutrality, alkalinity, and material compatibility in household cleaning.",
    uniqueKnowledge:
      "Provides the science owner page for acidic versus alkaline cleaner decisions referenced by surface and problem pages.",
    closestOverlap: "/guides/problems/limescale-removal/",
    reasonToExist:
      "pH is a cross-cutting technical concept that explains many cleaning choices without belonging to one room, surface, or product.",
    relatedGuidePaths: ["/guides/surfaces/marble-cleaning/", "/guides/problems/limescale-removal/", "/guides/areas/kitchen-cleaning/"],
    sections: [
      {
        heading: "The practical meaning of pH",
        body: [
          "A pH below 7 is acidic, 7 is neutral, and above 7 is alkaline. Each whole number is a tenfold change, so small-looking pH differences can be chemically significant.",
          "For home cleaning, pH helps explain product fit: acidic cleaners tend to help with mineral deposits, while alkaline cleaners tend to help with oily or greasy soil."
        ]
      },
      {
        heading: "Why pH is not the only factor",
        body: [
          "Surfactants, solvents, abrasives, dwell time, agitation, temperature, and surface porosity also matter. A neutral cleaner can still be unsuitable for a material if it contains the wrong solvent or leaves residue."
        ]
      },
      {
        heading: "Material compatibility",
        items: [
          "Acid-sensitive materials include marble and some natural stones.",
          "Strong alkaline cleaners can dull or damage some coatings, aluminium, and delicate finishes.",
          "Always check the label and surface manufacturer guidance before using a new cleaner."
        ]
      }
    ],
    sources: [
      { label: "US EPA explanation of pH", href: "https://www.epa.gov/goldkingmine/what-ph" }
    ]
  },
  {
    hub: "science",
    slug: "bleach-safety",
    path: "/guides/science/bleach-safety/",
    mainKeyword: "bleach safety",
    title: "Bleach Safety: Mixing, Ventilation and Contact Time",
    description: "Use household bleach more safely by understanding ventilation, dilution, contact time, surface suitability, and dangerous product mixtures.",
    h1: "Bleach Safety: Mixing, Ventilation and Contact Time",
    intro:
      "Bleach safety starts with one strict rule: do not mix bleach with other cleaners. Use bleach only where the surface and product label allow it, ventilate the area, and follow the stated dilution and contact-time instructions.",
    primaryEntity: "Household bleach safety",
    primaryIntent: "Understand safe bleach use, dangerous mixtures, ventilation, and label-led disinfecting.",
    uniqueKnowledge:
      "Central safety owner for bleach mentions across mould, toilet, disinfecting, bathroom, and oven content.",
    closestOverlap: "/guides/methods/disinfecting-cleaning/",
    reasonToExist:
      "Bleach has important chemical safety, ventilation, dilution, and product-mixing risks that should be handled by one authoritative page.",
    relatedGuidePaths: ["/guides/methods/disinfecting-cleaning/", "/guides/problems/mould-removal/", "/guides/items/toilet-cleaning/"],
    sections: [
      {
        heading: "Do not mix bleach",
        body: [
          "Do not mix household bleach with ammonia, acids, vinegar, toilet cleaners, descalers, or other disinfectants. Dangerous vapours can be released.",
          "If you need to switch products, rinse the surface thoroughly and allow ventilation before changing approach."
        ]
      },
      {
        heading: "Use bleach only where suitable",
        items: [
          "Read the label before use.",
          "Ventilate the room.",
          "Wear gloves if the label or situation calls for it.",
          "Clean visible dirt first unless the product is labelled for one-step cleaning and disinfecting.",
          "Keep the surface wet for the stated contact time.",
          "Prepare diluted solutions only as directed and do not store homemade diluted bleach for long-term use."
        ]
      },
      {
        heading: "Surfaces where bleach may be a poor choice",
        items: [
          "Natural stone and delicate finishes.",
          "Coloured fabrics and upholstery.",
          "Metals that can corrode.",
          "Porous materials where moisture cannot dry properly."
        ]
      }
    ],
    sources: [
      { label: "CDC bleach safety guidance", href: "https://www.cdc.gov/hygiene/about/cleaning-and-disinfecting-with-bleach.html" },
      { label: "CDC mould cleanup guidance", href: "https://www.cdc.gov/mold-health/about/clean-up.html" }
    ]
  }
];

const rejectedContentMapEntries: GuideContentMapEntry[] = [
  {
    hub: "Surfaces & Materials",
    subcategory: "Natural stone",
    topic: "Cleaning marble with vinegar",
    mainKeyword: "cleaning marble with vinegar",
    proposedUrl: "/guides/surfaces/cleaning-marble-with-vinegar/",
    proposedSeoTitle: "Cleaning Marble With Vinegar",
    proposedH1: "Cleaning Marble With Vinegar",
    primaryEntity: "Marble vinegar question",
    primaryIntent: "Find out whether vinegar is safe on marble.",
    uniqueKnowledge: "No separate owner needed; the useful answer is a warning within marble cleaning and cleaning pH.",
    closestPotentialOverlap: "/guides/surfaces/marble-cleaning/",
    reasonToExist: "Rejected because it is a sub-question fully owned by the marble cleaning guide.",
    relevantInternalLinks: ["/guides/surfaces/marble-cleaning/", "/guides/science/cleaning-ph/"],
    relevantServiceRelationship: "None",
    status: "Reject"
  },
  {
    hub: "Items",
    subcategory: "Upholstery & furnishings",
    topic: "How often to clean a sofa",
    mainKeyword: "how often to clean sofa",
    proposedUrl: "/guides/items/how-often-to-clean-sofa/",
    proposedSeoTitle: "How Often to Clean a Sofa",
    proposedH1: "How Often to Clean a Sofa",
    primaryEntity: "Sofa cleaning frequency",
    primaryIntent: "Decide cleaning frequency for a sofa.",
    uniqueKnowledge: "No separate owner needed; frequency belongs inside the sofa cleaning guide.",
    closestPotentialOverlap: "/guides/items/sofa-cleaning/",
    reasonToExist: "Rejected because it would cannibalise the broader sofa cleaning page.",
    relevantInternalLinks: ["/guides/items/sofa-cleaning/"],
    relevantServiceRelationship: "/residential/sofa-cleaning/",
    status: "Reject"
  },
  {
    hub: "Problems",
    subcategory: "Buildup",
    topic: "Limescale removal in Tampines",
    mainKeyword: "limescale removal Tampines",
    proposedUrl: "/guides/problems/limescale-removal-tampines/",
    proposedSeoTitle: "Limescale Removal in Tampines",
    proposedH1: "Limescale Removal in Tampines",
    primaryEntity: "Location-swapped limescale query",
    primaryIntent: "Find local service availability or advice.",
    uniqueKnowledge: "No unique cleaning knowledge compared with the canonical limescale guide.",
    closestPotentialOverlap: "/guides/problems/limescale-removal/",
    reasonToExist: "Rejected because informational guides must not create thin location variants.",
    relevantInternalLinks: ["/guides/problems/limescale-removal/"],
    relevantServiceRelationship: "Location intent belongs under commercial location pages, not guides.",
    status: "Reject"
  }
];

export const guideContentMap: GuideContentMapEntry[] = [
  ...guidePages.map((page) => {
    const hub = guideHubs.find((item) => item.id === page.hub);

    return {
      hub: hub?.name ?? page.hub,
      subcategory: "Core guide",
      topic: page.h1,
      mainKeyword: page.mainKeyword,
      proposedUrl: page.path,
      proposedSeoTitle: page.title,
      proposedH1: page.h1,
      primaryEntity: page.primaryEntity,
      primaryIntent: page.primaryIntent,
      uniqueKnowledge: page.uniqueKnowledge,
      closestPotentialOverlap: page.closestOverlap,
      reasonToExist: page.reasonToExist,
      relevantInternalLinks: page.relatedGuidePaths,
      relevantServiceRelationship: page.servicePath ?? "None",
      status: "New" as const
    };
  }),
  ...rejectedContentMapEntries
];

export function getGuideHub(id: GuideHubId): GuideHub {
  const hub = guideHubs.find((item) => item.id === id);

  if (!hub) {
    throw new Error(`Unknown guide hub: ${id}`);
  }

  return hub;
}

export function getGuideChildren(hub: GuideHubId): GuidePage[] {
  return guidePages.filter((page) => page.hub === hub);
}

export function getGuideByPath(path: string): GuidePage | undefined {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return guidePages.find((page) => page.path === normalized);
}

export function getRelatedGuides(page: GuidePage): GuidePage[] {
  return page.relatedGuidePaths
    .map((path) => getGuideByPath(path))
    .filter((guide): guide is GuidePage => Boolean(guide));
}

export function getGuideSitemapPaths(): string[] {
  return ["/guides", ...guideHubs.map((hub) => hub.path.slice(0, -1)), ...guidePages.map((page) => page.path.slice(0, -1))];
}

export function getBreadcrumbJsonLd(items: { label: string; href: string }[], origin: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href, origin).toString()
    }))
  };
}
