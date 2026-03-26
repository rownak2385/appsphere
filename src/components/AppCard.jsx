import { Link } from "react-router-dom";
import { formatDownloads } from "../utils/formatters";

function AppCard({ app, clickable = false }) {
  const content = (
    <>
      <div className="app-card__media">
        <img className="app-card__image" src={app.image} alt={app.title} />
      </div>

      <div className="app-card__body">
        <h3 className="app-card__title">{app.title}</h3>

        <div className="app-card__meta">
          <span className="app-card__badge app-card__badge--downloads">
            {formatDownloads(app.downloads)}
          </span>
          <span className="app-card__badge app-card__badge--rating">{app.ratingAvg}</span>
        </div>
      </div>
    </>
  );

  if (clickable) {
    return (
      <Link className="app-card app-card--interactive" to={`/apps/${app.id}`}>
        {content}
      </Link>
    );
  }

  return <article className="app-card">{content}</article>;
}

export default AppCard;
