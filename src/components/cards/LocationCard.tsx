import type { LocationItem } from "@/lib/content";

type LocationCardProps = {
  location: LocationItem;
};

export function LocationCard({ location }: LocationCardProps) {
  const mapsQuery = encodeURIComponent(
    `${location.address}, ${location.city}, ${location.state} ${location.zip}`,
  );

  return (
    <article className="card card--location" data-stagger-item>
      <h3>{location.name}</h3>
      <p>
        {location.address}, {location.city}, {location.state} {location.zip}
      </p>
      <p>{location.hours}</p>
      <p>{location.phone}</p>
      <ul className="services-list">
        {location.services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
      <div className="card__actions">
        <a className="button button--secondary" href={`tel:${location.phone}`}>
          Call Store
        </a>
        <a
          className="button button--primary"
          href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
          target="_blank"
          rel="noreferrer"
        >
          Get Directions
        </a>
      </div>
    </article>
  );
}


