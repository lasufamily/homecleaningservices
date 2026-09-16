export type FaqItem = {
  question: string;
  slug: string;
  answer: string;
};

function questionToSlug(question: string): string {
  return question.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const faqContent = [
  {
    question: "How do I choose a home cleaning service in Singapore?",
    answer:
      "Start with the cleaning scope you need, then compare providers by service type, availability, reviews, and whether they can handle your property type. Share photos or a checklist when asking for a quote so the scope is clear."
  },
  {
    question: "What is usually included in residential cleaning?",
    answer:
      "Residential cleaning usually covers dusting, wiping reachable surfaces, bathroom cleaning, kitchen cleaning, and floor vacuuming or mopping. Specialist work such as sofa, mattress, carpet, curtain, or marble care is usually quoted separately."
  },
  {
    question: "When should I book post-renovation cleaning?",
    answer:
      "Book post-renovation cleaning after major contractor work, defect fixes, drilling, and painting are complete. Cleaning too early often means fine dust returns when the next contractor continues work."
  },
  {
    question: "Do I need to prepare anything before cleaners arrive?",
    answer:
      "Clear loose items, valuables, fragile objects, and blocked access areas before the appointment. If you have priority rooms, stains, pet areas, or landlord requirements, share them before the cleaner starts."
  },
  {
    question: "Are cleaning quotes fixed or based on the job scope?",
    answer:
      "Most cleaning quotes depend on property size, service type, condition, access, timing, and any specialist tasks. A clear scope helps avoid mismatched expectations before the appointment."
  }
];

export const faqItems: FaqItem[] = faqContent.map((item) => ({
  ...item,
  slug: questionToSlug(item.question)
}));

export function getFaqBySlug(slug: string): FaqItem | undefined {
  return faqItems.find((item) => item.slug === slug);
}

export function getFaqSitemapPaths(): string[] {
  return ["/faq", ...faqItems.map((item) => `/faq/${item.slug}`)];
}
