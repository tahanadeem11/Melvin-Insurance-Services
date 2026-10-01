import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Section-CDqsXsvI.js
var import_jsx_runtime = require_jsx_runtime();
function SectionBadge({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center rounded-full bg-secondary px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-primary",
		children
	});
}
function PageHero({ badge, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4 py-16 text-center sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: badge }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: description
				})
			]
		})
	});
}
//#endregion
export { SectionBadge as n, PageHero as t };
