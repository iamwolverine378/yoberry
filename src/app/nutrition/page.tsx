import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollRevealGroup } from "@/components/motion/ScrollRevealGroup";
import { flavors } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "YoBerry Nutrition and Ingredients Guide",
  description: "Review YoBerry ingredient and nutrition guidance for informed frozen yogurt choices.",
});

export default function NutritionPage() {
  return (
    <ScrollRevealGroup>
      <Hero
        title="Nutrition and Ingredients"
        subhead="Clear guidance for informed choices."
        compact
      />

      <section className="section">
        <div className="container split">
          <div data-reveal>
            <div className="section__header">
              <h2>Our Ingredient Approach</h2>
              <p>Balanced ingredients crafted for clean flavor.</p>
            </div>
            <ul className="inline-list">
              <li>Flavor profiles are designed for balance and clarity.</li>
              <li>Core ingredients are standardized across stores.</li>
              <li>Seasonal items are reviewed before release.</li>
            </ul>
          </div>
          <div className="placeholder-media" data-reveal />
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section__header" data-reveal>
            <h2>Dietary Indicators</h2>
            <p>Use tags as guidance and confirm specifics with us.</p>
          </div>
          <div className="grid grid--2">
            {flavors.map((flavor) => (
              <article className="card" key={flavor.name} data-stagger-item>
                <h3>{flavor.name}</h3>
                <p>{flavor.description}</p>
                <ul className="tag-list">
                  {flavor.tags.map((tag) => (
                    <li key={`${flavor.name}-${tag}`}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1rem", color: "#6a6473" }} data-reveal>
            Information is general and may vary by location and preparation.
          </p>
        </div>
      </section>

      <CTASection
        title="Need Specific Details?"
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "View Flavors", href: "/menu" }}
      />
    </ScrollRevealGroup>
  );
}


