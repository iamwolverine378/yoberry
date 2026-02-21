import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollRevealGroup } from "@/components/motion/ScrollRevealGroup";
import { whyYoberryPillars } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "About YoBerry | Fresh Quality, Crafted Flavor",
  description: "Learn YoBerry's brand story, quality promise, and premium frozen yogurt experience.",
});

export default function AboutPage() {
  return (
    <ScrollRevealGroup>
      <Hero
        title="Why YoBerry Feels Different"
        subhead="We blend freshness, balance, and consistency every day."
        primaryCta={{ label: "Explore Menu", href: "/menu" }}
        compact
      />

      <section className="section">
        <div className="container">
          <div className="section__header" data-reveal>
            <h2>Why YoBerry</h2>
            <p>Three principles shape every flavor and service moment.</p>
          </div>
          <div className="grid grid--3">
            {whyYoberryPillars.map((pillar) => (
              <article key={pillar.title} className="card" data-stagger-item>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container split">
          <div data-reveal>
            <div className="section__header">
              <h2>Our Quality Promise</h2>
              <p>Clean taste, dependable process, consistent quality.</p>
            </div>
            <ul className="inline-list">
              <li>Ingredient quality is reviewed regularly across locations.</li>
              <li>Flavor consistency is calibrated for every core menu item.</li>
              <li>Store teams follow a clear preparation and service standard.</li>
            </ul>
          </div>
          <div className="placeholder-media" data-reveal />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="placeholder-media" data-reveal />
          <div data-reveal>
            <div className="section__header">
              <h2>The YoBerry Experience</h2>
              <p>Bright spaces, warm service, smooth ordering.</p>
            </div>
            <ul className="inline-list">
              <li>Minimal, clean store environments with clear flow.</li>
              <li>Team members focus on speed, warmth, and product knowledge.</li>
              <li>A premium but approachable feel from first greeting to checkout.</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Try YoBerry Today"
        primary={{ label: "View Menu", href: "/menu" }}
        secondary={{ label: "Find a Location", href: "/locations" }}
      />
    </ScrollRevealGroup>
  );
}


