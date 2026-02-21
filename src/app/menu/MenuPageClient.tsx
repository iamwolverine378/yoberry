"use client";

import { useMemo, useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { FilterChips } from "@/components/ui/FilterChips";
import { FlavorCard } from "@/components/cards/FlavorCard";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollRevealGroup } from "@/components/motion/ScrollRevealGroup";
import { StaggerGridReveal } from "@/components/motion/StaggerGridReveal";
import { flavorCategories, flavors } from "@/lib/content";

export function MenuPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof flavorCategories)[number]>("All");

  const filteredFlavors = useMemo(() => {
    if (selectedCategory === "All") {
      return flavors;
    }

    return flavors.filter((flavor) => flavor.category === selectedCategory);
  }, [selectedCategory]);

  const fanFavorites = flavors.filter((flavor) => flavor.fanFavorite).slice(0, 3);

  return (
    <ScrollRevealGroup>
      <Hero
        title="Explore YoBerry Flavors"
        subhead="From fruit-forward to creamy classics, find your match."
        primaryCta={{ label: "Find a Location", href: "/locations" }}
        compact
      />

      <section className="section">
        <div className="container">
          <div className="section__header" data-reveal>
            <h2>Flavor Categories</h2>
            <p>Filter by profile, season, or mood.</p>
          </div>
          <FilterChips
            items={flavorCategories}
            selected={selectedCategory}
            onSelect={(value) => setSelectedCategory(value as (typeof flavorCategories)[number])}
          />
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section__header" data-reveal>
            <h2>All Flavors</h2>
            <p>See taste notes and quick guidance.</p>
          </div>
          <StaggerGridReveal>
            <div className="grid grid--3">
              {filteredFlavors.map((flavor) => (
                <FlavorCard key={flavor.name} flavor={flavor} />
              ))}
            </div>
          </StaggerGridReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header" data-reveal>
            <h2>Fan Favorites</h2>
            <p>Three picks guests return for.</p>
          </div>
          <StaggerGridReveal>
            <div className="grid grid--3">
              {fanFavorites.map((flavor) => (
                <FlavorCard key={flavor.name} flavor={flavor} />
              ))}
            </div>
          </StaggerGridReveal>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container" data-reveal>
          <div className="section__header">
            <h2>Ingredients Guidance</h2>
            <p>
              For specific dietary concerns, contact us before ordering. Guidance may vary by location and
              preparation.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Find It Near You"
        primary={{ label: "Find a Location", href: "/locations" }}
        secondary={{ label: "Order Online", href: "/locations" }}
      />
    </ScrollRevealGroup>
  );
}


