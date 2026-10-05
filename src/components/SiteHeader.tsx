import { Link } from "@tanstack/react-router";
import { Mail, Menu, Phone, Clock, ChevronDown, CalendarCheck } from "lucide-react";
import { useState } from "react";
import logoIcon from "@/assets/logo-icon.png";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { states } from "@/lib/states";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navLinkClass =
  "px-1 py-2 text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors hover:text-accent";

function Dropdown({
  label,
  items,
  viewAllTo,
  viewAllLabel,
}: {
  label: string;
  items: { to: string; label: string }[];
  viewAllTo: string;
  viewAllLabel: string;
}) {
  return (
    <div className="group relative">
      <button type="button" className={`${navLinkClass} inline-flex items-center gap-1`}>
        {label}
        <ChevronDown className="h-4 w-4" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-[520px] translate-y-1 rounded-md border border-border bg-card p-4 opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-surface-muted hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-2 border-t border-border pt-2">
          <Link
            to={viewAllTo}
            className="block rounded px-3 py-2 text-sm font-bold text-accent transition-colors hover:bg-surface-muted"
          >
            {viewAllLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const serviceItems = services.map((s) => ({ to: s.to, label: s.title }));
  const stateItems = states.map((s) => ({ to: s.to, label: s.name }));

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-xs sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:underline">
              <Phone className="h-3.5 w-3.5 shrink-0" />
              {site.phoneDisplay}
            </a>
            <a href={site.emailHref} className="inline-flex items-center gap-2 hover:underline">
              <Mail className="h-3.5 w-3.5 shrink-0" />
              {site.email}
            </a>
          </div>
          <span className="inline-flex items-center gap-2 font-semibold">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            {site.hours}
          </span>
        </div>
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between">
          <Link to="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <img
              src={logoIcon}
              alt={`${site.name} logo`}
              className="h-11 w-auto shrink-0 sm:h-12"
              width={610}
              height={409}
            />
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate font-display text-sm font-extrabold uppercase tracking-tight text-primary sm:text-base">
                Mr Melvin
              </span>
              <span className="truncate font-display text-[11px] font-bold uppercase tracking-[0.14em] text-charcoal sm:text-xs">
                Insurance Services
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <Link
              to="/"
              className={navLinkClass}
              activeProps={{ className: `${navLinkClass} text-primary` }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>
            <Link to="/about" className={navLinkClass}>
              About Us
            </Link>
            <Dropdown
              label="Services"
              items={serviceItems}
              viewAllTo="/services"
              viewAllLabel="View All Services"
            />
            <Dropdown
              label="States We Serve"
              items={stateItems}
              viewAllTo="/states"
              viewAllLabel="View All States"
            />
            <Link to="/contact" className={navLinkClass}>
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hidden font-display font-bold xl:inline-flex"
            >
              <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="h-4 w-4" />
                Book Appointment
              </a>
            </Button>
            <Button asChild size="lg" className="hidden font-display font-bold sm:inline-flex">
              <a href={site.phoneHref}>
                <Phone className="h-4 w-4" />
                Call Now: {site.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="icon" className="sm:hidden" aria-label="Call now">
              <a href={site.phoneHref}>
                <Phone className="h-4 w-4" />
              </a>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm overflow-y-auto">
                <nav className="mt-8 flex flex-col gap-1">
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="py-3 font-display text-base font-bold"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setOpen(false)}
                    className="py-3 font-display text-base font-bold"
                  >
                    About Us
                  </Link>
                  <Accordion type="multiple">
                    <AccordionItem value="services">
                      <AccordionTrigger className="font-display text-base font-bold">
                        Services
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-1">
                        <Link
                          to="/services"
                          onClick={() => setOpen(false)}
                          className="py-2 text-sm font-medium"
                        >
                          All Services
                        </Link>
                        {serviceItems.map((i) => (
                          <Link
                            key={i.to}
                            to={i.to}
                            onClick={() => setOpen(false)}
                            className="py-2 text-sm font-medium"
                          >
                            {i.label}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="states">
                      <AccordionTrigger className="font-display text-base font-bold">
                        States We Serve
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-1">
                        <Link
                          to="/states"
                          onClick={() => setOpen(false)}
                          className="py-2 text-sm font-medium"
                        >
                          All States We Serve
                        </Link>
                        {stateItems.map((i) => (
                          <Link
                            key={i.to}
                            to={i.to}
                            onClick={() => setOpen(false)}
                            className="py-2 text-sm font-medium"
                          >
                            {i.label}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="py-3 font-display text-base font-bold"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/faq"
                    onClick={() => setOpen(false)}
                    className="py-3 font-display text-base font-bold"
                  >
                    FAQ's
                  </Link>
                  <Button asChild size="lg" className="mt-4 font-display font-bold">
                    <a
                      href={site.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      <CalendarCheck className="h-4 w-4" />
                      Book Appointment
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
