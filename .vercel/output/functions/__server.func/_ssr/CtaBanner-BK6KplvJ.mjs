import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as CalendarCheck, l as Phone } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as site, o as Button } from "./router-D37Ke3bl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CtaBanner-BK6KplvJ.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 py-16 text-center sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-extrabold leading-tight sm:text-4xl",
					children: "Let's Plan for Your Family's Future: Reach Out Today"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto mt-4 max-w-2xl text-primary-foreground/80",
					children: [
						"Have questions about life insurance, retirement, or estate planning? Call",
						" ",
						site.phoneDisplay,
						" or schedule a free consultation now."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "secondary",
						className: "font-display font-bold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.phoneHref,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), "Call Us Now"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "border-primary-foreground/40 bg-transparent font-display font-bold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "h-4 w-4" }), "Schedule a Consultation"]
						})
					})]
				})
			]
		})
	});
}
//#endregion
export { CtaBanner as t };
