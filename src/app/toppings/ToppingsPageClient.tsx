"use client";

import { useMemo, useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { FilterChips } from "@/components/ui/FilterChips";
import { ToppingCard } from "@/components/cards/ToppingCard";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollRevealGroup } from "@/components/motion/ScrollRevealGroup";
import { StaggerGridReveal } from "@/components/motion/StaggerGridReveal";
import { combos, toppingCategories, toppings } from "@/lib/content";

export function ToppingsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof toppingCategories)[number]>("All");

  const filtered = useMemo(() => {
    if (selectedCategory === "All") {
      return toppings;
    }

    return toppings.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <ScrollRevealGroup>
      <Hero
        title="Top It Your Way"
        subhead="Customize each cup with curated texture and flavor."
        primaryCta={{ label: "Build My Combo", href: "#build-combo" }}
        compact
      />

      <section className="section">
        <div className="container">
          <div className="section__header" data-reveal>
            <h2>Topping Categories</h2>
            <p>Browse by crunch, fruit, sauce, and premium add-ons.</p>
          </div>
          <FilterChips
            items={toppingCategories}
            selected={selectedCategory}
            onSelect={(value) => setSelectedCategory(value as (typeof toppingCategories)[number])}
          />
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section__header" data-reveal>
            <h2>All Toppings</h2>
            <p>Every topping includes a quick flavor note.</p>
          </div>
          <StaggerGridReveal>
            <div className="grid grid--4">
              {filtered.map((topping) => (
                <ToppingCard key={topping.name} topping={topping} />
              ))}
            </div>
          </StaggerGridReveal>
        </div>
      </section>

      <section className="section" id="build-combo">
        <div className="container">
          <div className="section__header" data-reveal>
            <h2>Build a Combo</h2>
            <p>Start with one of our best pairings.</p>
          </div>
          <StaggerGridReveal>
            <div className="grid grid--3">
              {combos.slice(0, 3).map((combo) => (
                <article className="card" key={combo.name} data-stagger-item>
                  <h3>{combo.name}</h3>
                  <p>
                    {combo.base} | {combo.flavor}
                  </p>
                  <p>{combo.toppings.join(" | ")}</p>
                  <p className="meta">{combo.reason}</p>
                </article>
              ))}
            </div>
          </StaggerGridReveal>
        </div>
      </section>

      <CTASection
        title="Complete Your Cup"
        primary={{ label: "See Full Menu", href: "/menu" }}
        secondary={{ label: "Find a Location", href: "/locations" }}
      />
    </ScrollRevealGroup>
  );
}


