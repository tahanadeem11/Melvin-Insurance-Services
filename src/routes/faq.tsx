import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Mr Melvin Insurance Services INC | Rockford, IL" },
      {
        name: "description",
        content:
          "Answers to common questions about life insurance, annuities, states served, and how to get started with Mr Melvin Insurance Services INC.",
      },
      { property: "og:title", content: "FAQs | Mr Melvin Insurance Services INC" },
      {
        property: "og:description",
        content:
          "Common questions about life insurance, annuities, states served, and getting a consultation.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        badge="FAQ's"
        title="Frequently Asked Questions"
        description="Answers to the questions we hear most from clients about life insurance, retirement, and estate planning."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="rounded-lg border border-border bg-card px-5"
              >
                <AccordionTrigger className="font-display text-base font-bold text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Still have a question?{" "}
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
            >
              Contact us
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
