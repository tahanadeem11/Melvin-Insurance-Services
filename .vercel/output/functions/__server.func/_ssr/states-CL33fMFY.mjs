import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { O as ArrowRight, f as MapPin } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as states } from "./router-D37Ke3bl.mjs";
import { t as CtaBanner } from "./CtaBanner-BK6KplvJ.mjs";
import { t as PageHero } from "./Section-CDqsXsvI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/states-CL33fMFY.js
var import_jsx_runtime = require_jsx_runtime();
function StatesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			badge: "States We Serve",
			title: "Proudly Serving Clients Nationwide",
			description: "Based in Rockford, IL, Mr Melvin Insurance Services INC helps individuals and families across 22 states with life insurance, retirement, and estate planning. Find your state below."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: states.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-col rounded-lg border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 font-display text-lg font-bold text-primary",
								children: s.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
								children: s.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: s.to,
								className: "mt-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent hover:underline",
								children: ["View Details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					}, s.slug))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { StatesIndex as component };
