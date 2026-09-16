# Cleaning Knowledge Base Content Map

This inventory records the first published guide set and the topics intentionally rejected or consolidated. It follows the rule: one cleaning question gets one authoritative page.

## Published Foundation

| Hub | Subcategory | Topic | Main keyword | URL | Status | Closest overlap | Service relationship |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cleaning Problems | Core guide | Mould removal | mould removal | `/guides/problems/mould-removal/` | New | Bathroom cleaning | None |
| Cleaning Problems | Core guide | Limescale removal | limescale removal | `/guides/problems/limescale-removal/` | New | Marble cleaning | None |
| Cleaning Problems | Core guide | Coffee stain removal | coffee stain removal | `/guides/problems/coffee-stain-removal/` | New | Sofa cleaning | None |
| Surfaces & Materials | Core guide | Marble cleaning | marble cleaning | `/guides/surfaces/marble-cleaning/` | New | Marble floor polishing service | `/residential/marble-floor-polishing/` |
| Surfaces & Materials | Core guide | Vinyl floor cleaning | vinyl floor cleaning | `/guides/surfaces/vinyl-floor-cleaning/` | New | Floor cleaning service | `/residential/floor-cleaning/` |
| Surfaces & Materials | Core guide | Grout cleaning | grout cleaning | `/guides/surfaces/grout-cleaning/` | New | Bathroom cleaning | None |
| Areas of the Home | Core guide | Bathroom cleaning | bathroom cleaning | `/guides/areas/bathroom-cleaning/` | New | Toilet cleaning | None |
| Areas of the Home | Core guide | Kitchen cleaning | kitchen cleaning | `/guides/areas/kitchen-cleaning/` | New | Oven cleaning | None |
| Household Items & Fixtures | Core guide | Sofa cleaning | sofa cleaning | `/guides/items/sofa-cleaning/` | New | Sofa cleaning service | `/residential/sofa-cleaning/` |
| Household Items & Fixtures | Core guide | Toilet cleaning | toilet cleaning | `/guides/items/toilet-cleaning/` | New | Bathroom cleaning | None |
| Household Items & Fixtures | Core guide | Oven cleaning | oven cleaning | `/guides/items/oven-cleaning/` | New | Kitchen cleaning | None |
| Cleaning Situations | Core guide | Post-renovation cleaning | post-renovation cleaning | `/guides/situations/post-renovation-cleaning/` | New | Post-renovation cleaning service | `/residential/post-renovation-cleaning/` |
| Cleaning Situations | Core guide | Moving out cleaning | moving out cleaning | `/guides/situations/moving-out-cleaning/` | New | End of tenancy cleaning service | `/residential/end-of-tenancy-cleaning/` |
| Cleaning Methods | Core guide | Steam cleaning | steam cleaning | `/guides/methods/steam-cleaning/` | New | Sofa cleaning | None |
| Cleaning Methods | Core guide | Disinfecting cleaning | disinfecting cleaning | `/guides/methods/disinfecting-cleaning/` | New | Bleach safety | None |
| Cleaning Science & Safety | Core guide | Cleaning pH | cleaning pH | `/guides/science/cleaning-ph/` | New | Limescale removal | None |
| Cleaning Science & Safety | Core guide | Bleach safety | bleach safety | `/guides/science/bleach-safety/` | New | Disinfecting cleaning | None |

## Explicit Rejections

| Hub | Topic considered | Proposed URL | Status | Reason |
| --- | --- | --- | --- | --- |
| Surfaces & Materials | Cleaning marble with vinegar | `/guides/surfaces/cleaning-marble-with-vinegar/` | Reject | This is a sub-question owned by `/guides/surfaces/marble-cleaning/` and supported by `/guides/science/cleaning-ph/`. |
| Household Items & Fixtures | How often to clean a sofa | `/guides/items/how-often-to-clean-sofa/` | Reject | Frequency belongs inside `/guides/items/sofa-cleaning/`; a separate URL would cannibalise the canonical sofa guide. |
| Cleaning Problems | Limescale removal in Tampines | `/guides/problems/limescale-removal-tampines/` | Reject | Informational guides must not create thin location variants. Location intent belongs outside the knowledge base. |

## Expansion Rules

- Add a new guide only when it has a distinct primary entity, primary intent, unique knowledge, and reason to exist.
- Add keyword variants as sections on the canonical owner page when they share the same intent.
- Keep service, location, and pricing content outside `/guides/`.
- Add authoritative sources for chemical safety, disinfectants, mould, health-related claims, and material compatibility.
- Record rejected topics here or in `src/lib/guides.ts` so they do not reappear as thin pages later.
