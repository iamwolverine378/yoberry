import type { Testimonial } from "@/lib/content";

type TestimonialCardProps = {
  item: Testimonial;
};

export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <article className="card card--testimonial" data-stagger-item>
      <p className="rating" aria-label={`${item.rating} out of 5 stars`}>
        {item.rating.toFixed(1)}/5
      </p>
      <p className="quote">&quot;{item.quote}&quot;</p>
      <p className="meta">
        {item.name} | {item.location}
      </p>
    </article>
  );
}


