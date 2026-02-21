"use client";

import type { PropsWithChildren } from "react";
import { usePrefersReducedMotion } from "@/lib/motion";

type MotionSafeWrapperProps = PropsWithChildren<{
  className?: string;
}>;

export function MotionSafeWrapper({ children, className }: MotionSafeWrapperProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className={className} data-motion={reducedMotion ? "reduced" : "full"}>
      {children}
    </div>
  );
}


