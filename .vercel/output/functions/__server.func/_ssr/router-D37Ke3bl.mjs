import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, m as Slot, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { T as CalendarClock, _ as Handshake, c as ScrollText, g as HeartHandshake, h as HeartPulse, i as TrendingUp, m as Landmark, n as Wallet, o as ShieldCheck } from "../_libs/lucide-react.mjs";
import { l as router_exports } from "./router-D37Ke3bl2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-vhFVQbUW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var site = {
	name: "Mr Melvin Insurance Services INC",
	owner: "Melvin Hodges",
	phoneDisplay: "(866) 218-3854",
	phoneHref: "tel:+18662183854",
	email: "mrmelvininsurance@gmail.com",
	emailHref: "mailto:mrmelvininsurance@gmail.com",
	hours: "Mon to Fri 9am to 7pm, Sat 9am to 5pm",
	address: "1935 S Alpine Rd #2n, Rockford, IL 61108",
	googleUrl: "https://www.google.com/search?q=Mr+Melvin+Insurance+Services+INC+Rockford+IL"
};
var stats = [
	{
		value: "9",
		label: "Insurance & Financial Services"
	},
	{
		value: "22",
		label: "States Served Nationwide"
	},
	{
		value: "1:1",
		label: "Personalized Planning Sessions"
	},
	{
		value: "100%",
		label: "Client-First Guidance"
	}
];
var testimonials = [
	{
		quote: "Melvin walked me through my life insurance options in plain English and helped me pick a policy that actually fit my family's budget. No pressure, just honest guidance.",
		name: "Denise W.",
		location: "Client in Illinois"
	},
	{
		quote: "We finally have a retirement plan that makes sense to us. The team took the time to explain annuities and living benefits without the jargon.",
		name: "Robert & Angela T.",
		location: "Clients in Texas"
	},
	{
		quote: "Setting up our trust and beneficiary planning felt overwhelming until we worked with Mr Melvin Insurance Services. Everything was explained clearly and handled professionally.",
		name: "Priya S.",
		location: "Client in Georgia"
	}
];
var faqs = [
	{
		q: "What states do you serve?",
		a: "We proudly serve clients nationwide, including Illinois, Arkansas, Mississippi, California, Colorado, Georgia, Maryland, Minnesota, Alabama, Connecticut, Texas, Wisconsin, Tennessee, Virginia, South Carolina, North Carolina, Florida, Nevada, Ohio, Kentucky, Michigan and Delaware."
	},
	{
		q: "What's the difference between life insurance and annuities?",
		a: "Life insurance provides a death benefit to your beneficiaries, while annuities are designed to provide you with a steady stream of income, often in retirement. We'll help you understand which, or which combination, fits your goals."
	},
	{
		q: "How do I get a quote or start a consultation?",
		a: "Call us at (866) 218-3854, email mrmelvininsurance@gmail.com, or fill out our contact form. We'll schedule a no-obligation conversation to understand your needs before recommending anything."
	},
	{
		q: "Do you help with retirement and estate planning, not just insurance?",
		a: "Yes. Alongside life insurance and annuities, we offer wealth accumulation strategies, retirement planning, financial protection strategies, estate planning, trust planning, and beneficiary liquidity planning."
	},
	{
		q: "What are your office hours?",
		a: "We're available Monday through Friday, 9am to 7pm, and Saturday, 9am to 5pm. Reach out any time during those hours and we'll respond promptly."
	},
	{
		q: "Is there a cost to speak with someone about my options?",
		a: "No, an initial conversation about your needs and goals is free and comes with no obligation to purchase anything."
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/services-2W5_stSf.js
var services = [
	{
		slug: "life-insurance",
		to: "/services/life-insurance",
		title: "Life Insurance",
		shortTitle: "Life Insurance",
		excerpt: "Protect the people who depend on you with a life insurance policy built around your family's needs.",
		heroImage: "/assets/Life%20Insurance-CxASg0Mn.jpg",
		icon: HeartHandshake,
		intro: "Life insurance is one of the most important gifts you can leave your family, financial security when they need it most. We help you understand your options, from term to permanent coverage, and find a policy that fits your budget and your goals.",
		benefits: [
			"Financial protection for your loved ones when they need it most",
			"Coverage options tailored to your budget and life stage",
			"Plain-English guidance, no confusing insurance jargon",
			"Help comparing term, whole, and other policy types",
			"Ongoing support as your family's needs change"
		],
		whatsIncluded: [
			"A personalized review of your coverage needs",
			"Comparison of policy types and coverage amounts",
			"Help applying for and understanding your policy",
			"Beneficiary designation guidance",
			"Regular policy check-ins as your life changes"
		],
		faqs: [{
			q: "How much life insurance do I actually need?",
			a: "It depends on your income, debts, dependents, and goals. We'll walk through your specific situation and help you land on a coverage amount that makes sense, not a generic formula."
		}, {
			q: "What's the difference between term and permanent life insurance?",
			a: "Term life insurance covers you for a set period at a lower cost, while permanent policies last your lifetime and can build cash value. We'll help you decide which fits your goals and budget."
		}]
	},
	{
		slug: "annuities",
		to: "/services/annuities",
		title: "Annuities",
		shortTitle: "Annuities",
		excerpt: "Turn your savings into a reliable stream of income you can count on, now or in retirement.",
		heroImage: "/assets/Annuities4-CosSaHMc.jpg",
		icon: Landmark,
		intro: "An annuity can provide predictable, steady income so you don't have to worry about outliving your savings. We help you understand how annuities work and whether one fits into your broader retirement and financial protection plan.",
		benefits: [
			"Predictable income you can count on in retirement",
			"Options to help protect against outliving your savings",
			"Guidance on how annuities fit with your other retirement accounts",
			"Clear explanations of fees, terms, and payout options",
			"No-pressure conversations focused on your goals"
		],
		whatsIncluded: [
			"A review of your retirement income needs and timeline",
			"Explanation of annuity types and how each one works",
			"Help comparing payout structures and options",
			"Coordination with your broader retirement strategy",
			"Ongoing support and annual reviews"
		],
		faqs: [{
			q: "Are annuities right for everyone?",
			a: "No, annuities are a good fit for some financial goals and not others. We'll have an honest conversation about whether one makes sense as part of your overall plan."
		}, {
			q: "When can I start receiving payments from an annuity?",
			a: "It depends on the type of annuity you choose. Some begin paying out immediately, while others grow for a period before payments start. We'll help you choose based on your timeline."
		}]
	},
	{
		slug: "living-benefits",
		to: "/services/living-benefits",
		title: "Living Benefits",
		shortTitle: "Living Benefits",
		excerpt: "Access a portion of your life insurance benefit while you're still living, in the event of a qualifying illness.",
		heroImage: "/assets/0x0-Bwjp1M1f.webp",
		icon: HeartPulse,
		intro: "Living benefits (also called accelerated benefits) let you access part of your life insurance death benefit while you're still alive, if you're diagnosed with a qualifying critical, chronic, or terminal illness. It's protection for the unexpected, not just the end of life.",
		benefits: [
			"Access funds when facing a serious health diagnosis",
			"Flexibility to use funds for medical bills, care, or daily expenses",
			"Added protection built into many modern life insurance policies",
			"Peace of mind for you and your family during difficult times",
			"Clear guidance on which policies include living benefits"
		],
		whatsIncluded: [
			"A review of your current or prospective policy's living benefits",
			"Explanation of qualifying conditions and how claims work",
			"Help choosing a policy that includes living benefits",
			"Guidance on how living benefits affect your death benefit",
			"Answers to your questions in plain language"
		],
		faqs: [{
			q: "What illnesses typically qualify for living benefits?",
			a: "Most policies cover critical illness (like cancer, heart attack, or stroke), chronic illness, and terminal illness, though the specifics vary by policy. We'll review the details with you."
		}, {
			q: "Does using living benefits reduce my life insurance payout?",
			a: "Typically, yes, accessing living benefits reduces the death benefit that would otherwise go to your beneficiaries. We'll make sure you understand the tradeoffs before you decide."
		}]
	},
	{
		slug: "wealth-accumulation-strategies",
		to: "/services/wealth-accumulation-strategies",
		title: "Wealth Accumulation Strategies",
		shortTitle: "Wealth Accumulation",
		excerpt: "Grow your assets over time with strategies designed around your risk tolerance and long-term goals.",
		heroImage: "/assets/Annuities3-_bHP9-dp.jpg",
		icon: TrendingUp,
		intro: "Building wealth takes more than a single account or product, it takes a strategy. We help you look at the full picture and identify approaches to grow your assets steadily over time, aligned with your risk tolerance and timeline.",
		benefits: [
			"A clear, personalized approach to growing your assets",
			"Strategies aligned with your risk tolerance and goals",
			"Guidance that considers your full financial picture",
			"Regular reviews as your circumstances change",
			"Honest conversations about tradeoffs and timelines"
		],
		whatsIncluded: [
			"A review of your current financial picture and goals",
			"Discussion of wealth accumulation tools and strategies",
			"Guidance on balancing growth with protection",
			"Coordination with your insurance and retirement planning",
			"Ongoing check-ins to keep your plan on track"
		],
		faqs: [{
			q: "What's the difference between saving and wealth accumulation strategies?",
			a: "Saving typically means setting money aside, while wealth accumulation strategies are more intentional approaches to growing assets over time using the right mix of tools for your goals."
		}, {
			q: "Do I need a lot of money to start?",
			a: "No, wealth accumulation strategies can be built at any stage. The important part is starting with a plan that fits where you are today."
		}]
	},
	{
		slug: "retirement-planning-strategies",
		to: "/services/retirement-planning-strategies",
		title: "Retirement Planning & Strategies",
		shortTitle: "Retirement Planning",
		excerpt: "Plan for the retirement you want with strategies that balance income, growth, and protection.",
		heroImage: "/assets/Retirement%20Planning%20_%20Strategies-CEr7-SUv.jpg",
		icon: CalendarClock,
		intro: "Retirement planning is about more than a savings number, it's about building a strategy that gives you confidence in your future income. We help you look at your timeline, goals, and resources to build a retirement plan that works for you.",
		benefits: [
			"A clear picture of your retirement income needs",
			"Strategies that balance growth, income, and protection",
			"Guidance on coordinating retirement accounts and insurance",
			"Planning built around your actual timeline and goals",
			"Ongoing reviews as retirement gets closer"
		],
		whatsIncluded: [
			"A review of your current retirement savings and goals",
			"Discussion of income strategies for retirement",
			"Guidance on annuities, life insurance, and other tools",
			"Help identifying gaps in your current plan",
			"Regular check-ins to adjust your strategy over time"
		],
		faqs: [{
			q: "When should I start retirement planning?",
			a: "The earlier the better, but it's never too late to build or adjust a plan. We work with clients at every stage, from early career to those approaching retirement."
		}, {
			q: "Can you help even if I already have a 401(k) or other retirement accounts?",
			a: "Absolutely, we look at your full picture, including existing accounts, and help identify how insurance and other strategies can round out your plan."
		}]
	},
	{
		slug: "financial-protection-strategies",
		to: "/services/financial-protection-strategies",
		title: "Financial Protection Strategies",
		shortTitle: "Financial Protection",
		excerpt: "Safeguard your income, family, and assets against the unexpected with the right protection in place.",
		heroImage: "/assets/orig%20(2)-013dIxeA.jpg",
		icon: ShieldCheck,
		intro: "Life is unpredictable, but your financial plan doesn't have to be. We help you identify gaps in your protection, whether that's income, health, or family security, and put strategies in place to guard against the unexpected.",
		benefits: [
			"A clear view of where your financial plan may be exposed",
			"Strategies to protect your income and your family",
			"Coordination between insurance, savings, and other tools",
			"Peace of mind knowing you're prepared for the unexpected",
			"Honest, pressure-free guidance every step of the way"
		],
		whatsIncluded: [
			"A review of your current protection and coverage gaps",
			"Discussion of life, health, and income protection options",
			"Guidance tailored to your family and financial situation",
			"Coordination with your broader financial plan",
			"Ongoing support as your protection needs evolve"
		],
		faqs: [{
			q: "What does 'financial protection' actually cover?",
			a: "It can include life insurance, living benefits, disability considerations, and other strategies designed to protect your income and family against unexpected events."
		}, {
			q: "How do I know if I have enough protection in place?",
			a: "We'll review your current coverage, income, and family situation together and point out any gaps so you can make an informed decision."
		}]
	},
	{
		slug: "estate-planning-strategies",
		to: "/services/estate-planning-strategies",
		title: "Estate Planning Strategies",
		shortTitle: "Estate Planning",
		excerpt: "Plan ahead so your assets are protected and passed on the way you intend.",
		heroImage: "/assets/orig%20(1)-CzXjWT0O.jpg",
		icon: ScrollText,
		intro: "Estate planning strategies help ensure your assets are protected during your lifetime and transferred according to your wishes. We help you understand how insurance and financial tools can support your estate planning goals.",
		benefits: [
			"Clarity on how your assets will be protected and transferred",
			"Strategies that support your broader estate planning goals",
			"Guidance on how life insurance can play a role in your estate",
			"Coordination with your attorney and other advisors",
			"Peace of mind for you and your family"
		],
		whatsIncluded: [
			"A discussion of your estate planning goals",
			"Guidance on how insurance fits into your estate strategy",
			"Coordination with trust and beneficiary planning",
			"Support working alongside your legal counsel",
			"Regular reviews as your estate plan evolves"
		],
		faqs: [{
			q: "Do you provide legal estate planning documents like wills?",
			a: "We focus on the financial and insurance side of estate planning and work alongside your attorney for legal documents like wills and powers of attorney."
		}, {
			q: "How does life insurance fit into estate planning?",
			a: "Life insurance can help cover estate taxes, provide liquidity, and ensure your beneficiaries receive funds quickly, without waiting on the probate process."
		}]
	},
	{
		slug: "trust-planning",
		to: "/services/trust-planning",
		title: "Trust Planning",
		shortTitle: "Trust Planning",
		excerpt: "Explore how a trust can help protect your assets and provide for your loved ones.",
		heroImage: "/assets/original-Drt9s6Es.jpg",
		icon: Handshake,
		intro: "Trusts can be a powerful tool for protecting assets, avoiding probate, and providing for your loved ones on your terms. We help you understand how trust planning fits alongside your insurance and broader financial strategy.",
		benefits: [
			"Guidance on how a trust may fit into your financial plan",
			"Coordination between trust planning and life insurance",
			"Clear explanations of how trusts can protect your assets",
			"Support working alongside your attorney on trust documents",
			"A plan built around your family's specific needs"
		],
		whatsIncluded: [
			"A discussion of your goals for asset protection and transfer",
			"Guidance on how life insurance can fund or support a trust",
			"Coordination with your legal counsel on trust documents",
			"Beneficiary and funding guidance",
			"Ongoing reviews as your family's needs change"
		],
		faqs: [{
			q: "Do I need a trust if I already have a will?",
			a: "It depends on your goals, trusts can offer benefits like avoiding probate and more control over how assets are distributed. We'll discuss whether it makes sense for your situation."
		}, {
			q: "Can life insurance be placed inside a trust?",
			a: "Yes, and doing so can offer certain estate planning advantages. We'll help you understand the options alongside your attorney's guidance."
		}]
	},
	{
		slug: "beneficiary-liquidity-planning",
		to: "/services/beneficiary-liquidity-planning",
		title: "Beneficiary Liquidity Planning",
		shortTitle: "Beneficiary Liquidity",
		excerpt: "Make sure your beneficiaries have quick access to funds when they need them most.",
		heroImage: "/assets/Retirement%20Planning%20_%20Strategies2-BwQrcPU2.jpg",
		icon: Wallet,
		intro: "When a loved one passes away, timing matters. Beneficiary liquidity planning helps ensure your family has quick access to cash, for final expenses, debts, or day-to-day needs, without waiting on the probate process.",
		benefits: [
			"Faster access to funds for your beneficiaries when it matters most",
			"Reduced financial stress on your family during a difficult time",
			"Guidance on properly designating and updating beneficiaries",
			"Coordination with your life insurance and estate planning",
			"Confidence that your loved ones are financially prepared"
		],
		whatsIncluded: [
			"A review of your current beneficiary designations",
			"Guidance on how life insurance provides liquidity for beneficiaries",
			"Help identifying and correcting outdated designations",
			"Coordination with your broader estate and trust planning",
			"Ongoing reviews as your family situation changes"
		],
		faqs: [{
			q: "Why does liquidity matter for my beneficiaries?",
			a: "Many assets, like real estate or retirement accounts, can take time to access or liquidate. Life insurance proceeds are typically paid out quickly, giving your family immediate access to funds."
		}, {
			q: "How often should I review my beneficiary designations?",
			a: "We recommend reviewing them after major life events, marriage, divorce, a new child, or the loss of a loved one, and periodically as part of your regular plan reviews."
		}]
	}
];
function getServiceBySlug(slug) {
	return services.find((s) => s.slug === slug);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/states-O64Lk27p.js
var allServiceSlugs = [
	"life-insurance",
	"annuities",
	"living-benefits",
	"wealth-accumulation-strategies",
	"retirement-planning-strategies",
	"financial-protection-strategies",
	"estate-planning-strategies",
	"trust-planning",
	"beneficiary-liquidity-planning"
];
function popularFor(index) {
	const picks = [];
	for (let i = 0; i < 4; i++) picks.push(allServiceSlugs[(index + i) % allServiceSlugs.length]);
	return picks;
}
var stateNames = [
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
	"Delaware"
];
function slugify(name) {
	return name.toLowerCase().replace(/\s+/g, "-");
}
var states = stateNames.map((name, index) => {
	const slug = slugify(name);
	return {
		slug,
		to: `/states/${slug}`,
		name,
		blurb: `Mr Melvin Insurance Services INC helps individuals and families in ${name} plan for life insurance, retirement, and estate needs.`,
		intro: `Wherever you are in ${name}, Mr Melvin Insurance Services INC is here to help you navigate life insurance, annuities, retirement planning, and estate strategies. We work with clients across ${name} to build a financial protection plan suited to their goals.`,
		popularServices: popularFor(index)
	};
});
function getStateBySlug(slug) {
	return states.find((s) => s.slug === slug);
}
//#endregion
export { services as a, faqs as c, testimonials as d, getServiceBySlug as i, site as l, getStateBySlug as n, Button as o, states as r, cn as s, router_exports as t, stats as u };
