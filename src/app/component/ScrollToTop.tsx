'use client';

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 1. Immediate scroll
    window.scrollTo(0, 0);

    // 2. Delayed scroll to catch any "late" rendering from HeroUI components
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]); // Trigger on path or query change

  return null;
}