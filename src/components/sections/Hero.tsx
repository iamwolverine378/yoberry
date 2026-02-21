"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroOrbCanvas = dynamic(
  () => import("@/components/motion/HeroOrbCanvas").then((mod) => mod.HeroOrbCanvas),
  { ssr: false },
);

type HeroProps = {
  title: string;
  subhead: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  showOrb?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  compact?: boolean;
};

export function Hero({
  title,
  subhead,
  primaryCta,
  secondaryCta,
  showOrb = false,
  imageSrc,
  imageAlt = "YoBerry frozen yogurt",
  compact = false,
}: HeroProps) {
  return (
    <section className={`hero ${compact ? "hero--compact" : ""}`}>
      {showOrb ? (
        <>
          <div className="hero-canvas__fallback hero-canvas__fallback--base" aria-hidden="true" />
          <HeroOrbCanvas />
        </>
      ) : null}
      <div
        className={`container hero__inner ${imageSrc ? "hero__inner--with-media" : ""}`}
        data-reveal
      >
        <div className="hero__content">
          <h1>{title}</h1>
          <p>{subhead}</p>
          {(primaryCta || secondaryCta) && (
            <div className="hero__actions">
              {primaryCta ? (
                <Link href={primaryCta.href} className="button button--primary">
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link href={secondaryCta.href} className="button button--secondary">
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>
        {imageSrc ? (
          <div className="hero__media">
            <Image src={imageSrc} alt={imageAlt} width={1200} height={900} priority />
          </div>
        ) : null}
      </div>
    </section>
  );
}
