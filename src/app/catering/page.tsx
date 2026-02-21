import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/ui/ContactForm";
import { ScrollRevealGroup } from "@/components/motion/ScrollRevealGroup";

export const metadata: Metadata = buildMetadata({
  title: "YoBerry Catering | Frozen Yogurt for Events",
  description: "Book YoBerry catering for birthdays, office events, and celebrations with flexible service options.",
});

export default function CateringPage() {
  return (
    <ScrollRevealGroup>
      <Hero
        title="Catering for Every Event"
        subhead="Bring YoBerry to offices, birthdays, and community events."
        primaryCta={{ label: "Request Catering", href: "#catering-form" }}
        compact
      />

      <section className="section">
        <div className="container">
          <div className="section__header" data-reveal>
            <h2>Service Options</h2>
            <p>Flexible formats for different group sizes.</p>
          </div>
          <div className="grid grid--3">
            <article className="card" data-stagger-item>
              <h3>Office Socials</h3>
              <p>Quick setup for team lunches and employee appreciation events.</p>
            </article>
            <article className="card" data-stagger-item>
              <h3>Birthdays</h3>
              <p>Custom flavor and topping service for private celebrations.</p>
            </article>
            <article className="card" data-stagger-item>
              <h3>Community Events</h3>
              <p>Scalable service with clear timing and portion planning.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--muted" id="catering-form">
        <div className="container split">
          <div>
            <div className="section__header" data-reveal>
              <h2>Request Catering</h2>
              <p>Share details and receive a quick follow-up.</p>
            </div>
            <ContactForm mode="catering" />
          </div>
          <div className="stack-md" data-reveal>
            <article className="card">
              <h3>Trusted by Hosts</h3>
              <p>Reliable setup and memorable flavor for private and corporate events.</p>
            </article>
            <article className="card">
              <h3>Planning Notes</h3>
              <p>Event dates are subject to local store staffing and availability.</p>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        title="Plan Your Date"
        primary={{ label: "Request Catering", href: "#catering-form" }}
        secondary={{ label: "Call for Availability", href: "tel:+12145550182" }}
      />
    </ScrollRevealGroup>
  );
}


