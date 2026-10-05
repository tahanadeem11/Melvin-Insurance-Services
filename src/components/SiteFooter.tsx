import { Link } from "@tanstack/react-router";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/footer logo.png";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { states } from "@/lib/states";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <img
            src={logo}
            alt={`${site.name} logo`}
            className="h-28 w-auto"
            loading="lazy"
            width={555}
            height={449}
          />
          <p className="mt-4 text-sm leading-relaxed text-charcoal-foreground/70">
            Personalized life insurance, retirement, and estate planning guidance from our Rockford,
            IL office, serving clients nationwide.
          </p>
          <a
            href={site.googleUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-charcoal-foreground transition-colors hover:text-accent"
          >
            Find Us on Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div>
          <h2 className="font-display text-base font-bold uppercase tracking-wide">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-charcoal-foreground/70">
            <li>
              <Link to="/" className="hover:text-accent">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact Us
              </Link>
            </li>
            <li>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Book Appointment
              </a>
            </li>
            <li>
              <Link to="/faq" className="hover:text-accent">
                FAQ's
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-bold uppercase tracking-wide">
            States We Serve
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-charcoal-foreground/70">
            {states.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to={s.to} className="hover:text-accent">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/states" className="font-semibold text-accent hover:underline">
                View All States
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-bold uppercase tracking-wide">Our Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-charcoal-foreground/70">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to={s.to} className="hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="font-semibold text-accent hover:underline">
                View All Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-bold uppercase tracking-wide">Contact Info</h2>
          <ul className="mt-4 space-y-3 text-sm text-charcoal-foreground/70">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={site.phoneHref} className="hover:text-accent">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={site.emailHref} className="break-all hover:text-accent">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-foreground/15">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-charcoal-foreground/60">
          Copyright © 2026 All Rights Reserved. Powered by{" "}
          <a
            href="http://nextlevelrankers.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-charcoal-foreground/80 hover:text-accent"
          >
            NEXT LEVEL RANKERS
          </a>
        </div>
      </div>
    </footer>
  );
}
