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
import aboutImg from "@/assets/Mr Melvin.jpg";
import heroBg1 from "@/assets/background/1.jpeg";
import heroBg2 from "@/assets/background/2.webp";
import heroBg3 from "@/assets/background/3.jpg";
import heroBg4 from "@/assets/background/4.jpg";
import heroBg5 from "@/assets/background/0x0.webp";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/CtaBanner";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { SectionBadge } from "@/components/Section";
import { faqs, site, stats, testimonials } from "@/lib/site";
import { services } from "@/lib/services";
import { states } from "@/lib/states";

const heroImages = [heroBg1, heroBg2, heroBg3, heroBg4, heroBg5];

const featuredServices = services.slice(0, 6);
const homeFaqs = faqs.slice(0, 6);
const featuredStates = states.slice(0, 10);

const processSteps = [
  {
    icon: PhoneCall,
    title: "Call or Request a Consultation",
    text: "Reach us by phone or the contact form and tell us about your goals, we respond promptly and never pressure you.",
  },
  {
    icon: ClipboardCheck,
    title: "A Personalized Needs Review",
    text: "We take the time to understand your family, budget, and goals before recommending anything.",
  },
  {
    icon: FileCheck,
    title: "A Custom Plan & Quote",
    text: "We put together clear, honest options tailored to you, no confusing jargon, no pressure to decide on the spot.",
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
          "Mr Melvin Insurance Services INC offers life insurance, annuities, living benefits, retirement planning, and estate planning to families in 22 states. Honest, personalized guidance from Rockford, IL. Call (866) 218-3854 for a free consultation.",
      },
      {
        property: "og:title",
        content: "Mr Melvin Insurance Services INC | Life Insurance & Financial Planning",
      },
      {
        property: "og:description",
        content:
          "Personalized life insurance, annuities, retirement, and estate planning guidance, serving clients nationwide from Rockford, IL.",
      },
      { property: "og:url", content: `${site.url}/` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
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
                addressCountry: "US",
              },
              areaServed: "United States",
              openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-17:00"],
              description:
                "Life insurance, annuities, living benefits, retirement planning, and estate planning for families nationwide.",
            },
            {
              "@type": "FAQPage",
              mainEntity: homeFaqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
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
    text: "Every recommendation starts with understanding your family, budget, and goals, not a one-size-fits-all policy.",
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

const lifeStages = [
  {
    title: "Young Families",
    text: "Protect your income and your children's future with affordable life insurance that grows with your family.",
    to: "/services/life-insurance",
    cta: "Life Insurance",
  },
  {
    title: "Pre-Retirees",
    text: "Build a retirement income strategy with annuities and planning that helps you feel confident about the years ahead.",
    to: "/services/retirement-planning-strategies",
    cta: "Retirement Planning",
  },
  {
    title: "Business Owners and Professionals",
    text: "Grow and protect your assets with wealth accumulation strategies designed around your long-term goals.",
    to: "/services/wealth-accumulation-strategies",
    cta: "Wealth Strategies",
  },
  {
    title: "Legacy Planners",
    text: "Make sure your loved ones are cared for with estate, trust, and beneficiary planning that is clear and organized.",
    to: "/services/estate-planning-strategies",
    cta: "Estate Planning",
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
        <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-4 lg:grid-cols-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-card lg:aspect-auto lg:min-h-[560px]">
            <img
              src={aboutImg}
              alt="Melvin Hodges, owner of Mr Melvin Insurance Services INC"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <SectionBadge>About Us</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-[2.6rem]">
              Personalized Insurance & Financial Guidance You Can Trust
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
            <p className="mt-6 text-lg font-medium leading-relaxed text-charcoal">
              Led by {site.owner}, {site.name} provides honest guidance, clear explanations, and a
              plan built around your goals, not a one-size-fits-all policy.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether you are protecting your family, planning for retirement, or building long-term
              financial security, we take the time to understand your situation, compare your
              options, and walk with you from your first call through every policy review.
            </p>
            <ul className="mt-7 w-full space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-lg border border-border bg-surface-muted px-4 py-3">
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
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              From life insurance and annuities to retirement income and estate planning, we offer
              nine coverage and planning services so your family can protect what matters today and
              build lasting financial security for tomorrow.
            </p>
          </div>
          <div className="mt-14 space-y-16 lg:space-y-24">
            {featuredServices.map((s, i) => {
              const imageRight = i % 2 === 1;
              return (
                <article
                  key={s.slug}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
                >
                  <div className={imageRight ? "lg:order-2" : ""}>
                    <img
                      src={s.heroImage}
                      alt={s.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
                    />
                  </div>
                  <div>
                    <p className="font-display text-sm font-extrabold uppercase tracking-[0.2em] text-accent">
                      Service {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                      {s.excerpt}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {s.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-charcoal">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild size="lg" className="mt-8 font-display font-bold uppercase">
                      <Link to={s.to}>
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
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
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Getting the right life insurance or financial plan should not feel complicated. Our
              four-step process keeps you informed and in control from the first call to every
              annual review.
            </p>
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
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Families choose {site.name} because we combine clear explanations, personalized
              recommendations, and genuine care for the people you want to protect.
            </p>
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
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <h3 className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
              Life Insurance & Financial Planning in 22 States
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Based in Rockford, Illinois, we help clients nationwide, including Texas, Georgia,
              Florida, California, and more. Choose your state to see how we can help.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
            <SectionBadge>Who We Help</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
              Planning for Every Stage of Life
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Whatever your situation, we build a plan around your goals, budget, and timeline.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {lifeStages.map((l) => (
              <Link
                key={l.title}
                to={l.to}
                className="group rounded-lg border border-border bg-card p-7 transition-shadow hover:shadow-card"
              >
                <h3 className="font-display text-lg font-bold text-primary">{l.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent group-hover:underline">
                  {l.cta}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
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

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <SectionBadge>FAQ</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
              Common Questions About Life Insurance & Financial Planning
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {homeFaqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-lg border border-border bg-card p-6 open:shadow-card"
              >
                <summary className="cursor-pointer list-none font-display text-lg font-bold text-primary">
                  {f.q}
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent hover:underline"
            >
              See All FAQs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
