import { site } from "@/lib/site";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title:
          "Our Services | Life Insurance, Annuities & Financial Planning | Mr Melvin Insurance Services INC",
      },
      {
        name: "description",
        content:
          "From life insurance and annuities to retirement, estate, and trust planning, explore all 9 services offered by Mr Melvin Insurance Services INC, serving clients nationwide.",
      },
      { property: "og:title", content: "Services | Mr Melvin Insurance Services INC" },
      {
        property: "og:description",
        content:
          "Life insurance, annuities, retirement, and estate planning strategies for clients nationwide.",
      },
      { property: "og:url", content: `${site.url}/services` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/services` }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Comprehensive Life Insurance & Financial Planning Services"
        description="From life insurance and annuities to retirement and estate planning, Mr Melvin Insurance Services INC helps you build a plan around your goals, serving clients across 22 states."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.slug}
                  className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={s.heroImage}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-0 left-6 inline-flex h-14 w-14 translate-y-1/2 items-center justify-center rounded-full border-4 border-card bg-primary text-primary-foreground shadow-card">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 pt-10">
                    <h2 className="font-display text-lg font-bold text-primary">{s.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.excerpt}
                    </p>
                    <Link
                      to={s.to}
                      className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent hover:underline"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
