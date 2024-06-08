import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    if (mediaQueryList.matches) {
      setMatches(true);
    }
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    mediaQueryList.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
    };
  }, [query]);

  return matches;
}
