import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YoBerry | Something Is Cooking Up",
  description: "YoBerry is preparing something fresh. Launching soon.",
};

export const viewport: Viewport = {
  themeColor: "#472868",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
