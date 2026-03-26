import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout() {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Delay the loader until after the first paint so initial load stays clean.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsNavigating(true);
    const timeoutId = window.setTimeout(() => setIsNavigating(false), 420);
    return () => window.clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      {isNavigating ? (
        <div className="route-loader" aria-live="polite">
          <span className="route-loader__spinner" />
        </div>
      ) : null}
      <Header />
      <main className="page-shell">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;

