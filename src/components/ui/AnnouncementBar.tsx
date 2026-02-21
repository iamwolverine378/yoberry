import Link from "next/link";

type AnnouncementBarProps = {
  text: string;
  href?: string;
  hrefLabel?: string;
};

export function AnnouncementBar({ text, href, hrefLabel }: AnnouncementBarProps) {
  return (
    <div className="announcement-bar" role="status" aria-live="polite">
      <div className="container announcement-bar__inner">
        <p>{text}</p>
        {href && hrefLabel ? <Link href={href}>{hrefLabel}</Link> : null}
      </div>
    </div>
  );
}


