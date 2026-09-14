export type AirtableRecord = {
  id: string;
  fields: Record<string, unknown>;
};

export type Business = {
  id: string;
  name: string;
  slug: string;
  town: string;
  categories: string[];
  streetName?: string;
  address?: string;
  displayAddress?: string;
  openingHours?: string;
  phone?: string;
  googleMapsUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  imageUrl?: string;
  galleryImages: string[];
};

export type SortOption = "name" | "town";

type AirtableResponse = {
  records: AirtableRecord[];
  offset?: string;
};

const TABLE_NAME = "Businesses";
let businessesCache: Promise<Business[]> | undefined;

export type AirtableConfig = {
  apiKey?: string;
  baseId?: string;
  tableName?: string;
};

type Fetcher = typeof fetch;

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getInitials(name: string): string {
  const initials = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return initials || "HC";
}

function asString(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function asStringList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => asString(item)).filter(Boolean) as string[];
  }

  const text = asString(value);
  if (!text) return [];

  return text
    .split(/[,;]\s*/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function normalizeBusiness(record: AirtableRecord): Business {
  const fields = record.fields;
  const name = asString(fields.Name) ?? "Unnamed Cleaning Service";
  const slug = slugify(asString(fields.Slug) ?? "");
  const town = asString(fields.Town) ?? "Singapore";
  const services = asStringList(fields.Services);
  const categories = services.length > 0 ? services : asStringList(fields.Category);
  const streetName = asString(fields["Street Name"]);
  const address = asString(fields.Address);
  const displayAddress = address ?? streetName;

  return {
    id: record.id,
    name,
    slug,
    town,
    categories,
    streetName,
    address,
    displayAddress,
    openingHours: asString(fields["Opening Hours"]),
    phone: asString(fields.Phone),
    googleMapsUrl: asString(fields["Google Maps URL"]),
    facebookUrl: asString(fields["Facebook URL"]),
    instagramUrl: asString(fields["Instagram URL"]),
    tiktokUrl: asString(fields["TikTok URL"]),
    imageUrl: asString(fields["Image URL"]),
    galleryImages: asStringList(fields["Gallery Images URL"])
  };
}

async function fetchAirtablePage(
  apiKey: string,
  baseId: string,
  tableName: string,
  offset: string | undefined,
  fetcher: Fetcher
) {
  const params = new URLSearchParams({ pageSize: "100" });
  if (offset) params.set("offset", offset);

  const response = await fetcher(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}?${params}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }
  );

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Airtable request failed with ${response.status}${detail ? `: ${detail}` : ""}`);
  }

  return response.json() as Promise<AirtableResponse>;
}

export async function getBusinesses(): Promise<Business[]> {
  businessesCache ??= loadBusinessesFromAirtable({
    apiKey: import.meta.env.AIRTABLE_API_KEY,
    baseId: import.meta.env.AIRTABLE_BASE_ID,
    tableName: import.meta.env.AIRTABLE_TABLE_NAME
  });
  return businessesCache;
}

export async function loadBusinessesFromAirtable(
  config: AirtableConfig,
  fetcher: Fetcher = fetch
): Promise<Business[]> {
  const apiKey = config.apiKey?.trim();
  const baseId = config.baseId?.trim();
  const tableName = config.tableName?.trim() || TABLE_NAME;

  if (!apiKey || !baseId) {
    throw new Error("AIRTABLE_API_KEY and AIRTABLE_BASE_ID are required to build the directory.");
  }

  const records: AirtableRecord[] = [];
  let offset: string | undefined;

  do {
    const page = await fetchAirtablePage(apiKey, baseId, tableName, offset, fetcher);
    records.push(...page.records);
    offset = page.offset;
  } while (offset);

  return records.map(normalizeBusiness).filter((business) => business.name && business.slug);
}

export function getBusinessBySlug(businesses: Business[], slug: string): Business | undefined {
  return businesses.find((business) => business.slug === slug);
}

export function getTowns(businesses: Business[]): string[] {
  return Array.from(new Set(businesses.map((business) => business.town).filter(Boolean))).sort((a, b) =>
    a.localeCompare(b)
  );
}

export function getCategories(businesses: Business[]): string[] {
  return Array.from(new Set(businesses.flatMap((business) => business.categories))).sort((a, b) =>
    a.localeCompare(b)
  );
}

export function filterBusinesses(
  businesses: Business[],
  filters: { town?: string | null; category?: string | null; search?: string | null }
): Business[] {
  const town = filters.town?.toLowerCase();
  const category = filters.category?.toLowerCase();
  const search = filters.search?.toLowerCase();

  return businesses.filter((business) => {
    const matchesTown = !town || business.town.toLowerCase() === town;
    const matchesCategory =
      !category || business.categories.some((businessCategory) => businessCategory.toLowerCase() === category);
    const searchable = [
      business.name,
      business.town,
      business.categories.join(" "),
      business.displayAddress,
      business.phone
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    const matchesSearch = !search || searchable.includes(search);

    return matchesTown && matchesCategory && matchesSearch;
  });
}

export function sortBusinesses(businesses: Business[], sort: SortOption = "name"): Business[] {
  return [...businesses].sort((a, b) => {
    if (sort === "town") {
      const townCompare = a.town.localeCompare(b.town);
      return townCompare === 0 ? a.name.localeCompare(b.name) : townCompare;
    }

    return a.name.localeCompare(b.name);
  });
}

export function getRelatedBusinesses(current: Business, businesses: Business[], limit = 3): Business[] {
  return businesses
    .filter((business) => business.slug !== current.slug)
    .map((business) => {
      const sameTown = business.town === current.town ? 2 : 0;
      const sameCategory = business.categories.some((category) => current.categories.includes(category)) ? 1 : 0;
      return { business, score: sameTown + sameCategory };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.business.name.localeCompare(b.business.name))
    .slice(0, limit)
    .map((item) => item.business);
}
