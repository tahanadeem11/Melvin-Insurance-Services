import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileCheck,
  MapPin,
  PhoneCall,
  Phone,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import aboutImg from "@/assets/Melvin Hodges About.webp";
import heroBg1 from "@/assets/background/1.jpeg";
import heroBg2 from "@/assets/background/2.webp";
import heroBg3 from "@/assets/background/3.jpg";
import heroBg4 from "@/assets/background/4.jpg";
import heroBg5 from "@/assets/background/0x0.webp";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/CtaBanner";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { SectionBadge } from "@/components/Section";
import { site, stats, testimonials } from "@/lib/site";
import { services } from "@/lib/services";
import { states } from "@/lib/states";

const heroImages = [heroBg1, heroBg2, heroBg3, heroBg4, heroBg5];

const featuredServices = services.slice(0, 6);
const featuredStates = states.slice(0, 10);

const processSteps = [
  {
    icon: PhoneCall,
    title: "Call or Request a Consultation",
    text: "Reach us by phone or the contact form and tell us about your goals — we respond promptly and never pressure you.",
  },
  {
    icon: ClipboardCheck,
    title: "A Personalized Needs Review",
    text: "We take the time to understand your family, budget, and goals before recommending anything.",
  },
  {
    icon: FileCheck,
    title: "A Custom Plan & Quote",
    text: "We put together clear, honest options tailored to you — no confusing jargon, no pressure to decide on the spot.",
  },
  {
    icon: CheckCircle2,
    title: "Ongoing Support",
    text: "Your plan doesn't end at signing. We're here for reviews and updates as your life changes.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Life Insurance & Financial Planning Nationwide | Mr Melvin Insurance Services INC",
      },
      {
        name: "description",
        content:
          "Mr Melvin Insurance Services INC offers life insurance, annuities, retirement planning, and estate planning strategies to clients across 22 states. Call (866) 218-3854.",
      },
      {
        property: "og:title",
        content: "Mr Melvin Insurance Services INC — Life Insurance & Financial Planning",
      },
      {
        property: "og:description",
        content:
          "Personalized life insurance, annuities, retirement, and estate planning guidance — serving clients nationwide from Rockford, IL.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const checklist = [
  "Personalized Guidance Tailored to Your Goals",
  "Honest, Pressure-Free Conversations",
  "Nationwide Service Across 22 States",
  "Support From Your First Call Through Every Policy Review",
];

const differentiators = [
  {
    icon: BadgeCheck,
    title: "Personalized Planning",
    text: "Every recommendation starts with understanding your family, budget, and goals — not a one-size-fits-all policy.",
  },
  {
    icon: MapPin,
    title: "Nationwide Reach",
    text: "We serve clients across 22 states, bringing the same attentive service wherever you're located.",
  },
  {
    icon: Users,
    title: "Family-Focused Guidance",
    text: "From life insurance to beneficiary planning, we help protect the people who matter most to you.",
  },
  {
    icon: ShieldCheck,
    title: "Honest, Trusted Advice",
    text: "We explain your options clearly and never pressure you into a decision that isn't right for you.",
  },
];

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-charcoal">
        <HeroSlideshow images={heroImages} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/30" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
              Trusted Life Insurance & Financial Planning, Serving Clients Nationwide
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl xl:text-6xl">
              Protecting Your Family's Future, One Plan at a Time
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85">
              {site.name} helps individuals and families across the country plan for life insurance,
              retirement, and estate needs. We listen first, explain clearly, and never pressure you
              into a decision.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="font-display font-bold">
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent font-display font-bold text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <a
              href={site.phoneHref}
              className="mt-6 inline-flex items-center gap-2 font-display text-lg font-bold text-white transition-colors hover:text-accent"
            >
              <Phone className="h-5 w-5 text-accent" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-border bg-surface-muted p-6 text-center"
            >
              <div className="font-display text-4xl font-extrabold text-primary">{s.value}</div>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <img
            src={aboutImg}
            alt="Melvin Hodges, owner of Mr Melvin Insurance Services INC"
            width={506}
            height={510}
            loading="lazy"
            className="w-full rounded-lg object-cover shadow-card"
          />
          <div>
            <SectionBadge>About Us</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
              Personalized Insurance & Financial Guidance You Can Trust
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Led by {site.owner}, {site.name} provides honest guidance, clear explanations, and a
              plan built around your goals — not a one-size-fits-all policy.
            </p>
            <ul className="mt-7 space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="font-medium text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 font-display font-bold">
              <Link to="/about">
                More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Our Services</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
              Comprehensive Insurance & Financial Planning Solutions
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.slug}
                  className="flex flex-col rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-card"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-primary">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.excerpt}
                  </p>
                  <Link
                    to={s.to}
                    className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent hover:underline"
                  >
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="font-display font-bold">
              <Link to="/services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>How It Works</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
              A Simple, No-Pressure Process
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-lg border border-border bg-card p-7"
              >
                <span className="font-display text-5xl font-extrabold text-secondary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <step.icon className="mt-2 h-8 w-8 text-accent" />
                <h3 className="mt-4 font-display text-lg font-bold text-primary">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Why Choose Us</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
              Guidance You Can Rely On
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d) => (
              <div key={d.title} className="rounded-lg border border-border bg-card p-7">
                <d.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-5 font-display text-lg font-bold text-primary">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {featuredStates.map((s) => (
              <Link
                key={s.slug}
                to={s.to}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-muted px-5 py-2 text-sm font-semibold text-charcoal transition-colors hover:border-accent hover:text-accent"
              >
                <MapPin className="h-4 w-4" />
                {s.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/states"
              className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent hover:underline"
            >
              View All States We Serve
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Testimonials</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-lg border border-border bg-card p-8"
              >
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <span className="block font-display font-bold text-primary">{t.name}</span>
                  <span className="text-sm text-muted-foreground">{t.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
