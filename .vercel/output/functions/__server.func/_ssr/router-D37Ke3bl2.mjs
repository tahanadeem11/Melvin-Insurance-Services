import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { b as Clock, d as Menu, f as MapPin, l as Phone, p as Mail, t as X, w as ChevronDown, y as ExternalLink } from "../_libs/lucide-react.mjs";
import { A as notFound, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as services, c as faqs, i as getServiceBySlug, l as site, n as getStateBySlug, o as Button, r as states, s as cn } from "./router-D37Ke3bl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D37Ke3bl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-B43D72_G.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var logo_icon_default = "/assets/logo-icon-B_RWCH4x.png";
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var navLinkClass = "px-1 py-2 text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors hover:text-accent";
function Dropdown({ label, items, viewAllTo, viewAllLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: `${navLinkClass} inline-flex items-center gap-1`,
			children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "invisible absolute left-0 top-full z-50 w-[520px] translate-y-1 rounded-md border border-border bg-card p-4 opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-x-4 gap-y-1",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "block rounded px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-surface-muted hover:text-primary",
					children: item.label
				}, item.to))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 border-t border-border pt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: viewAllTo,
					className: "block rounded px-3 py-2 text-sm font-bold text-accent transition-colors hover:bg-surface-muted",
					children: viewAllLabel
				})
			})]
		})]
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const serviceItems = services.map((s) => ({
		to: s.to,
		label: s.title
	}));
	const stateItems = states.map((s) => ({
		to: s.to,
		label: s.name
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-primary text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-xs sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-x-6 gap-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.phoneHref,
						className: "inline-flex items-center gap-2 hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 shrink-0" }), site.phoneDisplay]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.emailHref,
						className: "inline-flex items-center gap-2 hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 shrink-0" }), site.email]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 shrink-0" }), site.hours]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-border bg-background/95 backdrop-blur",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-w-0 items-center gap-2.5 sm:gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_icon_default,
							alt: `${site.name} logo`,
							className: "h-11 w-auto shrink-0 sm:h-12",
							width: 610,
							height: 409
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex min-w-0 flex-col leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate font-display text-sm font-extrabold uppercase tracking-tight text-primary sm:text-base",
								children: "Mr Melvin"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate font-display text-[11px] font-bold uppercase tracking-[0.14em] text-charcoal sm:text-xs",
								children: "Insurance Services"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-7 lg:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: navLinkClass,
								activeProps: { className: `${navLinkClass} text-primary` },
								activeOptions: { exact: true },
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: navLinkClass,
								children: "About Us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dropdown, {
								label: "Services",
								items: serviceItems,
								viewAllTo: "/services",
								viewAllLabel: "View All Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dropdown, {
								label: "States We Serve",
								items: stateItems,
								viewAllTo: "/states",
								viewAllLabel: "View All States"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: navLinkClass,
								children: "Contact Us"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "hidden font-display font-bold sm:inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: site.phoneHref,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
										"Call Now: ",
										site.phoneDisplay
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "icon",
								className: "sm:hidden",
								"aria-label": "Call now",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: site.phoneHref,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
								open,
								onOpenChange: setOpen,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "icon",
										className: "lg:hidden",
										"aria-label": "Open menu",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
									side: "right",
									className: "w-[85vw] max-w-sm overflow-y-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
										className: "mt-8 flex flex-col gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/",
												onClick: () => setOpen(false),
												className: "py-3 font-display text-base font-bold",
												children: "Home"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/about",
												onClick: () => setOpen(false),
												className: "py-3 font-display text-base font-bold",
												children: "About Us"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
												type: "multiple",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
													value: "services",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
														className: "font-display text-base font-bold",
														children: "Services"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContent, {
														className: "flex flex-col gap-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															to: "/services",
															onClick: () => setOpen(false),
															className: "py-2 text-sm font-medium",
															children: "All Services"
														}), serviceItems.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															to: i.to,
															onClick: () => setOpen(false),
															className: "py-2 text-sm font-medium",
															children: i.label
														}, i.to))]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
													value: "states",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
														className: "font-display text-base font-bold",
														children: "States We Serve"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContent, {
														className: "flex flex-col gap-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															to: "/states",
															onClick: () => setOpen(false),
															className: "py-2 text-sm font-medium",
															children: "All States We Serve"
														}), stateItems.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															to: i.to,
															onClick: () => setOpen(false),
															className: "py-2 text-sm font-medium",
															children: i.label
														}, i.to))]
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/contact",
												onClick: () => setOpen(false),
												className: "py-3 font-display text-base font-bold",
												children: "Contact Us"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/faq",
												onClick: () => setOpen(false),
												className: "py-3 font-display text-base font-bold",
												children: "FAQ's"
											})
										]
									})
								})]
							})
						]
					})
				]
			})
		})]
	});
}
var footer_logo_default = "/assets/footer%20logo-D_ZRmq1e.png";
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-charcoal text-charcoal-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: footer_logo_default,
						alt: `${site.name} logo`,
						className: "h-28 w-auto",
						loading: "lazy",
						width: 555,
						height: 449
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-charcoal-foreground/70",
						children: "Personalized life insurance, retirement, and estate planning guidance from our Rockford, IL office, serving clients nationwide."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.googleUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-charcoal-foreground transition-colors hover:text-accent",
						children: ["Find Us on Google", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-base font-bold uppercase tracking-wide",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-charcoal-foreground/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-accent",
							children: "Home"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-accent",
							children: "About Us"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-accent",
							children: "Contact Us"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faq",
							className: "hover:text-accent",
							children: "FAQ's"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-base font-bold uppercase tracking-wide",
					children: "States We Serve"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-charcoal-foreground/70",
					children: [states.slice(0, 8).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: s.to,
						className: "hover:text-accent",
						children: s.name
					}) }, s.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/states",
						className: "font-semibold text-accent hover:underline",
						children: "View All States"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-base font-bold uppercase tracking-wide",
					children: "Our Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-charcoal-foreground/70",
					children: [services.slice(0, 8).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: s.to,
						className: "hover:text-accent",
						children: s.title
					}) }, s.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						className: "font-semibold text-accent hover:underline",
						children: "View All Services"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-base font-bold uppercase tracking-wide",
					children: "Contact Info"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm text-charcoal-foreground/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.phoneHref,
								className: "hover:text-accent",
								children: site.phoneDisplay
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.emailHref,
								className: "break-all hover:text-accent",
								children: site.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.address })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.hours })]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-charcoal-foreground/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-5 text-center text-xs text-charcoal-foreground/60",
				children: [
					"Copyright © 2026 All Rights Reserved. Powered by",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "http://nextlevelrankers.com/",
						target: "_blank",
						rel: "noreferrer",
						className: "font-semibold text-charcoal-foreground/80 hover:text-accent",
						children: "NEXT LEVEL RANKERS"
					})
				]
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-extrabold text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				property: "og:site_name",
				content: "MR MELVIN INSURANCE SERVICES INC"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Hind:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "InsuranceAgency",
				name: "Mr Melvin Insurance Services INC",
				telephone: "+1-866-218-3854",
				email: "mrmelvininsurance@gmail.com",
				openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-17:00"],
				address: {
					"@type": "PostalAddress",
					streetAddress: "1935 S Alpine Rd #2n",
					addressLocality: "Rockford",
					addressRegion: "IL",
					postalCode: "61108",
					addressCountry: "US"
				},
				areaServed: [
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
				]
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col font-sans",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	});
}
var homeFaqs = faqs.slice(0, 6);
var $$splitComponentImporter$7 = () => import("./routes-f67W7Q8Y.mjs");
var Route$7 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Life Insurance & Financial Planning Nationwide | Mr Melvin Insurance Services INC" },
			{
				name: "description",
				content: "Mr Melvin Insurance Services INC offers life insurance, annuities, living benefits, retirement planning, and estate planning to families in 22 states. Honest, personalized guidance from Rockford, IL. Call (866) 218-3854 for a free consultation."
			},
			{
				property: "og:title",
				content: "Mr Melvin Insurance Services INC | Life Insurance & Financial Planning"
			},
			{
				property: "og:description",
				content: "Personalized life insurance, annuities, retirement, and estate planning guidance, serving clients nationwide from Rockford, IL."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@graph": [{
					"@type": "InsuranceAgency",
					name: site.name,
					founder: site.owner,
					telephone: "+18662183854",
					email: site.email,
					address: {
						"@type": "PostalAddress",
						streetAddress: "1935 S Alpine Rd #2n",
						addressLocality: "Rockford",
						addressRegion: "IL",
						postalCode: "61108",
						addressCountry: "US"
					},
					areaServed: "United States",
					openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-17:00"],
					description: "Life insurance, annuities, living benefits, retirement planning, and estate planning for families nationwide."
				}, {
					"@type": "FAQPage",
					mainEntity: homeFaqs.map((f) => ({
						"@type": "Question",
						name: f.q,
						acceptedAnswer: {
							"@type": "Answer",
							text: f.a
						}
					}))
				}]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./about-e4wrdB74.mjs");
