"use client";

import { PropsWithChildren } from "react";

type StaggerGridRevealProps = PropsWithChildren<{
  className?: string;
}>;

export function StaggerGridReveal({ children, className }: StaggerGridRevealProps) {
  return <div className={className}>{children}</div>;
}
