import {
  faArrowDown,
  faBoxArchive,
  faArrowDownWideShort,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";
import Toast from "../components/Toast";
import { formatDownloads, formatSize } from "../utils/formatters";
import { getInstalledApps, removeInstalledApp } from "../utils/installations";

function InstallationPage() {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("high-low");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    setInstalledApps(getInstalledApps());
  }, []);

  useEffect(() => {
    if (!toastMessage) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setToastMessage(""), 2200);
    return () => window.clearTimeout(timeoutId);
  }, [toastMessage]);

  const sortedApps = useMemo(() => {
    const nextApps = [...installedApps];
    nextApps.sort((left, right) =>
      sortOrder === "high-low"
        ? right.downloads - left.downloads
        : left.downloads - right.downloads,
    );
    return nextApps;
  }, [installedApps, sortOrder]);

  const handleUninstall = (app) => {
    const nextApps = removeInstalledApp(app.id);
    setInstalledApps(nextApps);
    setToastMessage(`${app.title} removed from installation.`);
  };

  return (
    <section className="installation-page">
      {toastMessage ? <Toast message={toastMessage} tone="success" /> : null}

      <div className="installation-page__hero">
        <h1>Your Installed Apps</h1>
        <p>Explore all trending apps on the market developed by us</p>
      </div>

      <div className="installation-page__toolbar">
        <p className="installation-page__count">{sortedApps.length} Apps Found</p>

        <label className="installation-page__sort">
          <span className="sr-only">Sort installed apps</span>
          <span className="installation-page__sort-icon">
            <FontAwesomeIcon icon={faArrowDownWideShort} />
          </span>
          <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        </label>
      </div>

      {sortedApps.length ? (
        <div className="installation-list">
          {sortedApps.map((app) => (
            <article key={app.id} className="installation-card">
              <div className="installation-card__content">
                <div className="installation-card__image-wrap">
                  <img src={app.image} alt={app.title} />
                </div>

                <div className="installation-card__details">
                  <h2>{app.title}</h2>
                  <div className="installation-card__meta">
                    <span><FontAwesomeIcon icon={faArrowDown} /> {formatDownloads(app.downloads)}</span>
                    <span><FontAwesomeIcon icon={faStar} /> {app.ratingAvg}</span>
                    <span><FontAwesomeIcon icon={faBoxArchive} /> {formatSize(app.size)}</span>
                  </div>
                </div>
              </div>

              <button type="button" onClick={() => handleUninstall(app)}>
                Uninstall
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div className="installation-page__empty">
          <h2>No Installed Apps Yet</h2>
          <p>Install an app from the details page and it will appear here.</p>
        </div>
      )}
    </section>
  );
}

export default InstallationPage;
