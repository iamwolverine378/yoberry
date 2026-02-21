"use client";

import { PropsWithChildren } from "react";

type ScrollRevealGroupProps = PropsWithChildren<{
  className?: string;
}>;

export function ScrollRevealGroup({ children, className }: ScrollRevealGroupProps) {
  return <div className={className}>{children}</div>;
}
