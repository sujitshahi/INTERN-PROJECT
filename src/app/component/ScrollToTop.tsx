// "use client";
// import { useEffect } from "react";
// import { usePathname } from "next/navigation";

// export default function ScrollToTop() {
//   const pathname = usePathname();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }



// "use client";

// import { useEffect } from "react";
// import { usePathname } from "next/navigation";

// export default function ScrollToTop() {
//   const pathname = usePathname();

//   useEffect(() => {
//     // This ensures the scroll resets on every route change
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "instant", // 'instant' prevents the 'sliding' effect which can look glitchy during page loads
//     });
//   }, [pathname]);

//   return null; // This component doesn't render anything
// }





"use client";

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