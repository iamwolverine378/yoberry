import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";

const footerNav = [
  { href: "/menu", label: "Menu" },
  { href: "/toppings", label: "Toppings" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <BrandLogo variant="white" className="site-footer__logo" />
          <p className="site-footer__tagline">YoBerry Frozen Yogurt. Crafted flavor, served fresh.</p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="tel:+12145550182">(214) 555-0182</a>
            </li>
            <li>
              <a href="mailto:hello@yoberry.com">hello@yoberry.com</a>
            </li>
            <li>Mon-Sun: 11:00 AM - 10:00 PM</li>
          </ul>
        </div>

        <div>
          <h3>Follow</h3>
          <ul>
            <li>
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" aria-label="TikTok">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__legal">
        <p>(c) {currentYear} YoBerry Frozen Yogurt</p>
        <div>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
        </div>
      </div>
    </footer>
  );
}


