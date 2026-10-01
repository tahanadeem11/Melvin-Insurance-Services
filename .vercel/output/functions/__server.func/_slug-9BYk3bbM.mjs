import { _ as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { O as ArrowRight, f as MapPin, l as Phone } from "./_libs/lucide-react.mjs";
import { h as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as getServiceBySlug, l as site, o as Button, r as states } from "./_ssr/router-D37Ke3bl.mjs";
import { a as Route } from "./_ssr/router-D37Ke3bl2.mjs";
import { t as CtaBanner } from "./_ssr/CtaBanner-BK6KplvJ.mjs";
import { n as SectionBadge, t as PageHero } from "./_ssr/Section-CDqsXsvI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-9BYk3bbM.js
var import_jsx_runtime = require_jsx_runtime();
function StateDetail() {
	const state = Route.useLoaderData();
	const popular = state.popularServices.map((slug) => getServiceBySlug(slug)).filter((s) => Boolean(s));
	const otherStates = states.filter((s) => s.slug !== state.slug).slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			badge: "States We Serve",
			title: `Life Insurance & Financial Planning in ${state.name}`,
			description: state.blurb
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionBadge, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mr-1 inline h-3.5 w-3.5" }), state.name] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl",
						children: "Personalized Guidance You Can Count On"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground",
						children: state.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "mt-8 font-display font-bold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							children: ["Get a Free Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.phoneHref,
						className: "mt-6 flex items-center justify-center gap-2 font-display text-lg font-bold text-charcoal transition-colors hover:text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-accent" }), site.phoneDisplay]
					})
				]
			})
		}),
		popular.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface-muted py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Popular Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl",
							children: ["Most Requested Services in ", state.name]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: popular.map((s) => {
							const Icon = s.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: s.to,
								className: "group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-base font-bold text-primary group-hover:text-accent",
									children: s.title
								})]
							}, s.slug);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent hover:underline",
							children: ["View All Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Other States" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl",
							children: "We Also Serve These States"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 flex flex-wrap items-center justify-center gap-3",
						children: otherStates.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
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
							children: ["View All States", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { StateDetail as component };
