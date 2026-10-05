import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ClipboardList, Phone } from "lucide-react";
import { PageHero, SectionBadge } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { Button } from "@/components/ui/button";
import { services, getServiceBySlug } from "@/lib/services";
import { site } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        {
          title: `${loaderData.title} | Mr Melvin Insurance Services INC | Nationwide`,
        },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: `${loaderData.title} | Mr Melvin Insurance Services INC` },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:url", content: `${site.url}${loaderData.to}` },
      ],
      links: [{ rel: "canonical", href: `${site.url}${loaderData.to}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();
  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero badge="Our Services" title={service.title} description={service.excerpt} />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg shadow-card lg:sticky lg:top-24">
            <img
              src={service.heroImage}
              alt={service.title}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <span className="absolute bottom-4 left-4 inline-flex h-16 w-16 items-center justify-center rounded-full border-4 border-card bg-primary text-primary-foreground shadow-card">
              <Icon className="h-8 w-8" />
            </span>
          </div>
          <div>
            <SectionBadge>Overview</SectionBadge>
            <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
              {service.shortTitle} Done Right, Every Time
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{service.intro}</p>

            <h3 className="mt-8 font-display text-lg font-bold text-primary">Why Choose Us</h3>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-charcoal">{b}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="mt-8 font-display font-bold">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-muted py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <SectionBadge>What's Included</SectionBadge>
            <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
              What Our {service.shortTitle} Service Covers
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.whatsIncluded.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-5"
              >
                <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <SectionBadge>FAQs</SectionBadge>
            <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
              Common Questions About {service.shortTitle}
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {service.faqs.map((f) => (
              <div key={f.q} className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-base font-bold text-primary">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Have another question? Call us any time at{" "}
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
            >
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-surface-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <SectionBadge>Related Services</SectionBadge>
              <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
                You Might Also Need
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={r.to}
                  className="group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-card"
                >
                  <h3 className="font-display text-base font-bold text-primary group-hover:text-accent">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
