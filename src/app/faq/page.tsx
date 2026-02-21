import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ScrollRevealGroup } from "@/components/motion/ScrollRevealGroup";
import { faqs } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "YoBerry FAQ | Quick Answers",
  description: "Get fast answers about YoBerry flavors, stores, and ordering.",
});

export default function FAQPage() {
  return (
    <ScrollRevealGroup>
      <Hero
        title="Frequently Asked Questions"
        subhead="Fast answers on flavors, stores, and ordering."
        compact
      />

      <section className="section">
        <div className="container">
          <div className="section__header" data-reveal>
            <h2>Browse by Topic</h2>
            <p>Find the right answer quickly.</p>
          </div>
          <div className="chips" data-reveal>
            <span className="chip is-active">General</span>
            <span className="chip">Locations</span>
            <span className="chip">Ordering</span>
            <span className="chip">Ingredients</span>
            <span className="chip">Catering</span>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section__header" data-reveal>
            <h2>Common Questions</h2>
            <p>Short answers for fast decisions.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        title="Need More Help?"
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Find a Location", href: "/locations" }}
      />
    </ScrollRevealGroup>
  );
}


