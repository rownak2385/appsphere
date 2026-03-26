import { useEffect, useMemo, useState } from "react";
import AppCard from "../components/AppCard";
import apps from "../data/apps";

function AppsPage() {
  const [query, setQuery] = useState("");
  const [displayedApps, setDisplayedApps] = useState(apps);
  const [isSearching, setIsSearching] = useState(false);

  const normalizedQuery = useMemo(() => query.trim().toLowerCase(), [query]);

  useEffect(() => {
    setIsSearching(true);

    const timeoutId = window.setTimeout(() => {
      const filteredApps = normalizedQuery
        ? apps.filter((app) => app.title.toLowerCase().includes(normalizedQuery))
        : apps;

      setDisplayedApps(filteredApps);
      setIsSearching(false);
    }, 250);

    return () => window.clearTimeout(timeoutId);
  }, [normalizedQuery]);

  return (
    <section className="apps-page">
      <div className="apps-page__hero">
        <h1>Our All Applications</h1>
        <p>Explore all apps on the market developed by us. We code for millions.</p>
      </div>

      <div className="apps-page__toolbar">
        <p className="apps-page__count">({displayedApps.length}) Apps Found</p>

        <label className="apps-page__search" htmlFor="apps-search">
          <span className="sr-only">Search apps</span>
          <span className="apps-page__search-icon">?</span>
          <input
            id="apps-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="search apps"
            autoComplete="off"
          />
        </label>
      </div>

      {isSearching ? (
        <div className="apps-page__loading">
          <span className="apps-page__spinner" />
          <p>Searching apps...</p>
        </div>
      ) : displayedApps.length ? (
        <div className="app-grid app-grid--apps-page">
          {displayedApps.map((app) => (
            <AppCard key={app.id} app={app} clickable />
          ))}
        </div>
      ) : (
        <div className="apps-page__empty">
          <h2>No App Found</h2>
          <p>Try searching with a different app title.</p>
        </div>
      )}
    </section>
  );
}

export default AppsPage;
