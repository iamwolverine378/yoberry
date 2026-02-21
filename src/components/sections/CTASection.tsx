import Link from "next/link";

type CTASectionProps = {
  title: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CTASection({ title, primary, secondary }: CTASectionProps) {
  return (
    <section className="cta-strip" data-reveal>
      <div className="container cta-strip__inner">
        <h2>{title}</h2>
        <div className="cta-strip__actions">
          <Link href={primary.href} className="button button--primary">
            {primary.label}
          </Link>
          {secondary ? (
            <Link href={secondary.href} className="button button--secondary">
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}


