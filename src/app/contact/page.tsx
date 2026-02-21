import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/ui/ContactForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ScrollRevealGroup } from "@/components/motion/ScrollRevealGroup";
import { faqs } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Contact YoBerry | Support and Inquiries",
  description: "Contact YoBerry for support, feedback, and event inquiries by form, phone, or email.",
});

export default function ContactPage() {
  return (
    <ScrollRevealGroup>
      <Hero
        title="We're Here to Help"
        subhead="Questions, feedback, or event inquiries? Contact us directly."
        compact
      />

      <section className="section">
        <div className="container split">
          <div>
            <div className="section__header" data-reveal>
              <h2>Contact Options</h2>
              <p>Use form, email, phone, or social channels.</p>
            </div>
            <ContactForm />
          </div>
          <div className="stack-md" data-reveal>
            <article className="card">
              <h3>Email</h3>
              <p>
                <a href="mailto:hello@yoberry.com">hello@yoberry.com</a>
              </p>
            </article>
            <article className="card">
              <h3>Phone</h3>
              <p>
                <a href="tel:+12145550182">(214) 555-0182</a>
              </p>
            </article>
            <article className="card">
              <h3>Social</h3>
              <p>Instagram | Facebook | TikTok</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section__header" data-reveal>
            <h2>Quick Answers</h2>
            <p>Top questions before you submit a message.</p>
          </div>
          <FAQAccordion items={faqs.slice(0, 5)} />
          <div className="section-actions" data-reveal>
            <Link className="button button--secondary" href="/faq">
              View Full FAQ
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Still Need Support?"
        primary={{ label: "Send Message", href: "/contact" }}
        secondary={{ label: "Find a Location", href: "/locations" }}
      />
    </ScrollRevealGroup>
  );
}


