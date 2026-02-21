import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ToppingsPageClient } from "./ToppingsPageClient";

export const metadata: Metadata = buildMetadata({
  title: "YoBerry Toppings | Build Your Perfect Cup",
  description:
    "Explore crunchy, fruity, and sauce toppings at YoBerry and build your ideal frozen yogurt combination.",
});

export default function ToppingsPage() {
  return <ToppingsPageClient />;
}


