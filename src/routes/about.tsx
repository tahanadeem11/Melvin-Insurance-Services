import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/Mr Melvin.jpg";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero, SectionBadge } from "@/components/Section";
import { site, stats } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Mr Melvin Insurance Services INC | Rockford, IL" },
      {
        name: "description",
        content:
          "Meet Mr Melvin Insurance Services INC, led by Melvin Hodges. Personalized life insurance, retirement, and estate planning guidance for clients nationwide.",
      },
      { property: "og:title", content: "About Mr Melvin Insurance Services INC" },
      {
        property: "og:description",
        content:
          "Personalized life insurance, retirement, and estate planning guidance from our Rockford, IL office, serving clients across 22 states.",
      },
      { property: "og:url", content: `${site.url}/about` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/about` }],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Personalized Planning",
    text: "No cookie-cutter policies, every recommendation starts with understanding your family, goals, and budget.",
  },
  {
    title: "Responsive Communication",
    text: "A real person answers the phone, and your questions get clear, timely answers.",
  },
  {
    title: "Transparent Guidance",
    text: "We explain your options in plain language so you can make an informed decision with confidence.",
  },
  {
    title: "Nationwide Licensing",
    text: "We're able to serve clients across 22 states, bringing the same attentive service wherever you are.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Personalized Insurance & Financial Guidance You Can Trust"
        description={`Led by ${site.owner}, ${site.name} provides honest guidance, clear explanations, and a plan built around your goals.`}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectionBadge>Our Story</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
              A Simple Promise: Honest Guidance, Every Time
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                {site.name} was built on a simple promise: listen first, explain clearly, and never
                pressure a client into a decision that isn't right for them. That promise guides
                every conversation we have, whether it's about life insurance, retirement planning,
                or protecting a family's future.
              </p>
              <p>
                From a single life insurance policy to a full estate and trust planning strategy, we
                treat every client's goals as our own priority, because building real financial
                security takes trust, not a sales pitch.
              </p>
              <p>
                We're headquartered at {site.address} and proudly serve clients across 22 states
                nationwide.
              </p>
            </div>
            <Button asChild size="lg" className="mt-8 font-display font-bold">
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <img
            src={aboutImg}
            alt="Melvin Hodges, owner of Mr Melvin Insurance Services INC"
            width={506}
            height={510}
            loading="lazy"
            className="w-full rounded-lg object-cover shadow-card"
          />
        </div>
      </section>

      <section className="border-y border-border bg-surface-muted">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-card p-6 text-center">
              <div className="font-display text-4xl font-extrabold text-primary">{s.value}</div>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>What You Get</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
              Standards We Never Compromise On
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 rounded-lg border border-border bg-card p-7">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
