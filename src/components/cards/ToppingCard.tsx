import type { Topping } from "@/lib/content";

type ToppingCardProps = {
  topping: Topping;
};

export function ToppingCard({ topping }: ToppingCardProps) {
  return (
    <article className="card card--topping" data-stagger-item>
      <p className="eyebrow">{topping.category}</p>
      <h3>{topping.name}</h3>
      <p>{topping.description}</p>
    </article>
  );
}


