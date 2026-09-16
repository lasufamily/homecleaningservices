import { filterBusinesses, getTowns, slugify, sortBusinesses, type Business } from "./airtable";

type LocationContent = {
  intro: string;
  residential: string;
  commercial: string;
  companies: string;
};

const curatedLocationProfiles: Record<string, Omit<LocationContent, "companies">> = {
  "ang-mo-kio": {
    intro:
      "Compare home cleaning services in Ang Mo Kio for established HDB estates, family homes, and busy households that need practical weekly or one-time cleaning help.",
    residential:
      "Ang Mo Kio homes often need dependable upkeep around kitchens, bathrooms, service yards, and shared living spaces. Shortlist cleaners who can handle routine housekeeping, spring cleaning, and deeper resets around your schedule.",
    commercial:
      "For clinics, tuition centres, shops, and offices around Ang Mo Kio, commercial cleaning should be scoped around opening hours, foot traffic, and the areas customers or staff use most."
  },
  bedok: {
    intro:
      "Explore home cleaning services in Bedok for East-side flats, condos, landed homes, and families who want cleaner rooms without spending weekends comparing providers from scratch.",
    residential:
      "Bedok households range from older flats to newer apartments, so cleaning needs can vary from steady weekly upkeep to detailed move-in, move-out, and spring cleaning. Focus on providers that ask about room count, surfaces, and priority areas before quoting.",
    commercial:
      "Bedok businesses, shops, and small offices benefit from cleaners who can work around trading hours, pantry use, washrooms, and regular dust build-up from daily foot traffic."
  },
  bishan: {
    intro:
      "Find home cleaning services in Bishan for centrally located homes where regular upkeep, detailed bathroom cleaning, and flexible appointment timing often matter.",
    residential:
      "Bishan homes are well suited to scheduled housekeeping, spring cleaning, and careful handover cleans. A good quote should account for the home layout, family routines, and any areas that need extra attention.",
    commercial:
      "For offices, enrichment centres, and retail spaces in Bishan, commercial cleaning should balance visible customer areas with back-of-house basics like bins, pantry surfaces, and toilets."
  },
  "boon-lay": {
    intro:
      "Review home cleaning services in Boon Lay for households near the west of Singapore that need practical help with weekly cleaning, deep cleaning, or moving-related cleans.",
    residential:
      "Boon Lay residents may need everything from routine flat cleaning to fuller resets after renovation, tenancy changes, or family gatherings. Compare cleaners by service scope, not just headline price.",
    commercial:
      "Commercial cleaning in Boon Lay should be planned around worksite offices, small businesses, and operational spaces where dust, bins, floors, and washrooms need consistent attention."
  },
  "bras-basah": {
    intro:
      "Browse home cleaning services in Bras Basah for apartments and mixed-use properties near the city centre where access timing and clear scope are especially useful.",
    residential:
      "Bras Basah homes often need cleaners who can work efficiently in compact apartments and city-fringe residences. Share access details, parking constraints, and preferred timing when asking for a quote.",
    commercial:
      "For studios, schools, galleries, and offices around Bras Basah, commercial cleaning should keep high-use rooms presentable while respecting operating hours and building rules."
  },
  "bukit-batok": {
    intro:
      "Compare home cleaning services in Bukit Batok for west-side HDB flats, condos, and family homes that need dependable cleaning support.",
    residential:
      "Bukit Batok households commonly compare routine cleaning, spring cleaning, post-renovation dust removal, and move-in or move-out cleans. Ask providers to quote around the actual condition of the home.",
    commercial:
      "Bukit Batok commercial spaces need cleaning plans that account for office floors, shopfronts, shared toilets, and pantry areas without disrupting the working day."
  },
  "bukit-merah": {
    intro:
      "Find home cleaning services in Bukit Merah for mature estates, city-fringe apartments, and households that want a clear cleaning scope before booking.",
    residential:
      "Bukit Merah homes may need regular housekeeping, detailed kitchen and bathroom work, or one-off cleaning before guests, handovers, or moving dates.",
    commercial:
      "For Bukit Merah offices, studios, and neighbourhood businesses, compare commercial cleaners by frequency, after-hours availability, and the detail included for common areas."
  },
  "bukit-panjang": {
    intro:
      "Explore home cleaning services in Bukit Panjang for households that want help with everyday upkeep, larger family homes, or periodic deep cleaning.",
    residential:
      "Bukit Panjang residents can use location listings to compare cleaners for weekly maintenance, spring cleaning, and move-related cleaning around room count and timing.",
    commercial:
      "Commercial cleaning in Bukit Panjang should be matched to the rhythm of the space, whether that is a small office, shop, studio, or customer-facing service business."
  },
  "bukit-timah": {
    intro:
      "Compare home cleaning services in Bukit Timah for condos, apartments, and landed homes where careful scoping and reliable scheduling are important.",
    residential:
      "Bukit Timah homes may require more detailed planning around larger rooms, specialist surfaces, stairs, or add-ons such as upholstery and floor care.",
    commercial:
      "For offices, schools, clinics, and studios in Bukit Timah, commercial cleaning should be clear about access, frequency, floor care, and washroom standards."
  },
  "central-area": {
    intro:
      "Browse home cleaning services in Central Area for apartments, serviced residences, and city homes where timing, access, and a precise scope can make the booking smoother.",
    residential:
      "Central Area homes often need efficient cleaners who can work within building rules, lift access, and tighter appointment windows. Confirm room count, parking, and add-ons before booking.",
    commercial:
      "Commercial cleaning in the Central Area should cover presentation-sensitive offices, meeting rooms, pantries, toilets, and reception areas with minimal disruption."
  },
  changi: {
    intro:
      "Find home cleaning services in Changi for homes and apartments near the eastern edge of Singapore where scheduled cleaning can keep busy routines manageable.",
    residential:
      "Changi households should look for cleaners who can confirm travel, timing, and the exact scope for routine upkeep, deep cleaning, or move-related cleaning.",
    commercial:
      "For Changi business spaces, cleaning should be arranged around access windows, operational needs, and the areas that see the most staff or visitor use."
  },
  chinatown: {
    intro:
      "Compare home cleaning services in Chinatown for city apartments, shophouse units, and compact homes that need efficient, well-scoped cleaning.",
    residential:
      "Chinatown homes can involve tight access, compact kitchens, and older building details. A good quote should clarify what is included before the cleaner arrives.",
    commercial:
      "Chinatown commercial cleaning often needs to work around retail, food, office, or studio schedules, with attention to visible floors, counters, bins, and toilets."
  },
  "choa-chu-kang": {
    intro:
      "Explore home cleaning services in Choa Chu Kang for west-side families comparing regular housekeeping, deep cleaning, and one-off cleaning help.",
    residential:
      "Choa Chu Kang homes may need recurring upkeep for family routines or fuller spring cleaning before holidays, guests, or moving dates.",
    commercial:
      "Commercial cleaning in Choa Chu Kang should be scoped around the workplace type, cleaning frequency, and practical needs like pantry, washroom, and floor maintenance."
  },
  clementi: {
    intro:
      "Find home cleaning services in Clementi for homes near schools, offices, and mature estates where reliable scheduling and practical cleaning scopes matter.",
    residential:
      "Clementi households can compare cleaners for regular upkeep, detailed room cleaning, and move-in or move-out jobs that need clear handover expectations.",
    commercial:
      "For Clementi offices, shops, tuition centres, and clinics, commercial cleaning should cover high-touch surfaces, toilets, floors, and customer-facing areas."
  },
  geylang: {
    intro:
      "Browse home cleaning services in Geylang for apartments, landed homes, and mixed-use properties where access details and cleaning priorities should be agreed upfront.",
    residential:
      "Geylang homes may need flexible cleaning support for compact apartments, family units, or one-off deep cleans. Share the property condition and preferred timing when comparing quotes.",
    commercial:
      "Geylang commercial cleaning should account for trading hours, staff areas, toilets, bins, and the higher turnover that many busy streetside spaces experience."
  },
  hougang: {
    intro:
      "Compare home cleaning services in Hougang for family homes, HDB flats, and condos that need consistent upkeep or a deeper reset.",
    residential:
      "Hougang households can use town listings to compare weekly housekeeping, spring cleaning, bathroom cleaning, and moving-related cleaning by scope and availability.",
    commercial:
      "Commercial spaces in Hougang should be quoted around usage patterns, from neighbourhood shops and offices to clinics, studios, and small service businesses."
  },
  "jurong-east": {
    intro:
      "Find home cleaning services in Jurong East for homes near major west-side amenities, offices, and transport links where timing can be important.",
    residential:
      "Jurong East residents may need routine cleaning, end-of-tenancy cleaning, or post-renovation dust removal. Compare cleaners by what they include for kitchens, bathrooms, and floors.",
    commercial:
      "Jurong East commercial cleaning should consider busier office and retail environments, especially shared areas, toilets, pantries, and reception spaces."
  },
  "jurong-west": {
    intro:
      "Explore home cleaning services in Jurong West for larger west-side estates, family homes, and households that need recurring or one-time cleaning support.",
    residential:
      "Jurong West cleaning requests often include regular upkeep, spring cleaning, and handover cleaning. Make sure quotes reflect room count, home condition, and service add-ons.",
    commercial:
      "For Jurong West commercial premises, cleaning should be matched to operating hours, floor traffic, washroom needs, and the frequency required to keep the space presentable."
  },
  kallang: {
    intro:
      "Browse home cleaning services in Kallang for city-fringe apartments, HDB flats, and homes where convenience and clear service scope matter.",
    residential:
      "Kallang households may compare cleaners for routine upkeep, pre-event cleaning, post-renovation cleaning, and move-related jobs near central Singapore.",
    commercial:
      "Kallang commercial cleaning should cover offices, gyms, studios, shops, and service spaces where floors, toilets, and shared areas need consistent care."
  },
  "kampong-glam": {
    intro:
      "Compare home cleaning services in Kampong Glam for city homes, apartments, and mixed-use properties where access and timing should be planned carefully.",
    residential:
      "Kampong Glam homes benefit from cleaning quotes that clarify lift access, parking, unit size, and any detailed work needed for kitchens, bathrooms, or floors.",
    commercial:
      "Commercial cleaning around Kampong Glam often needs to fit retail, hospitality, office, or studio schedules without disrupting customers or staff."
  },
  "kampong-ubi": {
    intro:
      "Find home cleaning services in Kampong Ubi for nearby homes and workspaces that need practical cleaning support from vetted local providers.",
    residential:
      "Kampong Ubi households can compare providers for regular cleaning, deep cleaning, and move-related services with attention to the actual condition of the home.",
    commercial:
      "Kampong Ubi has many operational and office environments, so commercial cleaning should be clear about floor care, dust, bins, toilets, and working-hour constraints."
  },
  kovan: {
    intro:
      "Explore home cleaning services in Kovan for north-east homes, apartments, and landed properties where careful scheduling and scope clarity help.",
    residential:
      "Kovan residents can compare cleaning providers for weekly upkeep, spring cleaning, and detailed one-off cleans that match the size and layout of the home.",
    commercial:
      "For Kovan businesses, commercial cleaning should be built around the customer areas, staff spaces, toilets, and floors that need regular attention."
  },
  "lim-chu-kang": {
    intro:
      "Review home cleaning services in Lim Chu Kang for properties that may need confirmed travel, access planning, and a clear cleaning scope before booking.",
    residential:
      "Lim Chu Kang cleaning requests should be described clearly upfront, especially for property type, access, preferred timing, and any larger or specialist cleaning needs.",
    commercial:
      "Commercial cleaning in Lim Chu Kang should confirm site access, operating hours, and whether the work involves office, utility, or operational areas."
  },
  mandai: {
    intro:
      "Find home cleaning services in Mandai for homes and properties where appointment timing, access, and cleaner availability should be confirmed early.",
    residential:
      "Mandai households should compare cleaners by travel coverage, scope, and whether they can handle routine cleaning, detailed resets, or move-related cleaning.",
    commercial:
      "Mandai commercial cleaning should be scoped around the type of premises, safety requirements, frequency, and the areas that need routine upkeep."
  },
  "marine-parade": {
    intro:
      "Compare home cleaning services in Marine Parade for East Coast apartments, condos, and homes that need regular upkeep or deeper one-off cleaning.",
    residential:
      "Marine Parade homes can benefit from routine cleaning, fabric care add-ons, and spring cleaning that tackles dust, bathrooms, kitchens, and sea-breeze residue near windows.",
    commercial:
      "Commercial cleaning in Marine Parade should suit shops, clinics, studios, and offices that need neat customer areas, toilets, pantry cleaning, and floor care."
  },
  novena: {
    intro:
      "Browse home cleaning services in Novena for city-fringe condos, apartments, and busy households that need reliable cleaning support.",
    residential:
      "Novena residents often value efficient bookings, clear arrival windows, and careful cleaning around bathrooms, kitchens, floors, and living areas.",
    commercial:
      "Novena commercial cleaning may involve offices, clinics, and wellness spaces where reception areas, treatment rooms, toilets, and high-touch surfaces matter."
  },
  "pasir-ris": {
    intro:
      "Find home cleaning services in Pasir Ris for east-side family homes, condos, and flats that need recurring housekeeping or one-time cleaning help.",
    residential:
      "Pasir Ris households can compare providers for weekly cleaning, spring cleaning, move-in cleaning, and deeper work after renovations or long busy periods.",
    commercial:
      "Commercial cleaning in Pasir Ris should be matched to neighbourhood shops, offices, studios, and service spaces with clear expectations for floors and toilets."
  },
  "paya-lebar": {
    intro:
      "Compare home cleaning services in Paya Lebar for apartments and homes near busy commercial areas where flexible timing can be useful.",
    residential:
      "Paya Lebar homes may need efficient cleaners for regular upkeep, pre-move cleaning, or spring cleaning around work schedules and building access.",
    commercial:
      "Paya Lebar commercial cleaning should account for offices, retail units, and service businesses with visible customer areas and regular staff use."
  },
  pioneer: {
    intro:
      "Explore home cleaning services in Pioneer for west-side homes and workers' households comparing practical cleaning help near industrial and residential areas.",
    residential:
      "Pioneer residential cleaning should be scoped around the home type, room count, and whether the job is routine upkeep, a deep clean, or a move-related clean.",
    commercial:
      "Commercial cleaning in Pioneer may involve offices and operational spaces where dust, floors, bins, toilets, and pantry areas need a dependable schedule."
  },
  punggol: {
    intro:
      "Find home cleaning services in Punggol for newer flats, condos, and young family homes where regular upkeep and move-in cleaning are common needs.",
    residential:
      "Punggol residents often compare cleaners for weekly housekeeping, post-renovation dust, move-in cleaning, and spring cleaning around busy family routines.",
    commercial:
      "For Punggol shops, offices, and studios, commercial cleaning should be arranged around customer hours, shared spaces, and regular floor or toilet care."
  },
  "punggol-digital-district": {
    intro:
      "Review home cleaning services in Punggol Digital District for nearby homes and workspaces where scheduling, access, and service scope should be clear.",
    residential:
      "Residential cleaning around Punggol Digital District should be matched to newer homes, move-in timelines, and routine upkeep for busy households.",
    commercial:
      "Commercial cleaning in Punggol Digital District should suit office and innovation spaces that need consistent cleaning for shared areas, pantries, toilets, and meeting rooms."
  },
  queenstown: {
    intro:
      "Compare home cleaning services in Queenstown for mature estates, condos, and city-fringe homes that need routine cleaning or fuller one-time cleans.",
    residential:
      "Queenstown households can compare cleaning companies for weekly upkeep, spring cleaning, end-of-tenancy cleaning, and specialist add-ons depending on home condition.",
    commercial:
      "Commercial cleaning in Queenstown should keep offices, clinics, shops, and service spaces presentable through clear schedules and defined cleaning areas."
  },
  sembawang: {
    intro:
      "Browse home cleaning services in Sembawang for north-side homes, family flats, and condos that need dependable upkeep or seasonal deep cleaning.",
    residential:
      "Sembawang homes may need regular housekeeping, bathroom and kitchen cleaning, spring cleaning, or move-related cleaning. Compare providers by scope and availability.",
    commercial:
      "Sembawang commercial cleaning should be planned around shop, office, and service business routines, with attention to floors, bins, toilets, and shared surfaces."
  },
  sengkang: {
    intro:
      "Find home cleaning services in Sengkang for newer family estates, condos, and busy households comparing weekly cleaning and one-time deep cleans.",
    residential:
      "Sengkang residents can use location listings to compare routine upkeep, spring cleaning, move-in cleaning, and post-renovation dust removal.",
    commercial:
      "Commercial cleaning in Sengkang should suit neighbourhood shops, offices, clinics, and studios that need practical recurring cleaning without disrupting operations."
  },
  serangoon: {
    intro:
      "Compare home cleaning services in Serangoon for north-east homes, condos, and landed properties with varied cleaning needs.",
    residential:
      "Serangoon households may need anything from regular housekeeping to detailed spring cleaning, tenancy handover cleaning, or fabric and floor add-ons.",
    commercial:
      "For Serangoon businesses, commercial cleaning should be quoted around customer-facing areas, staff spaces, floors, washrooms, and the preferred cleaning frequency."
  },
  "sungei-kadut": {
    intro:
      "Review home cleaning services in Sungei Kadut for properties where access, site type, and cleaning scope should be confirmed before arranging work.",
    residential:
      "Residential cleaning near Sungei Kadut should clarify property details, room count, and the difference between routine upkeep and heavier deep-cleaning needs.",
    commercial:
      "Commercial cleaning in Sungei Kadut may involve offices, workshops, and operational spaces, so quotes should specify dust levels, floors, toilets, and site access."
  },
  tampines: {
    intro:
      "Explore home cleaning services in Tampines for large East-side estates, family flats, condos, and homes that need steady cleaning support.",
    residential:
      "Tampines households commonly compare cleaners for weekly maintenance, spring cleaning, move-in and move-out cleaning, and post-renovation dust removal.",
    commercial:
      "Tampines commercial cleaning should fit offices, retail spaces, clinics, and studios, with clear expectations for toilets, floors, pantries, and customer areas."
  },
  "tanjong-pagar": {
    intro:
      "Compare home cleaning services in Tanjong Pagar for city apartments, serviced residences, and homes where convenience and access planning matter.",
    residential:
      "Tanjong Pagar homes often need efficient cleaning around compact layouts, condo rules, lift access, and busy resident schedules.",
    commercial:
      "Commercial cleaning in Tanjong Pagar should support office, retail, and hospitality-adjacent spaces where first impressions and shared facilities are important."
  },
  tengah: {
    intro:
      "Find home cleaning services in Tengah for newer homes where move-in cleaning, post-renovation dust removal, and regular upkeep are often top priorities.",
    residential:
      "Tengah households should compare cleaners who can handle new-home dust, cabinet wiping, bathroom cleaning, floor care, and recurring maintenance after settling in.",
    commercial:
      "Commercial cleaning in Tengah should be scoped around emerging neighbourhood businesses, office spaces, and the practical cleaning needs of new premises."
  },
  "tiong-bahru": {
    intro:
      "Browse home cleaning services in Tiong Bahru for apartments, older flats, and distinctive homes where gentle but thorough cleaning is useful.",
    residential:
      "Tiong Bahru homes may need careful cleaning around older surfaces, compact layouts, kitchens, bathrooms, and floors. Share any delicate finishes before booking.",
    commercial:
      "Tiong Bahru commercial cleaning should fit cafes, studios, shops, and offices that need tidy customer areas, toilets, bins, and regular floor care."
  },
  "toa-payoh": {
    intro:
      "Compare home cleaning services in Toa Payoh for central HDB estates, condos, and households that need reliable housekeeping or deeper cleaning.",
    residential:
      "Toa Payoh residents can compare cleaners for routine upkeep, kitchen and bathroom cleaning, spring cleaning, and handover cleans close to the centre of Singapore.",
    commercial:
      "Commercial cleaning in Toa Payoh should be tailored to offices, shops, clinics, and service spaces with clear schedules for floors, toilets, and shared areas."
  },
  tuas: {
    intro:
      "Review home cleaning services in Tuas for nearby residences and work-linked properties where access, timing, and travel coverage should be confirmed upfront.",
    residential:
      "Residential cleaning around Tuas should be scoped carefully, especially when the home needs move-related cleaning, deep cleaning, or a larger one-off clean.",
    commercial:
      "Tuas commercial cleaning often needs to support offices and industrial-adjacent spaces, with attention to dust, floors, toilets, pantries, and site access rules."
  },
  woodlands: {
    intro:
      "Browse home cleaning services in Woodlands for north-side flats, condos, and family homes that need recurring or one-time cleaning help.",
    residential:
      "Woodlands households often compare weekly housekeeping, spring cleaning, post-renovation cleaning, and move-in or move-out services by room count and cleaning priorities.",
    commercial:
      "Commercial cleaning in Woodlands should suit offices, shops, clinics, and service spaces that need practical maintenance for floors, toilets, bins, and shared areas."
  },
  yishun: {
    intro:
      "Find home cleaning services in Yishun for north-side homes, family flats, condos, and households comparing reliable cleaners by town.",
    residential:
      "Yishun residents can compare providers for routine home cleaning, kitchen and bathroom cleaning, spring cleaning, move-related cleaning, and deeper one-off jobs.",
    commercial:
      "Yishun commercial cleaning should be matched to the property type, whether it is a shop, office, clinic, studio, or neighbourhood service business."
  }
};

