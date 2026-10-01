import type { LucideIcon } from "lucide-react";
import {
  HeartHandshake,
  Landmark,
  HeartPulse,
  TrendingUp,
  CalendarClock,
  ShieldCheck,
  ScrollText,
  Handshake,
  Wallet,
} from "lucide-react";

import lifeInsuranceImg from "@/assets/services/Life Insurance.jpg";
import annuitiesImg from "@/assets/services/Annuities4.jpg";
import livingBenefitsImg from "@/assets/services/0x0.webp";
import wealthAccumulationImg from "@/assets/services/Annuities3.jpg";
import retirementPlanningImg from "@/assets/services/Retirement Planning & Strategies.jpg";
import financialProtectionImg from "@/assets/services/orig (2).jpg";
import estatePlanningImg from "@/assets/services/orig (1).jpg";
import trustPlanningImg from "@/assets/services/original.jpg";
import beneficiaryLiquidityImg from "@/assets/services/Retirement Planning & Strategies2.jpg";

export interface Service {
  slug: string;
  to: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  heroImage: string;
  icon: LucideIcon;
  intro: string;
  benefits: string[];
  whatsIncluded: string[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "life-insurance",
    to: "/services/life-insurance",
    title: "Life Insurance",
    shortTitle: "Life Insurance",
    excerpt:
      "Protect the people who depend on you with a life insurance policy built around your family's needs.",
    heroImage: lifeInsuranceImg,
    icon: HeartHandshake,
    intro:
      "Life insurance is one of the most important gifts you can leave your family, financial security when they need it most. We help you understand your options, from term to permanent coverage, and find a policy that fits your budget and your goals.",
    benefits: [
      "Financial protection for your loved ones when they need it most",
      "Coverage options tailored to your budget and life stage",
      "Plain-English guidance, no confusing insurance jargon",
      "Help comparing term, whole, and other policy types",
      "Ongoing support as your family's needs change",
    ],
    whatsIncluded: [
      "A personalized review of your coverage needs",
      "Comparison of policy types and coverage amounts",
      "Help applying for and understanding your policy",
      "Beneficiary designation guidance",
      "Regular policy check-ins as your life changes",
    ],
    faqs: [
      {
        q: "How much life insurance do I actually need?",
        a: "It depends on your income, debts, dependents, and goals. We'll walk through your specific situation and help you land on a coverage amount that makes sense, not a generic formula.",
      },
      {
        q: "What's the difference between term and permanent life insurance?",
        a: "Term life insurance covers you for a set period at a lower cost, while permanent policies last your lifetime and can build cash value. We'll help you decide which fits your goals and budget.",
      },
    ],
  },
  {
    slug: "annuities",
    to: "/services/annuities",
    title: "Annuities",
    shortTitle: "Annuities",
    excerpt:
      "Turn your savings into a reliable stream of income you can count on, now or in retirement.",
    heroImage: annuitiesImg,
    icon: Landmark,
    intro:
      "An annuity can provide predictable, steady income so you don't have to worry about outliving your savings. We help you understand how annuities work and whether one fits into your broader retirement and financial protection plan.",
    benefits: [
      "Predictable income you can count on in retirement",
      "Options to help protect against outliving your savings",
      "Guidance on how annuities fit with your other retirement accounts",
      "Clear explanations of fees, terms, and payout options",
      "No-pressure conversations focused on your goals",
    ],
    whatsIncluded: [
      "A review of your retirement income needs and timeline",
      "Explanation of annuity types and how each one works",
      "Help comparing payout structures and options",
      "Coordination with your broader retirement strategy",
      "Ongoing support and annual reviews",
    ],
    faqs: [
      {
        q: "Are annuities right for everyone?",
        a: "No, annuities are a good fit for some financial goals and not others. We'll have an honest conversation about whether one makes sense as part of your overall plan.",
      },
      {
        q: "When can I start receiving payments from an annuity?",
        a: "It depends on the type of annuity you choose. Some begin paying out immediately, while others grow for a period before payments start. We'll help you choose based on your timeline.",
      },
    ],
  },
  {
    slug: "living-benefits",
    to: "/services/living-benefits",
    title: "Living Benefits",
    shortTitle: "Living Benefits",
    excerpt:
      "Access a portion of your life insurance benefit while you're still living, in the event of a qualifying illness.",
    heroImage: livingBenefitsImg,
    icon: HeartPulse,
    intro:
      "Living benefits (also called accelerated benefits) let you access part of your life insurance death benefit while you're still alive, if you're diagnosed with a qualifying critical, chronic, or terminal illness. It's protection for the unexpected, not just the end of life.",
    benefits: [
      "Access funds when facing a serious health diagnosis",
      "Flexibility to use funds for medical bills, care, or daily expenses",
      "Added protection built into many modern life insurance policies",
      "Peace of mind for you and your family during difficult times",
      "Clear guidance on which policies include living benefits",
    ],
    whatsIncluded: [
      "A review of your current or prospective policy's living benefits",
      "Explanation of qualifying conditions and how claims work",
      "Help choosing a policy that includes living benefits",
      "Guidance on how living benefits affect your death benefit",
      "Answers to your questions in plain language",
    ],
    faqs: [
      {
        q: "What illnesses typically qualify for living benefits?",
        a: "Most policies cover critical illness (like cancer, heart attack, or stroke), chronic illness, and terminal illness, though the specifics vary by policy. We'll review the details with you.",
      },
      {
        q: "Does using living benefits reduce my life insurance payout?",
        a: "Typically, yes, accessing living benefits reduces the death benefit that would otherwise go to your beneficiaries. We'll make sure you understand the tradeoffs before you decide.",
      },
    ],
  },
  {
    slug: "wealth-accumulation-strategies",
    to: "/services/wealth-accumulation-strategies",
    title: "Wealth Accumulation Strategies",
    shortTitle: "Wealth Accumulation",
    excerpt:
      "Grow your assets over time with strategies designed around your risk tolerance and long-term goals.",
    heroImage: wealthAccumulationImg,
    icon: TrendingUp,
    intro:
      "Building wealth takes more than a single account or product, it takes a strategy. We help you look at the full picture and identify approaches to grow your assets steadily over time, aligned with your risk tolerance and timeline.",
    benefits: [
      "A clear, personalized approach to growing your assets",
      "Strategies aligned with your risk tolerance and goals",
      "Guidance that considers your full financial picture",
      "Regular reviews as your circumstances change",
      "Honest conversations about tradeoffs and timelines",
    ],
    whatsIncluded: [
      "A review of your current financial picture and goals",
      "Discussion of wealth accumulation tools and strategies",
      "Guidance on balancing growth with protection",
      "Coordination with your insurance and retirement planning",
      "Ongoing check-ins to keep your plan on track",
    ],
    faqs: [
      {
        q: "What's the difference between saving and wealth accumulation strategies?",
        a: "Saving typically means setting money aside, while wealth accumulation strategies are more intentional approaches to growing assets over time using the right mix of tools for your goals.",
      },
      {
        q: "Do I need a lot of money to start?",
        a: "No, wealth accumulation strategies can be built at any stage. The important part is starting with a plan that fits where you are today.",
      },
    ],
  },
  {
    slug: "retirement-planning-strategies",
    to: "/services/retirement-planning-strategies",
    title: "Retirement Planning & Strategies",
    shortTitle: "Retirement Planning",
    excerpt:
      "Plan for the retirement you want with strategies that balance income, growth, and protection.",
    heroImage: retirementPlanningImg,
    icon: CalendarClock,
    intro:
      "Retirement planning is about more than a savings number, it's about building a strategy that gives you confidence in your future income. We help you look at your timeline, goals, and resources to build a retirement plan that works for you.",
    benefits: [
      "A clear picture of your retirement income needs",
      "Strategies that balance growth, income, and protection",
      "Guidance on coordinating retirement accounts and insurance",
      "Planning built around your actual timeline and goals",
      "Ongoing reviews as retirement gets closer",
    ],
    whatsIncluded: [
      "A review of your current retirement savings and goals",
      "Discussion of income strategies for retirement",
      "Guidance on annuities, life insurance, and other tools",
      "Help identifying gaps in your current plan",
      "Regular check-ins to adjust your strategy over time",
    ],
    faqs: [
      {
        q: "When should I start retirement planning?",
        a: "The earlier the better, but it's never too late to build or adjust a plan. We work with clients at every stage, from early career to those approaching retirement.",
      },
      {
        q: "Can you help even if I already have a 401(k) or other retirement accounts?",
        a: "Absolutely, we look at your full picture, including existing accounts, and help identify how insurance and other strategies can round out your plan.",
      },
    ],
  },
  {
    slug: "financial-protection-strategies",
    to: "/services/financial-protection-strategies",
    title: "Financial Protection Strategies",
    shortTitle: "Financial Protection",
    excerpt:
      "Safeguard your income, family, and assets against the unexpected with the right protection in place.",
    heroImage: financialProtectionImg,
    icon: ShieldCheck,
    intro:
      "Life is unpredictable, but your financial plan doesn't have to be. We help you identify gaps in your protection, whether that's income, health, or family security, and put strategies in place to guard against the unexpected.",
    benefits: [
      "A clear view of where your financial plan may be exposed",
      "Strategies to protect your income and your family",
      "Coordination between insurance, savings, and other tools",
      "Peace of mind knowing you're prepared for the unexpected",
      "Honest, pressure-free guidance every step of the way",
    ],
    whatsIncluded: [
      "A review of your current protection and coverage gaps",
      "Discussion of life, health, and income protection options",
      "Guidance tailored to your family and financial situation",
      "Coordination with your broader financial plan",
      "Ongoing support as your protection needs evolve",
    ],
    faqs: [
      {
        q: "What does 'financial protection' actually cover?",
        a: "It can include life insurance, living benefits, disability considerations, and other strategies designed to protect your income and family against unexpected events.",
      },
      {
        q: "How do I know if I have enough protection in place?",
        a: "We'll review your current coverage, income, and family situation together and point out any gaps so you can make an informed decision.",
      },
    ],
  },
  {
    slug: "estate-planning-strategies",
    to: "/services/estate-planning-strategies",
    title: "Estate Planning Strategies",
    shortTitle: "Estate Planning",
    excerpt: "Plan ahead so your assets are protected and passed on the way you intend.",
    heroImage: estatePlanningImg,
    icon: ScrollText,
    intro:
      "Estate planning strategies help ensure your assets are protected during your lifetime and transferred according to your wishes. We help you understand how insurance and financial tools can support your estate planning goals.",
    benefits: [
      "Clarity on how your assets will be protected and transferred",
      "Strategies that support your broader estate planning goals",
      "Guidance on how life insurance can play a role in your estate",
      "Coordination with your attorney and other advisors",
      "Peace of mind for you and your family",
    ],
    whatsIncluded: [
      "A discussion of your estate planning goals",
      "Guidance on how insurance fits into your estate strategy",
      "Coordination with trust and beneficiary planning",
      "Support working alongside your legal counsel",
      "Regular reviews as your estate plan evolves",
    ],
    faqs: [
      {
        q: "Do you provide legal estate planning documents like wills?",
        a: "We focus on the financial and insurance side of estate planning and work alongside your attorney for legal documents like wills and powers of attorney.",
      },
      {
        q: "How does life insurance fit into estate planning?",
        a: "Life insurance can help cover estate taxes, provide liquidity, and ensure your beneficiaries receive funds quickly, without waiting on the probate process.",
      },
    ],
  },
  {
    slug: "trust-planning",
    to: "/services/trust-planning",
    title: "Trust Planning",
    shortTitle: "Trust Planning",
    excerpt: "Explore how a trust can help protect your assets and provide for your loved ones.",
    heroImage: trustPlanningImg,
    icon: Handshake,
    intro:
      "Trusts can be a powerful tool for protecting assets, avoiding probate, and providing for your loved ones on your terms. We help you understand how trust planning fits alongside your insurance and broader financial strategy.",
    benefits: [
      "Guidance on how a trust may fit into your financial plan",
      "Coordination between trust planning and life insurance",
      "Clear explanations of how trusts can protect your assets",
      "Support working alongside your attorney on trust documents",
      "A plan built around your family's specific needs",
    ],
    whatsIncluded: [
      "A discussion of your goals for asset protection and transfer",
      "Guidance on how life insurance can fund or support a trust",
      "Coordination with your legal counsel on trust documents",
      "Beneficiary and funding guidance",
      "Ongoing reviews as your family's needs change",
    ],
    faqs: [
      {
        q: "Do I need a trust if I already have a will?",
        a: "It depends on your goals, trusts can offer benefits like avoiding probate and more control over how assets are distributed. We'll discuss whether it makes sense for your situation.",
      },
      {
        q: "Can life insurance be placed inside a trust?",
        a: "Yes, and doing so can offer certain estate planning advantages. We'll help you understand the options alongside your attorney's guidance.",
      },
    ],
  },
  {
    slug: "beneficiary-liquidity-planning",
    to: "/services/beneficiary-liquidity-planning",
    title: "Beneficiary Liquidity Planning",
    shortTitle: "Beneficiary Liquidity",
    excerpt: "Make sure your beneficiaries have quick access to funds when they need them most.",
    heroImage: beneficiaryLiquidityImg,
    icon: Wallet,
    intro:
      "When a loved one passes away, timing matters. Beneficiary liquidity planning helps ensure your family has quick access to cash, for final expenses, debts, or day-to-day needs, without waiting on the probate process.",
    benefits: [
      "Faster access to funds for your beneficiaries when it matters most",
      "Reduced financial stress on your family during a difficult time",
      "Guidance on properly designating and updating beneficiaries",
      "Coordination with your life insurance and estate planning",
      "Confidence that your loved ones are financially prepared",
    ],
    whatsIncluded: [
      "A review of your current beneficiary designations",
      "Guidance on how life insurance provides liquidity for beneficiaries",
      "Help identifying and correcting outdated designations",
      "Coordination with your broader estate and trust planning",
      "Ongoing reviews as your family situation changes",
    ],
    faqs: [
      {
        q: "Why does liquidity matter for my beneficiaries?",
        a: "Many assets, like real estate or retirement accounts, can take time to access or liquidate. Life insurance proceeds are typically paid out quickly, giving your family immediate access to funds.",
      },
      {
        q: "How often should I review my beneficiary designations?",
        a: "We recommend reviewing them after major life events, marriage, divorce, a new child, or the loss of a loved one, and periodically as part of your regular plan reviews.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
