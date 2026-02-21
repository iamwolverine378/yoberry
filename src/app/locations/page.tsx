import Image from "next/image";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { LocationCard } from "@/components/cards/LocationCard";
import { ScrollRevealGroup } from "@/components/motion/ScrollRevealGroup";
import { StaggerGridReveal } from "@/components/motion/StaggerGridReveal";
import { locations } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "YoBerry Locations | Find Frozen Yogurt Near You",
  description: "Find YoBerry locations, hours, phone numbers, and directions quickly.",
});

export default function LocationsPage() {
  return (
    <ScrollRevealGroup>
      <Hero
        title="Find YoBerry Near You"
        subhead="Search by city or ZIP and get directions fast."
        primaryCta={{ label: "Use My Location", href: "#finder" }}
        compact
      />

      <section className="section" id="finder">
        <div className="container split">
          <div data-reveal>
            <div className="section__header">
              <h2>Store Finder</h2>
              <p>Use list and map together for quick results.</p>
            </div>
            <form className="contact-form" aria-label="Location search">
              <label>
                City or ZIP
                <input type="text" placeholder="Dallas or 75201" />
              </label>
              <button className="button button--primary" type="button">
                Search Locations
              </button>
            </form>
          </div>
          <div className="placeholder-media" data-reveal>
            <Image
              src="/images/map-preview.svg"
              alt="Interactive map preview"
              width={1200}
              height={900}
              className="placeholder-media__image"
            />
            <p className="placeholder-media__label">Interactive map and pin view</p>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section__header" data-reveal>
            <h2>Location Details</h2>
            <p>Address, hours, phone, and services in one view.</p>
          </div>
          <StaggerGridReveal>
            <div className="grid grid--2">
              {locations.map((location) => (
                <LocationCard key={location.name} location={location} />
              ))}
            </div>
          </StaggerGridReveal>
        </div>
      </section>

      <section className="section">
        <div className="container" data-reveal>
          <div className="section__header">
            <h2>YoBerry in Your Area</h2>
            <p>
              YoBerry frozen yogurt locations across Dallas and Plano serve fresh flavors, premium toppings,
              and a consistent in-store experience.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Extra Help?"
        primary={{ label: "Call Us", href: "tel:+12145550182" }}
        secondary={{ label: "Contact Support", href: "/contact" }}
      />
    </ScrollRevealGroup>
  );
}
