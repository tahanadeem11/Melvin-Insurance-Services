import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as CircleCheck, D as BadgeCheck, O as ArrowRight, S as ClipboardCheck, a as Star, f as MapPin, l as Phone, o as ShieldCheck, r as Users, u as PhoneCall, v as FileCheck } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as services, d as testimonials, l as site, o as Button, r as states, u as stats } from "./router-D37Ke3bl.mjs";
import { c as homeFaqs } from "./router-D37Ke3bl2.mjs";
import { t as CtaBanner } from "./CtaBanner-BK6KplvJ.mjs";
import { n as SectionBadge } from "./Section-CDqsXsvI.mjs";
import { t as Mr_Melvin_default } from "./Mr Melvin-BHmyz81h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-f67W7Q8Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var _1_default = "/assets/1-CiVy972c.jpeg";
var _2_default = "/assets/2-O_33daav.webp";
var _3_default = "/assets/3-DoMLVl1t.jpg";
var _4_default = "/assets/4-D_8grecB.jpg";
var _0x0_default = "/assets/0x0-gCagrRpV.webp";
var FADE_MS = 1200;
function HeroSlideshow({ images, interval = 5500 }) {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const [tick, setTick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (images.length <= 1) return;
		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % images.length);
			setTick((t) => t + 1);
		}, interval);
		return () => clearInterval(timer);
	}, [images.length, interval]);
	const zoomDuration = interval + FADE_MS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 -z-10 h-full w-full overflow-hidden",
		children: images.map((src, index) => {
			const isActive = index === activeIndex;
			const zoomDirection = index % 2 === 0 ? "in" : "out";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": !isActive,
				className: "absolute inset-0 h-full w-full transition-opacity ease-in-out",
				style: {
					opacity: isActive ? 1 : 0,
					transitionDuration: `${FADE_MS}ms`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: "",
					loading: index === 0 ? "eager" : "lazy",
					className: `h-full w-full object-cover ${isActive ? zoomDirection === "in" ? "animate-hero-ken-burns-in" : "animate-hero-ken-burns-out" : ""}`,
					style: isActive ? { animationDuration: `${zoomDuration}ms` } : void 0
				}, `${src}-${isActive ? tick : "idle"}`)
			}, src);
		})
	});
}
var heroImages = [
	_1_default,
	_2_default,
	_3_default,
	_4_default,
	_0x0_default
];
var featuredServices = services.slice(0, 6);
var featuredStates = states.slice(0, 10);
var processSteps = [
	{
		icon: PhoneCall,
		title: "Call or Request a Consultation",
		text: "Reach us by phone or the contact form and tell us about your goals, we respond promptly and never pressure you."
	},
	{
		icon: ClipboardCheck,
		title: "A Personalized Needs Review",
		text: "We take the time to understand your family, budget, and goals before recommending anything."
	},
	{
		icon: FileCheck,
		title: "A Custom Plan & Quote",
		text: "We put together clear, honest options tailored to you, no confusing jargon, no pressure to decide on the spot."
	},
	{
		icon: CircleCheck,
		title: "Ongoing Support",
		text: "Your plan doesn't end at signing. We're here for reviews and updates as your life changes."
	}
];
var checklist = [
	"Personalized Guidance Tailored to Your Goals",
	"Honest, Pressure-Free Conversations",
	"Nationwide Service Across 22 States",
	"Support From Your First Call Through Every Policy Review"
];
var differentiators = [
	{
		icon: BadgeCheck,
		title: "Personalized Planning",
		text: "Every recommendation starts with understanding your family, budget, and goals, not a one-size-fits-all policy."
	},
	{
		icon: MapPin,
		title: "Nationwide Reach",
		text: "We serve clients across 22 states, bringing the same attentive service wherever you're located."
	},
	{
		icon: Users,
		title: "Family-Focused Guidance",
		text: "From life insurance to beneficiary planning, we help protect the people who matter most to you."
	},
	{
		icon: ShieldCheck,
		title: "Honest, Trusted Advice",
		text: "We explain your options clearly and never pressure you into a decision that isn't right for you."
	}
];
var lifeStages = [
	{
		title: "Young Families",
		text: "Protect your income and your children's future with affordable life insurance that grows with your family.",
		to: "/services/life-insurance",
		cta: "Life Insurance"
	},
	{
		title: "Pre-Retirees",
		text: "Build a retirement income strategy with annuities and planning that helps you feel confident about the years ahead.",
		to: "/services/retirement-planning-strategies",
		cta: "Retirement Planning"
	},
	{
		title: "Business Owners and Professionals",
		text: "Grow and protect your assets with wealth accumulation strategies designed around your long-term goals.",
		to: "/services/wealth-accumulation-strategies",
		cta: "Wealth Strategies"
	},
	{
		title: "Legacy Planners",
		text: "Make sure your loved ones are cared for with estate, trust, and beneficiary planning that is clear and organized.",
		to: "/services/estate-planning-strategies",
		cta: "Estate Planning"
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-charcoal",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlideshow, { images: heroImages }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:py-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur",
								children: "Trusted Life Insurance & Financial Planning, Serving Clients Nationwide"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl xl:text-6xl",
								children: "Protecting Your Family's Future, One Plan at a Time"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 max-w-xl text-base leading-relaxed text-white/85",
								children: [site.name, " helps individuals and families across the country plan for life insurance, retirement, and estate needs. We listen first, explain clearly, and never pressure you into a decision."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "font-display font-bold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contact",
										children: ["Get a Free Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "border-white/40 bg-transparent font-display font-bold text-white hover:bg-white/10 hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										children: "Learn More"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.phoneHref,
								className: "mt-6 inline-flex items-center gap-2 font-display text-lg font-bold text-white transition-colors hover:text-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-accent" }), site.phoneDisplay]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-surface-muted p-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-4xl font-extrabold text-primary",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-medium text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-stretch gap-12 px-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-card lg:aspect-auto lg:min-h-[560px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Mr_Melvin_default,
						alt: "Melvin Hodges, owner of Mr Melvin Insurance Services INC",
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover object-top"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "About Us" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-[2.6rem]",
							children: "Personalized Insurance & Financial Guidance You Can Trust"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-1 w-16 rounded-full bg-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-lg font-medium leading-relaxed text-charcoal",
							children: [
								"Led by ",
								site.owner,
								", ",
								site.name,
								" provides honest guidance, clear explanations, and a plan built around your goals, not a one-size-fits-all policy."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted-foreground",
							children: "Whether you are protecting your family, planning for retirement, or building long-term financial security, we take the time to understand your situation, compare your options, and walk with you from your first call through every policy review."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-7 w-full space-y-3",
							children: checklist.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 rounded-lg border border-border bg-surface-muted px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-charcoal",
									children: item
								})]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "mt-8 font-display font-bold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/about",
								children: ["More About Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface-muted py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Our Services" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl",
								children: "Comprehensive Insurance & Financial Planning Solutions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-lg leading-relaxed text-muted-foreground",
								children: "From life insurance and annuities to retirement income and estate planning, we offer nine coverage and planning services so your family can protect what matters today and build lasting financial security for tomorrow."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 space-y-16 lg:space-y-24",
						children: featuredServices.map((s, i) => {
							const imageRight = i % 2 === 1;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: imageRight ? "lg:order-2" : "",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: s.heroImage,
										alt: s.title,
										loading: "lazy",
										className: "aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-sm font-extrabold uppercase tracking-[0.2em] text-accent",
										children: ["Service ", String(i + 1).padStart(2, "0")]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-lg leading-relaxed text-muted-foreground",
										children: s.excerpt
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-6 space-y-3",
										children: s.benefits.slice(0, 3).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-charcoal",
												children: b
											})]
										}, b))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										className: "mt-8 font-display font-bold uppercase",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: s.to,
											children: ["Learn More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										})
									})
								] })]
							}, s.slug);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "font-display font-bold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								children: ["View All Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "How It Works" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl",
							children: "A Simple, No-Pressure Process"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg leading-relaxed text-muted-foreground",
							children: "Getting the right life insurance or financial plan should not feel complicated. Our four-step process keeps you informed and in control from the first call to every annual review."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: processSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative rounded-lg border border-border bg-card p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-5xl font-extrabold text-secondary",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, { className: "mt-2 h-8 w-8 text-accent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-lg font-bold text-primary",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: step.text
							})
						]
					}, step.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface-muted py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Why Choose Us" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl",
								children: "Guidance You Can Rely On"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 text-lg leading-relaxed text-muted-foreground",
								children: [
									"Families choose ",
									site.name,
									" because we combine clear explanations, personalized recommendations, and genuine care for the people you want to protect."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: differentiators.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-card p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.icon, { className: "h-8 w-8 text-accent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-lg font-bold text-primary",
									children: d.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: d.text
								})
							]
						}, d.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-16 max-w-3xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-extrabold text-primary sm:text-3xl",
							children: "Life Insurance & Financial Planning in 22 States"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted-foreground",
							children: "Based in Rockford, Illinois, we help clients nationwide, including Texas, Georgia, Florida, California, and more. Choose your state to see how we can help."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap items-center justify-center gap-3",
						children: featuredStates.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: s.to,
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface-muted px-5 py-2 text-sm font-semibold text-charcoal transition-colors hover:border-accent hover:text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), s.name]
						}, s.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/states",
							className: "inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent hover:underline",
							children: ["View All States We Serve", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Who We Help" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl",
							children: "Planning for Every Stage of Life"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg leading-relaxed text-muted-foreground",
							children: "Whatever your situation, we build a plan around your goals, budget, and timeline."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: lifeStages.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: l.to,
						className: "group rounded-lg border border-border bg-card p-7 transition-shadow hover:shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-primary",
								children: l.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: l.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent group-hover:underline",
								children: [l.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					}, l.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface-muted py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Testimonials" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl",
						children: "What Our Clients Say"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 lg:grid-cols-3",
					children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "flex flex-col rounded-lg border border-border bg-card p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1 text-accent",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-5 flex-1 text-sm leading-relaxed text-muted-foreground",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-6 border-t border-border pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display font-bold text-primary",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted-foreground",
									children: t.location
								})]
							})
						]
					}, t.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "FAQ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl",
							children: "Common Questions About Life Insurance & Financial Planning"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-4",
						children: homeFaqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "group rounded-lg border border-border bg-card p-6 open:shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
								className: "cursor-pointer list-none font-display text-lg font-bold text-primary",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-muted-foreground",
								children: f.a
							})]
						}, f.q))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/faq",
							className: "inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent hover:underline",
							children: ["See All FAQs", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { Index as component };
