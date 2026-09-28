import { Phone, CalendarCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:py-20">
        <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
          Let's Plan for Your Family's Future — Reach Out Today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
          Have questions about life insurance, retirement, or estate planning? Call{" "}
          {site.phoneDisplay} or schedule a free consultation now.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="font-display font-bold">
            <a href={site.phoneHref}>
              <Phone className="h-4 w-4" />
              Call Us Now
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 bg-transparent font-display font-bold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link to="/contact">
              <CalendarCheck className="h-4 w-4" />
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
