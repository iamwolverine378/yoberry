import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { ComingAmbientCanvas } from "@/components/motion/ComingAmbientCanvas";

export const metadata = buildMetadata({
  title: "YoBerry | Something Is Cooking Up",
  description: "YoBerry is preparing something fresh. A new frozen yogurt experience is launching soon.",
});

export default function HomePage() {
  return (
    <section className="coming">
      <div className="coming__bg" aria-hidden="true" />
      <ComingAmbientCanvas />
      <div className="coming__content">
        <Image
          src="/images/branding/logo-icon-color.png"
          alt="YoBerry"
          width={220}
          height={220}
          priority
          className="coming__icon"
        />
      </div>
      <p className="coming__headline coming__headline--bottom">
        Your next favorite spoonful is on the way.
      </p>
    </section>
  );
}
