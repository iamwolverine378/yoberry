import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { MenuPageClient } from "./MenuPageClient";

export const metadata: Metadata = buildMetadata({
  title: "YoBerry Flavors Menu | Explore Every Flavor",
  description:
    "Browse YoBerry flavors, taste notes, and fan favorites. Find the perfect flavor profile for your next cup.",
});

export default function MenuPage() {
  return <MenuPageClient />;
}


