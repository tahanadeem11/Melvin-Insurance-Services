import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CalendarCheck, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHero, SectionBadge } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Mr Melvin Insurance Services INC | Rockford, IL" },
      {
        name: "description",
        content:
          "Get a free consultation for life insurance, annuities, retirement or estate planning. Call (866) 218-3854, email us, or send a message, serving clients nationwide.",
      },
      { property: "og:title", content: "Contact Mr Melvin Insurance Services INC" },
      {
        property: "og:description",
        content: "Reach out for a free consultation, serving clients across 22 states nationwide.",
      },
      { property: "og:url", content: `${site.url}/contact` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  function handleChange(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Free Consultation Request${form.service ? `: ${form.service}` : ""} from ${form.name || "Website"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService Interested In: ${form.service}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Let's Talk About Your Future"
        description="Reach out any time during business hours, we typically respond within one business day to schedule your free consultation."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionBadge>Get In Touch</SectionBadge>
            <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
              Contact Information
            </h2>
            <ul className="mt-7 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display font-bold text-primary">Phone</p>
                  <a
                    href={site.phoneHref}
                    className="text-sm text-muted-foreground hover:text-accent"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display font-bold text-primary">Email</p>
                  <a
                    href={site.emailHref}
                    className="break-all text-sm text-muted-foreground hover:text-accent"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display font-bold text-primary">Address</p>
                  <p className="text-sm text-muted-foreground">{site.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display font-bold text-primary">Hours</p>
                  <p className="text-sm text-muted-foreground">{site.hours}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-lg border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-lg font-extrabold text-primary">
                Book Your Free Consultation
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Pick a day and time that works for you, no phone tag needed.
              </p>
              <Button asChild className="mt-4 w-full font-display font-bold">
                <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
                  <CalendarCheck className="h-4 w-4" />
                  Book Appointment
                </a>
              </Button>
            </div>

            <div className="mt-8 overflow-hidden rounded-lg border border-border shadow-card">
              <iframe
                title={`Map to ${site.address}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
                width="100%"
                height="280"
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-lg border border-border bg-card p-8 shadow-card">
              <h2 className="font-display text-2xl font-extrabold text-primary">
                Request a Free Consultation
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer to pick a time?{" "}
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:underline"
                >
                  Book your free consultation online
                </a>
                . Or fill out the form and it will open a pre-filled email to {site.email}, no account
                or sign-up needed.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    className="mt-2"
                  />
                </div>
                <div className="sm:col-span-1">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    required
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="mt-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    className="mt-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Input
                    id="service"
                    placeholder="e.g. Life Insurance, Retirement Planning"
                    value={form.service}
                    onChange={handleChange("service")}
                    className="mt-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange("message")}
                    className="mt-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-display font-bold sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
