import Link from "next/link";
import clsx from "clsx";

type BrandLogoProps = {
  href?: string;
  iconOnly?: boolean;
  variant?: "color" | "white" | "black";
  className?: string;
};

export function BrandLogo({
  href = "/",
  iconOnly = false,
  variant = "color",
  className,
}: BrandLogoProps) {
  const logoSrc =
    variant === "white"
      ? "/images/branding/logo-wordmark-white.png"
      : variant === "black"
        ? "/images/branding/logo-wordmark-black.png"
        : "/images/branding/logo-wordmark-color.png";

  const iconSrc = "/images/branding/logo-icon-color.png";

  return (
    <Link href={href} aria-label="YoBerry home" className={clsx("brand-logo-link", className)}>
      <img
        src={iconOnly ? iconSrc : logoSrc}
        alt={iconOnly ? "YoBerry icon" : "YoBerry frozen yogurt"}
        className={clsx("brand-logo-img", iconOnly && "brand-logo-img--icon")}
      />
    </Link>
  );
}
