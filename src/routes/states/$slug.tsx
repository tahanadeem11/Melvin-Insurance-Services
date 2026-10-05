import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { PageHero, SectionBadge } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { Button } from "@/components/ui/button";
import { states, getStateBySlug } from "@/lib/states";
import { getServiceBySlug } from "@/lib/services";
import { site } from "@/lib/site";

export const Route = createFileRoute("/states/$slug")({
  loader: ({ params }) => {
    const state = getStateBySlug(params.slug);
    if (!state) throw notFound();
    return state;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        {
          title: `Life Insurance & Financial Planning in ${loaderData.name} | Mr Melvin Insurance Services INC`,
        },
        { name: "description", content: loaderData.blurb },
        {
          property: "og:title",
          content: `Serving ${loaderData.name} | Mr Melvin Insurance Services INC`,
        },
        { property: "og:description", content: loaderData.blurb },
        { property: "og:url", content: `${site.url}${loaderData.to}` },
      ],
      links: [{ rel: "canonical", href: `${site.url}${loaderData.to}` }],
    };
  },
  component: StateDetail,
});

function StateDetail() {
  const state = Route.useLoaderData();
  const popular = state.popularServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const otherStates = states.filter((s) => s.slug !== state.slug).slice(0, 6);

  return (
    <>
      <PageHero
        badge="States We Serve"
        title={`Life Insurance & Financial Planning in ${state.name}`}
        description={state.blurb}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <SectionBadge>
            <MapPin className="mr-1 inline h-3.5 w-3.5" />
            {state.name}
          </SectionBadge>
          <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
            Personalized Guidance You Can Count On
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            {state.intro}
          </p>
          <Button asChild size="lg" className="mt-8 font-display font-bold">
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <a
            href={site.phoneHref}
            className="mt-6 flex items-center justify-center gap-2 font-display text-lg font-bold text-charcoal transition-colors hover:text-accent"
          >
            <Phone className="h-5 w-5 text-accent" />
            {site.phoneDisplay}
          </a>
        </div>
      </section>

      {popular.length > 0 && (
        <section className="border-y border-border bg-surface-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <SectionBadge>Popular Services</SectionBadge>
              <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
                Most Requested Services in {state.name}
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {popular.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    to={s.to}
                    className="group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-card"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-primary group-hover:text-accent">
                      {s.title}
                    </h3>
                  </Link>
                );
              })}
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent hover:underline"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Other States</SectionBadge>
            <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
              We Also Serve These States
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {otherStates.map((s) => (
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
              View All States
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
