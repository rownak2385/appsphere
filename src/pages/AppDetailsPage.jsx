import { Link, useParams } from "react-router-dom";
import apps from "../data/apps";
import { formatDownloads, formatReviews, formatSize } from "../utils/formatters";

function AppDetailsPage() {
  const { id } = useParams();
  const app = apps.find((item) => item.id === Number(id));

  if (!app) {
    return (
      <section className="details-preview details-preview--empty">
        <h1>App Not Found</h1>
        <p>The selected app could not be found in the current local dataset.</p>
        <Link className="page-link" to="/apps">
          Browse Apps
        </Link>
      </section>
    );
  }

  return (
    <section className="details-preview">
      <div className="details-preview__hero">
        <div className="details-preview__media">
          <img src={app.image} alt={app.title} />
        </div>

        <div className="details-preview__content">
          <p className="details-preview__company">Developed by {app.companyName}</p>
          <h1>{app.title}</h1>

          <div className="details-preview__stats">
            <article>
              <span>Downloads</span>
              <strong>{formatDownloads(app.downloads)}</strong>
            </article>
            <article>
              <span>Average Rating</span>
              <strong>{app.ratingAvg}</strong>
            </article>
            <article>
              <span>Total Reviews</span>
              <strong>{formatReviews(app.reviews)}</strong>
            </article>
            <article>
              <span>Size</span>
              <strong>{formatSize(app.size)}</strong>
            </article>
          </div>

          <p className="details-preview__description">{app.description}</p>
          <p className="details-preview__note">Preview mode: full install, chart, and review features come in the dedicated app-details step.</p>
        </div>
      </div>
    </section>
  );
}

export default AppDetailsPage;
