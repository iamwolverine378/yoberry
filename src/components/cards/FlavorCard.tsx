import type { Flavor } from "@/lib/content";

type FlavorCardProps = {
  flavor: Flavor;
};

export function FlavorCard({ flavor }: FlavorCardProps) {
  return (
    <article className="card card--flavor" data-stagger-item>
      <div className="card__header">
        <h3>{flavor.name}</h3>
        {flavor.fanFavorite ? <span className="badge">Fan Favorite</span> : null}
      </div>
      <p>{flavor.description}</p>
      <ul className="tag-list" aria-label={`${flavor.name} tags`}>
        {flavor.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}


