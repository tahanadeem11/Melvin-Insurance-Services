import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as CircleCheck, O as ArrowRight } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as site, o as Button, u as stats } from "./router-D37Ke3bl.mjs";
import { t as CtaBanner } from "./CtaBanner-BK6KplvJ.mjs";
import { n as SectionBadge, t as PageHero } from "./Section-CDqsXsvI.mjs";
import { t as Mr_Melvin_default } from "./Mr Melvin-BHmyz81h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-e4wrdB74.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	{
		title: "Personalized Planning",
		text: "No cookie-cutter policies, every recommendation starts with understanding your family, goals, and budget."
	},
	{
		title: "Responsive Communication",
		text: "A real person answers the phone, and your questions get clear, timely answers."
	},
	{
		title: "Transparent Guidance",
		text: "We explain your options in plain language so you can make an informed decision with confidence."
	},
	{
		title: "Nationwide Licensing",
		text: "We're able to serve clients across 22 states, bringing the same attentive service wherever you are."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			badge: "About Us",
			title: "Personalized Insurance & Financial Guidance You Can Trust",
			description: `Led by ${site.owner}, ${site.name} provides honest guidance, clear explanations, and a plan built around your goals.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Our Story" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl",
						children: "A Simple Promise: Honest Guidance, Every Time"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-4 leading-relaxed text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [site.name, " was built on a simple promise: listen first, explain clearly, and never pressure a client into a decision that isn't right for them. That promise guides every conversation we have, whether it's about life insurance, retirement planning, or protecting a family's future."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From a single life insurance policy to a full estate and trust planning strategy, we treat every client's goals as our own priority, because building real financial security takes trust, not a sales pitch." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"We're headquartered at ",
								site.address,
								" and proudly serve clients across 22 states nationwide."
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "mt-8 font-display font-bold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							children: ["Get a Free Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: Mr_Melvin_default,
					alt: "Melvin Hodges, owner of Mr Melvin Insurance Services INC",
					width: 506,
					height: 510,
					loading: "lazy",
					className: "w-full rounded-lg object-cover shadow-card"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-card p-6 text-center",
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
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "What You Get" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl",
						children: "Standards We Never Compromise On"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2",
					children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 rounded-lg border border-border bg-card p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 h-6 w-6 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold text-primary",
							children: v.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: v.text
						})] })]
					}, v.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { AboutPage as component };