export function getTownSlug(town: string): string {
  return slugify(town);
}

export function getLocationPath(town: string): string {
  return `/nearme/${getTownSlug(town)}`;
}

export function getLocationTowns(businesses: Business[]): string[] {
  return getTowns(businesses).filter((town) => town !== "Singapore");
}

export function getBusinessesByTown(businesses: Business[], town: string): Business[] {
  return sortBusinesses(filterBusinesses(businesses, { town }), "name");
}

function formatList(items: string[]): string {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;
}

function pluralizeCompany(count: number): string {
  return `${count} listed cleaning ${count === 1 ? "company" : "companies"}`;
}

function getTopCategories(businesses: Business[]): string[] {
  const counts = new Map<string, number>();

  for (const business of businesses) {
    for (const category of business.categories) {
      counts.set(category, (counts.get(category) ?? 0) + 1);
    }
  }

  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 3)
    .map(([category]) => category);
}

export function getLocationContent(town: string, businesses: Business[]): LocationContent {
  const slug = getTownSlug(town);
  const profile = curatedLocationProfiles[slug];
  const companyCount = pluralizeCompany(businesses.length);
  const companyNames = businesses.slice(0, 3).map((business) => business.name);
  const categories = getTopCategories(businesses);
  const categoryText = categories.length > 0 ? formatList(categories) : "regular home cleaning";
  const companyText = companyNames.length > 0 ? formatList(companyNames) : "local providers";
  const companies = `${town} currently has ${companyCount} in this directory, including ${companyText}. Compare service categories, addresses, and contact details before deciding who to speak with.`;

  if (profile) {
    return {
      ...profile,
      companies
    };
  }

  return {
    intro: `Compare home cleaning services in ${town} from providers such as ${companyText}, with local options for ${categoryText} and related cleaning work.`,
    residential: `For homes in ${town}, start by matching the cleaner to the actual job: ${categoryText}, room-by-room upkeep, or a one-time reset before guests, moving, or handover.`,
    commercial: `Commercial cleaning in ${town} should be scoped around opening hours, staff areas, toilets, floors, and how often the space is used by customers or visitors.`,
    companies
  };
}