var Route$6 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Us | Mr Melvin Insurance Services INC | Rockford, IL" },
			{
				name: "description",
				content: "Meet Mr Melvin Insurance Services INC, led by Melvin Hodges. Personalized life insurance, retirement, and estate planning guidance for clients nationwide."
			},
			{
				property: "og:title",
				content: "About Mr Melvin Insurance Services INC"
			},
			{
				property: "og:description",
				content: "Personalized life insurance, retirement, and estate planning guidance from our Rockford, IL office, serving clients across 22 states."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-Clno8bOE.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Us | Mr Melvin Insurance Services INC | Rockford, IL" },
			{
				name: "description",
				content: "Get a free consultation for life insurance, annuities, retirement or estate planning. Call (866) 218-3854, email us, or send a message, serving clients nationwide."
			},
			{
				property: "og:title",
				content: "Contact Mr Melvin Insurance Services INC"
			},
			{
				property: "og:description",
				content: "Reach out for a free consultation, serving clients across 22 states nationwide."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./faq-C9doF4YS.mjs");
var Route$4 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: "Frequently Asked Questions | Mr Melvin Insurance Services INC | Rockford, IL" },
			{
				name: "description",
				content: "Answers to common questions about life insurance, annuities, states served, and how to get started with Mr Melvin Insurance Services INC."
			},
			{
				property: "og:title",
				content: "FAQs | Mr Melvin Insurance Services INC"
			},
			{
				property: "og:description",
				content: "Common questions about life insurance, annuities, states served, and getting a consultation."
			},
			{
				property: "og:url",
				content: "/faq"
			}
		],
		links: [{
			rel: "canonical",
			href: "/faq"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./services-CXh-zw_-.mjs");
var Route$3 = createFileRoute("/services/")({
	head: () => ({
		meta: [
			{ title: "Our Services | Life Insurance, Annuities & Financial Planning | Mr Melvin Insurance Services INC" },
			{
				name: "description",
				content: "From life insurance and annuities to retirement, estate, and trust planning, explore all 9 services offered by Mr Melvin Insurance Services INC, serving clients nationwide."
			},
			{
				property: "og:title",
				content: "Services | Mr Melvin Insurance Services INC"
			},
			{
				property: "og:description",
				content: "Life insurance, annuities, retirement, and estate planning strategies for clients nationwide."
			},
			{
				property: "og:url",
				content: "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("../_slug-YvFiDZWY.mjs");
var Route$2 = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = getServiceBySlug(params.slug);
		if (!service) throw notFound();
		return service;
	},
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		return {
			meta: [
				{ title: `${loaderData.title} | Mr Melvin Insurance Services INC | Nationwide` },
				{
					name: "description",
					content: loaderData.excerpt
				},
				{
					property: "og:title",
					content: `${loaderData.title} | Mr Melvin Insurance Services INC`
				},
				{
					property: "og:description",
					content: loaderData.excerpt
				},
				{
					property: "og:url",
					content: loaderData.to
				}
			],
			links: [{
				rel: "canonical",
				href: loaderData.to
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./states-CL33fMFY.mjs");
var Route$1 = createFileRoute("/states/")({
	head: () => ({
		meta: [
			{ title: "States We Serve | Nationwide Life Insurance & Financial Planning | Mr Melvin Insurance Services INC" },
			{
				name: "description",
				content: "Mr Melvin Insurance Services INC proudly serves clients in 22 states nationwide with life insurance, annuities, retirement planning, and estate planning strategies."
			},
			{
				property: "og:title",
				content: "States We Serve | Mr Melvin Insurance Services INC"
			},
			{
				property: "og:description",
				content: "22 states served nationwide, see if we cover your state."
			},
			{
				property: "og:url",
				content: "/states"
			}
		],
		links: [{
			rel: "canonical",
			href: "/states"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-9BYk3bbM.mjs");
var Route = createFileRoute("/states/$slug")({
	loader: ({ params }) => {
		const state = getStateBySlug(params.slug);
		if (!state) throw notFound();
		return state;
	},
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		return {
			meta: [
				{ title: `Life Insurance & Financial Planning in ${loaderData.name} | Mr Melvin Insurance Services INC` },
				{
					name: "description",
					content: loaderData.blurb
				},
				{
					property: "og:title",
					content: `Serving ${loaderData.name} | Mr Melvin Insurance Services INC`
				},
				{
					property: "og:description",
					content: loaderData.blurb
				},
				{
					property: "og:url",
					content: loaderData.to
				}
			],
			links: [{
				rel: "canonical",
				href: loaderData.to
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var AboutRoute = Route$6.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$8
});
var ContactRoute = Route$5.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$8
});
var FaqRoute = Route$4.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$8
});
var ServicesIndexRoute = Route$3.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$8
});
var ServicesSlugRoute = Route$2.update({
	id: "/services/$slug",
	path: "/services/$slug",
	getParentRoute: () => Route$8
});
var StatesIndexRoute = Route$1.update({
	id: "/states/",
	path: "/states/",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	FaqRoute,
	ServicesSlugRoute,
	StatesSlugRoute: Route.update({
		id: "/states/$slug",
		path: "/states/$slug",
		getParentRoute: () => Route$8
	}),
	ServicesIndexRoute,
	StatesIndexRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { Route as a, homeFaqs as c, AccordionTrigger as i, router_exports as l, AccordionContent as n, Route$2 as o, AccordionItem as r, getRouter as s, Accordion as t };
