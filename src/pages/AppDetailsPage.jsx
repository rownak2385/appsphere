import {
  faArrowDown,
  faBoxArchive,
  faMessage,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import appErrorImage from "../../assets/App-Error.png";
import Toast from "../components/Toast";
import apps from "../data/apps";
import { formatDownloads, formatReviews, formatSize } from "../utils/formatters";
import { isAppInstalled, saveInstalledApp } from "../utils/installations";

function AppDetailsPage() {
  const { id } = useParams();
  const app = useMemo(() => apps.find((item) => item.id === Number(id)), [id]);
  const [installed, setInstalled] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!app) {
      return;
    }

    setInstalled(isAppInstalled(app.id));
  }, [app]);

  useEffect(() => {
    if (!toastMessage) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setToastMessage(""), 2200);
    return () => window.clearTimeout(timeoutId);
  }, [toastMessage]);

  if (!app) {
    return (
      <section className="details-page details-page--empty">
        <div className="details-empty-card details-empty-card--framed">
          <img src={appErrorImage} alt="App not found" />
          <h1>OPPS!! APP NOT FOUND</h1>
          <p>The App you are requesting is not found on our system. Please try another app.</p>
          <Link className="page-link" to="/apps">
            Go Back!
          </Link>
        </div>
      </section>
    );
  }

  const stats = [
    { label: "Downloads", value: formatDownloads(app.downloads), icon: faArrowDown },
    { label: "Average Ratings", value: app.ratingAvg, icon: faStar },
    { label: "Total Reviews", value: formatReviews(app.reviews), icon: faMessage },
    { label: "App Size", value: formatSize(app.size), icon: faBoxArchive },
  ];

  const handleInstall = () => {
    if (installed) {
      return;
    }

    saveInstalledApp(app);
    setInstalled(true);
    setToastMessage(`${app.title} installed successfully.`);
  };

  return (
    <section className="details-page">
      {toastMessage ? <Toast message={toastMessage} /> : null}

      <div className="details-page__top">
        <div className="details-page__image-card">
          <img src={app.image} alt={app.title} />
        </div>

        <div className="details-page__summary">
          <div className="details-page__summary-head">
            <h1>{app.title}</h1>
            <p className="details-page__company">
              Developed by <span>{app.companyName}</span>
            </p>
          </div>

          <div className="details-page__stats">
            {stats.map((item) => (
              <article key={item.label}>
                <span>
                  <FontAwesomeIcon icon={item.icon} />
                  {item.label}
                </span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>

          <div className="details-page__action-row">
            <button
              className="details-page__install-button"
              type="button"
              onClick={handleInstall}
              disabled={installed}
            >
              {installed ? "Installed" : `Install Now [${app.size} MB]`}
            </button>
          </div>
        </div>
      </div>

      <div className="details-page__chart-panel">
        <div className="details-page__section-head">
          <h2>Ratings</h2>
          <p>Review distribution based on community rating activity.</p>
        </div>
        <div className="details-page__chart-shell">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={[...app.ratings].reverse()}
              layout="vertical"
              margin={{ top: 8, right: 18, left: 0, bottom: 8 }}
            >
              <CartesianGrid stroke="#eef2f8" horizontal={false} />
              <XAxis type="number" tickLine={false} axisLine={false} />
              <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} width={58} />
              <Tooltip cursor={{ fill: "rgba(130, 87, 255, 0.06)" }} />
              <Bar dataKey="count" fill="#ff8b1f" radius={[0, 8, 8, 0]} barSize={22} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="details-page__description-panel">
        <div className="details-page__section-head">
          <h2>Description</h2>
          <p>Overview, strengths, and practical everyday use.</p>
        </div>
        <p>{app.description}</p>
        <p>
          Designed for users who want clean workflow control, {app.title} combines
          dependable tracking, habit-friendly structure, and visual progress cues that
          make repeat usage feel simple instead of demanding.
        </p>
        <p>
          With {formatDownloads(app.downloads)} downloads and {formatReviews(app.reviews)} reviews,
          this app has become one of AppSphere&apos;s strongest productivity picks for people
          who want better focus without a noisy interface.
        </p>
      </div>
    </section>
  );
}

export default AppDetailsPage;
