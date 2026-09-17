# Homepage Why Choose Section Design

## Goal

Add a concise trust-building section directly below the homepage hero. Use the supplied screenshot as the layout reference while preserving the site's existing left-aligned editorial style.

## Section Structure

- Place the section immediately after the hero.
- Use the H2 `Why Choose Home Cleaning Services?`.
- Present four equal feature columns on large screens, two columns on medium screens, and one column on small screens.
- Keep the section heading, icons, feature headings, and body copy left-aligned.
- Keep the layout open rather than placing each feature inside a bordered card.

## Feature Content

1. `Affordable Pricing`
   - We believe professional cleaning should be accessible to everyone, so we offer affordable pricing and transparent quotes, with no hidden fees or surprises.
2. `Background Checked & Vetted Cleaners`
   - All of our cleaners go through rigorous vetting process to make sure your home is in safe hands.
3. `Local Experts`
   - We understand the cleaning industry in Singapore and care about getting the job right.
4. `Efficient Cleaning`
   - Jobs are completed by crews of 2-3 cleaners, allowing us to clean your premises quickly and thoroughly without compromising detail.

## Visual Treatment

- Use existing Tailwind tokens and the installed `@lucide/astro` icon library.
- Give each feature a familiar icon inside a compact pale-blue square, echoing the reference without copying its centered alignment.
- Use the site's blue for icons, dark ink for headings, and muted ink for descriptions.
- Use stable icon-container dimensions so the grid does not shift.
- Preserve the site's current typography, spacing scale, square-corner language, and white page background.

## Removal

Remove the complete homepage section headed `Cleaning scopes for lived-in Singapore homes.` and its supporting paragraph. No other homepage sections or content change.

## Responsive Behavior

- Mobile: one feature per row with comfortable vertical spacing.
- Tablet: two columns.
- Desktop: four columns with consistent gaps.
- Text must wrap naturally without overlap or horizontal scrolling.

## Verification

- Add a source regression test for the new H2, all four H3 headings, all four descriptions, four icons, and removal of the old section.
- Run the complete Vitest suite and production build.
- Inspect desktop and mobile screenshots to confirm alignment, spacing, wrapping, and absence of overlap.
