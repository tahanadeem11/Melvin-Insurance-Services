import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { states } from "@/lib/states";

export const Route = createFileRoute("/states/")({
  head: () => ({
    meta: [
      {
        title:
          "States We Serve | Nationwide Life Insurance & Financial Planning | Mr Melvin Insurance Services INC",
      },
      {
        name: "description",
        content:
          "Mr Melvin Insurance Services INC proudly serves clients in 22 states nationwide with life insurance, annuities, retirement planning, and estate planning strategies.",
      },
      { property: "og:title", content: "States We Serve | Mr Melvin Insurance Services INC" },
      {
        property: "og:description",
        content: "22 states served nationwide — see if we cover your state.",
      },
      { property: "og:url", content: "/states" },
    ],
    links: [{ rel: "canonical", href: "/states" }],
  }),
  component: StatesIndex,
});

function StatesIndex() {
  return (
    <>
      <PageHero
        badge="States We Serve"
        title="Proudly Serving Clients Nationwide"
        description="Based in Rockford, IL, Mr Melvin Insurance Services INC helps individuals and families across 22 states with life insurance, retirement, and estate planning. Find your state below."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {states.map((s) => (
              <article
                key={s.slug}
                className="flex flex-col rounded-lg border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <MapPin className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-lg font-bold text-primary">{s.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.blurb}
                </p>
                <Link
                  to={s.to}
                  className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-accent hover:underline"
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
