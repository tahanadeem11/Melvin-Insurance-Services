export interface StateArea {
  slug: string;
  to: string;
  name: string;
  blurb: string;
  intro: string;
  popularServices: string[];
}

const allServiceSlugs = [
  "life-insurance",
  "annuities",
  "living-benefits",
  "wealth-accumulation-strategies",
  "retirement-planning-strategies",
  "financial-protection-strategies",
  "estate-planning-strategies",
  "trust-planning",
  "beneficiary-liquidity-planning",
];

function popularFor(index: number): string[] {
  const picks: string[] = [];
  for (let i = 0; i < 4; i++) {
    picks.push(allServiceSlugs[(index + i) % allServiceSlugs.length]!);
  }
  return picks;
}

const stateNames = [
  "Illinois",
  "Arkansas",
  "Mississippi",
  "California",
  "Colorado",
  "Georgia",
  "Maryland",
  "Minnesota",
  "Alabama",
  "Connecticut",
  "Texas",
  "Wisconsin",
  "Tennessee",
  "Virginia",
  "South Carolina",
  "North Carolina",
  "Florida",
  "Nevada",
  "Ohio",
  "Kentucky",
  "Michigan",
  "Delaware",
];

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export const states: StateArea[] = stateNames.map((name, index) => {
  const slug = slugify(name);
  return {
    slug,
    to: `/states/${slug}`,
    name,
    blurb: `Mr Melvin Insurance Services INC helps individuals and families in ${name} plan for life insurance, retirement, and estate needs.`,
    intro: `Wherever you are in ${name}, Mr Melvin Insurance Services INC is here to help you navigate life insurance, annuities, retirement planning, and estate strategies. We work with clients across ${name} to build a financial protection plan suited to their goals.`,
    popularServices: popularFor(index),
  };
});

export function getStateBySlug(slug: string) {
  return states.find((s) => s.slug === slug);
}
