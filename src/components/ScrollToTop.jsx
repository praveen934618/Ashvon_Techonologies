import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Reset the window scroll position whenever the route pathname changes.
 * @returns {null}
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
