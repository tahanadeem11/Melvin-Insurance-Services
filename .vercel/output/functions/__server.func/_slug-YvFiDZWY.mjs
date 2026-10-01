import { _ as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { C as CircleCheck, O as ArrowRight, l as Phone, x as ClipboardList } from "./_libs/lucide-react.mjs";
import { h as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as services, l as site, o as Button } from "./_ssr/router-D37Ke3bl.mjs";
import { o as Route$2 } from "./_ssr/router-D37Ke3bl2.mjs";
import { t as CtaBanner } from "./_ssr/CtaBanner-BK6KplvJ.mjs";
import { n as SectionBadge, t as PageHero } from "./_ssr/Section-CDqsXsvI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-YvFiDZWY.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetail() {
	const service = Route$2.useLoaderData();
	const Icon = service.icon;
	const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			badge: "Our Services",
			title: service.title,
			description: service.excerpt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-start gap-12 px-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-lg shadow-card lg:sticky lg:top-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: service.heroImage,
						alt: service.title,
						loading: "lazy",
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute bottom-4 left-4 inline-flex h-16 w-16 items-center justify-center rounded-full border-4 border-card bg-primary text-primary-foreground shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-8 w-8" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Overview" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl",
						children: [service.shortTitle, " Done Right, Every Time"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 leading-relaxed text-muted-foreground",
						children: service.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-8 font-display text-lg font-bold text-primary",
						children: "Why Choose Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: service.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-charcoal",
								children: b
							})]
						}, b))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "mt-8 font-display font-bold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							children: ["Get a Free Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface-muted py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "What's Included" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl",
						children: [
							"What Our ",
							service.shortTitle,
							" Service Covers"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2",
					children: service.whatsIncluded.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3 rounded-lg border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium text-charcoal",
							children: item
						})]
					}, item))
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "FAQs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl",
							children: ["Common Questions About ", service.shortTitle]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-4",
						children: service.faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-card p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-bold text-primary",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: f.a
							})]
						}, f.q))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-center text-sm text-muted-foreground",
						children: [
							"Have another question? Call us any time at",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.phoneHref,
								className: "inline-flex items-center gap-1 font-semibold text-accent hover:underline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), site.phoneDisplay]
							})
						]
					})
				]
			})
		}),
		related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-surface-muted py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Related Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl",
						children: "You Might Also Need"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-3",
					children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: r.to,
						className: "group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-bold text-primary group-hover:text-accent",
							children: r.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: r.excerpt
						})]
					}, r.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { ServiceDetail as component };
